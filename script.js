// ============================================================
// MAIN SCRIPT - Call of Duty Random Class Generator
// ============================================================

// --- Глобальные переменные ---
let currentLang = 'en';
let currentClass = null;
let excludedWeaponCategories = [];
let attachmentsCount = 5;
let currentGame = 'bo6';
let pendingGeneration = false;
let includeMWIIWeapons = false;

// Механизм антиповторения
const REPETITION_HISTORY_SIZE = 5;       // сколько последних категорий/оружий запоминать
const WEAPON_EXCLUSION_GENERATIONS = 3;  // на сколько генераций исключать недавнее оружие
let recentCategories = [];               // массив объектов { category: 'AR', timestamp: генерация }
let recentWeapons = [];                 // массив объектов { weapon: 'M4', timestamp: генерация }
let generationCounter = 0;              // счётчик генераций (для учёта "старения")

const SAME_CATEGORY_CHANCE = 0.3; // 30% шанс на два оружия из одной категории

// Настройки конверсий и престижных модулей
let conversionsEnabled = true;
let onlyConversionsMode = false;
let conversionChance = 50;
let prestigeEnabled = false;
let onlyPrestigeMode = false;

let warzoneMode = 'all';

// Система замены модулей
let replacementChances = {
    primary: { used: false, available: true },
    secondary: { used: false, available: true }
};

// История генераций (для уникальности)
let generationHistory = [];
const MAX_HISTORY = 10;

// ============================================================
// 1. ИНИЦИАЛИЗАЦИЯ ДАННЫХ
// ============================================================

// Принудительная загрузка данных (если не загружены)
if (!window.WEAPONS || Object.keys(window.WEAPONS).length === 0) {
    console.log('🔄 Принудительная загрузка WEAPONS из WEAPONS_BO6');
    window.WEAPONS = window.WEAPONS_BO6 || {};
}
if (!window.ATTACHMENTS || Object.keys(window.ATTACHMENTS).length === 0) {
    console.log('🔄 Принудительная загрузка ATTACHMENTS из ATTACHMENTS_BO6');
    window.ATTACHMENTS = window.ATTACHMENTS_BO6 || {};
}

// Глобальная функция получения категории оружия (исправлена)
window.getWeaponCategory = function(weaponName) {
    if (!window.WEAPONS) return null;
    for (const category in window.WEAPONS) {
        if (window.WEAPONS[category].weapons && window.WEAPONS[category].weapons.includes(weaponName)) {
            return category;
        }
    }
    return null;
};

// ============================================================
// 2. ДИАГНОСТИЧЕСКИЙ РЕЖИМ
// ============================================================
const DIAGNOSTIC_MODE = true; // Установите false для отключения

function logDiagnostic(message, type = 'info') {
    if (!DIAGNOSTIC_MODE) return;
    const styles = {
        info: 'color: #4FC3F7;',
        success: 'color: #81C784; font-weight: bold;',
        warning: 'color: #FFB74D; font-weight: bold;',
        error: 'color: #E57373; font-weight: bold;',
        conflict: 'color: #FF8A65;',
        selected: 'color: #4CAF50; font-weight: bold;',
        conversion: 'color: #FFD700; font-weight: bold;'
    };
    console.log(`%c${message}`, styles[type] || styles.info);
}

// ============================================================
// 3. ПРОВЕРКА КОНФЛИКТОВ И СОВМЕСТИМОСТИ
// ============================================================

/**
 * Проверяет конфликт между двумя модулями.
 * @param {string} attId1 - ID первого модуля
 * @param {string} attId2 - ID второго модуля
 * @returns {boolean}
 */
function hasConflict(attId1, attId2) {
    if (!attId1 || !attId2) return false;

    const a1 = findAttachment(attId1);
    const a2 = findAttachment(attId2);
    if (!a1 || !a2) return false;

    // Проверка конфликтов в обе стороны
    return checkConflicts(a1, a2) || checkConflicts(a2, a1);
}

/**
 * Вспомогательная функция для проверки конфликтов одного модуля против другого.
 */
function checkConflicts(a, b) {
    if (!a.conflicts) return false;

    // Если конфликты заданы как объект для конкретного оружия
    if (typeof a.conflicts === 'object' && !Array.isArray(a.conflicts)) {
        const weaponName = currentClass?.primary?.name || currentClass?.secondary?.name;
        const weaponCategory = currentClass?.primary?.category || currentClass?.secondary?.category;

        // Проверяем по имени оружия
        if (weaponName && a.conflicts[weaponName]) {
            const conflicts = Array.isArray(a.conflicts[weaponName]) ? a.conflicts[weaponName] : [a.conflicts[weaponName]];
            for (const c of conflicts) {
                if (matchesConflict(c, b.id)) return true;
            }
        }
        // Проверяем по категории оружия
        if (weaponCategory && a.conflicts[weaponCategory]) {
            const conflicts = Array.isArray(a.conflicts[weaponCategory]) ? a.conflicts[weaponCategory] : [a.conflicts[weaponCategory]];
            for (const c of conflicts) {
                if (matchesConflict(c, b.id)) return true;
            }
        }
        return false;
    }

    // Стандартный массив конфликтов
    const conflicts = Array.isArray(a.conflicts) ? a.conflicts : [a.conflicts];
    for (const c of conflicts) {
        if (matchesConflict(c, b.id)) return true;
    }
    return false;
}

/**
 * Проверяет, совпадает ли конфликт с ID модуля или его категорией.
 */
function matchesConflict(conflict, targetId) {
    if (conflict === targetId) return true;

    if (window.ATTACHMENTS && window.ATTACHMENTS[conflict]) {
        const targetCategory = getModuleCategoryById(targetId);
        return normalizeCategory(conflict) === normalizeCategory(targetCategory);
    }

    if (conflict.startsWith('category:')) {
        const categoryName = conflict.replace('category:', '');
        const targetCategory = getModuleCategoryById(targetId);
        return normalizeCategory(categoryName) === normalizeCategory(targetCategory);
    }
    return false;
}

function normalizeCategory(str) {
    return String(str).toLowerCase().replace(/s$/, '');
}

/**
 * Возвращает категорию модуля по его ID.
 */
function getModuleCategoryById(attId) {
    const attachment = findAttachment(attId);
    return attachment ? getModuleCategory(attachment) : null;
}

/**
 * Проверяет, совместим ли модуль с оружием.
 */
function isAttachmentCompatible(attachment, weaponCategory, weaponName = null, currentAttachments = []) {
    if (!attachment || !weaponCategory) return false;

    // в начале функции isAttachmentCompatible
    if (attachment.isPrestige && !prestigeEnabled) return false;
    if (attachment.isPrestige && onlyPrestigeMode && !prestigeEnabled) return false;

    // Для Warzone игнорируем проверку игры
    if (currentGame !== 'warzone' && attachment._game && attachment._game !== currentGame) {
        return false;
    }

    // Исключения
    if (attachment.exclude && Array.isArray(attachment.exclude)) {
        if (weaponName && attachment.exclude.includes(weaponName)) return false;
        if (attachment.exclude.includes(weaponCategory)) return false;
    }

    // Блокировки (lockedWith)
    if (attachment.lockedWith && weaponName) {
        const lockedModules = attachment.lockedWith[weaponName];
        if (lockedModules) {
            const lockedArray = Array.isArray(lockedModules) ? lockedModules : [lockedModules];
            if (lockedArray.some(id => currentAttachments.some(att => att.id === id))) {
                return false;
            }
        }
    }

    // === НОВЫЕ ПРОВЕРКИ ДЛЯ MWIII / MWII ===
    // Проверка weaponRequirements (требуется наличие определённых модулей)
    if (attachment.weaponRequirements && weaponName) {
        const required = attachment.weaponRequirements[weaponName];
        if (required) {
            const requiredArray = Array.isArray(required) ? required : [required];
            const hasRequired = requiredArray.some(reqId => currentAttachments.some(att => att.id === reqId));
            if (!hasRequired) return false;
        }
    }

    // Проверка requires (требуется конкретный модуль)
    if (attachment.requires) {
        const hasRequired = currentAttachments.some(att => att.id === attachment.requires);
        if (!hasRequired) return false;
    }

    // Проверка compatibility
    if (attachment.compatibility === 'all') return true;

    if (Array.isArray(attachment.compatibility)) {
        return attachment.compatibility.includes(weaponCategory) ||
               (weaponName && attachment.compatibility.includes(weaponName));
    }

    if (typeof attachment.compatibility === 'string') {
        return attachment.compatibility === weaponCategory ||
               (weaponName && attachment.compatibility === weaponName);
    }

    return false;
}

/**
 * Возвращает все текущие установленные модули (основное + второстепенное).
 */
function getAllCurrentAttachments() {
    const result = [];
    if (currentClass?.primary?.attachments) result.push(...currentClass.primary.attachments);
    if (currentClass?.secondary?.attachments) result.push(...currentClass.secondary.attachments);
    return result;
}

// ============================================================
// 4. РАБОТА С МОДУЛЯМИ (ПОИСК, КАТЕГОРИИ, КОНВЕРСИИ)
// ============================================================

/**
 * Находит модуль по его ID во всех категориях.
 */
function findAttachment(attId) {
    if (!attId) return null;
    for (const cat in window.ATTACHMENTS) {
        const items = window.ATTACHMENTS[cat].items;
        for (const item of items) {
            if (item.id === attId) return item;
        }
    }
    return null;
}

/**
 * Возвращает категорию модуля (название ключа объекта).
 */
function getModuleCategory(attachment) {
    if (!attachment) return null;
    for (const cat in window.ATTACHMENTS) {
        if (window.ATTACHMENTS[cat].items && window.ATTACHMENTS[cat].items.some(item => item.id === attachment.id)) {
            return cat;
        }
    }
    return null;
}

/**
 * Проверяет, является ли модуль конверсией.
 */
function isConversion(attachment) {
    if (!attachment) return false;
    if (attachment.isConversion === true) return true;
    // Список ID конверсий для BO6
    const conversionIds = [
        'skull_splitter_barrel', 'double_barrel_conversion', 'ppsh_41_helical_mag',
        'c9_10mm_auto', 'aek_971', 'grau_auto_mode', 'stryder_burst_mod',
        'tr2_cqb_auto', 'svd_full_auto', 'kompakt_92_burst_mod', 'binary_trigger',
        'mini_rocket_conversion', 'xm4_burst_mod'
    ];
    if (attachment.id && conversionIds.includes(attachment.id)) return true;
    if (getModuleCategory(attachment) === 'conversionKits') return true;
    return attachment.conversion === true || attachment.category === 'conversionKit';
}

/**
 * Получает все доступные конверсии для указанного оружия.
 */
function getConversionsForWeapon(weaponName, weaponCategory, weaponGame = null) {
    if (!['bo6','bo7','mwii','mwiii','warzone'].includes(currentGame)) return [];
    const allAttachments = getAllAttachmentsForGame(weaponGame || currentGame);
    return allAttachments.filter(att =>
        isConversion(att) && isAttachmentCompatible(att, weaponCategory, weaponName, [])
    );
}

/**
 * Возвращает случайную конверсию с учётом настроек.
 */
function getRandomConversionForWeapon(weaponName, weaponCategory, weaponGame = null) {
    if (!conversionsEnabled) return null;
    const conversions = getConversionsForWeapon(weaponName, weaponCategory, weaponGame);
    if (conversions.length === 0) return null;

    if (onlyConversionsMode) {
        return conversions[Math.floor(Math.random() * conversions.length)];
    }

    if (Math.random() * 100 > conversionChance) return null;
    return conversions[Math.floor(Math.random() * conversions.length)];
}

function updateWarzoneModeUI() {
    const modes = ['classic', 'bo7', 'all'];
    const buttons = {
        classic: document.getElementById('warzoneModeClassic'),
        bo7: document.getElementById('warzoneModeBO7'),
        all: document.getElementById('warzoneModeAll')
    };
    for (const mode of modes) {
        const btn = buttons[mode];
        if (!btn) continue;
        if (mode === warzoneMode) {
            btn.style.borderColor = '#ff8c00';
            btn.style.background = '#ff8c00';
            btn.style.color = '#1a1a1a';
        } else {
            btn.style.borderColor = '#555';
            btn.style.background = '#333';
            btn.style.color = '#fff';
        }
    }
}

function setWarzoneMode(mode) {
    if (!['classic', 'bo7', 'all'].includes(mode)) return;
    warzoneMode = mode;
    updateWarzoneModeUI();
    // Если текущая игра – Warzone, перезагружаем данные и генерируем класс
    if (currentGame === 'warzone') {
        switchGame('warzone'); // перезагрузит оружие и модули с новым режимом
    }
}

// ============================================================
// 5. ЗАГРУЗКА ОРУЖИЯ ДЛЯ КОНКРЕТНОЙ ИГРЫ
// ============================================================

function getWeaponsForGame(game) {
    switch(game) {
        case 'bo6': return window.WEAPONS_BO6 || {};
        case 'bo7': return window.WEAPONS_BO7 || {};
        case 'mwiii': return window.WEAPONS_MWIII || {};
        case 'mwii': return window.WEAPONS_MWII || {};
        case 'warzone': return getAllWeaponsForWarzone();
        default: return window.WEAPONS_BO6 || {};
    }
}

