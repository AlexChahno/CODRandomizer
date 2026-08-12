// ============================================
// LOADOUT CONFIG - Call of Duty: Black Ops 6
// ============================================

// ============================================
// ВЕСА КАТЕГОРИЙ ДЛЯ ВЫБОРА
// ============================================

window.CATEGORY_WEIGHTS = {
    'AR': 10,
    'SMG': 10,
    'SG': 8,
    'LMG': 8,
    'MMR': 7,
    'SR': 7,
    'P': 6,
    'GL': 2,
    'S': 2
};

// Функция для получения случайной категории с учетом весов
function getRandomCategoryWithWeight(exclude = []) {
    const availableCategories = Object.keys(WEAPONS).filter(cat => !exclude.includes(cat));
    if (availableCategories.length === 0) return null;
    
    // Создаем массив с учетом весов
    const weightedPool = [];
    for (const category of availableCategories) {
        const weight = CATEGORY_WEIGHTS[category] || 5; // Вес по умолчанию - 5
        for (let i = 0; i < weight; i++) {
            weightedPool.push(category);
        }
    }
    
    return weightedPool[Math.floor(Math.random() * weightedPool.length)];
}

// Функция для получения случайной категории (с возможностью исключения)
function getRandomCategory(exclude = []) {
    return getRandomCategoryWithWeight(exclude);
}

// Функция для получения случайного оружия из категории
function getRandomWeaponFromCategory(category) {
    const weapons = WEAPONS[category] ? WEAPONS[category].weapons : [];
    if (weapons.length === 0) return null;
    return weapons[Math.floor(Math.random() * weapons.length)];
}

// ============================================
// ФУНКЦИЯ ГЕНЕРАЦИИ СЛУЧАЙНОГО КЛАССА (с ограничением на повтор категорий)
// ============================================

function generateRandomClass(excludeCategories = []) {
    // Получаем случайную категорию для основного оружия с учетом весов
    let primaryCategory = getRandomCategoryWithWeight(excludeCategories);
    if (!primaryCategory) {
        primaryCategory = Object.keys(WEAPONS)[0];
    }
    
    // Получаем оружие из категории
    const primaryWeapon = getRandomWeaponFromCategory(primaryCategory);
    if (!primaryWeapon) {
        return null;
    }
    
    // Получаем совместимые модули для основного оружия (с передачей названия)
    const primaryAttachments = getCompatibleAttachments(primaryCategory, primaryWeapon, 5);
    
    // Выбираем второстепенное оружие
    // Исключаем категорию основного оружия, чтобы не было двух одинаковых категорий
    const secondaryExclude = [...excludeCategories, primaryCategory];
    
    // Получаем категорию для второстепенного оружия с учетом весов
    let secondaryCategory = getRandomCategoryWithWeight(secondaryExclude);
    
    // Если не удалось найти категорию, пробуем без исключений
    if (!secondaryCategory) {
        // Пробуем найти любую доступную категорию, кроме основной
        const available = Object.keys(WEAPONS).filter(cat => 
            !excludeCategories.includes(cat) && cat !== primaryCategory
        );
        if (available.length > 0) {
            secondaryCategory = available[Math.floor(Math.random() * available.length)];
        } else {
            // Если совсем нет других категорий, берем первую доступную
            const fallback = Object.keys(WEAPONS).find(cat => !excludeCategories.includes(cat));
            secondaryCategory = fallback || Object.keys(WEAPONS)[0];
        }
    }
    
    const secondaryWeapon = getRandomWeaponFromCategory(secondaryCategory);
    if (!secondaryWeapon) {
        // Если нет оружия в категории, берем первую доступную
        const fallbackCategory = Object.keys(WEAPONS).find(cat => !excludeCategories.includes(cat));
        if (fallbackCategory) {
            const fallbackWeapon = getRandomWeaponFromCategory(fallbackCategory);
            return generateRandomClass(excludeCategories);
        }
        return null;
    }
    
    // Получаем модули для второстепенного оружия (с передачей названия)
    const secondaryAttachments = getCompatibleAttachments(secondaryCategory, secondaryWeapon, 5);
    
    return {
        primary: {
            name: primaryWeapon,
            category: primaryCategory,
            categoryName: WEAPONS[primaryCategory].name,
            attachments: primaryAttachments
        },
        secondary: {
            name: secondaryWeapon,
            category: secondaryCategory,
            categoryName: WEAPONS[secondaryCategory].name,
            attachments: secondaryAttachments
        }
    };
}

