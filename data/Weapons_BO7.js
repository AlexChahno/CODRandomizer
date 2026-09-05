// ============================================
// WEAPONS DATA - Call of Duty: Black Ops 7
// ============================================

window.WEAPONS_BO7 = {
    // === ASSAULT RIFLES (AR) ===
    AR: {
        name: 'Assault Rifles',
        short: 'AR',
        weapons: [
            'AN-94',
            'VX Compact',
            'MK35 ISR',
            'Voyak KT-3',
            'EGRT-17',
            'Maddox RFB',
            'M15 MOD 0',
            'AK-27',
            'MXR-17',
            'X9 Maverick',
            'DS20 Mirage',
            'Peacekeeper Mk1'
        ]
    },
    
    // === SUBMACHINE GUNS (SMG) ===
    SMG: {
        name: 'Submachine Guns',
        short: 'SMG',
        weapons: [
            'CBRS-3',
            'VST',
            'REV-46',
            'Sturmwolf 45',
            'Kogot-7',
            'Ryden 45K',
            'RK-9',
            'Razor 9mm',
            'Dravec 45',
            'Carbon 57',
            'MPC-25'
        ]
    },
    
    // === SHOTGUNS (SG) ===
    SG: {
        name: 'Shotguns',
        short: 'SG',
        weapons: [
            'SG-12',
            'M10 Breacher',
            'Echo 12',
            'Akita'
        ]
    },
    
    // === LIGHT MACHINE GUNS (LMG) ===
    LMG: {
        name: 'Light Machine Guns',
        short: 'LMG',
        weapons: [
            'Sokol 545',
            'Mk.78',
            'XM325'
        ]
    },
    
    // === MARKSMAN RIFLES (MMR) ===
    MMR: {
        name: 'Marksman Rifles',
        short: 'MMR',
        weapons: [
            'KRS-7.62',
            'Swordfish A1',
            'M8A1',
            'Warden 308',
            'M34 Novaline'
        ]
    },
    
    // === SNIPER RIFLES (SR) ===
    SR: {
        name: 'Sniper Rifles',
        short: 'SR',
        weapons: [
            'Strider 300',
            'Hawker HX',
            'VS Recon',
            'Shadow SK',
            'XR-3 ION'
        ]
    },
    
    // === PISTOLS (P) ===
    P: {
        name: 'Pistols',
        short: 'P',
        weapons: [
            '1911',
            'Jäger 45',
            'Velox 5.7',
            'CODA 9'
        ]
    },
    
    // === GRENADE LAUNCHERS (GL) ===
    GL: {
        name: 'Grenade Launchers',
        short: 'GL',
        weapons: [
            'AAROW 109',
            'A.R.C. M1'
        ]
    },
    
    // === SPECIAL (S) ===
    S: {
        name: 'Special Weapons',
        short: 'S',
        weapons: [
            'Grimhawk',
            'Siren',
            'GDL Havoc',
            'NX Ravager'
        ]
    }
};

// Функция для получения всех оружий из категории
function getWeaponsByCategoryBO7(category) {
    return window.WEAPONS_BO7[category] ? window.WEAPONS_BO7[category].weapons : [];
}

// Функция для получения всех оружий из всех категорий
function getAllWeaponsBO7() {
    const all = {};
    for (const category in window.WEAPONS_BO7) {
        all[category] = window.WEAPONS_BO7[category].weapons;
    }
    return all;
}

// Функция для получения категории оружия по его названию
function getWeaponCategoryBO7(weaponName) {
    for (const category in window.WEAPONS_BO7) {
        if (window.WEAPONS_BO7[category].weapons.includes(weaponName)) {
            return category;
        }
    }
    return null;
}

// Альтернативная функция getWeaponCategory (без BO7 для совместимости с ATTACHMENTS_BO7)
function getWeaponCategory(weaponName) {
    return getWeaponCategoryBO7(weaponName);
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        WEAPONS_BO7: window.WEAPONS_BO7,
        getWeaponsByCategoryBO7, 
        getAllWeaponsBO7, 
        getWeaponCategoryBO7,
        getWeaponCategory
    };
}