function getAllWeaponsForWarzone() {
    const combined = {};
    const games = ['WEAPONS_BO7', 'WEAPONS_BO6', 'WEAPONS_MWIII', 'WEAPONS_MWII'];
    const categoryMap = { AR: 'AR', BR: 'BR', SMG: 'SMG', SG: 'SG', LMG: 'LMG', MMR: 'MMR', SR: 'SR', P: 'P', GL: 'GL', S: 'S' };
    // Фильтруем игры в зависимости от режима
    let allowedGames = [];
    if (warzoneMode === 'classic') {
        allowedGames = ['WEAPONS_BO6', 'WEAPONS_MWIII', 'WEAPONS_MWII'];
    } else if (warzoneMode === 'bo7') {
        allowedGames = ['WEAPONS_BO7'];
    } else { // 'all'
        allowedGames = ['WEAPONS_BO7', 'WEAPONS_BO6', 'WEAPONS_MWIII', 'WEAPONS_MWII'];
    }
    for (const game of games) {
        if (!allowedGames.includes(game)) continue;
        const weapons = window[game];
        if (!weapons) continue;
        for (const [cat, data] of Object.entries(weapons)) {
            const targetCat = categoryMap[cat] || cat;
            if (!combined[targetCat]) {
                combined[targetCat] = { name: data.name || targetCat, short: data.short || targetCat, weapons: [] };
            }
            for (const weapon of (data.weapons || [])) {
                const exists = combined[targetCat].weapons.some(w =>
                    typeof w === 'string' ? w === weapon : w.name === weapon
                );
                if (!exists) {
                    combined[targetCat].weapons.push({
                        name: weapon,
                        game: game.replace('WEAPONS_', '').toLowerCase()
                    });
                }
            }
        }
    }
    return combined;
}

function getWeaponCategoryForGame(game, weaponName) {
    switch(game) {
        case 'bo6': return window.getWeaponCategory ? window.getWeaponCategory(weaponName) : null;
        case 'bo7': return window.getWeaponCategoryBO7 ? window.getWeaponCategoryBO7(weaponName) : null;
        case 'mwiii': return window.getWeaponCategoryMWIII ? window.getWeaponCategoryMWIII(weaponName) : null;
        case 'mwii': return window.getWeaponCategoryMWII ? window.getWeaponCategoryMWII(weaponName) : null;
        default: return null;
    }
}

function getMWIIIWeaponsWithMWII() {
    const mwiiiWeapons = window.WEAPONS_MWIII || {};
    const mwiiWeapons = window.WEAPONS_MWII || {};
    if (!includeMWIIWeapons || !mwiiiWeapons || Object.keys(mwiiiWeapons).length === 0) {
        return mwiiiWeapons;
    }
    const combined = {};
    for (const cat in mwiiiWeapons) {
        combined[cat] = { ...mwiiiWeapons[cat], weapons: [...mwiiiWeapons[cat].weapons] };
    }
    const categoryMap = { AR: 'AR', BR: 'BR', SMG: 'SMG', SG: 'SG', LMG: 'LMG', MMR: 'MMR', SR: 'SR', P: 'P' };
    for (const mwiiCat in mwiiWeapons) {
        const targetCat = categoryMap[mwiiCat];
        if (targetCat && combined[targetCat]) {
            for (const weapon of (mwiiWeapons[mwiiCat].weapons || [])) {
                if (!combined[targetCat].weapons.includes(weapon)) {
                    combined[targetCat].weapons.push({ name: weapon, game: 'mwii' });
                }
            }
        }
    }
    return combined;
}

function updateSettingsVisibility(game) {
    const carryForwardContainer = document.getElementById('carryForwardContainer');
    const prestigeContainer = document.getElementById('prestigeContainer');

    // По умолчанию скрываем оба
    if (carryForwardContainer) carryForwardContainer.style.display = 'none';
    if (prestigeContainer) prestigeContainer.style.display = 'none';

    // Показываем в зависимости от игры
    if (game === 'mwiii') {
        if (carryForwardContainer) carryForwardContainer.style.display = 'block';
    } else if (game === 'bo7' || game === 'warzone') {
        if (prestigeContainer) prestigeContainer.style.display = 'block';
    } else {
        // bo6, mwii - ничего не показываем дополнительно
    }

    // Сброс состояния для скрытых элементов
    if (game !== 'mwiii') {
        includeMWIIWeapons = false;
        const checkbox = document.getElementById('includeMWIIWeapons');
        if (checkbox) checkbox.checked = false;
        // При переключении на другую игру WEAPONS уже перезагружены в switchGame,
        // но если мы были в MWIII и чекбокс был включен, то при переключении он сбросится.
    }

    const warzoneModeContainer = document.getElementById('warzoneModeContainer');
    if (game === 'warzone') {
        if (warzoneModeContainer) warzoneModeContainer.style.display = 'block';
        updateWarzoneModeUI();
    } else {
        if (warzoneModeContainer) warzoneModeContainer.style.display = 'none';
    }

    if (game !== 'bo7' && game !== 'warzone') {
        prestigeEnabled = false;
        onlyPrestigeMode = false;
        updatePrestigeUI();
    }
}

// ============================================================
// 6. ПЕРЕКЛЮЧЕНИЕ ИГРЫ
// ============================================================

function switchGame(game) {
    console.log('🔄 ПЕРЕКЛЮЧЕНИЕ НА ИГРУ:', game);
    currentGame = game;

    switch(game) {
        case 'bo6':
            window.WEAPONS = window.WEAPONS_BO6 || {};
            window.ATTACHMENTS = window.ATTACHMENTS_BO6 || {};
            break;
        case 'bo7':
            window.WEAPONS = window.WEAPONS_BO7 || {};
            window.ATTACHMENTS = window.ATTACHMENTS_BO7 || {};
            break;
        case 'mwiii':
            window.WEAPONS = getMWIIIWeaponsWithMWII();
            window.ATTACHMENTS = window.ATTACHMENTS_MWIII || {};
            break;
        case 'mwii':
            window.WEAPONS = window.WEAPONS_MWII || {};
            window.ATTACHMENTS = window.ATTACHMENTS_MWII || {};
            break;
        case 'warzone':
            window.WEAPONS = getAllWeaponsForWarzone();
            window.ATTACHMENTS = getAllAttachmentsForWarzone();
            break;
        default:
            window.WEAPONS = window.WEAPONS_BO6 || {};
            window.ATTACHMENTS = window.ATTACHMENTS_BO6 || {};
    }

    recentCategories = [];
    recentWeapons = [];
    generationCounter = 0;

    console.log('✅ WEAPONS установлены:', Object.keys(window.WEAPONS));
    console.log('✅ ATTACHMENTS установлены:', Object.keys(window.ATTACHMENTS));
    setupWeaponCategoryCheckboxes();
    updateSettingsVisibility(game);
    pendingGeneration = true;
}

// ============================================================
// 7. ПОЛУЧЕНИЕ МОДУЛЕЙ ДЛЯ ИГРЫ
// ============================================================

function getAllAttachmentsForGame(gameName) {
    if (!gameName) gameName = currentGame;
    if (gameName === 'warzone') {
        const combined = getAllAttachmentsForWarzone();
        return Object.values(combined).flatMap(cat => cat.items || []);
    }
    const key = 'ATTACHMENTS_' + gameName.toUpperCase();
    const attachments = window[key];
    if (!attachments) return [];
    const result = [];
    for (const cat in attachments) {
        for (const item of attachments[cat].items) {
            result.push({ ...item, _game: gameName });
        }
    }
    return result;
}

function getAllAttachmentsForWarzone() {
    const combined = {};
    const games = ['ATTACHMENTS_BO7', 'ATTACHMENTS_BO6', 'ATTACHMENTS_MWIII', 'ATTACHMENTS_MWII'];
    let allowedGames = [];
    if (warzoneMode === 'classic') {
        allowedGames = ['ATTACHMENTS_BO6', 'ATTACHMENTS_MWIII', 'ATTACHMENTS_MWII'];
    } else if (warzoneMode === 'bo7') {
        allowedGames = ['ATTACHMENTS_BO7'];
    } else {
        allowedGames = ['ATTACHMENTS_BO7', 'ATTACHMENTS_BO6', 'ATTACHMENTS_MWIII', 'ATTACHMENTS_MWII'];
    }
    for (const game of games) {
        if (!allowedGames.includes(game)) continue;
        const attachments = window[game];
        if (!attachments) continue;
        for (const [category, data] of Object.entries(attachments)) {
            if (!combined[category]) {
                combined[category] = { name: data.name || category, category: data.category || category, items: [] };
            }
            for (const item of (data.items || [])) {
                if (!combined[category].items.some(i => i.id === item.id)) {
                    combined[category].items.push({ ...item, _game: game.replace('ATTACHMENTS_', '').toLowerCase() });
                }
            }
        }
    }
    return combined;
}

// ============================================================
// 8. ГЕНЕРАЦИЯ КЛАССА
// ============================================================

/**
 * Главная функция генерации.
 */
function generateClassWithSettings() {
    const countSelect = document.getElementById('attachmentsCount');
    let globalCount = 5;
    let isRandomMode = false;
    if (countSelect) {
        const value = countSelect.value;
        if (value === 'random') {
            isRandomMode = true;
            globalCount = Math.floor(Math.random() * 5) + 1;
        } else {
            globalCount = parseInt(value) || 5;
        }
    }
    attachmentsCount = globalCount;

    const checkboxes = document.querySelectorAll('#weaponCategoryCheckboxes input[type="checkbox"]:checked');
    excludedWeaponCategories = Array.from(checkboxes).map(cb => cb.value);

    let attempts = 0;
    let validClass = null;
    while (attempts < 15) {
        attempts++;
        const candidate = generateRandomClass(excludedWeaponCategories);
        if (!candidate) continue;

        // Генерация модулей для основного оружия
        if (candidate.primary) {
            let primaryCount = (isRandomMode || candidate.primary.category === 'S' || candidate.primary.category === 'GL')
                ? Math.floor(Math.random() * 6) // 0-5
                : 5;
            candidate.primary.attachments = getUniqueAttachments(
                candidate.primary.category, candidate.primary.name, primaryCount,
                'primary', candidate.primary.conversion || null, candidate.primary.game
            );
        }

        // Генерация модулей для второстепенного оружия
        if (candidate.secondary) {
            let secondaryCount = (isRandomMode || candidate.secondary.category === 'S' || candidate.secondary.category === 'GL')
                ? Math.floor(Math.random() * 6)
                : 5;
            candidate.secondary.attachments = getUniqueAttachments(
                candidate.secondary.category, candidate.secondary.name, secondaryCount,
                'secondary', candidate.secondary.conversion || null, candidate.secondary.game
            );
        }

        if (validateBuildConflicts(candidate)) {
            validClass = candidate;
            break;
        }
    }

    currentClass = validClass || currentClass;
    if (currentClass) {
        saveToHistory(currentClass);
        // Проверка, не исключены ли категории оружия (если да – заменить)
        if (currentClass.primary && excludedWeaponCategories.includes(currentClass.primary.category)) {
            const newPrimary = generateUniqueClass(excludedWeaponCategories);
            if (newPrimary?.primary) currentClass.primary = newPrimary.primary;
        }
        if (currentClass.secondary && excludedWeaponCategories.includes(currentClass.secondary.category)) {
            const newSecondary = generateUniqueClass(excludedWeaponCategories);
            if (newSecondary?.secondary) currentClass.secondary = newSecondary.secondary;
        }

        updateRepetitionHistory(currentClass);
    }

    resetReplacementChances();
    updateDisplay();
}

/**
 * Создаёт случайный класс (выбор оружия, конверсий, но без модулей).
 */
