// ============================================
// ATTACHMENTS DATA - Black Ops 6
// ============================================

window.ATTACHMENTS_BO6 = {
    // === OPTICS ===
    optics: {
        name: 'Optics',
        category: 'optics',
        items: [
            { id: 'remuda_mini_reflex', name: 'Remuda Mini Reflex', compatibility: ['AR', 'SMG', 'P'] },
            { id: 'otero_micro_dot', name: 'Otero Micro Dot', compatibility: ['AR', 'SMG', 'P'] },
            { id: 'kepler_microreflex', name: 'Kepler Microflex', compatibility: 'all', exclude: ['GL', 'S'] },
            { id: 'merlin_mini', name: 'Merlin Mini', compatibility: ['AR', 'SMG', 'P'] },
            { id: 'prismatech_reflex', name: 'PrismaTech Reflex', compatibility: 'all', exclude: ['P', 'GL', 'S'] },
            { id: 'volzhskiy_reflex', name: 'Volzhskiy Reflex', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR'] },
            { id: 'merlin_reflex', name: 'Merlin Reflex', compatibility: ['AR', 'SMG', 'LMG'] },
            { id: 'redwell_reflex', name: 'Redwell Reflex', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'dobrych_mf_reflex', name: 'Dobrych MF Reflex', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR'] },
            { id: 'accu_spot_reflex', name: 'Accu-Spot Reflex', compatibility: ['P', 'AR', 'SMG'] },
            { id: 'k&s_red_dot', name: 'K&S Red Dot', compatibility: 'all', exclude: ['P', 'GL', 'S'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'kepler_red_dot', name: 'Kepler Red Dot', compatibility: 'all', exclude: ['P', 'GL', 'S'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'otero_red_dot', name: 'Otero Red Dot', compatibility: 'all', exclude: ['P', 'GL', 'S'], conflicts: {'SR': ['tactical_laser'] } },
            { id: '0m3_92_holo', name: '0M3 92 Holo', compatibility: 'all', exclude: ['P', 'GL', 'S'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'pinpoint_holoscout', name: 'Pinpoint Holoscout', compatibility: ['AR', 'SMG', 'LMG', 'MMR'] },
            { id: 'accu_spot_ultra_holo', name: 'Accu-Spot Ultra Holo', compatibility: 'all', exclude: ['P', 'GL', 'S'] },
            { id: 'jason_armory_2x', name: 'Jason Armory 2x', compatibility: 'all', exclude: ['SR', 'P', 'GL', 'S'] },
            { id: 'willis_3x', name: 'Willis 3x', compatibility: 'all', exclude: ['P', 'GL', 'S'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'prismatech_4x', name: 'PrismaTech 4x', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'dobrych_4x', name: 'Dobrych 4x', compatibility: ['AR', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'pinpoint_hybrid', name: 'Pinpoint Hybrid', compatibility: 'all', exclude: ['P', 'GL', 'S'] },
            { id: 'prismapoint_hybrid', name: 'PrismaPoint Hybrid', compatibility: ['AR', 'LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'hawker_hybrid', name: 'Hawker Hybrid', compatibility: ['AR'] },
            { id: 'otero_thermal_2x', name: 'Otero Thermal 2x', compatibility: 'all', exclude: ['SG', 'P', 'GL', 'S'] },
            { id: 'r&k_multizoom', name: 'R&K Multizoom', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'blandwell_7x_scope', name: 'Blandwell 7x Scope', compatibility: ['AR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'vmf_variable_scope', name: 'VMF Variable Scope', compatibility: ['SMG', 'LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'k&s_thermal_holo', name: 'K&S Thermal Holo', compatibility: ['SMG', 'SG', 'LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'remuda_range_finder', name: 'Remuda Range Finder', compatibility: ['LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'remuda_dual_zoom', name: 'Remuda Dual Zoom', compatibility: ['MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'redwell_custom_zoom', name: 'Redwell Custom Zoom', compatibility: ['LMG', 'MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'thermal_6x', name: 'Thermal 6x', compatibility: ['MMR', 'SR'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'kepler_pistol_scope', name: 'Kepler Pistol Scope', compatibility: ['P'] },
            { id: 'iron_sight', name: 'Iron Sight', compatibility: ['ABR A1', 'SR', 'DM-10', 'Sirin 9mm'], conflicts: {'SR': ['tactical_laser'] } },
            { id: 'svd_scope', name: 'SVD Scope', compatibility: ['AS VAL', 'Tsarkov 7.62'] },
            { id: 'carry_handle_sight', name: 'Carry Handle Sight', compatibility: ['Sirin 9mm'] }
        ]
    },

    muzzles: {
        name: 'Muzzles',
        category: 'muzzles',
        items: [
            { id: 'suppressor', name: 'Suppressor', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P', 'Sirin 9mm'], exclude: ['AS VAL', 'Gravemark .357', 'GL', 'S'] },
            { id: 'compensator', name: 'Compensator', compatibility: 'all', exclude: ['AS VAL', 'SG', 'GL', 'S'] },
            { id: 'muzzle_brake', name: 'Muzzle Brake', compatibility: 'all', exclude: ['AS VAL', 'GL', 'S'] },
            { id: 'ported_compensator', name: 'Ported Compensator', compatibility: 'all', exclude: ['AS VAL', 'SG', 'GL', 'S'] },
            { id: 'monolithic_suppressor', name: 'Monolithic Suppressor', compatibility: 'all', exclude: ['AS VAL', 'Gravemark .357', 'GL', 'S'] },
            { id: 'modified_choke', name: 'Modified Choke', compatibility: ['SG'], conflicts: ['slug'] },
            { id: 'full_choke', name: 'Full Choke', compatibility: ['SG'] },
            { id: 'gpmg7_muzzle_booster', name: 'GPMG-7 Muzzle Booster', compatibility: ['GPMG-7'] }
        ]
    },
    
    barrels: {
        name: 'Barrels',
        category: 'barrels',
        items: [
            { id: 'gain_twist_barrel', name: 'Gain-Twist Barrel', compatibility: 'all', exclude: ['Marine SP', 'GL', 'S'] },
            { id: 'long_barrel', name: 'Long Barrel', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P', 'Sirin 9mm', 'D1.3 Sector'] },
            { id: 'reinforced_barrel', name: 'Reinforced Barrel', compatibility: 'all', exclude: ['GL', 'S'] },
            { id: 'short_barrel', name: 'Short Barrel', compatibility: 'all',  exclude: ['AS VAL', 'Marine SP', 'GL', 'S'], conflicts: {'Kilo 141': ['category:muzzle'], 'HDR': ['category:muzzle'] } },
            { id: 'chf_barrel', name: 'CHF Barrel', compatibility: 'all', exclude: ['Marine SP', 'GL', 'S'], conflicts: {'HDR': ['category:muzzle'] } },
            { id: 'double_barrel_conversion', name: 'Double-Barrel Conversion', compatibility: ['GPR 91'], conflicts: ['category:muzzle'], isConversion: true },
            { id: 'integrated_suppressor_barrel', name: 'Integrated Suppressor Barrel', compatibility: ['Kompakt 92'] },
            { id: 'heavy_barrel', name: 'Heavy Barrel', compatibility: ['Marine SP'] },
            { id: 'combat_barrel', name: 'Combat Barrel', compatibility: ['Marine SP'] },
            { id: 'quick_load_barrel', name: 'Quick Load Barrel', compatibility: ['Marine SP'] },
            { id: 'skull_splitter_barrel', name: 'Skull Splitter Barrel', compatibility: ['9mm PM'], conflicts: ['extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'fast_mag_ii'], isConversion: true },
            { id: 'short_barrel_olympia', name: 'Short Barrel', compatibility: ['Olympia'] }
        ]
    },

    shards: {
        name: 'Shards',
        category: 'shards',
        items: [
            { id: 'spiked_barrage_shard', name: 'Spiked Barrage Shard', compatibility: ['X52 Resonator'] },
            { id: 'orbed_eruption_shard', name: 'Orbed Eruption Shard', compatibility: ['X52 Resonator'] },
            { id: 'stone_escalation_shard', name: 'Stone Escalation Shard', compatibility: ['X52 Resonator'] }
        ]
    },

    underbarrels: {
        name: 'Underbarrels',
        category: 'underbarrels',
        items: [
            { id: 'vertical_foregrip', name: 'Vertical Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'AEK-973', 'SWAT 5.56', 'TR2', 'Sirin 9mm', 'HDR'], exclude: ['PP-919', 'Dresden 9mm', 'P', 'GL', 'S'] },
            { id: 'lightweight_foregrip', name: 'Lightweight Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'AEK-973', 'SWAT 5.56', 'TR2', 'Sirin 9mm'], exclude: ['PP-919', 'Dresden 9mm', 'P', 'GL', 'S'] },
            { id: 'marksman_foregrip', name: 'Marksman Foregrip', compatibility: ['AR', 'SMG', 'LMG', 'AEK-973', 'SWAT 5.56', 'TR2'], exclude: ['PP-919', 'Dresden 9mm', 'P', 'GL', 'S'] },
            { id: 'precision_foregrip', name: 'Precision Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'AEK-973', 'SWAT 5.56', 'TR2', 'HDR'], exclude: ['PP-919', 'Dresden 9mm', 'P', 'GL', 'S'] },
            { id: 'ranger_foregrip', name: 'Ranger Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'AEK-973', 'SWAT 5.56', 'TR2', 'HDR'], exclude: ['PP-919', 'Dresden 9mm', 'P', 'GL', 'S'] },
            { id: 'g_grip', name: 'G-Grip', compatibility: ['AR', 'SMG'], exclude: ['PP-919', 'Dresden 9mm', 'P', 'GL', 'S'], conflicts: ['category:laser'] },
            { id: 'launcher_st', name: 'Launcher - Standard', compatibility: ['AR', 'AEK-973', 'SWAT 5.56'] },
            { id: 'launcher_sm', name: 'Launcher - Smoke', compatibility: ['AR', 'AEK-973', 'SWAT 5.56'] },
            { id: 'launcher_he', name: 'Launcher - High Explosive', compatibility: ['AR', 'AEK-973', 'SWAT 5.56'] },
            { id: 'launcher_dc', name: 'Launcher - Drill Charge', compatibility: ['AR', 'AEK-973', 'SWAT 5.56'] },
            { id: 'crossbow', name: 'Crossbow', compatibility: ['AR', 'ASG-89', 'AEK-973', 'SWAT 5.56'] },
            { id: 'crossbar', name: 'Crossbar', compatibility: ['LMG', 'D1.3 Sector'], conflicts: ['tactical_laser', 'strelok_laser'] },
            { id: 'vertical_handguard', name: 'Vertical Handguard', compatibility: ['Tsarkov 7.62', 'DM-10', 'Essex Model 07', 'LR 7.62', 'SVD'] },
            { id: 'lightweight_handguard', name: 'Lightweight Handguard', compatibility: ['Tsarkov 7.62', 'DM-10', 'Essex Model 07', 'LR 7.62', 'SVD'] },
            { id: 'marksman_handguard', name: 'Marksman Handguard', compatibility: ['Tsarkov 7.62', 'DM-10', 'Essex Model 07', 'LR 7.62', 'SVD'] },
            { id: 'precision_handguard', name: 'Precision Handguard', compatibility: ['Tsarkov 7.62', 'DM-10', 'Essex Model 07', 'LR 7.62', 'SVD'] },
            { id: 'ranger_handguard', name: 'Ranger Handguard', compatibility: ['Tsarkov 7.62', 'DM-10', 'Essex Model 07', 'LR 7.62', 'SVD'] },
            { id: 'lightweight_bipod', name: 'Lightweight Bipod', compatibility: ['HDR'] },
            { id: 'marksman_bipod', name: 'Marksman Bipod', compatibility: ['HDR'] }
        ]
    },
    
    stockPads: {
        name: 'Stock Pads',
        category: 'stockPads',
        items: [
            { id: 'weighted_pad', name: 'Weighted Pad', compatibility: ['AMR Mod 4'] },
            { id: 'lightweight_pad', name: 'Lightweight Pad', compatibility: ['AMR Mod 4'] },
            { id: 'marksman_pad', name: 'Marksman Pad', compatibility: ['AMR Mod 4'] },
            { id: 'precision_pad', name: 'Precision Pad', compatibility: ['AMR Mod 4'] },
            { id: 'rangern_pad', name: 'Ranger Pad', compatibility: ['AMR Mod 4'] }
        ]
    },

    rearGrips: {
        name: 'Rear Grips',
        category: 'rearGrips',
        items: [
            { id: 'quickdraw_grip', name: 'Quickdraw Grip', compatibility: 'all', exclude: ['Merrick 556', 'PPSh-41', 'Marine SP', 'Essex Model 07', 'LW3A1 Frostline', 'ABR A1', 'SVD', 'GL', 'S'] },
            { id: 'assault_grip', name: 'Assault Grip', compatibility: 'all', exclude: ['Merrick 556', 'PPSh-41', 'Marine SP', 'Essex Model 07', 'LW3A1 Frostline', 'ABR A1', 'SVD', 'GL', 'S'] },
            { id: 'commando_grip', name: 'Commando Grip', compatibility: 'all', exclude: ['Merrick 556', 'PPSh-41', 'Marine SP', 'Essex Model 07', 'LW3A1 Frostline', 'ABR A1', 'SVD', 'GL', 'S'] },
            { id: 'ergonomic_grip', name: 'Ergonomic Grip', compatibility: 'all', exclude: ['Merrick 556', 'PPSh-41', 'Marine SP', 'Essex Model 07', 'LW3A1 Frostline', 'ABR A1', 'SVD', 'GL', 'S'] },
            { id: 'cqb_grip', name: 'CQB Grip', compatibility: 'all', exclude: ['Merrick 556', 'PPSh-41', 'Marine SP', 'Essex Model 07', 'LW3A1 Frostline', 'ABR A1', 'SVD', 'GL', 'S'] }
        ]
    },
    
    levers: {
        name: 'Lever',
        category: 'levers',
        items: [
            { id: 'quickdraw_lever', name: 'Quickdraw Lever', compatibility: ['Essex Model 07'] },
            { id: 'assault_lever', name: 'Assault Lever', compatibility: ['Essex Model 07'] },
            { id: 'commando_lever', name: 'Commando Lever', compatibility: ['Essex Model 07'] },
            { id: 'ergonomic_lever', name: 'Ergonomic Lever', compatibility: ['Essex Model 07'] },
            { id: 'cqb_lever', name: 'CQB Lever', compatibility: ['Essex Model 07'] }
        ]
    },

    combs: {
        name: 'Combs',
        category: 'combs',
        items: [
            { id: 'quickdraw_riser', name: 'Quickdraw Riser', compatibility: ['LW3A1 Frostline', 'SVD', 'ABR A1'] },
            { id: 'combat_riser', name: 'Combat Riser', compatibility: ['LW3A1 Frostline', 'SVD', 'ABR A1'] },
            { id: 'commando_riser', name: 'Commando Riser', compatibility: ['LW3A1 Frostline', 'SVD', 'ABR A1'] },
            { id: 'ergonomic_riser', name: 'Ergonomic Riser', compatibility: ['LW3A1 Frostline', 'SVD', 'ABR A1'] },
            { id: 'cqb_riser', name: 'CQB Riser', compatibility: ['LW3A1 Frostline', 'SVD', 'ABR A1'] },
            { id: 'light_riser', name: 'Light Riser', compatibility: ['AMR Mod 4'] },
            { id: 'infiltrator_riser', name: 'Infiltrator Riser', compatibility: ['AMR Mod 4'] },
            { id: 'heavy_riser', name: 'Heavy Riser', compatibility: ['AMR Mod 4'] },
            { id: 'balanced_riser', name: 'Balanced Riser', compatibility: ['AMR Mod 4'] },
            { id: 'combat_riser', name: 'Combat Riser', compatibility: ['AMR Mod 4'] }
        ]
    },

    magazines: {
        name: 'Magazines',
        category: 'magazines',
        items: [
            { id: 'extended_mag_i', name: 'Extended Mag I', compatibility: 'all', exclude: ['Gravemark .357', 'Marine SP', 'GL', 'D1.3 Sector', 'Nail Gun', 'Olympia', 'X52 Resonator'] },
            { id: 'extended_mag_ii', name: 'Extended Mag II', compatibility: 'all', exclude: ['Gravemark .357', 'Marine SP', 'PP-919', 'GL', 'S'] },
            { id: 'extended_mag_iii', name: 'Extended Mag III', compatibility: ['XM4', 'AK-74', 'AS VAL', 'Kilo 141', 'Kompakt 92', 'GPMG-7', 'Grekhova'] },
            { id: 'extended_mag_iv', name: 'Extended Mag IV', compatibility: ['GPMG-7'] },
            { id: 'ppsh_41_helical_mag', name: 'PPSh-41 Helical Mag', compatibility: ['PPSh-41'], conflicts: ['category:underbarrel'], isConversion: true },
            { id: 'fast_mag_i', name: 'Fast Mag I', compatibility: 'all', exclude: ['Goblin Mk2', 'CR-56 AMAX', 'Marine SP', 'AS VAL', 'Krig C', 'Kilo 141', 'Maelstrom', 'GPMG-7', 'Essex Model 07', 'GL', 'D1.3 Sector', 'Nail Gun', 'Olympia', 'X52 Resonator'] },
            { id: 'flip_mag', name: 'Flip Mag', compatibility: 'all', exclude: ['Merrick 556', 'PP-919', 'Jackal PDW', 'Ladra', 'Dresden 9mm', 'SG', 'LMG', 'Tsarkov 7.62', 'Essex Model 07', 'SR', 'P', 'GL', 'S'] },
            { id: 'fast_mag_ii', name: 'Fast Mag II', compatibility: ['XM4', 'AK-74', 'Goblin Mk2', 'Krig C', 'Merrick 556', 'PP-919', 'Kompakt 92', 'Ladra', 
                'Dresden 9mm', 'ASG-89', 'PU-21', 'XMG', 'PML 5.56', 'Tsarkov 7.62', 'DM-10', 'SVD', 'LR 7.62', 'AMR MOD 4', 'HDR', '9mm PM', 'GS45', 'Gravemark .357', 'Stryder .22'] },
            { id: 'fast_mag_iii', name: 'Fast Mag III', compatibility: ['PP-919'] },
            { id: 'm_67_10_r_mags', name: 'M-67 10-R Mags', compatibility: ['CR-56 AMAX'] },
            { id: 'c9_10mm_auto', name: 'C9 10mm Auto 30-Round Mags', compatibility: ['C9'], conflicts: ['overpressured', 'fmj'], isConversion: true },
            { id: 'stripper_clip', name: 'Stripper Clip', compatibility: 'Essex Model 07' },
            { id: 'belt_fed', name: 'Belt-Fed', compatibility: ['LMG'] },
            { id: 'explosive_blades', name: 'Explosive Blades', compatibility: ['D1.3 Sector'] },
            { id: 'ricochet_blades', name: 'Ricochet Blades', compatibility: ['D1.3 Sector'] },
            { id: '971_extended_mag_i', name: '5.45 Extended Mag I', compatibility: ['AEK-973'], requires: {'AEK-973': ['aek_971']}, conflicts: ['extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'flip_mag'] },
            { id: 'grau_extended_mag', name: 'Full-Auto Extended Mag', compatibility: ['SWAT 5.56'], weaponRequirements: {'SWAT 5.56': ['grau_auto_mode']}, conflicts: ['extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'flip_mag'] },
            { id: 'tr2_extended_mag', name: 'Full-Auto Extended Mag', compatibility: ['TR2'], requires: {'TR2': ['tr2_cqb_auto']}, conflicts: ['extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'flip_mag'] },
            { id: 'skull_extended_mag', name: 'Skull Splitter Extended Mag', compatibility: ['9mm PM'], requires: {'9mm PM': ['skull_splitter_barrel']}, conflicts: ['extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'fast_mag_ii'] }
        ]
    },

    stocks: {
        name: 'Stocks',
        category: 'stocks',
        items: [
            { id: 'light_stock', name: 'Light Stock', compatibility: 'all', exclude: ['AS VAL', 'Krig C', 'Kilo 141', 'ABR A1', 'C9', 'KSV', 'Tanto .22', 'PP-919', 'Jackal PDW', 'Kompakt 92', 'Ladra', 'LC10', 'Feng 82', 'AMR Mod 4', 'P', 'GL', 'S'] },
            { id: 'infiltrator_stock', name: 'Infiltrator Stock', compatibility: 'all', exclude: ['FFAR 1', 'ABR A1', 'AMR Mod 4', 'P', 'GL', 'S'] },
            { id: 'heavy_stock', name: 'Heavy Stock', compatibility: 'all', exclude: ['AMR Mod 4', 'ABR A1', 'P', 'GL', 'S'], conflicts: {'Dresden 9mm': ['category:rearGrip'] } },
            { id: 'balanced_stock', name: 'Balanced Stock', compatibility: 'all', exclude: ['FFAR 1', 'ABR A1', 'AMR Mod 4', 'P', 'GL', 'S'] },
            { id: 'combat_stock', name: 'Combat Stock', compatibility: 'all', exclude: ['FFAR 1', 'ABR A1', 'AMR Mod 4', 'P', 'GL', 'S'], conflicts: {'HDR': ['category:rearGrip'] } },
            { id: 'buffer_weight_stock', name: 'Buffer Weight Stock', compatibility: ['XM4', 'XMG', 'DM-10'] },
            { id: 'no_stock', name: 'No Stock', compatibility: ['AS VAL', 'Krig C', 'Kilo 141', 'C9', 'KSV', 'Tanto .22', 'PP-919', 'Jackal PDW', 'Kompakt 92', 'Ladra', 'LC10', 'Feng 82'] },
            { id: 'full_stock', name: 'Full Stock', compatibility: ['AS VAL'], conflicts: ['category:rearGrip'] },
            { id: 'balanced_pad', name: 'Balanced Pad', compatibility: ['FFAR 1', 'ABR A1'] },
            { id: 'infiltrator_pad', name: 'Infiltrator Pad', compatibility: ['FFAR 1', 'ABR A1'] },
            { id: 'combat_pad', name: 'Combat Pad', compatibility: ['FFAR 1', 'ABR A1'] },
            { id: 'heavy_pad', name: 'Heavy Pad', compatibility: ['ABR A1'] },
            { id: 'light_pad', name: 'Light Pad', compatibility: ['ABR A1'] },
            { id: 'quickdraw_stock', name: 'Quickdraw Stock', compatibility: ['Merrick 556', 'PPSh-41', 'Marine SP'] },
            { id: 'ergonomic_stock', name: 'Ergonomic Stock', compatibility: ['Merrick 556', 'PPSh-41', 'Marine SP'] },
            { id: 'agility_stock', name: 'Agility Stock', compatibility: ['Merrick 556', 'PPSh-41', 'Marine SP'] },
            { id: 'akimbo', name: 'Akimbo', compatibility: ['Saug', '9mm PM', 'Grekhova', 'GS45', 'Gravemark .357', 'Stryder .22'], conflicts: ['category:optic', 'category:underbarrel', 'tactical_laser', 'strelok_laser', 'target_laser'] },
            { id: 'cut_off_stock', name: 'Cut-Off Stock', compatibility: ['Essex Model 07', 'Olympia'] },
            { id: 'weighted_stock', name: 'Weighted Stock', compatibility: ['Grekhova'], conflicts: ['category:optic'] },
            { id: 'overclocked_stock', name: 'Overclocked Stock', compatibility: ['D1.3 Sector'] }
        ]
    },

    lasers: {
        name: 'Lasers',
        category: 'lasers',
        items: [
            { id: 'tactical_laser', name: 'Tactical Laser', compatibility: 'all', exclude: ['GL', 'S'], conflicts: {'SR': ['category:optic'], 'AR': ['launcher_st', 'launcher_he', 'launcher_sm', 'launcher_dc', 'crossbow'], 'ASG-89': ['crossbow'] } },
            { id: 'steady_aim_laser', name: 'Steady Aim Laser', compatibility: 'all', exclude: ['GL', 'S'] },
            { id: 'strelok_laser', name: 'Strelok Laser', compatibility: 'all', exclude: ['GL', 'S'] },
            { id: 'fast_motion_laser', name: 'Fast Motion Laser', compatibility: 'all', exclude: ['GL', 'S'] },
            { id: 'target_laser', name: 'Target Laser', compatibility: 'all', exclude: ['GL', 'S'] }
        ]
    },
    
    fireMods: {
        name: 'Fire Mods',
        category: 'fireMods',
        items: [
            { id: 'rapid_fire', name: 'Rapid Fire', compatibility: 'all', exclude: ['GL', 'S'] },
            { id: 'overpressured', name: 'Overpressured', compatibility: 'all', exclude: ['SG', 'GL', 'S'], conflicts: {'C9': ['c9_10mm_auto'] } },
            { id: 'recoil_springs', name: 'Recoil Springs', compatibility: 'all', exclude: ['Marine SP', 'LW3A1 Frostline', 'LR 7.62', 'HDR', 'GL', 'S'] },
            { id: 'fmj', name: 'FMJ', compatibility: 'all', exclude: ['SG', 'GL', 'S'], conflicts: {'C9': ['c9_10mm_auto'] } },
            { id: 'slug', name: '12 Gauge Slug', compatibility: ['SG'] },
            { id: 'dragon_breath', name: '12 Gauge Dragons Breath', compatibility: ['SG'], conflicts: ['category:barrel'] },
            { id: 'xm4_burst_mod', name: 'XM4 3-Round Burst Mod', compatibility: ['XM4'], isConversion: true },
            { id: 'mini_rocket_conversion', name: 'Goblin Mk2 7.62 Mini-Rocket Conversion', compatibility: ['Goblin Mk2'], conflicts: ['category:magazine', 'category:barrel', 'category:muzzle'], isConversion: true },
            { id: '10mm_overpressured', name: '10mm Overpressured', compatibility: ['C9'], requires: ['c9_10mm_auto'], isConversion: true },
            { id: '10mm_fmj', name: '10mm FMJ', compatibility: ['C9'], requires: ['c9_10mm_auto'], isConversion: true },
            { id: 'binary_trigger', name: 'Binary Trigger', compatibility: ['Tanto .22'], conflicts: ['category:barrel', 'category:underbarrel'], isConversion: true },
            { id: 'kompakt_92_burst_mod', name: 'Kompakt 92 3-Round Burst Mod', compatibility: ['Kompakt 92'], conflicts: ['category:barrel', 'category:underbarrel'], isConversion: true },
            { id: 'svd_full_auto', name: 'SVD Full Auto Mode', compatibility: ['SVD'], conflicts: ['category:magazine', 'category:barrel', 'category:underbarrel'], isConversion: true },
            { id: 'grau_auto_mode', name: 'SWAT 5.56 Grau Conversion', compatibility: ['SWAT 5.56'], conflicts: ['category:barrel', 'extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'flip_mag'], isConversion: true },
            { id: 'aek_971', name: 'AEK-973 Full Auto Mod', compatibility: ['AEK-973'], conflicts: ['category:barrel', 'extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'flip_mag'], isConversion: true },
            { id: 'tr2_cqb_auto', name: 'TR2 CQB Auto Conversion', compatibility: ['TR2'], conflicts: ['category:barrel', 'category:barrel', 'extended_mag_i', 'extended_mag_ii', 'fast_mag_i', 'flip_mag'], isConversion: true },
            { id: 'stryder_burst_mod', name: 'Stryder .22 3-Round Burst Mod', compatibility: ['Stryder .22'], conflicts: ['category:magazine', 'category:barrel'], isConversion: true }
        ]
    }
};

// Функции для работы с модулями
function getAttachmentsByTypeBO6(type) {
    return window.ATTACHMENTS_BO6[type] ? window.ATTACHMENTS_BO6[type].items : [];
}

function getAllAttachmentsBO6() {
    const all = [];
    for (const type in window.ATTACHMENTS_BO6) {
        all.push(...window.ATTACHMENTS_BO6[type].items);
    }
    return all;
}

function isAttachmentCompatibleBO6(attachment, weaponCategory, weaponName = null, currentAttachments = []) {
    if (!attachment || !weaponCategory) return false;
    
    if (attachment.exclude && Array.isArray(attachment.exclude)) {
        if (weaponName && attachment.exclude.includes(weaponName)) {
            return false;
        }
        if (attachment.exclude.includes(weaponCategory)) {
            return false;
        }
    }

    if (attachment.forbiddenWith && weaponName) {
        const forbiddenAttachments = attachment.forbiddenWith[weaponName];
        if (forbiddenAttachments) {
            // Проверяем, есть ли среди выбранных модулей запрещенные
            const hasForbidden = forbiddenAttachments.some(forbiddenId =>
                currentAttachments.some(att => att.id === forbiddenId)
            );
            if (hasForbidden) {
                return false; // Запрещен - нельзя использовать вместе
            }
        }
    }

    // Проверка особых требований конкретного оружия
    if (attachment.weaponRequirements && weaponName) {
        const requiredAttachments = attachment.weaponRequirements[weaponName];
        
        if (requiredAttachments) {
            // Проверяем, есть ли требуемые модули в текущем списке
            const hasRequired = requiredAttachments.some(requiredId =>
                currentAttachments.some(att => att.id === requiredId)
            );
            
            if (!hasRequired) {
                return false;
            }
        }
    }
    
    // Проверяем, требует ли модуль наличия другого модуля
    if (attachment.requires) {
        // Проверяем, есть ли требуемый модуль в текущем списке выбранных
        const hasRequiredModule = currentAttachments.some(att => att.id === attachment.requires);
        if (!hasRequiredModule) {
            return false; // Модуль недоступен, пока не выбран required модуль
        }
    }

    // Проверяем, не заблокирован ли модуль другим модулем
    if (attachment.lockedWith && weaponName) {
        const lockedAttachments = attachment.lockedWith[weaponName];
        if (lockedAttachments) {
            // Если хотя бы один из блокирующих модулей установлен — модуль НЕДОСТУПЕН
            const isLocked = lockedAttachments.some(lockedId =>
                currentAttachments.some(att => att.id === lockedId)
            );
            if (isLocked) {
                return false; // Модуль заблокирован
            }
        }
    }

    if (attachment.compatibility === 'all') return true;
    
    if (Array.isArray(attachment.compatibility)) {
        if (attachment.compatibility.includes(weaponCategory)) {
            return true;
        }
        if (weaponName && attachment.compatibility.includes(weaponName)) {
            return true;
        }
        return false;
    }
    
    if (typeof attachment.compatibility === 'string') {
        return attachment.compatibility === weaponCategory || 
               (weaponName && attachment.compatibility === weaponName);
    }
    
    return false;
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        ATTACHMENTS_BO6: window.ATTACHMENTS_BO6,
        getAttachmentsByTypeBO6, 
        getAllAttachmentsBO6, 
        isAttachmentCompatibleBO6
    };
}