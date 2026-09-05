// ============================================
// ОБЩИЕ ПЕРЕВОДЫ (для всех игр)
// ============================================

window.WEAPON_TRANSLATIONS = {
    // Если названия оружия совпадают во всех играх, можно их указать здесь.
    // Например:
    // 'AK-74': 'АК-74',
    // 'M4': 'M4',
    // Но лучше оставить пустым, если переводы уже есть в игровых файлах.
};

window.WEAPON_CATEGORY_TRANSLATIONS = {
    'Assault Rifles': 'Штурмовые винтовки',
    'Battle Rifles': 'Боевые винтовки',
    'Submachine Guns': 'Пистолеты-пулеметы',
    'Shotguns': 'Дробовики',
    'Light Machine Guns': 'Ручные пулеметы',
    'Marksman Rifles': 'Пехотные винтовки',
    'Sniper Rifles': 'Снайперские винтовки',
    'Pistols': 'Пистолеты',
    'Grenade Launchers': 'Гранатометы',
    'Special Weapons': 'Особое'
};

// ============================================
// ОБЩИЕ ФУНКЦИИ ПЕРЕВОДА
// ============================================

function translateWeaponName(name) {
    if (!name) return name;
    // Если перевод есть в общем словаре, используем его,
    // иначе возвращаем оригинал (он будет переведён в игровых файлах)
    return window.WEAPON_TRANSLATIONS[name] || name;
}

function translateWeaponCategory(name) {
    if (!name) return name;
    return window.WEAPON_CATEGORY_TRANSLATIONS[name] || name;
}

function translateAttachmentName(name) {
    if (!name) return name;
    // Переводы модулей находятся в игровых файлах, поэтому здесь просто возвращаем оригинал.
    // В Warzone перевод модулей выполняется через функцию translateAttachments из script.js.
    return name;
}

// Делаем функции глобальными
window.translateWeaponName = translateWeaponName;
window.translateWeaponCategory = translateWeaponCategory;
window.translateAttachmentName = translateAttachmentName;

// Экспорт для Node.js (если используется)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WEAPON_TRANSLATIONS: window.WEAPON_TRANSLATIONS,
        WEAPON_CATEGORY_TRANSLATIONS: window.WEAPON_CATEGORY_TRANSLATIONS,
        translateWeaponName,
        translateWeaponCategory,
        translateAttachmentName
    };
}