function generateRandomClass(excludeCategories = []) {
    if (DIAGNOSTIC_MODE) console.log('🎯 ГЕНЕРАЦИЯ КЛАССА');

    const availableCategories = Object.keys(window.WEAPONS).filter(cat => !excludeCategories.includes(cat));
    const onlyOneCategory = availableCategories.length === 1;

    let primaryCategory = getRandomCategoryWithWeight(excludeCategories);
    if (!primaryCategory) primaryCategory = Object.keys(window.WEAPONS)[0];

    const primaryWeaponData = getRandomWeaponFromCategory(primaryCategory);
    if (!primaryWeaponData) return null;

    let primaryWeaponName = primaryWeaponData;
    let primaryWeaponGame = null;
    if (typeof primaryWeaponData === 'object' && primaryWeaponData.name) {
        primaryWeaponName = primaryWeaponData.name;
        primaryWeaponGame = primaryWeaponData.game || null;
    }

    let primaryConversion = null;
    if (['bo6','bo7','mwii','mwiii','warzone'].includes(currentGame)) {
        primaryConversion = getRandomConversionForWeapon(primaryWeaponName, primaryCategory, primaryWeaponGame);
    }

    let secondary = null;

    if (onlyOneCategory) {
        // 50% шанс взять второе оружие из той же категории
        if (Math.random() < 0.5) {
            const weapons = window.WEAPONS[primaryCategory]?.weapons || [];
            const otherWeapons = weapons.filter(w => {
                const wName = typeof w === 'string' ? w : (w.name || '');
                return wName !== primaryWeaponName;
            });
            if (otherWeapons.length > 0) {
                const secondaryWeaponData = otherWeapons[Math.floor(Math.random() * otherWeapons.length)];
                let secondaryWeaponName = secondaryWeaponData;
                let secondaryWeaponGame = null;
                if (typeof secondaryWeaponData === 'object' && secondaryWeaponData.name) {
                    secondaryWeaponName = secondaryWeaponData.name;
                    secondaryWeaponGame = secondaryWeaponData.game || null;
                }
                let secondaryConversion = null;
                if (['bo6','bo7','mwii','mwiii','warzone'].includes(currentGame)) {
                    secondaryConversion = getRandomConversionForWeapon(secondaryWeaponName, primaryCategory);
                }
                secondary = {
                    name: secondaryWeaponName,
                    category: primaryCategory,
                    categoryName: window.WEAPONS[primaryCategory].name,
                    attachments: [],
                    conversion: secondaryConversion,
                    game: secondaryWeaponGame
                };
            }
        }
        // если secondary остался null, то вторичного оружия не будет
    } else {
        // Стандартный случай: две разные категории
        let secondaryCategory = null;

        // Шанс взять оружие из той же категории
        if (Math.random() < SAME_CATEGORY_CHANCE) {
            const weaponsInSameCat = window.WEAPONS[primaryCategory]?.weapons || [];
            // Проверяем, есть ли другие оружия, кроме основного
            const otherWeapons = weaponsInSameCat.filter(w => {
                const wName = typeof w === 'string' ? w : (w.name || '');
                return wName !== primaryWeaponName;
            });
            if (otherWeapons.length > 0) {
                secondaryCategory = primaryCategory; // оставляем ту же категорию
            }
        }

        // Если не получилось (либо шанс не сработал, либо нет других оружий) — выбираем из другой категории
        if (!secondaryCategory) {
            const secondaryExclude = [...excludeCategories, primaryCategory];
            secondaryCategory = getRandomCategoryWithWeight(secondaryExclude);
            if (!secondaryCategory) {
                const available = Object.keys(window.WEAPONS).filter(cat =>
                    !excludeCategories.includes(cat) && cat !== primaryCategory
                );
                if (available.length > 0) {
                    secondaryCategory = available[Math.floor(Math.random() * available.length)];
                }
            }
        }
        
        if (secondaryCategory) {
            const secondaryWeaponData = getRandomWeaponFromCategory(secondaryCategory);
            if (secondaryWeaponData) {
                let secondaryWeaponName = secondaryWeaponData;
                let secondaryWeaponGame = null;
                if (typeof secondaryWeaponData === 'object' && secondaryWeaponData.name) {
                    secondaryWeaponName = secondaryWeaponData.name;
                    secondaryWeaponGame = secondaryWeaponData.game || null;
                }
                if (secondaryWeaponName !== primaryWeaponName) {
                    let secondaryConversion = null;
                    if (['bo6','bo7','mwii','mwiii','warzone'].includes(currentGame)) {
                        secondaryConversion = getRandomConversionForWeapon(secondaryWeaponName, secondaryCategory);
                    }
                    secondary = {
                        name: secondaryWeaponName,
                        category: secondaryCategory,
                        categoryName: window.WEAPONS[secondaryCategory].name,
                        attachments: [],
                        conversion: secondaryConversion,
                        game: secondaryWeaponGame
                    };
                }
            }
        }
    }

    // ---- ВЫБОР ДОПОЛНИТЕЛЬНЫХ ПРЕДМЕТОВ (для всех игр, включая Warzone) ----
    const game = currentGame;
    const meleePool = getExtraItemsForGame(game, 'melee');
    const melee = meleePool.length ? meleePool[Math.floor(Math.random() * meleePool.length)] : null;
    const tacticalPool = getExtraItemsForGame(game, 'tacticals');
    const tactical = tacticalPool.length ? tacticalPool[Math.floor(Math.random() * tacticalPool.length)] : null;
    const lethalPool = getExtraItemsForGame(game, 'lethals');
    const lethal = lethalPool.length ? lethalPool[Math.floor(Math.random() * lethalPool.length)] : null;
    const perksData = getPerksForGame(game);
    const selectedPerks = {};
    for (const slot of ['perk1', 'perk2', 'perk3', 'tierA', 'tierB']) {
        const pool = perksData[slot] || [];
        selectedPerks[slot] = pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
    }

    return {
        primary: {
            name: primaryWeaponName,
            category: primaryCategory,
            categoryName: window.WEAPONS[primaryCategory].name,
            attachments: [],
            conversion: primaryConversion,
            game: primaryWeaponGame
        },
        secondary: secondary,
        melee: melee,
        tactical: tactical,
        lethal: lethal,
        perks: selectedPerks
    };
}

/**
 * Подбирает уникальные модули для оружия.
 */
function getUniqueAttachments(weaponCategory, weaponName, count, weaponType, conversion = null, weaponGame = null) {
    if (DIAGNOSTIC_MODE) {
        console.log(`🔧 Генерация модулей для ${weaponType}: ${weaponName} (игра: ${weaponGame || currentGame})`);
        if (conversion) logDiagnostic(`📦 С конверсией: ${conversion.id} (${conversion.name})`, 'conversion');
    }

    // Получаем все модули для игры
    let allAttachments = getAllAttachmentsForGame(weaponGame || currentGame);

    if (!prestigeEnabled) {
        allAttachments = allAttachments.filter(att => !att.isPrestige);
    } else if (onlyPrestigeMode) {
        allAttachments = allAttachments.filter(att => att.isPrestige);
    }

    // === НОВЫЙ ПОРЯДОК: сначала создаём selected, добавляем конверсию ===
    const selected = [];
    if (conversion) {
        selected.push(conversion);
    }

    // Теперь фильтруем совместимые, передавая selected
    let compatible = allAttachments.filter(att => {
        if (!isAttachmentCompatible(att, weaponCategory, weaponName, selected)) return false;
        if (conversion && !isConversion(att)) {
            if (hasConflict(att.id, conversion.id)) return false;
            if (hasConflict(conversion.id, att.id)) return false;
        }
        return true;
    });

    if (compatible.length === 0) return [];

    // Перемешать
    for (let i = compatible.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [compatible[i], compatible[j]] = [compatible[j], compatible[i]];
    }

    let available = [...compatible];
    const maxCount = Math.min(count, 5);

    // Если есть конверсия, исключаем её категорию из available
    if (conversion) {
        const convCategory = getModuleCategory(conversion);
        available = available.filter(att => {
            if (att.id === conversion.id) return false;
            if (convCategory && getModuleCategory(att) === convCategory) return false;
            return true;
        });
        if (DIAGNOSTIC_MODE) logDiagnostic(`✅ Добавлена конверсия: ${conversion.id}`, 'conversion');
    }

    // Основной цикл выбора модулей (уже с учётом selected)
    for (let i = selected.length; i < maxCount; i++) {
        const filtered = filterCompatibleAttachments(selected, available, conversion, weaponCategory, weaponName);
        if (filtered.length === 0) {
            if (DIAGNOSTIC_MODE) console.log(`⚠️ Нет доступных модулей на шаге ${i+1}`);
            break;
        }

        // Группировка по категориям
        const categoryMap = new Map();
        for (const att of filtered) {
            const cat = getModuleCategory(att);
            if (cat) {
                if (!categoryMap.has(cat)) categoryMap.set(cat, []);
                categoryMap.get(cat).push(att);
            } else {
                if (!categoryMap.has('__unknown__')) categoryMap.set('__unknown__', []);
                categoryMap.get('__unknown__').push(att);
            }
        }
        const categories = Array.from(categoryMap.keys());
        if (categories.length === 0) break;

        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        const candidates = categoryMap.get(randomCategory);
        const chosen = candidates[Math.floor(Math.random() * candidates.length)];
        selected.push(chosen);

        // Исключаем всю категорию выбранного модуля
        const chosenCategory = getModuleCategory(chosen);
        available = available.filter(att => {
            if (att.id === chosen.id) return false;
            if (chosenCategory && getModuleCategory(att) === chosenCategory) return false;
            return true;
        });
        if (DIAGNOSTIC_MODE) console.log(`✅ Выбран: ${chosen.id} (${i+1}/${maxCount}) из категории ${chosenCategory}`);
    }

    return selected.map(att => ({
        ...att,
        displayCategory: getModuleCategory(att),
        displayCategoryName: getCategoryName(getModuleCategory(att)),
        isConversion: isConversion(att)
    }));
}

/**
 * Фильтрует модули, отсекая конфликтующие с уже выбранными.
 */
function filterCompatibleAttachments(selectedAttachments, availableAttachments, conversion = null, weaponCategory = null, weaponName = null) {
    if (!selectedAttachments || selectedAttachments.length === 0) return availableAttachments;

    const selectedIds = new Set(selectedAttachments.map(a => a.id));
    const selectedCategories = new Set(selectedAttachments.map(a => getModuleCategory(a)));

    return availableAttachments.filter(att => {
        // Если это конверсия и не та, что уже выбрана, исключаем
        if (conversion && isConversion(att) && att.id !== conversion.id) return false;

        // Проверка конфликтов с выбранными модулями
        for (const selected of selectedAttachments) {
            if (hasConflict(att.id, selected.id)) return false;
        }

        // Проверка requiredAttachments
        if (att.requiredAttachments) {
            const reqs = Array.isArray(att.requiredAttachments) ? att.requiredAttachments : [att.requiredAttachments];
            if (!reqs.every(id => selectedIds.has(id))) return false;
        }

        // Проверка requiredCategories
        if (att.requiredCategories) {
            const reqs = Array.isArray(att.requiredCategories) ? att.requiredCategories : [att.requiredCategories];
            if (!reqs.every(cat => selectedCategories.has(cat))) return false;
        }

        // === НОВЫЕ ПРОВЕРКИ (аналогично isAttachmentCompatible) ===
        // weaponRequirements
        if (att.weaponRequirements && weaponName) {
            const required = att.weaponRequirements[weaponName];
            if (required) {
                const requiredArray = Array.isArray(required) ? required : [required];
                const hasRequired = requiredArray.some(reqId => selectedIds.has(reqId));
                if (!hasRequired) return false;
            }
        }

        // requires
        if (att.requires) {
            if (!selectedIds.has(att.requires)) return false;
        }

        // lockedWith (если нужно, но в isAttachmentCompatible это уже проверено при первоначальной фильтрации,
        // однако для безопасности добавим)
        if (att.lockedWith && weaponName) {
            const lockedModules = att.lockedWith[weaponName];
            if (lockedModules) {
                const lockedArray = Array.isArray(lockedModules) ? lockedModules : [lockedModules];
                if (lockedArray.some(id => selectedIds.has(id))) {
                    return false;
                }
            }
        }

        // Проверка на дублирование категории
        const attCategory = getModuleCategory(att);
        if (attCategory && selectedCategories.has(attCategory)) return false;

        return true;
    });
}

/**
 * Проверяет весь класс на наличие конфликтов между модулями.
 */
function validateBuildConflicts(classData) {
    if (!classData) return true;
    const allAttachments = [
        ...(classData.primary?.attachments || []),
        ...(classData.secondary?.attachments || [])
    ];
    for (let i = 0; i < allAttachments.length - 1; i++) {
        for (let j = i + 1; j < allAttachments.length; j++) {
            if (hasConflict(allAttachments[i].id, allAttachments[j].id)) {
                if (DIAGNOSTIC_MODE) console.warn(`⚠️ Конфликт: ${allAttachments[i].id} <-> ${allAttachments[j].id}`);
                return false;
            }
        }
    }
    return true;
}

/**
 * Генерирует уникальный класс (выбирает лучший из нескольких попыток).
 */
function generateUniqueClass(excludeCategories = []) {
    if (DIAGNOSTIC_MODE) console.log("🎯 Поиск наиболее уникальной сборки...");
    const MAX_ATTEMPTS = 30;
    let bestClass = null;
    let bestScore = -1;
    const countSelect = document.getElementById('attachmentsCount');
    const isRandomMode = countSelect && countSelect.value === 'random';

    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const candidate = generateRandomClass(excludeCategories);
        if (!candidate) continue;

        if (candidate.primary) {
            let primaryCount = (isRandomMode || candidate.primary.category === 'S' || candidate.primary.category === 'GL')
                ? Math.floor(Math.random() * 6) : 5;
            candidate.primary.attachments = getUniqueAttachments(
                candidate.primary.category, candidate.primary.name, primaryCount,
                'primary', candidate.primary.conversion || null, candidate.primary.game
            );
        }
        if (candidate.secondary) {
            let secondaryCount = (isRandomMode || candidate.secondary.category === 'S' || candidate.secondary.category === 'GL')
                ? Math.floor(Math.random() * 6) : 5;
            candidate.secondary.attachments = getUniqueAttachments(
                candidate.secondary.category, candidate.secondary.name, secondaryCount,
                'secondary', candidate.secondary.conversion || null, candidate.secondary.game
            );
        }

        const score = calculateBuildScore(candidate);
        if (score > bestScore) {
            bestScore = score;
            bestClass = candidate;
        }
        if (score >= 95) {
            if (DIAGNOSTIC_MODE) console.log("🏆 Найдена почти идеальная сборка");
            return candidate;
        }
    }

    if (bestClass) return bestClass;
    // fallback: простая генерация
    const fallback = generateRandomClass(excludeCategories);
    if (fallback) {
        if (fallback.primary) {
            let primaryCount = (isRandomMode || fallback.primary.category === 'S' || fallback.primary.category === 'GL')
                ? Math.floor(Math.random() * 6) : 5;
            fallback.primary.attachments = getUniqueAttachments(
                fallback.primary.category, fallback.primary.name, primaryCount,
                'primary', fallback.primary.conversion || null, fallback.primary.game
            );
        }
        if (fallback.secondary) {
            let secondaryCount = (isRandomMode || fallback.secondary.category === 'S' || fallback.secondary.category === 'GL')
                ? Math.floor(Math.random() * 6) : 5;
            fallback.secondary.attachments = getUniqueAttachments(
                fallback.secondary.category, fallback.secondary.name, secondaryCount,
                'secondary', fallback.secondary.conversion || null, fallback.secondary.game
            );
        }
        return fallback;
    }
    return null;
}