// ============================================
// ФУНКЦИЯ ОТОБРАЖЕНИЯ КЛАССА (с упорядочиванием по категориям)
// ============================================

function displayLoadout(classData, lang = 'en') {
    const display = document.getElementById('classDisplay');
    
    // Если язык русский - переводим названия
    let displayData = classData;
    if (lang === 'ru' && typeof translateClass === 'function') {
        displayData = translateClass(classData);
    }
    
    const labels = {
        en: {
            primary: 'Primary Weapon',
            attachments: 'Attachments',
            secondary: 'Secondary Weapon',
            secondaryAttachments: 'Attachments',
            category: 'Category',
            noAttachments: 'No attachments available',
            weapon: 'Weapon',
            categoryOrder: [
                'optic', 'muzzle', 'barrel', 'underbarrel', 
                'rearGrip', 'stock', 'magazine', 'laser', 'fireMod',
                'shard', 'lever', 'comb', 'stockPad', 'combs'
            ],
            categoryNames: {
                optic: 'Optic',
                muzzle: 'Muzzle',
                barrel: 'Barrel',
                underbarrel: 'Underbarrel',
                rearGrip: 'Rear Grip',
                stock: 'Stock',
                magazine: 'Magazine',
                laser: 'Laser',
                fireMod: 'Fire Mod',
                shard: 'Shard',
                lever: 'Lever',
                comb: 'Comb',
                stockPad: 'Stock Pad',
                combs: 'Comb'
            }
        },
        ru: {
            primary: 'Основное оружие',
            attachments: 'Дополнительные модули',
            secondary: 'Второстепенное оружие',
            secondaryAttachments: 'Дополнительные модули',
            category: 'Категория',
            noAttachments: 'Нет доступных модулей',
            weapon: 'Оружие',
            categoryOrder: [
                'optic', 'muzzle', 'barrel', 'underbarrel', 
                'rearGrip', 'stock', 'magazine', 'laser', 'fireMod',
                'shard', 'lever', 'comb', 'stockPad', 'combs'
            ],
            categoryNames: {
                optic: 'Оптика',
                muzzle: 'Дульное устройство',
                barrel: 'Ствол',
                underbarrel: 'Подствольник',
                rearGrip: 'Задняя рукоятка',
                stock: 'Приклад',
                magazine: 'Магазин',
                laser: 'Лазер',
                fireMod: 'Мод огня',
                shard: 'Осколок',
                lever: 'Рычаг',
                comb: 'Гребень',
                stockPad: 'Подушка приклада',
                combs: 'Гребень'
            }
        }
    };
    
    const l = labels[lang] || labels.en;
    
    function getCategory(attachment) {
        for (const type in ATTACHMENTS) {
            if (ATTACHMENTS[type].items.some(item => item.id === attachment.id)) {
                return type;
            }
        }
        return null;
    }
    
    function groupAttachmentsByCategory(attachments) {
        const grouped = {};
        for (const att of attachments) {
            const category = getCategory(att);
            if (category) {
                if (!grouped[category]) {
                    grouped[category] = [];
                }
                grouped[category].push(att);
            }
        }
        return grouped;
    }
    
    function renderAttachments(attachments, title) {
        if (!attachments || attachments.length === 0 || attachments[0].id === 'no_attachments') {
            return `
                <div class="loadout-item loadout-attachments">
                    <strong>${title}:</strong><br>
                    <span style="color: #888;">${l.noAttachments}</span>
                </div>
            `;
        }
        
        const grouped = groupAttachmentsByCategory(attachments);
        const categories = Object.keys(grouped);
        
        categories.sort((a, b) => {
            const indexA = l.categoryOrder.indexOf(a);
            const indexB = l.categoryOrder.indexOf(b);
            
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.localeCompare(b);
        });
        
        let html = `<div class="loadout-item loadout-attachments"><strong>${title}:</strong><br>`;
        let hasContent = false;
        
        for (const category of categories) {
            if (grouped[category] && grouped[category].length > 0) {
                hasContent = true;
                const categoryName = l.categoryNames[category] || category;
                html += `<div style="margin: 5px 0 5px 15px;">
                    <span style="color: #ff8c00; font-size: 0.9rem;">${categoryName}:</span><br>
                    ${grouped[category].map(a => `&nbsp;&nbsp;• ${a.name}`).join('<br>')}
                </div>`;
            }
        }
        
        html += '</div>';
        return hasContent ? html : `
            <div class="loadout-item loadout-attachments">
                <strong>${title}:</strong><br>
                <span style="color: #888;">${l.noAttachments}</span>
            </div>
        `;
    }
    
    let primaryData = displayData.primary;
    let secondaryData = displayData.secondary;
    
    if (primaryData && (primaryData.category === 'P' || primaryData.category === 'S')) {
        if (secondaryData && secondaryData.category !== 'P' && secondaryData.category !== 'S') {
            const temp = primaryData;
            primaryData = secondaryData;
            secondaryData = temp;
        }
    }
    
    let primaryHtml = '';
    if (primaryData) {
        primaryHtml = `
            <div class="loadout-item loadout-primary">
                <strong>${l.primary}:</strong> ${primaryData.name}
                <span style="color: #888; font-size: 0.8rem; margin-left: 10px;">
                    (${l.category}: ${primaryData.categoryName})
                </span>
                <span style="color: #ff8c00; font-size: 0.8rem; margin-left: 10px;">
                    [${primaryData.attachments ? primaryData.attachments.length : 0}/5]
                </span>
            </div>
        `;
    }
    
    const primaryAttachmentsHtml = renderAttachments(
        primaryData ? primaryData.attachments : null,
        `${l.attachments} (${l.primary.toLowerCase()})`
    );
    
    let secondaryHtml = '';
    if (secondaryData) {
        secondaryHtml = `
            <div class="loadout-item loadout-secondary">
                <strong>${l.secondary}:</strong> ${secondaryData.name}
                <span style="color: #888; font-size: 0.8rem; margin-left: 10px;">
                    (${l.category}: ${secondaryData.categoryName})
                </span>
                <span style="color: #ff8c00; font-size: 0.8rem; margin-left: 10px;">
                    [${secondaryData.attachments ? secondaryData.attachments.length : 0}/5]
                </span>
            </div>
        `;
    }
    
    const secondaryAttachmentsHtml = renderAttachments(
        secondaryData ? secondaryData.attachments : null,
        `${l.secondaryAttachments} (${l.secondary.toLowerCase()})`
    );
    
    let finalHtml = '';
    finalHtml += primaryHtml;
    finalHtml += primaryAttachmentsHtml;
    finalHtml += secondaryHtml;
    finalHtml += secondaryAttachmentsHtml;
    
    display.innerHTML = finalHtml;
}

