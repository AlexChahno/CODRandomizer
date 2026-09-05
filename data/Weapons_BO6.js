// ============================================
// WEAPONS DATA - Call of Duty: Black Ops 6
// ============================================

window.WEAPONS_BO6 = {
    // === ASSAULT RIFLES (AR) ===
    AR: {
        name: 'Assault Rifles',
        short: 'AR',
        weapons: [
            'XM4',
            'AK-74',
            'AMES 85',
            'GPR 91',
            'Model L',
            'Goblin Mk2',
            'AS VAL',
            'Krig C',
            'Cypher 091',
            'Kilo 141',
            'CR-56 AMAX',
            'FFAR 1',
            'ABR A1',
            'Merrick 556'
        ]
    },
    
    // === SUBMACHINE GUNS (SMG) ===
    SMG: {
        name: 'Submachine Guns',
        short: 'SMG',
        weapons: [
            'C9',
            'KSV',
            'Tanto .22',
            'PP-919',
            'Jackal PDW',
            'Kompakt 92',
            'Saug',
            'PPSh-41',
            'Ladra',
            'LC10',
            'Dresden 9mm'
        ]
    },
    
    // === SHOTGUNS (SG) ===
    SG: {
        name: 'Shotguns',
        short: 'SG',
        weapons: [
            'Marine SP',
            'ASG-89',
            'Maelstrom'
        ]
    },
    
    // === LIGHT MACHINE GUNS (LMG) ===
    LMG: {
        name: 'Light Machine Guns',
        short: 'LMG',
        weapons: [
            'PU-21',
            'XMG',
            'GPMG-7',
            'Feng 82',
            'PML 5.56'
        ]
    },
    
    // === MARKSMAN RIFLES (MMR) ===
    MMR: {
        name: 'Marksman Rifles',
        short: 'MMR',
        weapons: [
            'SWAT 5.56',
            'Tsarkov 7.62',
            'AEK-973',
            'DM-10',
            'TR2',
            'Essex Model 07'
        ]
    },
    
    // === SNIPER RIFLES (SR) ===
    SR: {
        name: 'Sniper Rifles',
        short: 'SR',
        weapons: [
            'LW3A1 Frostline',
            'SVD',
            'LR 7.62',
            'AMR Mod 4',
            'HDR'
        ]
    },
    
    // === PISTOLS (P) ===
    P: {
        name: 'Pistols',
        short: 'P',
        weapons: [
            '9mm PM',
            'Grekhova',
            'GS45',
            'Gravemark .357',
            'Stryder .22'
        ]
    },
    
    // === GRENADE LAUNCHERS (GL) ===
    GL: {
        name: 'Grenade Launchers',
        short: 'GL',
        weapons: [
            'CIGMA 2B',
            'HE-1'
        ]
    },
    
    // === SPECIAL (S) ===
    S: {
        name: 'Special Weapons',
        short: 'S',
        weapons: [
            'Sirin 9mm',
            'D1.3 Sector',
            'Nail Gun',
            'Olympia',
            'X52 Resonator'
        ]
    }
};

// Функция для получения всех оружий из категории
function getWeaponsByCategoryBO6(category) {
    return window.WEAPONS_BO6[category] ? window.WEAPONS_BO6[category].weapons : [];
}

// Функция для получения всех оружий из всех категорий
function getAllWeapons() {
    const all = {};
    for (const category in WEAPONS) {
        all[category] = WEAPONS[category].weapons;
    }
    return all;
}

// Функция для получения категории оружия по его названию
function getWeaponCategory(weaponName) {
    for (const category in WEAPONS) {
        if (WEAPONS[category].weapons.includes(weaponName)) {
            return category;
        }
    }
    return null;
}

window.getWeaponCategory = getWeaponCategory;

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEAPONS, getWeaponsByCategory, getAllWeapons, getWeaponCategory };
}