/**
 * Вычисляет оценку уникальности сборки (0-100).
 */
function calculateBuildScore(classData) {
    if (!classData || !classData.primary || !classData.secondary) return 0;
    let score = 0;
    if (classData.primary.category !== classData.secondary.category) score += 30;
    if (classData.primary.conversion) score += 15;
    if (classData.secondary.conversion) score += 15;

    const allAttachments = [
        ...(classData.primary.attachments || []),
        ...(classData.secondary.attachments || [])
    ];
    if (allAttachments.length === 0) return score;

    const categories = new Set();
    let duplicates = 0;
    for (const att of allAttachments) {
        const cat = getModuleCategory(att);
        if (cat) {
            if (categories.has(cat)) duplicates++;
            else categories.add(cat);
        }
    }
    const uniquenessFactor = 1 - (duplicates / Math.max(allAttachments.length, 1));
    score += 70 * uniquenessFactor;
    score += Math.min(allAttachments.length * 2, 10);
    return Math.min(Math.round(score), 100);
}

// ============================================================
// 9. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ ВЫБОРА ОРУЖИЯ И КАТЕГОРИЙ
// ============================================================

function getRandomWeaponFromCategory(category) {
    const weapons = window.WEAPONS[category]?.weapons || [];
    if (weapons.length === 0) return null;

    const currentGen = generationCounter;

    // Строим массив весов для каждого оружия
    const weights = weapons.map(w => {
        const wName = typeof w === 'string' ? w : (w.name || '');
        // Находим самое свежее использование этого оружия
        const lastUse = recentWeapons
            .filter(item => item.weapon === wName)
            .sort((a, b) => b.timestamp - a.timestamp)[0];

        if (!lastUse) {
            return 10; // никогда не использовалось – максимальный вес
        }

        const age = currentGen - lastUse.timestamp;
        if (age >= WEAPON_EXCLUSION_GENERATIONS) {
            return 10; // достаточно старое – полный вес
        } else {
            // Чем моложе, тем меньше вес (минимум 1)
            // Можно настроить крутизну спада
            const weight = Math.max(1, 10 - (WEAPON_EXCLUSION_GENERATIONS - age) * 3);
            return weight;
        }
    });

    // Выбираем с учётом весов
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < weapons.length; i++) {
        rand -= weights[i];
        if (rand <= 0) {
            return weapons[i];
        }
    }
    return weapons[0];
}

function getRandomCategoryWithWeight(exclude = []) {
    const available = Object.keys(window.WEAPONS).filter(cat => !exclude.includes(cat));
    if (available.length === 0) return null;

    // Базовые веса (можно оставить 5 для всех или использовать window.CATEGORY_WEIGHTS)
    let weights = {};
    for (const cat of available) {
        weights[cat] = window.CATEGORY_WEIGHTS?.[cat] || 5;
    }

    // Понижаем вес недавних категорий
    const recentCats = recentCategories.map(item => item.category);
    for (const cat of available) {
        if (recentCats.includes(cat)) {
            // Уменьшаем вес, например, в 2 раза (но не менее 1)
            weights[cat] = Math.max(1, Math.floor(weights[cat] / 2));
        }
    }

    // Выбираем категорию с учётом весов
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    for (const cat of available) {
        rand -= weights[cat];
        if (rand <= 0) return cat;
    }
    return available[0];
}

function getCategoryName(category, lang = 'en') {
    const names = {
        en: {
            optic: 'Optic', muzzle: 'Muzzle', barrel: 'Barrel', underbarrel: 'Underbarrel',
            rearGrip: 'Rear Grip', stock: 'Stock', magazine: 'Magazine', laser: 'Laser',
            fireMod: 'Fire Mod', shard: 'Shard', lever: 'Lever', comb: 'Comb',
            stockPad: 'Stock Pad', combs: 'Comb', ammunition: 'Ammunition', guard: 'Guard',
            bolt: 'Bolt', arms: 'Arms', loader: 'Loader', rail: 'Rail',
            conversionKit: 'Conversion Kit', triggerAction: 'Trigger Action',
            optics: 'Optic', muzzles: 'Muzzle', barrels: 'Barrel', underbarrels: 'Underbarrel',
            rearGrips: 'Rear Grip', stocks: 'Stock', magazines: 'Magazine', lasers: 'Laser',
            fireMods: 'Fire Mods', shards: 'Shard', levers: 'Lever', stockPads: 'Stock Pad'
        },
        ru: {
            optic: 'Оптика', muzzle: 'Дуло', barrel: 'Ствол', underbarrel: 'Подствольная планка',
            rearGrip: 'Задняя рукоять', stock: 'Приклад', magazine: 'Магазин', laser: 'Лазер',
            fireMod: 'Модификации огня', shard: 'Осколок', lever: 'Рычаг', comb: 'Гребень',
            stockPad: 'Тыльник приклада', combs: 'Накладка', ammunition: 'Боеприпасы',
            guard: 'Цевье', bolt: 'Затвор', arms: 'Плечи', loader: 'Загрузчик', rail: 'Планка',
            conversionKit: 'Особые детали', triggerAction: 'Спусковой механизм',
            optics: 'Оптика', muzzles: 'Дуло', barrels: 'Ствол', underbarrels: 'Подствольная планка',
            rearGrips: 'Задняя рукоятка', stocks: 'Приклад', magazines: 'Магазин',
            lasers: 'Лазер', fireMods: 'Модификации огня', shards: 'Осколок',
            levers: 'Рычаг', stockPads: 'Тыльник приклада'
        }
    };
    const dict = names[lang] || names.en;
    return dict[category] || category;
}

function getLocalizedCategoryName(category, lang = 'en') {
    if (lang === 'ru') {
        let dict = null;
        switch (currentGame) {
            case 'bo6':
                dict = window.BO6_CATEGORY_TRANSLATIONS;
                break;
            case 'bo7':
                dict = window.BO7_CATEGORY_TRANSLATIONS;
                break;
            case 'mwii':
                dict = window.MWII_CATEGORY_TRANSLATIONS;
                break;
            case 'mwiii':
                dict = window.MWIII_CATEGORY_TRANSLATIONS;
                break;
            case 'warzone':
                // Для Warzone — общий словарь из всех игр
                dict = getWarzoneCategoryTranslations();
                break;
            default:
                dict = null;
        }
        if (dict && dict[category]) {
            return dict[category];
        }
        // Fallback: общий словарь (если есть)
        const common = getCategoryName(category, lang);
        if (common !== category) return common;
        return category;
    }
    // Для английского языка
    return getCategoryName(category, lang);
}

// ===== ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ WARZONE =====
function getWarzoneCategoryTranslations() {
    const combined = {};
    const allDicts = [
        window.BO6_CATEGORY_TRANSLATIONS,
        window.BO7_CATEGORY_TRANSLATIONS,
        window.MWII_CATEGORY_TRANSLATIONS,
        window.MWIII_CATEGORY_TRANSLATIONS
    ];
    for (const dict of allDicts) {
        if (dict) {
            for (const key in dict) {
                if (!combined[key]) {
                    combined[key] = dict[key];
                }
            }
        }
    }
    return combined;
}

// ===== ПЕРЕВОД КАТЕГОРИЙ ОРУЖИЯ =====
function getLocalizedWeaponCategory(category, game, lang = 'en') {
    if (lang !== 'ru') return category;
    if (!game) game = currentGame;

    let dict = null;
    switch (game) {
        case 'bo6':
            dict = window.BO6_WEAPON_CATEGORY_TRANSLATIONS;
            break;
        case 'bo7':
            dict = window.BO7_WEAPON_CATEGORY_TRANSLATIONS;
            break;
        case 'mwii':
            dict = window.MWII_WEAPON_CATEGORY_TRANSLATIONS;
            break;
        case 'mwiii':
            dict = window.MWIII_WEAPON_CATEGORY_TRANSLATIONS;
            break;
        case 'warzone':
            dict = getWarzoneWeaponCategoryTranslations();
            break;
        default:
            dict = null;
    }
    return (dict && dict[category]) ? dict[category] : category;
}

function getWarzoneWeaponCategoryTranslations() {
    const combined = {};
    const allDicts = [
        window.BO6_WEAPON_CATEGORY_TRANSLATIONS,
        window.BO7_WEAPON_CATEGORY_TRANSLATIONS,
        window.MWII_WEAPON_CATEGORY_TRANSLATIONS,
        window.MWIII_WEAPON_CATEGORY_TRANSLATIONS
    ];
    for (const dict of allDicts) {
        if (dict) {
            for (const key in dict) {
                if (!combined[key]) {
                    combined[key] = dict[key];
                }
            }
        }
    }
    return combined;
}

// ============================================================
// 10. СИСТЕМА ЗАМЕНЫ МОДУЛЕЙ
// ============================================================

function resetReplacementChances() {
    replacementChances = {
        primary: { used: false, available: true },
        secondary: { used: false, available: true }
    };
}

function updateRepetitionHistory(classData) {
    if (!classData) return;
    generationCounter++;

    // Запоминаем категории
    if (classData.primary) {
        recentCategories.push({ category: classData.primary.category, timestamp: generationCounter });
    }
    if (classData.secondary) {
        recentCategories.push({ category: classData.secondary.category, timestamp: generationCounter });
    }

    // Запоминаем названия оружия
    if (classData.primary) {
        recentWeapons.push({ weapon: classData.primary.name, timestamp: generationCounter });
    }
    if (classData.secondary) {
        recentWeapons.push({ weapon: classData.secondary.name, timestamp: generationCounter });
    }

    // Ограничиваем размер истории (чтобы не разрасталась)
    if (recentCategories.length > REPETITION_HISTORY_SIZE * 2) {
        recentCategories = recentCategories.slice(-REPETITION_HISTORY_SIZE * 2);
    }
    if (recentWeapons.length > REPETITION_HISTORY_SIZE * 2) {
        recentWeapons = recentWeapons.slice(-REPETITION_HISTORY_SIZE * 2);
    }
}

function hasReplacementChance(weaponType) {
    return replacementChances[weaponType]?.available && !replacementChances[weaponType]?.used;
}

function useReplacementChance(weaponType) {
    if (replacementChances[weaponType]) {
        replacementChances[weaponType].used = true;
        replacementChances[weaponType].available = false;
    }
}

function getRandomAttachmentFromCategory(weaponCategory, weaponName, category, excludeId = null, currentAttachments = [], weaponGame = null) {
    const allAttachments = getAllAttachmentsForGame(weaponGame || currentGame);
    
    // Фильтруем престижные модули в зависимости от настроек
    let filtered = allAttachments.filter(att => {
        if (!prestigeEnabled) return !att.isPrestige;
        if (onlyPrestigeMode) return att.isPrestige === true;
        return true; // если включены, но не только престижные – пропускаем все
    });

    let compatible = filtered.filter(att =>
        isAttachmentCompatible(att, weaponCategory, weaponName, currentAttachments) &&
        getModuleCategory(att) === category
    );
    
    compatible = compatible.filter(att => {
        for (const selected of currentAttachments) {
            if (hasConflict(att.id, selected.id)) return false;
        }
        return true;
    });
    if (excludeId) compatible = compatible.filter(att => att.id !== excludeId);
    if (compatible.length === 0) return null;
    return compatible[Math.floor(Math.random() * compatible.length)];
}

function getRandomAttachmentFromOtherCategory(weaponCategory, weaponName, currentCategory, excludeId = null, currentAttachments = [], weaponGame = null) {
    const allAttachments = getAllAttachmentsForGame(weaponGame || currentGame);
    
    // Фильтруем престижные модули в зависимости от настроек
    let filtered = allAttachments.filter(att => {
        if (!prestigeEnabled) return !att.isPrestige;
        if (onlyPrestigeMode) return att.isPrestige === true;
        return true;
    });

    const usedCategories = new Set();
    for (const att of currentAttachments) {
        if (att.id === excludeId) continue;
        const cat = getModuleCategory(att);
        if (cat) usedCategories.add(cat);
    }
    let compatible = filtered.filter(att =>
        isAttachmentCompatible(att, weaponCategory, weaponName, currentAttachments) &&
        getModuleCategory(att) !== currentCategory &&
        !usedCategories.has(getModuleCategory(att))
    );
    compatible = compatible.filter(att => {
        for (const selected of currentAttachments) {
            if (hasConflict(att.id, selected.id)) return false;
        }
        return true;
    });
    if (excludeId) compatible = compatible.filter(att => att.id !== excludeId);
    if (compatible.length === 0) return null;
    return compatible[Math.floor(Math.random() * compatible.length)];
}