// ============================================
// ФУНКЦИЯ ДЛЯ ОТЛАДКИ ВЕСОВ КАТЕГОРИЙ
// ============================================

function debugCategoryWeights(iterations = 100) {
    const results = {};
    const categories = Object.keys(WEAPONS);
    
    // Инициализируем счетчики
    for (const cat of categories) {
        results[cat] = 0;
    }
    
    // Симулируем выбор категорий
    for (let i = 0; i < iterations; i++) {
        const category = getRandomCategoryWithWeight();
        if (category) {
            results[category]++;
        }
    }
    
    console.log(`=== РАСПРЕДЕЛЕНИЕ КАТЕГОРИЙ (${iterations} итераций) ===`);
    for (const cat of categories) {
        const count = results[cat] || 0;
        const percentage = ((count / iterations) * 100).toFixed(1);
        const bar = '█'.repeat(Math.round(count / (iterations / 50)));
        console.log(`  ${cat}: ${count} (${percentage}%) ${bar}`);
    }
    console.log('====================================');
}

// ============================================
// ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

function debugCompatibility(weaponName) {
    const category = getWeaponCategory(weaponName);
    if (!category) {
        console.log(`Оружие "${weaponName}" не найдено!`);
        return;
    }
    
    const allAttachments = getAllAttachments();
    const compatible = allAttachments.filter(att => 
        isAttachmentCompatible(att, category, weaponName)
    );
    
    const withRequirements = compatible.filter(att => att.requires);
    const withConflicts = compatible.filter(att => att.conflicts);
    const withoutRequirements = compatible.filter(att => !att.requires && !att.conflicts);
    
    console.log(`=== ${weaponName} (${category}) ===`);
    console.log(`Всего совместимых модулей: ${compatible.length}`);
    console.log(`Модулей с зависимостями: ${withRequirements.length}`);
    console.log(`Модулей с конфликтами: ${withConflicts.length}`);
    console.log(`Обычных модулей: ${withoutRequirements.length}`);
    console.log('====================================');
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generateRandomClass, 
        displayLoadout,
        debugCompatibility,
        debugCategoryWeights,
        getRandomWeaponFromCategory,
        getRandomCategory,
        getRandomCategoryWithWeight,
        CATEGORY_WEIGHTS
    };
}