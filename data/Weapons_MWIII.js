// ============================================
// WEAPONS DATA - Modern Warfare III (2023)
// ============================================

window.WEAPONS_MWIII = {
    // === ASSAULT RIFLES (AR) ===
    AR: {
        name: 'Assault Rifles',
        short: 'AR',
        weapons: [
            'STG44',
            'BAL-27',
            'MTZ-556',
            'RAM-7',
            'BP50',
            'SVA 545',
            'Holger 556',
            'MCW',
            'DG-56',
            'FR 5.56'
        ]
    },
   
    // === BATTLE RIFLES (BR) ===
    BR: {
        name: 'Battle Rifles',
        short: 'BR',
        weapons: [
            'DTIR 30-06',
            'SOA Subverter',
            'BAS-B',
            'Sidewinder',
            'MTZ-762'
        ]
    },

    // === SUBMACHINE GUNS (SMG) ===
    SMG: {
        name: 'Submachine Guns',
        short: 'SMG',
        weapons: [
            'Superi 46',
            'FJX Horus',
            'Static-HV',
            'RAM-9',
            'AMR9',
            'Rival-9',
            'HRM-9',
            'Striker 9',
            'Striker',
            'WSP-9',
            'WSP Swarm'
        ]
    },
    
    // === SHOTGUNS (SG) ===
    SG: {
        name: 'Shotguns',
        short: 'SG',
        weapons: [
            'Reclaimer 18',
            'Lockwood 680',
            'Haymaker',
            'Riveter'
        ]
    },
    
    // === LIGHT MACHINE GUNS (LMG) ===
    LMG: {
        name: 'Light Machine Guns',
        short: 'LMG',
        weapons: [
            'Bruen Mk9',
            'Kastov LSW',
            'TAQ Evolvere',
            'Pulemyot 762',
            'DG-58 LSW',
            'TAQ Eradicator',
            'Holger 26'
        ]
    },
    
    // === MARKSMAN RIFLES (MMR) ===
    MMR: {
        name: 'Marksman Rifles',
        short: 'MMR',
        weapons: [
            'Kar98k',
            'KVD Enforcer',
            'MCW 6.8',
            'DM56',
            'MTZ Interceptor'
        ]
    },
    
    // === SNIPER RIFLES (SR) ===
    SR: {
        name: 'Sniper Rifles',
        short: 'SR',
        weapons: [
            'MORS',
            'XRK Stalker',
            'KATT-AMR',
            'Longbow',
            'KV Inhibitor'
        ]
    },
    
    // === PISTOLS (P) ===
    P: {
        name: 'Pistols',
        short: 'P',
        weapons: [
            'Renetti',
            'TYR',
            'WSP Stinger'
        ]
    },
    
    // === LAUNCHERS (GL) ===
    GL: {
        name: 'Grenade Launchers',
        short: 'GL',
        weapons: [
            'RGL-80',
            'Stormender',
            'Spear',
            'Torque 35'
        ]
    }
};

// Функция для получения всех оружий из категории
function getWeaponsByCategoryMWIII(category) {
    return window.WEAPONS_MWIII[category] ? window.WEAPONS_MWIII[category].weapons : [];
}

// Функция для получения всех оружий из всех категорий
function getAllWeaponsMWIII() {
    const all = {};
    for (const category in WEAPONS_MWIII) {
        all[category] = window.WEAPONS_MWIII[category].weapons;
    }
    return all;
}

// Функция для получения категории оружия по его названию
function getWeaponCategoryMWIII(weaponName) {
    for (const category in WEAPONS_MWIII) {
        if (window.WEAPONS_MWIII[category].weapons.includes(weaponName)) {
            return category;
        }
    }
    return null;
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        WEAPONS_MWIII, 
        getWeaponsByCategoryMWIII, 
        getAllWeaponsMWIII, 
        getWeaponCategoryMWIII
    };
}