function replaceModule(weaponType, attachmentIndex, newAttachment) {
    if (!currentClass) return;
    const weapon = currentClass[weaponType];
    if (!weapon) return;
    if (attachmentIndex >= 0 && attachmentIndex < weapon.attachments.length) {
        weapon.attachments.splice(attachmentIndex, 1, newAttachment);
    }
    updateDisplay();
}

// ============================================================
// 11. СОХРАНЕНИЕ ИСТОРИИ И ОБНОВЛЕНИЕ ОТОБРАЖЕНИЯ
// ============================================================

function saveToHistory(classData) {
    const entry = {
        primary: {
            name: classData.primary?.name || '',
            category: classData.primary?.category || '',
            conversion: classData.primary?.conversion?.id || null,
            attachments: classData.primary?.attachments?.map(a => ({ id: a.id })) || []
        },
        secondary: {
            name: classData.secondary?.name || '',
            category: classData.secondary?.category || '',
            conversion: classData.secondary?.conversion?.id || null,
            attachments: classData.secondary?.attachments?.map(a => ({ id: a.id })) || []
        },
        timestamp: Date.now()
    };
    generationHistory.push(entry);
    if (generationHistory.length > MAX_HISTORY) generationHistory.shift();
}

function updateDisplay() {
    if (!currentClass) return;
    let displayData = currentClass;
    if (currentLang === 'ru' && typeof window.translateClass === 'function') {
        displayData = window.translateClass(currentClass);
    }
    displayLoadout(displayData, currentLang);
    updateChanceIndicators();
}

function updateChanceIndicators() {
    const replaceBtn = document.getElementById('replaceBtn');
    if (!replaceBtn) return;
    const primaryAvailable = hasReplacementChance('primary');
    const secondaryAvailable = hasReplacementChance('secondary');
    const total = (primaryAvailable ? 1 : 0) + (secondaryAvailable ? 1 : 0);
    const text = currentLang === 'en' ? 'Replace Attachments' : 'Заменить модули';
    replaceBtn.innerHTML = `<i class="fas fa-exchange-alt"></i> <span id="replaceBtnText">${text}</span> <span style="background: #ff8c00; color: #1a1a1a; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; margin-left: 5px;">${total}</span>`;
}

// ============================================================
// 12. ОТОБРАЖЕНИЕ КЛАССА (HTML)
// ============================================================

function displayLoadout(classData, lang = 'en') {
    const display = document.getElementById('classDisplay');
    if (!display) {
        console.error('❌ Элемент #classDisplay не найден!');
        return;
    }

    if (!classData || !classData.primary) {
        display.innerHTML = '<div style="color: #888; text-align: center; padding: 20px;">Нажмите "Сгенерировать класс"</div>';
        return;
    }

    let displayData = classData;
    if (lang === 'ru' && typeof window.translateClass === 'function') {
        displayData = window.translateClass(classData);
    }

    const labels = {
        en: {
            primary: 'Primary Weapon', secondary: 'Secondary Weapon',
            category: 'Category', noAttachments: 'No attachments available',
            conversion: '⚡ CONVERSION', conversionKit: 'Conversion Kit'
        },
        ru: {
            primary: 'Основное оружие', secondary: 'Второстепенное оружие',
            category: 'Категория', noAttachments: 'Нет доступных модулей',
            conversion: '⚡ КОНВЕРСИЯ', conversionKit: 'Конверсионный набор'
        }
    };
    const l = labels[lang] || labels.en;

    let html = '';

    // --- Основное оружие ---
    if (displayData.primary) {
        const primaryCount = displayData.primary.attachments?.length || 0;
        const primaryName = getWeaponName(displayData.primary);
        const primaryCategoryName = displayData.primary.categoryName || getWeaponCategoryName(displayData.primary);

        html += `
            <div class="loadout-item loadout-primary" style="background:#1a1a1a;padding:12px;border-radius:8px;margin-bottom:10px;border-left:4px solid #ff8c00;">
                <div style="display:flex;align-items:center;flex-wrap:wrap;gap:5px;">
                    <strong style="color:#ff8c00;">${l.primary}:</strong>
                    <span style="color:#fff;font-size:1.1rem;">${primaryName}</span>
                    <span style="color:#888;font-size:0.8rem;">(${l.category}: ${primaryCategoryName || displayData.primary.categoryName || 'Unknown'})</span>
                    <span style="color:#ff8c00;font-size:0.8rem;background:#2a2a2a;padding:2px 10px;border-radius:12px;margin-left:auto;">${primaryCount}/5</span>
                </div>
            </div>
        `;

        if (primaryCount > 0) {
            html += `<div class="loadout-item loadout-attachments" style="background:#1a1a1a;padding:12px;border-radius:8px;margin-bottom:10px;border-left:4px solid #666;">`;
            displayData.primary.attachments.forEach(att => {
                const category = att.displayCategory || getModuleCategory(att);
                const categoryName = getLocalizedCategoryName(category, lang);
                const isConv = att.isConversion || isConversion(att);
                const convMark = isConv ? ` <span style="color:#FFD700;font-size:0.7rem;font-weight:bold;">⚡</span>` : '';
                const categoryDisplay = categoryName ? ` <span style="color:#ff8c00;font-size:0.75rem;font-weight:bold;">[${categoryName}]</span>` : '';
                const style = isConv ? 'color:#FFD700;' : 'color:#ddd;';
                html += `&nbsp;&nbsp;• <span style="${style}">${att.name}</span>${convMark}${categoryDisplay}<br>`;
            });
            html += `</div>`;
        }
    }

    // --- Второстепенное оружие (для всех игр) ---
    if (displayData.secondary) {
        const secondaryCount = displayData.secondary.attachments?.length || 0;
        const secondaryName = getWeaponName(displayData.secondary);
        const secondaryCategoryName = displayData.secondary.categoryName || getWeaponCategoryName(displayData.secondary);

        html += `
            <div class="loadout-item loadout-secondary" style="background:#1a1a1a;padding:12px;border-radius:8px;margin-bottom:10px;border-left:4px solid #4CAF50;">
                <div style="display:flex;align-items:center;flex-wrap:wrap;gap:5px;">
                    <strong style="color:#4CAF50;">${l.secondary}:</strong>
                    <span style="color:#fff;font-size:1.1rem;">${secondaryName}</span>
                    <span style="color:#888;font-size:0.8rem;">(${l.category}: ${secondaryCategoryName || displayData.secondary.categoryName || 'Unknown'})</span>
                    <span style="color:#4CAF50;font-size:0.8rem;background:#2a2a2a;padding:2px 10px;border-radius:12px;margin-left:auto;">${secondaryCount}/5</span>
                </div>
            </div>
        `;

        if (secondaryCount > 0) {
            html += `<div class="loadout-item loadout-attachments" style="background:#1a1a1a;padding:12px;border-radius:8px;margin-bottom:10px;border-left:4px solid #666;">`;
            displayData.secondary.attachments.forEach(att => {
                const category = att.displayCategory || getModuleCategory(att);
                const categoryName = getLocalizedCategoryName(category, lang);
                const isConv = att.isConversion || isConversion(att);
                const convMark = isConv ? ` <span style="color:#FFD700;font-size:0.7rem;font-weight:bold;">⚡</span>` : '';
                const categoryDisplay = categoryName ? ` <span style="color:#4CAF50;font-size:0.75rem;font-weight:bold;">[${categoryName}]</span>` : '';
                const style = isConv ? 'color:#FFD700;' : 'color:#ddd;';
                html += `&nbsp;&nbsp;• <span style="${style}">${att.name}</span>${convMark}${categoryDisplay}<br>`;
            });
            html += `</div>`;
        }
    }

    // --- Второстепенное оружие ---
    if (currentGame === 'warzone' && displayData) {
        let extraHtml = '<div class="warzone-extras" style="display:flex;flex-direction:column;gap:10px;margin-top:20px;border-top:2px solid #444;padding-top:15px;">';
        extraHtml += '<div style="display:flex;gap:10px;justify-content:center;">';
        
        // Ближний бой – широкий прямоугольник
        if (displayData.melee) {
            const imgSrc = displayData.melee.image || '';
            const gameLabel = displayData.melee.game ? ` (${displayData.melee.game.toUpperCase()})` : '';
            extraHtml += `
                <div style="flex:2; background:#1a1a1a; border-radius:8px; padding:8px 12px; border:1px solid #ff8c00; display:flex; align-items:center; gap:10px; min-height:60px;">
                    ${imgSrc ? `<img src="${imgSrc}" alt="${displayData.melee.name}" style="height:60px; width:auto; object-fit:contain;">` : `<i class="fas ${displayData.melee.icon}" style="font-size:1.8rem; color:#ff8c00;"></i>`}
                    <span style="color:#fff; font-size:0.9rem;">${displayData.melee.name}${gameLabel}</span>
                </div>
            `;
        }
        
        // Тактическая – квадрат
        if (displayData.tactical) {
            const imgSrc = displayData.tactical.image || '';
            extraHtml += `
                <div style="flex:1; background:#1a1a1a; border-radius:8px; padding:8px; border:1px solid #4CAF50; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:60px;">
                    ${imgSrc ? `<img src="${imgSrc}" alt="${displayData.tactical.name}" style="height:55px; width:auto; object-fit:contain;">` : `<i class="fas ${displayData.tactical.icon}" style="font-size:1.8rem; color:#4CAF50;"></i>`}
                    <span style="color:#fff; font-size:0.7rem; margin-top:2px;">${displayData.tactical.name}</span>
                </div>
            `;
        }
        
        // Летальная – квадрат
        if (displayData.lethal) {
            const imgSrc = displayData.lethal.image || '';
            extraHtml += `
                <div style="flex:1; background:#1a1a1a; border-radius:8px; padding:8px; border:1px solid #E57373; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:60px;">
                    ${imgSrc ? `<img src="${imgSrc}" alt="${displayData.lethal.name}" style="height:55px; width:auto; object-fit:contain;">` : `<i class="fas ${displayData.lethal.icon}" style="font-size:1.8rem; color:#E57373;"></i>`}
                    <span style="color:#fff; font-size:0.7rem; margin-top:2px;">${displayData.lethal.name}</span>
                </div>
            `;
        }
        extraHtml += '</div>';

        // Перки – три квадрата
        const perkSlots = ['perk1', 'perk2', 'perk3'];
        const slotColors = ['#FFD700', '#FFA500', '#FF6347'];
        const slotLabels = {
            en: { perk1: 'Perk 1', perk2: 'Perk 2', perk3: 'Perk 3' },
            ru: { perk1: 'Перк 1', perk2: 'Перк 2', perk3: 'Перк 3' }
        };
        const labels = slotLabels[lang] || slotLabels.en;
        extraHtml += '<div style="display:flex; gap:10px; justify-content:center; margin-top:5px;">';
        perkSlots.forEach((slot, index) => {
            const perk = displayData.perks && displayData.perks[slot];
            if (perk) {
                const color = slotColors[index % slotColors.length];
                const imgSrc = perk.image || '';
                extraHtml += `
                    <div style="flex:1; background:#1a1a1a; border-radius:8px; padding:8px; border:1px solid ${color}; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80px;">
                        ${imgSrc ? `<img src="${imgSrc}" alt="${perk.name}" style="height:80px; width:auto; object-fit:contain;">` : `<i class="fas ${perk.icon}" style="font-size:1.8rem; color:${color};"></i>`}
                        <span style="color:#fff; font-size:0.7rem; margin-top:2px;">${perk.name}</span>
                        <span style="color:#888; font-size:0.5rem;">${labels[slot] || slot}</span>
                    </div>
                `;
            }
        });
        extraHtml += '</div>';
        extraHtml += '</div>';
        html += extraHtml;
    }

    display.innerHTML = html;

}

// Вспомогательные функции для отображения имени и категории оружия
function getWeaponName(weapon) {
    if (!weapon) return 'Не выбрано';
    if (typeof weapon.name === 'object' && weapon.name !== null) {
        const nameObj = weapon.name;
        if (nameObj.name) {
            if (nameObj.game) {
                const gameNames = { bo6: 'BO6', bo7: 'BO7', mwii: 'MWII', mwiii: 'MWIII' };
                return `${nameObj.name} (${gameNames[nameObj.game] || nameObj.game})`;
            }
            return nameObj.name;
        }
        return String(nameObj);
    }
    if (typeof weapon === 'string') return weapon;
    if (typeof weapon === 'object' && weapon.name) {
        if (weapon.game) {
            const gameNames = { bo6: 'BO6', bo7: 'BO7', mwii: 'MWII', mwiii: 'MWIII' };
            return `${weapon.name} (${gameNames[weapon.game] || weapon.game})`;
        }
        return weapon.name;
    }
    return String(weapon);
}

function getWeaponCategoryName(weapon) {
    if (!weapon) return '';
    const weaponName = typeof weapon === 'string' ? weapon : (weapon.name || '');
    if (weaponName) {
        for (const [cat, data] of Object.entries(window.WEAPONS || {})) {
            if (data.weapons && data.weapons.some(w => {
                const wName = typeof w === 'string' ? w : (w.name || '');
                return wName === weaponName;
            })) {
                return data.name || cat;
            }
        }
    }
    return weapon.categoryName || '';
} 

