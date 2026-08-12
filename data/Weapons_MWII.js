// ============================================
// WEAPONS DATA - Modern Warfare II (2022)
// ============================================

window.WEAPONS_MWII = {
    // === ASSAULT RIFLES (AR) ===
    AR: {
        name: 'Assault Rifles',
        short: 'AR',
        weapons: [
            'TAQ-56',
            'M4',
            'STB 556',
            'Kastov 762',
            'M13B',
            'Chimera',
            'ISO Hemlock',
            'Tempus Razorback',
            'FR Avancer',
            'M13C',
            'TR-76 Geist',
            'Lachmann-556',
            'M16',
            'Kastov-74u',
            'Kastov 545'
        ]
    },

    // === BATTLE RIFLES (BR) ===
    BR: {
        name: 'Battle Rifles',
        short: 'BR',
        weapons: [
            'Lachmann-762',
            'Cronen Squall',
            'FTAC Recon',
            'TAQ-V',
            'SO-14'
        ]
    },

    // === SUBMACHINE GUNS (SMG) ===
    SMG: {
        name: 'Submachine Guns',
        short: 'SMG',
        weapons: [
            'Lachmann Shroud',
            'ISO 45',
            'ISO 9mm',
            'PDSW 528',
            'VEL 46',
            'Fennec 45',
            'BAS-P',
            'Lachmann Sub',
            'FSS Hurricane',
            'MX9',
            'Minibak',
            'Vaznev-9K'
        ]
    },
    
    // === SHOTGUNS (SG) ===
    SG: {
        name: 'Shotguns',
        short: 'SG',
        weapons: [
            'KV Broadside',
            'Lockwood 300',
            'Expedite 12',
            'Bryson 800',
            'MX Guardian',
            'Bryson 890'
        ]
    },
    
    // === LIGHT MACHINE GUNS (LMG) ===
    LMG: {
        name: 'Light Machine Guns',
        short: 'LMG',
        weapons: [
            'RAAL MG',
            'RPK',
            'SAKIN MG38',
            '556 Icarus',
            'RAPP H',
            'HCR 56',
        ]
    },
    
    // === MARKSMAN RIFLES (MMR) ===
    MMR: {
        name: 'Marksman Rifles',
        short: 'MMR',
        weapons: [
            'EBR-14',
            'SP-R 208',
            'Lockwood Mk2',
            'Tempus Torrent',
            'Crossbow',
            'LM-S',
            'SA-B 50',
            'TAQ-M'
        ]
    },
    
    // === SNIPER RIFLES (SR) ===
    SR: {
        name: 'Sniper Rifles',
        short: 'SR',
        weapons: [
            'MCPR-300',
            'Signal 50',
            'Victus XMR',
            'FJX Imperium',
            'Carrack .300',
            'LA-B 330',
            'SP-X 80'
        ]
    },
    
    // === PISTOLS (P) ===
    P: {
        name: 'Pistols',
        short: 'P',
        weapons: [
            'P890',
            '.50 GS',
            'X12',
            'Basilisk',
            'FTAC Siege',
            'GS Magna',
            '9mm Daemon',
            'X13 Auto'
        ]
    },
    
    // === LAUNCHERS (GL) ===
    GL: {
        name: 'Grenade Launchers',
        short: 'GL',
        weapons: [
            'JOKR',
            'RPG-7',
            'PILA',
            'STRELA-P'
        ]
    },
};

// Функция для получения всех оружий из категории
function getWeaponsByCategoryMWII(category) {
    return window.WEAPONS_MWII[category] ? window.WEAPONS_MWII[category].weapons : [];
}

// Функция для получения всех оружий из всех категорий
function getAllWeaponsMWII() {
    const all = {};
    for (const category in window.WEAPONS_MWII) {
        all[category] = WEAPONS_MWII[category].weapons;
    }
    return all;
}

// Функция для получения категории оружия по его названию
function getWeaponCategoryMWII(weaponName) {
    for (const category in window.WEAPONS_MWII) {
        if (WEAPONS_MWII[category].weapons.includes(weaponName)) {
            return category;
        }
    }
    return null;
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        WEAPONS_MWII, 
        getWeaponsByCategoryMWII, 
        getAllWeaponsMWII, 
        getWeaponCategoryMWII
    };
}