// ============================================================
// 13. UI ДЛЯ ЗАМЕНЫ МОДУЛЕЙ (МОДАЛЬНЫЕ ОКНА)
// ============================================================

function openReplacementMode() {
    if (!currentClass) {
        alert('Сначала сгенерируйте класс!');
        return;
    }
    const primaryAvailable = hasReplacementChance('primary');
    const secondaryAvailable = hasReplacementChance('secondary');
    if (!primaryAvailable && !secondaryAvailable) {
        alert('У вас нет доступных шансов на замену модулей. Сгенерируйте новый класс!');
        return;
    }
    showWeaponSelectionDialog();
}

function showWeaponSelectionDialog() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'weaponSelectionOverlay';

    const modal = document.createElement('div');
    modal.className = 'modal-content';

    const title = document.createElement('h2');
    title.style.cssText = 'color:#ff8c00;font-family:"Staatliches",cursive;font-size:1.8rem;margin-bottom:0.5rem;text-align:center;';
    title.textContent = 'Выберите оружие для замены модулей';

    const subtitle = document.createElement('p');
    subtitle.style.cssText = 'color:#aaa;font-size:0.9rem;margin-bottom:1.5rem;text-align:center;';
    subtitle.textContent = 'У вас есть 1 шанс на замену модуля для каждого оружия';

    const list = document.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1rem;';

    let primaryDisplayName = currentClass.primary ? currentClass.primary.name : 'Не выбрано';
    if (currentLang === 'ru' && typeof window.translateWeaponName === 'function') {
        primaryDisplayName = window.translateWeaponName(primaryDisplayName);
    }
    const primaryBtn = document.createElement('button');
    const primaryCount = currentClass.primary?.attachments?.length || 0;
    const primaryAvailable = hasReplacementChance('primary');
    primaryBtn.textContent = `🔫 Основное оружие: ${primaryDisplayName} [${primaryCount}/5] ${primaryAvailable ? '✅' : '❌'}`;
    primaryBtn.className = 'primary-btn';
    primaryBtn.style.cssText = `
        background:${primaryAvailable ? '#333' : '#222'}; color:${primaryAvailable ? '#fff' : '#666'};
        border:1px solid ${primaryAvailable ? '#ff8c00' : '#444'};
        padding:0.75rem; border-radius:8px; cursor:${primaryAvailable ? 'pointer' : 'default'};
        font-family:"Russo One",sans-serif; font-size:1rem; transition:all 0.3s; text-align:center;
        opacity:${primaryAvailable ? '1' : '0.5'};
    `;
    if (primaryAvailable) {
        primaryBtn.onmouseover = () => { primaryBtn.style.background = '#ff8c00'; primaryBtn.style.color = '#1a1a1a'; };
        primaryBtn.onmouseout = () => { primaryBtn.style.background = '#333'; primaryBtn.style.color = '#fff'; };
        primaryBtn.onclick = () => { overlay.remove(); showModuleSelectionDialog('primary'); };
    }

    let secondaryDisplayName = currentClass.secondary ? currentClass.secondary.name : 'Не выбрано';
    if (currentLang === 'ru' && typeof window.translateWeaponName === 'function') {
        secondaryDisplayName = window.translateWeaponName(secondaryDisplayName);
    }
    const secondaryBtn = document.createElement('button');
    const secondaryCount = currentClass.secondary?.attachments?.length || 0;
    const secondaryAvailable = hasReplacementChance('secondary');
    secondaryBtn.textContent = `🔫 Второстепенное оружие: ${secondaryDisplayName} [${secondaryCount}/5] ${secondaryAvailable ? '✅' : '❌'}`;
    secondaryBtn.className = 'secondary-btn';
    secondaryBtn.style.cssText = `
        background:${secondaryAvailable ? '#333' : '#222'}; color:${secondaryAvailable ? '#fff' : '#666'};
        border:1px solid ${secondaryAvailable ? '#ff8c00' : '#444'};
        padding:0.75rem; border-radius:8px; cursor:${secondaryAvailable ? 'pointer' : 'default'};
        font-family:"Russo One",sans-serif; font-size:1rem; transition:all 0.3s; text-align:center;
        opacity:${secondaryAvailable ? '1' : '0.5'};
    `;
    if (secondaryAvailable) {
        secondaryBtn.onmouseover = () => { secondaryBtn.style.background = '#ff8c00'; secondaryBtn.style.color = '#1a1a1a'; };
        secondaryBtn.onmouseout = () => { secondaryBtn.style.background = '#333'; secondaryBtn.style.color = '#fff'; };
        secondaryBtn.onclick = () => { overlay.remove(); showModuleSelectionDialog('secondary'); };
    }

    list.appendChild(primaryBtn);
    list.appendChild(secondaryBtn);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ Отмена';
    closeBtn.style.cssText = `
        background:transparent; color:#888; border:1px solid #555; padding:0.5rem 1rem; border-radius:8px;
        cursor:pointer; font-family:"Russo One",sans-serif; font-size:0.9rem; transition:all 0.3s; width:100%; margin-top:0.5rem;
    `;
    closeBtn.onmouseover = () => { closeBtn.style.borderColor = '#ff8c00'; closeBtn.style.color = '#fff'; };
    closeBtn.onmouseout = () => { closeBtn.style.borderColor = '#555'; closeBtn.style.color = '#888'; };
    closeBtn.onclick = () => overlay.remove();

    modal.appendChild(title);
    modal.appendChild(subtitle);
    modal.appendChild(list);
    modal.appendChild(closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function showModuleSelectionDialog(weaponType) {
    const weapon = currentClass[weaponType];
    if (!weapon || !weapon.attachments || weapon.attachments.length === 0) {
        alert('У этого оружия нет модулей для замены');
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'moduleSelectionOverlay';

    const modal = document.createElement('div');
    modal.className = 'modal-content';

    const title = document.createElement('h2');
    title.style.cssText = 'color:#ff8c00;font-family:"Staatliches",cursive;font-size:1.8rem;margin-bottom:0.5rem;text-align:center;';
    title.textContent = 'Выберите модуль для замены';

    let weaponName = weapon.name;
    if (currentLang === 'ru' && typeof window.translateWeaponName === 'function') {
        weaponName = window.translateWeaponName(weapon.name);
    }
    const weaponInfo = document.createElement('p');
    weaponInfo.style.cssText = 'color:#aaa;font-size:0.9rem;margin-bottom:1.5rem;text-align:center;';
    weaponInfo.textContent = `${weaponType === 'primary' ? 'Основное' : 'Второстепенное'} оружие: ${weaponName}`;

    const list = document.createElement('div');
    list.style.cssText = 'display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1rem;max-height:300px;overflow-y:auto;';

    weapon.attachments.forEach((att, index) => {
        const btn = document.createElement('button');
        const category = getModuleCategory(att);
        const categoryName = getCategoryName(category);
        let attachmentName = att.name;
        if (currentLang === 'ru' && typeof window.translateAttachmentName === 'function') {
            attachmentName = window.translateAttachmentName(att.name);
        }
        btn.textContent = `${attachmentName} ${categoryName ? `(${categoryName})` : ''}`;
        btn.style.cssText = `
            background:#333; color:#fff; border:1px solid #555; padding:0.5rem 0.75rem; border-radius:6px;
            cursor:pointer; font-family:"Russo One",sans-serif; font-size:0.9rem; transition:all 0.3s; text-align:left;
        `;
        btn.onmouseover = () => { btn.style.background = '#ff8c00'; btn.style.color = '#1a1a1a'; btn.style.borderColor = '#ff8c00'; };
        btn.onmouseout = () => { btn.style.background = '#333'; btn.style.color = '#fff'; btn.style.borderColor = '#555'; };
        btn.onclick = () => { overlay.remove(); openReplacementDialog(weaponType, index); };
        list.appendChild(btn);
    });

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ Отмена';
    closeBtn.style.cssText = `
        background:transparent; color:#888; border:1px solid #555; padding:0.5rem 1rem; border-radius:8px;
        cursor:pointer; font-family:"Russo One",sans-serif; font-size:0.9rem; transition:all 0.3s; width:100%;
    `;
    closeBtn.onmouseover = () => { closeBtn.style.borderColor = '#ff8c00'; closeBtn.style.color = '#fff'; };
    closeBtn.onmouseout = () => { closeBtn.style.borderColor = '#555'; closeBtn.style.color = '#888'; };
    closeBtn.onclick = () => overlay.remove();

    modal.appendChild(title);
    modal.appendChild(weaponInfo);
    modal.appendChild(list);
    modal.appendChild(closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function openReplacementDialog(weaponType, attachmentIndex) {
    const weapon = currentClass[weaponType];
    if (!weapon) return;
    if (!hasReplacementChance(weaponType)) {
        alert('У вас нет доступных шансов на замену модулей для этого оружия!');
        return;
    }
    const currentAttachment = weapon.attachments[attachmentIndex];
    if (!currentAttachment) return;
    const currentCategory = getModuleCategory(currentAttachment);
    const currentCategoryName = getCategoryName(currentCategory);
    let currentAttachmentName = currentAttachment.name;
    if (currentLang === 'ru' && typeof window.translateAttachmentName === 'function') {
        currentAttachmentName = window.translateAttachmentName(currentAttachment.name);
    }

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'replacementOverlay';

    const modal = document.createElement('div');
    modal.className = 'modal-content';

    const title = document.createElement('h2');
    title.style.cssText = 'color:#ff8c00;font-family:"Staatliches",cursive;font-size:1.8rem;margin-bottom:0.5rem;text-align:center;';
    title.textContent = 'Заменить модуль';

    const chanceInfo = document.createElement('p');
    chanceInfo.style.cssText = 'color:#4CAF50;font-size:0.85rem;margin-bottom:1rem;text-align:center;';
    chanceInfo.textContent = '✅ У вас есть 1 шанс на замену модуля для этого оружия';

    const currentInfo = document.createElement('p');
    currentInfo.style.cssText = 'color:#aaa;font-size:0.9rem;margin-bottom:1.5rem;text-align:center;';
    currentInfo.innerHTML = `
        <strong style="color:#fff;">Текущий модуль:</strong> ${currentAttachmentName}
        ${currentCategoryName ? `<span style="color:#888;margin-left:10px;">(${currentCategoryName})</span>` : ''}
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'display:flex;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap;justify-content:center;';

    const sameCategoryBtn = document.createElement('button');
    sameCategoryBtn.textContent = '🔄 Из этой же категории';
    sameCategoryBtn.style.cssText = `
        background:#333; color:#fff; border:1px solid #ff8c00; padding:0.75rem 1.5rem; border-radius:8px;
        cursor:pointer; font-family:"Russo One",sans-serif; font-size:0.9rem; transition:all 0.3s; flex:1; min-width:150px;
    `;
    sameCategoryBtn.onmouseover = () => { sameCategoryBtn.style.background = '#ff8c00'; sameCategoryBtn.style.color = '#1a1a1a'; };
    sameCategoryBtn.onmouseout = () => { sameCategoryBtn.style.background = '#333'; sameCategoryBtn.style.color = '#fff'; };
    sameCategoryBtn.onclick = () => {
        const newAttachment = getRandomAttachmentFromCategory(
            weapon.category, weapon.name, currentCategory, currentAttachment.id, weapon.attachments, weapon.game
        );
        if (newAttachment) {
            let newName = newAttachment.name;
            if (currentLang === 'ru' && typeof window.translateAttachmentName === 'function') {
                newName = window.translateAttachmentName(newAttachment.name);
            }
            replaceModule(weaponType, attachmentIndex, newAttachment);
            useReplacementChance(weaponType);
            overlay.remove();
            showReplaceSuccess(newName, 'той же категории');
            updateChanceIndicators();
        } else {
            alert('Нет доступных модулей для замены в этой категории');
        }
    };

    const otherCategoryBtn = document.createElement('button');
    otherCategoryBtn.textContent = '🎲 Из другой категории';
    otherCategoryBtn.style.cssText = `
        background:#333; color:#fff; border:1px solid #ff8c00; padding:0.75rem 1.5rem; border-radius:8px;
        cursor:pointer; font-family:"Russo One",sans-serif; font-size:0.9rem; transition:all 0.3s; flex:1; min-width:150px;
    `;
    otherCategoryBtn.onmouseover = () => { otherCategoryBtn.style.background = '#ff8c00'; otherCategoryBtn.style.color = '#1a1a1a'; };
    otherCategoryBtn.onmouseout = () => { otherCategoryBtn.style.background = '#333'; otherCategoryBtn.style.color = '#fff'; };
    otherCategoryBtn.onclick = () => {
        const newAttachment = getRandomAttachmentFromOtherCategory(
            weapon.category, weapon.name, currentCategory, currentAttachment.id, weapon.attachments, weapon.game
        );
        if (newAttachment) {
            const newCategory = getModuleCategory(newAttachment);
            const newCategoryName = getCategoryName(newCategory);
            let newName = newAttachment.name;
            if (currentLang === 'ru' && typeof window.translateAttachmentName === 'function') {
                newName = window.translateAttachmentName(newAttachment.name);
            }
            replaceModule(weaponType, attachmentIndex, newAttachment);
            useReplacementChance(weaponType);
            overlay.remove();
            showReplaceSuccess(newName, `категории "${newCategoryName}"`);
            updateChanceIndicators();
        } else {
            alert('Нет доступных модулей для замены в других категориях');
        }
    };

    buttonContainer.appendChild(sameCategoryBtn);
    buttonContainer.appendChild(otherCategoryBtn);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ Отмена';
    closeBtn.style.cssText = `
        background:transparent; color:#888; border:1px solid #555; padding:0.5rem 1rem; border-radius:8px;
        cursor:pointer; font-family:"Russo One",sans-serif; font-size:0.9rem; transition:all 0.3s; width:100%; margin-top:0.5rem;
    `;
    closeBtn.onmouseover = () => { closeBtn.style.borderColor = '#ff8c00'; closeBtn.style.color = '#fff'; };
    closeBtn.onmouseout = () => { closeBtn.style.borderColor = '#555'; closeBtn.style.color = '#888'; };
    closeBtn.onclick = () => overlay.remove();

    modal.appendChild(title);
    modal.appendChild(chanceInfo);
    modal.appendChild(currentInfo);
    modal.appendChild(buttonContainer);
    modal.appendChild(closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

function showReplaceSuccess(newName, source) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position:fixed; bottom:30px; left:50%; transform:translateX(-50%);
        background:#2a2a2a; color:#fff; padding:15px 30px; border-radius:8px;
        border:2px solid #ff8c00; z-index:9999999;
        font-family:"Russo One",sans-serif; font-size:1.1rem; text-align:center;
        animation:slideIn 0.3s ease; box-shadow:0 0 30px rgba(255,140,0,0.3);
    `;
    notification.innerHTML = `✅ Модуль заменен на <strong style="color:#ff8c00;">${newName}</strong> (${source})`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// ============================================================
// 14. НАСТРОЙКИ UI (КОНВЕРСИИ, PRESTIGE, ЧЕКБОКСЫ КАТЕГОРИЙ)
// ============================================================

function updateConversionUI() {
    const toggleBtn = document.getElementById('toggleConversionsBtn');
    const onlyBtn = document.getElementById('onlyConversionsBtn');
    if (!toggleBtn || !onlyBtn) return;

    const lang = currentLang;
    const texts = {
        en: { enable: '⚡ Enable Conversions', disable: '⚡ Disable Conversions', only: '🔥 Only Conversions' },
        ru: { enable: '⚡ Включить конверсии', disable: '⚡ Выключить конверсии', only: '🔥 Только конверсии' }
    };
    const t = texts[lang] || texts.en;

    onlyBtn.textContent = t.only;

    if (!conversionsEnabled) {
        toggleBtn.textContent = t.enable;
        toggleBtn.style.borderColor = '#555';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.background = '#333';
        onlyBtn.style.opacity = '0.4';
        onlyBtn.style.cursor = 'default';
        onlyBtn.style.borderColor = '#555';
        onlyBtn.style.background = '#333';
        onlyBtn.style.color = '#888';
        onlyBtn.disabled = true;
    } else if (onlyConversionsMode) {
        toggleBtn.textContent = t.disable;
        toggleBtn.style.borderColor = '#4CAF50';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.background = '#333';
        onlyBtn.style.opacity = '1';
        onlyBtn.style.cursor = 'pointer';
        onlyBtn.style.borderColor = '#ff8c00';
        onlyBtn.style.background = '#ff8c00';
        onlyBtn.style.color = '#1a1a1a';
        onlyBtn.disabled = false;
    } else {
        toggleBtn.textContent = t.disable;
        toggleBtn.style.borderColor = '#4CAF50';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.background = '#333';
        onlyBtn.style.opacity = '1';
        onlyBtn.style.cursor = 'pointer';
        onlyBtn.style.borderColor = '#ff8c00';
        onlyBtn.style.background = '#333';
        onlyBtn.style.color = '#fff';
        onlyBtn.disabled = false;
    }
}

function setupConversionControls() {
    const toggleBtn = document.getElementById('toggleConversionsBtn');
    const onlyBtn = document.getElementById('onlyConversionsBtn');
    if (!toggleBtn || !onlyBtn) return;

    toggleBtn.addEventListener('click', () => {
        if (!conversionsEnabled) {
            conversionsEnabled = true;
            onlyConversionsMode = false;
        } else if (onlyConversionsMode) {
            conversionsEnabled = false;
            onlyConversionsMode = false;
        } else {
            conversionsEnabled = false;
            onlyConversionsMode = false;
        }
        updateConversionUI();
    });

    onlyBtn.addEventListener('click', () => {
        if (!conversionsEnabled) return;
        onlyConversionsMode = !onlyConversionsMode;
        updateConversionUI();
    });

    updateConversionUI();
}

function updatePrestigeUI() {
    const toggleBtn = document.getElementById('togglePrestigeBtn');
    const onlyBtn = document.getElementById('onlyPrestigeBtn');
    if (!toggleBtn || !onlyBtn) return;

    const lang = currentLang;
    const texts = {
        en: { enable: '⭐ Enable Prestige Modules', disable: '⭐ Disable Prestige Modules', only: '🔥 Only Prestige Modules' },
        ru: { enable: '⭐ Включить престижные модули', disable: '⭐ Выключить престижные модули', only: '🔥 Только престижные модули' }
    };
    const t = texts[lang] || texts.en;

    onlyBtn.textContent = t.only;

    if (!prestigeEnabled) {
        toggleBtn.textContent = t.enable;
        toggleBtn.style.borderColor = '#555';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.background = '#333';
        onlyBtn.style.opacity = '0.4';
        onlyBtn.style.cursor = 'default';
        onlyBtn.style.borderColor = '#555';
        onlyBtn.style.background = '#333';
        onlyBtn.style.color = '#888';
        onlyBtn.disabled = true;
    } else if (onlyPrestigeMode) {
        toggleBtn.textContent = t.disable;
        toggleBtn.style.borderColor = '#FFD700';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.background = '#333';
        onlyBtn.style.opacity = '1';
        onlyBtn.style.cursor = 'pointer';
        onlyBtn.style.borderColor = '#FFD700';
        onlyBtn.style.background = '#FFD700';
        onlyBtn.style.color = '#1a1a1a';
        onlyBtn.disabled = false;
    } else {
        toggleBtn.textContent = t.disable;
        toggleBtn.style.borderColor = '#FFD700';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.background = '#333';
        onlyBtn.style.opacity = '1';
        onlyBtn.style.cursor = 'pointer';
        onlyBtn.style.borderColor = '#FFD700';
        onlyBtn.style.background = '#333';
        onlyBtn.style.color = '#fff';
        onlyBtn.disabled = false;
    }
}

function setupPrestigeControls() {
    const toggleBtn = document.getElementById('togglePrestigeBtn');
    const onlyBtn = document.getElementById('onlyPrestigeBtn');
    if (!toggleBtn || !onlyBtn) return;

    toggleBtn.addEventListener('click', () => {
        if (!prestigeEnabled) {
            prestigeEnabled = true;
            onlyPrestigeMode = false;
        } else if (onlyPrestigeMode) {
            prestigeEnabled = false;
            onlyPrestigeMode = false;
        } else {
            prestigeEnabled = false;
            onlyPrestigeMode = false;
        }
        updatePrestigeUI();
    });

    onlyBtn.addEventListener('click', () => {
        if (!prestigeEnabled) return;
        onlyPrestigeMode = !onlyPrestigeMode;
        updatePrestigeUI();
    });

    updatePrestigeUI();
}

function setupWeaponCategoryCheckboxes() {
    const container = document.getElementById('weaponCategoryCheckboxes');
    if (!container) return;
    container.innerHTML = '';

    const categoryNames = {
        AR: 'Assault Rifles', BR: 'Battle Rifles', SMG: 'Submachine Guns',
        SG: 'Shotguns', LMG: 'Light Machine Guns', MMR: 'Marksman Rifles',
        SR: 'Sniper Rifles', P: 'Pistols', GL: 'Grenade Launchers', S: 'Special Weapons'
    };
    const categoryNamesRu = {
        AR: 'Штурмовые винтовки', BR: 'Боевые винтовки', SMG: 'Пистолеты-пулеметы',
        SG: 'Дробовики', LMG: 'Пулеметы', MMR: 'Пехотные винтовки',
        SR: 'Снайперские винтовки', P: 'Пистолеты', GL: 'Гранатометы', S: 'Специальное оружие'
    };

    const categories = Object.keys(window.WEAPONS || {});
    categories.forEach(cat => {
        const label = document.createElement('label');
        label.style.cssText = 'display:flex;align-items:center;gap:5px;background:#333;padding:4px 10px;border-radius:4px;cursor:pointer;font-size:0.85rem;color:#ddd;transition:all 0.2s;';
        label.onmouseover = () => { label.style.background = '#444'; };
        label.onmouseout = () => { label.style.background = '#333'; };

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = cat;
        checkbox.id = `weapon_cat_${cat}`;

        const span = document.createElement('span');
        const name = currentLang === 'en' ? categoryNames[cat] : categoryNamesRu[cat];
        span.textContent = `${cat} - ${name || cat}`;

        label.appendChild(checkbox);
        label.appendChild(span);
        container.appendChild(label);
    });
}

// ============================================================
// 15. УНИВЕРСАЛЬНАЯ ФУНКЦИЯ ПЕРЕВОДА (ОБЕРТКА)
// ============================================================

function translateClass(classData) {
    if (!classData || currentLang !== 'ru') return classData;
    const game = currentGame?.toLowerCase() || 'bo6';
    
    const translated = {
        primary: translateWeaponObject(classData.primary),
        secondary: classData.secondary ? translateWeaponObject(classData.secondary) : null,
        melee: classData.melee ? { ...classData.melee, name: translateExtraItem(classData.melee.name) } : null,
        tactical: classData.tactical ? { ...classData.tactical, name: translateExtraItem(classData.tactical.name) } : null,
        lethal: classData.lethal ? { ...classData.lethal, name: translateExtraItem(classData.lethal.name) } : null,
        perks: null,
    };
    if (classData.perks) {
        translated.perks = {};
        for (const slot of ['perk1', 'perk2', 'perk3', 'tierA', 'tierB']) {
            const perk = classData.perks[slot];
            if (perk) {
                translated.perks[slot] = { ...perk, name: translateExtraItem(perk.name) };
            } else {
                translated.perks[slot] = null;
            }
        }
    }
    if (translated.primary) {
        translated.primary.attachments = translateAttachments(classData.primary.attachments);
    }
    if (translated.secondary) {
        translated.secondary.attachments = translateAttachments(classData.secondary.attachments);
    }
    return translated;
}

function translateExtraItem(name) {
    if (!name || currentLang !== 'ru') return name;
    const translations = window.EXTRA_TRANSLATIONS || {};
    return translations[name] || name;
}

function translateWeaponObject(weapon) {
    if (!weapon) return null;
    let translatedName = weapon.name;
    let translatedCategoryName = weapon.categoryName;
    const game = weapon.game || currentGame;

    // Перевод имени оружия
    switch (game) {
        case 'bo6':
            translatedName = typeof translateBO6WeaponName === 'function' ? translateBO6WeaponName(weapon.name) : weapon.name;
            break;
        case 'bo7':
            translatedName = typeof translateBO7WeaponName === 'function' ? translateBO7WeaponName(weapon.name) : weapon.name;
            break;
        case 'mwii':
            translatedName = typeof translateMWIIWeaponName === 'function' ? translateMWIIWeaponName(weapon.name) : weapon.name;
            break;
        case 'mwiii':
            translatedName = typeof translateMWIIIWeaponName === 'function' ? translateMWIIIWeaponName(weapon.name) : weapon.name;
            break;
        default:
            translatedName = translateWeaponName(weapon.name);
    }

    // ---- ПОЛУЧАЕМ ПОЛНОЕ ИМЯ КАТЕГОРИИ ----
    let fullCategoryName = weapon.category;
    if (window.WEAPONS && window.WEAPONS[weapon.category]) {
        fullCategoryName = window.WEAPONS[weapon.category].name || weapon.category;
    }
    // Если не нашли, используем weapon.categoryName (если есть)
    if (!fullCategoryName || fullCategoryName === weapon.category) {
        fullCategoryName = weapon.categoryName || weapon.category;
    }

    // Перевод категории – передаём полное имя
    translatedCategoryName = getLocalizedWeaponCategory(fullCategoryName, game, 'ru');

    // Перевод конверсии (если есть)
    let translatedConversion = null;
    if (weapon.conversion) {
        let convName = weapon.conversion.name;
        switch (game) {
            case 'bo6':   convName = typeof translateBO6AttachmentName === 'function' ? translateBO6AttachmentName(weapon.conversion.name) : weapon.conversion.name; break;
            case 'bo7':   convName = typeof translateBO7AttachmentName === 'function' ? translateBO7AttachmentName(weapon.conversion.name) : weapon.conversion.name; break;
            case 'mwii':  convName = typeof translateMWIIAttachmentName === 'function' ? translateMWIIAttachmentName(weapon.conversion.name) : weapon.conversion.name; break;
            case 'mwiii': convName = typeof translateMWIIIAttachmentName === 'function' ? translateMWIIIAttachmentName(weapon.conversion.name) : weapon.conversion.name; break;
            default:      convName = translateAttachmentName(weapon.conversion.name);
        }
        translatedConversion = { ...weapon.conversion, name: convName };
    }

    return {
        name: translatedName,
        category: weapon.category,
        categoryName: translatedCategoryName,
        game: weapon.game,
        conversion: translatedConversion
    };
}

function translateAttachments(attachments) {
    if (!attachments) return [];
    return attachments.map(att => {
        let translatedName = att.name;
        const game = att._game || currentGame; // если _game нет, используем текущую игру
        switch(game) {
            case 'bo6': translatedName = translateBO6AttachmentName(att.name); break;
            case 'bo7': translatedName = translateBO7AttachmentName(att.name); break;
            case 'mwii': translatedName = translateMWIIAttachmentName(att.name); break;
            case 'mwiii': translatedName = translateMWIIIAttachmentName(att.name); break;
            default: translatedName = att.name;
        }
        return { ...att, name: translatedName };
    });
}

// ============================================================
// 16. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
// ============================================================

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    const btn = document.getElementById('langToggle');
    btn.innerHTML = currentLang === 'en' ? '<i class="fas fa-globe"></i> ENG' : '<i class="fas fa-globe"></i> RU';

    const texts = {
        en: {
            title: 'NEW <span style="color:rgba(255,140,0,1.0)">AND</span> REFRESHED!',
            desc1: 'Welcome to the brand new random class generator for Call of Duty: Black Ops 6, providing you with fresh challenges and loads of fun and chaos!',
            desc2: 'All extras are available with one press on the settings (<i class="fas fa-cog"></i>) icon!',
            desc3: 'Are you up for the challenge with a completely random loadout?',
            btnGenerate: 'Generate Random Class',
            btnReplace: 'Replace Attachments',
            settingsTitle: 'Advanced Settings',
            labelAttachmentsCount: 'Attachments count:',
            labelExcludeWeaponCategories: 'Exclude weapon categories',
            labelGameSelect: 'Select Game:',
            warzoneModeLabel: 'Warzone weapon mode:',
            warzoneModeClassic: 'Classic',
            warzoneModeBO7: 'Only BO7',
            warzoneModeAll: 'All'
        },
        ru: {
            title: 'НОВЫЙ <span style="color:rgba(255,140,0,1.0)">И</span> ОБНОВЛЕННЫЙ!',
            desc1: 'Добро пожаловать в новый генератор случайных классов для Call of Duty: Black Ops 6, который предлагает вам свежие вызовы и массу веселья и хаоса!',
            desc2: 'Все дополнительные возможности доступны по нажатию на иконку настроек (<i class="fas fa-cog"></i>)!',
            desc3: 'Готовы ли вы к испытанию со случайной экипировкой?',
            btnGenerate: 'Сгенерировать класс',
            btnReplace: 'Заменить модули',
            settingsTitle: 'Расширенные настройки',
            labelAttachmentsCount: 'Количество модулей:',
            labelExcludeWeaponCategories: 'Исключить категории оружия',
            labelGameSelect: 'Выберите игру:',
            warzoneModeLabel: 'Подбор оружия для Warzone:',
            warzoneModeClassic: 'Классика',
            warzoneModeBO7: 'Только BO7',
            warzoneModeAll: 'Все'
        }
    };
    const t = texts[currentLang];
    document.getElementById('mainTitle').innerHTML = t.title;
    document.getElementById('desc1').innerHTML = t.desc1;
    document.getElementById('desc2').innerHTML = t.desc2;
    document.getElementById('desc3').innerHTML = t.desc3;
    document.getElementById('generateBtn').textContent = t.btnGenerate;
    document.getElementById('replaceBtnText').textContent = t.btnReplace;
    document.getElementById('settingsTitle').textContent = t.settingsTitle;
    document.getElementById('labelAttachmentsCount').textContent = t.labelAttachmentsCount;
    document.getElementById('labelExcludeWeaponCategories').textContent = t.labelExcludeWeaponCategories;
    document.getElementById('warzoneModeLabel').textContent = t.warzoneModeLabel;
    document.getElementById('warzoneModeClassic').textContent = t.warzoneModeClassic;
    document.getElementById('warzoneModeBO7').textContent = t.warzoneModeBO7;
    document.getElementById('warzoneModeAll').textContent = t.warzoneModeAll;

    setupWeaponCategoryCheckboxes();
    // Обновить названия игр в селекте
    const gameSelect = document.getElementById('gameSelect');
    if (gameSelect) {
        const gameNames = {
            en: {
                bo6: 'Black Ops 6',
                bo7: 'Black Ops 7',
                mwiii: 'Modern Warfare III',
                mwii: 'Modern Warfare II',
                warzone: 'Warzone',
                warzoneModeLabel: 'Warzone weapon mode:',
                warzoneModeClassic: 'Classic',
                warzoneModeBO7: 'Only BO7',
                warzoneModeAll: 'All'
            },
            ru: {
                bo6: 'Black Ops 6',
                bo7: 'Black Ops 7',
                mwiii: 'Modern Warfare III',
                mwii: 'Modern Warfare II',
                warzone: 'Warzone',
                warzoneModeLabel: 'Режим оружия в Warzone:',
                labelGameSelect: 'Выберите игру:',
                warzoneModeClassic: 'Классика',
                warzoneModeBO7: 'Только BO7',
                warzoneModeAll: 'Все'
            }
        };
        for (let i = 0; i < gameSelect.options.length; i++) {
            const val = gameSelect.options[i].value;
            if (gameNames[currentLang] && gameNames[currentLang][val]) {
                gameSelect.options[i].textContent = gameNames[currentLang][val];
            }
        }
    }

    // Обновить настройки UI (конверсии, престиж, carry forward)
    updateSettingsUI();

    updateDisplay();
}

function updateSettingsUI() {
    const lang = currentLang;
    const t = {
        en: {
            conversions: '⚡ Conversion Settings:',
            conversionsEnable: '⚡ Enable Conversions',
            conversionsDisable: '⚡ Disable Conversions',
            conversionsOnly: '🔥 Only Conversions',
            prestige: '⭐ Prestige Modules:',
            prestigeEnable: '⭐ Enable Prestige Modules',
            prestigeDisable: '⭐ Disable Prestige Modules',
            prestigeOnly: '🔥 Only Prestige Modules',
            carryForward: '🔫 Include MWII Weapons (Carry Forward)',
            carryForwardDesc: 'Adds weapons from Modern Warfare II to the MWIII pool'
        },
        ru: {
            conversions: '⚡ Настройки конверсий:',
            conversionsEnable: '⚡ Включить конверсии',
            conversionsDisable: '⚡ Выключить конверсии',
            conversionsOnly: '🔥 Только конверсии',
            prestige: '⭐ Престижные модули:',
            prestigeEnable: '⭐ Включить престижные модули',
            prestigeDisable: '⭐ Выключить престижные модули',
            prestigeOnly: '🔥 Только престижные модули',
            carryForward: '🔫 Включить оружие из MWII (Carry Forward)',
            carryForwardDesc: 'Добавляет оружие из Modern Warfare II в пул MWIII'
        }
    };

    const dict = t[lang] || t.en;

    // Заголовки групп
    const convLabel = document.querySelector('#conversionsGroup label');
    if (convLabel) convLabel.textContent = dict.conversions;
    const prestigeLabel = document.querySelector('#prestigeGroup label');
    if (prestigeLabel) prestigeLabel.textContent = dict.prestige;

    // Кнопки конверсий (текст зависит от состояния, обновим через setupConversionControls)
    // Но setupConversionControls уже вызывается при загрузке, и там есть updateUI,
    // который нужно переделать на использование currentLang.
    // Мы вызовем updateConversionUI() и updatePrestigeUI() отдельно.

    // Чекбокс Carry Forward
    const cfLabel = document.querySelector('label[for="includeMWIIWeapons"]');
    if (cfLabel) cfLabel.textContent = dict.carryForward;
    const cfDesc = document.querySelector('#carryForwardContainer .form-group span');
    if (cfDesc) cfDesc.textContent = dict.carryForwardDesc;

    // Обновляем тексты кнопок конверсий и престижа (передаём текущий язык)
    updateConversionUI();
    updatePrestigeUI();
}

// ============================================================
// 17. ЗАПУСК И ОБРАБОТЧИКИ СОБЫТИЙ
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    // Логирование загрузки
    console.log('=== ПРОВЕРКА ЗАГРУЗКИ ДАННЫХ ===');
    console.log('WEAPONS_BO7:', window.WEAPONS_BO7 ? Object.keys(window.WEAPONS_BO7) : 'НЕТ ДАННЫХ');
    console.log('WEAPONS_BO6:', window.WEAPONS_BO6 ? Object.keys(window.WEAPONS_BO6) : 'НЕТ ДАННЫХ');
    console.log('WEAPONS_MWIII:', window.WEAPONS_MWIII ? Object.keys(window.WEAPONS_MWIII) : 'НЕТ ДАННЫХ');
    console.log('WEAPONS_MWII:', window.WEAPONS_MWII ? Object.keys(window.WEAPONS_MWII) : 'НЕТ ДАННЫХ');
    console.log('ATTACHMENTS_BO7:', window.ATTACHMENTS_BO7 ? Object.keys(window.ATTACHMENTS_BO7) : 'НЕТ ДАННЫХ');
    console.log('ATTACHMENTS_BO6:', window.ATTACHMENTS_BO6 ? Object.keys(window.ATTACHMENTS_BO6) : 'НЕТ ДАННЫХ');
    console.log('ATTACHMENTS_MWIII:', window.ATTACHMENTS_MWIII ? Object.keys(window.ATTACHMENTS_MWIII) : 'НЕТ ДАННЫХ');
    console.log('ATTACHMENTS_MWII:', window.ATTACHMENTS_MWII ? Object.keys(window.ATTACHMENTS_MWII) : 'НЕТ ДАННЫХ');
    console.log('===============================');

    // Инициализация по умолчанию
    window.WEAPONS = window.WEAPONS_BO6 || {};
    window.ATTACHMENTS = window.ATTACHMENTS_BO6 || {};
    console.log('📦 WEAPONS по умолчанию:', Object.keys(window.WEAPONS));
    console.log('📦 ATTACHMENTS по умолчанию:', Object.keys(window.ATTACHMENTS));

    // Выбор игры
    const gameSelect = document.getElementById('gameSelect');
    if (gameSelect) {
        gameSelect.value = 'bo6';
        gameSelect.addEventListener('change', function() {
            switchGame(this.value);
        });
        switchGame('bo6'); // внутри неё уже вызывается updateSettingsVisibility('bo6')
    }

    setupWeaponCategoryCheckboxes();
    setupConversionControls();
    setupPrestigeControls();
    updateSettingsUI();

    // Автоматическая генерация при загрузке
    console.log('⏰ Запуск генерации при загрузке');
    generateClassWithSettings();

    // Кнопка Generate
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
        const newBtn = generateBtn.cloneNode(true);
        generateBtn.parentNode.replaceChild(newBtn, generateBtn);
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🔘 Нажата кнопка Генерировать');
            if (pendingGeneration) pendingGeneration = false;
            generateClassWithSettings();
            console.log('✅ Класс сгенерирован:', currentClass);
        });
    }

    // Кнопка Replace
    const replaceBtn = document.getElementById('replaceBtn');
    if (replaceBtn) {
        const newBtn = replaceBtn.cloneNode(true);
        replaceBtn.parentNode.replaceChild(newBtn, replaceBtn);
        newBtn.addEventListener('click', openReplacementMode);
    }

    // Кнопка языка
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);

    // Кнопка настроек
    document.getElementById('settingsBtn').addEventListener('click', function() {
        document.getElementById('advancedSettings').classList.toggle('hidden');
    });

    // Чекбокс исключения категорий
    document.getElementById('excludeWeaponCategories').addEventListener('change', function() {
        const field = document.getElementById('excludeWeaponCategoriesField');
        field.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            document.querySelectorAll('#weaponCategoryCheckboxes input[type="checkbox"]').forEach(cb => cb.checked = false);
            excludedWeaponCategories = [];
        }
    });

    // Чекбокс включения оружия из MWII (Carry Forward) – виден только в MWIII благодаря updateSettingsVisibility
    const includeMWIICheckbox = document.getElementById('includeMWIIWeapons');
    if (includeMWIICheckbox) {
        includeMWIICheckbox.addEventListener('change', function() {
            includeMWIIWeapons = this.checked;
            if (currentGame === 'mwiii') {
                window.WEAPONS = getMWIIIWeaponsWithMWII();
                setupWeaponCategoryCheckboxes();
                pendingGeneration = true;
            }
        });
    }

    document.getElementById('warzoneModeClassic').addEventListener('click', function(e) {
        e.preventDefault();
        setWarzoneMode('classic');
    });
    document.getElementById('warzoneModeBO7').addEventListener('click', function(e) {
        e.preventDefault();
        setWarzoneMode('bo7');
    });
    document.getElementById('warzoneModeAll').addEventListener('click', function(e) {
        e.preventDefault();
        setWarzoneMode('all');
    });

    // Стили для модальных окон (если нет)
    if (!document.getElementById('replacementStyles')) {
        const styles = document.createElement('style');
        styles.id = 'replacementStyles';
        styles.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes slideIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 999999;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: fadeIn 0.3s ease;
            }
            .modal-content {
                background: #2a2a2a;
                padding: 2rem;
                border-radius: 12px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                border: 2px solid #ff8c00;
            }
        `;
        document.head.appendChild(styles);
    }
});
// ============================================================
// КОНЕЦ СКРИПТА
// ============================================================
