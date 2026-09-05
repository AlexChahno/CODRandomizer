// ============================================
// ATTACHMENTS DATA - Black Ops 7
// ============================================

window.ATTACHMENTS_BO7 = {
// === OPTICS ===
optics: {
    name: 'Optics',
    category: 'optics',
    items: [
        { id: 'elo', name: 'ELO', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'mini_reflex_01', name: 'Mini Reflex 01', compatibility: ['AR', 'SMG', 'SG', 'P'] },
        { id: 'mini_reflex_02', name: 'Mini Reflex 02', compatibility: ['AR', 'SMG', 'SG', 'P'] },
        { id: 'mini_reflex_03', name: 'Mini Reflex 03', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: 'mini_reflex_04', name: 'Mini Reflex 04', compatibility: ['AR', 'SMG', 'SG', 'P'] },
        { id: 'mini_reflex_05', name: 'Mini Reflex 05', compatibility: ['P'] },
        { id: 'mini_reflex_06', name: 'Mini Reflex 06', compatibility: ['P'] },
        { id: 'reflex_01', name: 'Reflex 01', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'reflex_02', name: 'Reflex 02', compatibility: ['AR', 'SG', 'LMG', 'MMR'] },
        { id: 'reflex_03', name: 'Reflex 03', compatibility: ['AR', 'SMG', 'LMG'] },
        { id: 'reflex_04', name: 'Reflex 04', compatibility: ['AR', 'SMG', 'MMR', 'SR'] },
        { id: 'reflex_05', name: 'Reflex 05', compatibility: ['AR', 'SMG', 'SG', 'LMG'] },
        { id: 'reflex_06', name: 'Reflex 06', compatibility: ['AR', 'SMG', 'SG'] },
        { id: 'holo_sight_01', name: 'Holo Sight 01', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: 'holo_sight_02', name: 'Holo Sight 02', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: 'thermal_holographic', name: 'Thermal Holographic', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: 'holo_range_sight', name: 'Holo Range Sight', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: 'hybrid_01', name: 'Hybrid 01', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'], lockedWith: {'VST': ['akimbo'] } },
        { id: 'target_finder', name: 'Target Finder', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: 'milimeter_scanner', name: 'Milimeter Scanner', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: '2x_optic', name: '2x Optic', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'Grimhawk', 'NX Ravager'] },
        { id: '3x_optic', name: '3x Optic', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR'] },
        { id: '4x_01_optic', name: '4x-01 Optic', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'] },
        { id: '4x_02_optic', name: '4x-02 Optic', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'] },
        { id: 'hybrid_02', name: 'Hybrid 02', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'] },
        { id: 'thermal_sight', name: 'Thermal Sight', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'] },
        { id: 'dual_zoom_scope', name: 'Dual Zoom Scope', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR'] },
        { id: 'variable_zoom_scope_01', name: 'Variable Zoom Scope 01', compatibility: ['AR', 'LMG', 'MMR', 'SR', 'NX Ravager'] },
        { id: 'variable_zoom_scope_02', name: 'Variable Zoom Scope 02', compatibility: ['LMG', 'MMR', 'SR'] },
        { id: 'range_finder_scope', name: 'Range Finder Scope', compatibility: ['LMG', 'MMR', 'SR'] },
        { id: 'sniper_scope', name: 'Sniper Scope', compatibility: ['AR', 'MMR', 'SR'] },
        { id: 'thermal_scope', name: 'Thermal Scope', compatibility: ['AR', 'MMR', 'SR'] },
        { id: 'iron_sight', name: 'Iron Sight', compatibility: ['SR'] },
        { id: 'pistol_scope', name: 'Pistol Scope', compatibility: ['P'] }
    ]
},

// === MUZZLES ===
muzzles: {
    name: 'Muzzles',
    category: 'muzzles',
    items: [
        { id: 'fire_rate_brake', name: 'Fire Rate Brake', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'recoil_suppressor', name: 'Recoil Suppressor', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'compensator', name: 'Compensator', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'suppressor', name: 'Suppressor', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'muzzle_brake', name: 'Muzzle Brake', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'mobility_spread_muzzle', name: 'Mobility Spread Muzzle', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['XR-3 ION'] },
        { id: 'firepower_suppressor', name: 'Firepower Suppressor', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'ads_choke', name: 'ADS Choke', compatibility: ['SG'] },
        { id: 'hip_spread_choke', name: 'Hip Spread Choke', compatibility: ['SG'] },
        { id: 'mobility_spread_muzzle', name: 'MFS 3x3 Compensator', compatibility: ['XR-3 ION'], isPrestige: true },
        { id: 'full_auto_muzzle', name: 'MFS Overdrive Auto-Brake', compatibility: ['1911'], isConversion: true }
    ]
},

// === BARRELS ===
barrels: {
    name: 'Barrels',
    category: 'barrels',
    items: [
        { id: 'hyperburst_barrel', name: '15" MFS Triumvirate Barrel', compatibility: ['AN-94'], isPrestige: true },
        { id: 'control_barrel', name: 'Control Barrel', compatibility: ['AR', 'LMG', 'MMR', 'Shadow SK', 'VS Recon'] },
        { id: 'long_barrel', name: 'Long Barrel', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['VS Recon'] },
        { id: 'hybrid_barrel', name: 'Hybrid Barrel', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['M10 Breacher', 'KRS-7.62', 'Hawker HX'] },
        { id: 'hybrid_barrel_prestige', name: 'MFS 25" Votive Barrel', compatibility: ['Hawker HX'], isPrestige: true },
        { id: 'short_barrel', name: 'Short Barrel', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['X9 Maverick', 'MPC-25', 'M10 Breacher'] },
        { id: 'mid_range_barrel', name: 'Mid Range Barrel', compatibility: ['AR', 'SMG', 'Sokol 545', 'Mk.78'], exclude: ['AN-94'] },
        { id: 'integrated_suppressor', name: '14" MFS Nightfall Suppressed Barrel', compatibility: ['MK35 ISR'], conflict: ['muzzles'], isPrestige: true },
        { id: 'ak_27_battle_scar', name: 'AK-27 Battle-Scar Conversion', compatibility: ['AK-27'], conflicts: ['category:stocks', 'rapid_fire_prestige', 'category:rearGrips'], isConversion: true },
        { id: 'mxr_17_anvl', name: 'MXR-17 ANVL Conversion', compatibility: ['MXR-17'], conflicts: ['category:magazines', 'category:rapid_fire'], isConversion: true },
        { id: 'x9_maverick_javelin', name: 'X9 Maverick Javelin Assembly', compatibility: ['X9 Maverick'], conflict: ['category:muzzles', 'category:rapid_fire', 'high_velocity_ammo', 'fmj_ammo'], isConversion: true },
        { id: 'quick_load_barrel', name: 'Quick Load Barrel', compatibility: ['M10 Breacher'] },
        { id: 'quick_load_barrel_prestige', name: '14" MFS Pulse Load+ Barrel', compatibility: ['X9 Maverick'], isPrestige: true },
        { id: 'bullet_velocity_barrel', name: 'Bullet Velocity Barrel', compatibility: ['SG', 'MMR', 'SR', 'P'], exclude: ['M10 Breacher', 'Echo 12'] },
        { id: 'damage_barrel', name: 'Damage Barrel', compatibility: ['SG', 'SR', 'P'], exclude: ['M10 Breacher', 'VS Recon', 'Shadow SK', 'Jäger 45'] },
        { id: 'handling_control_barrel', name: 'Handling Control Barrel', compatibility: ['SMG'], exclude: ['Razor 9mm']  },
        { id: 'stable_bullet_velocity_barrel_prestige', name: '12" MFS Sidewinder Barrel', compatibility: ['Razor 9mm'], isPrestige: true },
        { id: 'stabilization_barrel', name: 'Stabilization Barrel', compatibility: ['XM325'] },
        { id: 'aiming_speed_barrel', name: 'Aiming Speed Barrel', compatibility: ['VS Recon'] },
        { id: 'sprint_to_fire_barrel', name: 'Sprint to Fire Barrel', compatibility: ['M10 Breacher'] },
        { id: 'heavy_long_barrel', name: 'Heavy Long Barrel', compatibility: ['M10 Breacher'] },
        { id: 'heavy_barrel', name: 'Heavy Barrel', compatibility: ['M10 Breacher'] },
        { id: 'stable_velocity_barrel', name: '18" MFS Greyhound Barrel', compatibility: ['Echo 12'], isPrestige: true },
        { id: 'maddox_burst_barrel', name: '13" MFS Echo-Fire Barrel', compatibility: ['Maddox RFB'], conflict: ['muzzles'], isPrestige: true },
        { id: 'penetration_barrel', name: '15" MFS Incursion Barrel', compatibility: ['KRS-7.62'], isPrestige: true },
        { id: 'short_jump_barrel', name: '8.6" MFS Stratus-X Barrel', compatibility: ['MPC-25'], isPrestige: true },
        { id: 'chassis', name: 'Velox 5.7 Carbine Chassis', compatibility: ['Velox 5.7'], isConversion: true },
        { id: 'jump_shot_barrel', name: '4" MFS Celeste Barrel', compatibility: ['Velox 5.7'], isPrestige: true },
        { id: 'm8a1_autostrike_x8_conversion', name: 'M8A1 AutoStrike-X8 Conversion', compatibility: ['M8A1'], isConversion: true },
        { id: 'scull_splitter_barrel', name: '9.6" MFS Vital Ace Barrel', compatibility: ['Jäger 45'], isPrestige: true },
        { id: 'emp_gun', name: 'Jäger 45 Grid-Breaker kit', compatibility: ['Jäger 45'], conflicts: ['category:optics', 'category:muzzles', 'category:magazines', 'category:stocks', 'strelok_laser', 'stable_laser', 'tactical_laser', 'category:fireMods'],
             isConversion: true },
        { id: 'circultal_barrel_prestige', name: 'MFS Circultal Barrel', compatibility: ['Grimhawk'], isPrestige: true },
        { id: 'revolver_damage_barrel', name: 'Revolver Damage Barrel', compatibility: ['Warden 308'], compatibility: ['Warden 308'], weaponRequirements: {'Warden 308': ['warden_308_badlands_pistol_kit']} },
        { id: 'revolver_light_barrel', name: 'Revolver Light Barrel', compatibility: ['Warden 308'], compatibility: ['Warden 308'], weaponRequirements: {'Warden 308': ['warden_308_badlands_pistol_kit']} },
        { id: 'revolver_long_barrel', name: 'Revolver Long Barrel', compatibility: ['Warden 308'], compatibility: ['Warden 308'], weaponRequirements: {'Warden 308': ['warden_308_badlands_pistol_kit']} },
        { id: 'smg_long_barrel', name: 'Long Barrel - SMG', compatibility: ['Mk.78'], weaponRequirements: {'Mk.78': ['smg_conversion_kit'] } },
    ]
},

// === UNDERBARRELS ===
underbarrels: {
    name: 'Underbarrels',
    category: 'underbarrels',
    items: [
        { id: 'bullet_deviation_foregrip', name: 'Bullet Deviation Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'KRS-7.62', 'M8A1', 'M34 Novaline', 'Velox 5.7'], exclude: ['Dravec 45', 'Echo 12'], weaponRequirements: {'Velox 5.7': ['chassis'] } },
        { id: 'stable_focus_underbarrel', name: 'Stable Focus Underbarrel', compatibility: ['AR', 'SMG', 'KRS-7.62', 'Swordfish A1', 'SR'], exclude: ['Maddox RFB', 'M15 MOD 0', 'AK-27', 'MXR-17', 'X9 Maverick', 'DS20 Mirage', 'Peacekeeper Mk1', 
            'REV-46', 'Kogot-7', 'Ryden 45K', 'RK-9', 'Razor 9mm', 'Dravec 45', 'MPC-25', 'Echo 12', 'Shadow SK', 'XR-3 ION'] },
        { id: 'launcher_standard', name: 'Launcher - Standard', compatibility: ['AR', 'M8A1', 'M34 Novaline'], exclude: ['DS20 Mirage'] },
        { id: 'launcher_drill_charge', name: 'Launcher - Drill Charge', compatibility: ['AR', 'M8A1', 'M34 Novaline'], exclude: ['DS20 Mirage'] },
        { id: 'steady_sway_handstop', name: 'Steady Sway Handstop', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR'], exclude: ['Dravec 45', 'Echo 12', 'Warden 308'] },
        { id: 'launcher_high_explosive', name: 'Launcher - High Explosive', compatibility: ['AR', 'M8A1', 'M34 Novaline'], exclude: ['DS20 Mirage'] },
        { id: 'mobility_foregrip', name: 'Mobility Foregrip', compatibility: ['AR', 'SMG', 'SG', 'Mk.78', 'KRS-7.62', 'Swordfish A1', 'M8A1', 'Strider 300', 'Velox 5.7'], exclude: ['DS20 Mirage', 'Dravec 45', 'M10 Breacher', 
            'Echo 12', 'Akita', 'Shadow SK', 'XR-3 ION'], 
            weaponRequirements: {'Velox 5.7': ['chassis'] } },
        { id: 'launcher_smoke', name: 'Launcher - Smoke', compatibility: ['AR', 'M8A1', 'M34 Novaline'], exclude: ['DS20 Mirage'] },
        { id: 'recoil_control_foregrip', name: 'Recoil Control Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'KRS-7.62', 'Swordfish A1', 'SR'], exclude: ['DS20 Mirage', 'Dravec 45', 'M10 Breacher', 'Echo 12', 'Akita', 'Shadow SK', 'XR-3 ION'] },
        { id: 'mobile_recoil_foregrip', name: 'Mobile Recoil Foregrip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'Velox 5.7'], exclude: ['Dravec 45', 'Echo 12', 'Akita', 'Warden 308', 'Shadow SK', 'XR-3 ION'], 
            weaponRequirements: {'Velox 5.7': ['chassis'] } },
        { id: 'mobile_recoil_handstop', name: 'Mobile Recoil Handstop', compatibility: ['DS20 Mirage', 'Carbon 57', 'Akita'] },
        { id: '20mm_burst_launcher', name: 'Mirage Tandem Launcher', compatibility: ['DS20 Mirage'], conflicts: ['tactical_laser'], isPrestige: true },
        { id: 'ds20_mirage_dual_fire_kit', name: 'DS20 Mirage Dual Fire Kit', compatibility: ['DS20 Mirage'], conflicts: ['category:optics', 'category:tactical_laser'], isConversion: true },
        { id: 'mobile_focus_handstop_prestige', name: 'MFS Enhance-32 Handstop', compatibility: ['M34 Novaline'], isPrestige: true },
        { id: 'rapid_stable_handstop_prestige', name: 'MFS Ironlung Hadstop', compatibility: ['RK-9'], isPrestige: true },
        { id: 'stable_focus_handstop', name: 'Stable Focus Handstop', compatibility: ['Maddox RFB', 'M15 MOD 0', 'AK-27', 'MXR-17', 'X9 Maverick', 'DS20 Mirage', 'Peacekeeper Mk1', 'REV-46', 'Kogot-7', 'Ryden 45K', 'Razor 9mm', 'MPC-25', 'Sokol 545', 'Mk.78',
            'XM325', 'M8A1'] },
        { id: 'mobility_handstop', name: 'Mobility Handstop', compatibility: ['AK-27', 'DS20 Mirage', 'M10 Breacher', 'M34 Novaline', 'Akita', 'Sokol 545', 'XM325'] },
        { id: 'crossbar', name: 'Crossbar', compatibility: ['LMG'], conflicts: ['category:optics'] },
        { id: 'recoil_control_handstop', name: 'Recoil Control Handstop', compatibility: ['DS20 Mirage', 'M10 Breacher', 'M34 Novaline', 'Akita', 'M8A1', 'M34 Novaline'] },
        { id: 'aim_motion_stability_guard', name: 'MFS Ballast Guard Stabilizer', compatibility: ['Stryder 300'], isPrestige: true },
        { id: 'mobility_underbarrel', name: 'Mobility Underbarrel', compatibility: ['Hawker HX'] },
        { id: 'mobile_recoil_underbarrel', name: 'Mobile Recoil Underbarrel', compatibility: ['Hawker HX'] },
        { id: 'recoil_control_underbarrel', name: 'Recoil Control Underbarrel', compatibility: ['Hawker HX'] },
        { id: 'steady_sway_underbarrel', name: 'Steady Sway Underbarrel', compatibility: ['Hawker HX'] },
        { id: 'stable_focus_underbarrel', name: 'Stable Focus Underbarrel', compatibility: ['Hawker HX'] },
        { id: 'stable_focus_handguard', name: 'Stable Focus Handguard', compatibility: ['XR-3 ION'] },
        { id: 'stable_focus_handguard', name: 'MFS R-Stop Handguard', compatibility: ['VS Recon'], isPrestige: true },
        { id: 'mobility_handguard', name: 'Mobility Handguard', compatibility: ['VS Recon', 'XR-3 ION'] },
        { id: 'mobile_recoil_handguard', name: 'Mobile Recoil Handguard', compatibility: ['VS Recon', 'XR-3 ION'] },
        { id: 'recoil_control_handguard', name: 'Recoil Control Handguard', compatibility: ['VS Recon', 'XR-3 ION'] },
        { id: 'steady_sway_handguard', name: 'Steady Sway Handguard', compatibility: ['VS Recon', 'XR-3 ION'] },
        { id: 'xr3_ion_vulcan_minigun', name: 'XR-3 Ion Vulcan Minigun', compatibility: ['XR-3 ION'], conflicts: ['category:magazines', 'category:optics', 'damage_barrel', 'tactical_laser', 'strelok_laser', 'rapid_fire'], isConversion: true },
        { id: 'crossbar_m1', name: 'A.R.C. M1 Assault Frame', compatibility: ['A.R.C. M1'], isConversion: true }
    ]
},

// === MAGAZINES ===
magazines: {
    name: 'Magazines',
    category: 'magazines',
    items: [
        { id: 'flip_mag', name: 'Flip Mag', compatibility: ['AR', 'REV-46', 'Sturmwolf 45', 'Sturmwolf 45', 'Ryden 45K', 'RK-9', 'SG-12', 'M8A1', 'M34 Novaline'], exclude: ['VX Compact', 'X9 Maverick'] },
        { id: 'fast_mag_i', name: 'Fast Mag I', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['X9 Maverick', 'CBRS-3', 'Sturmwolf 45', 'M10 Breacher', 'Swordfish A1'] },
        { id: 'fast_mag_i_prestige_mxr', name: 'MFS Semi-Auto Fast Mag', compatibility: ['MXR-17'], isPrestige: true },
        { id: 'fast_mag_i_prestige_sturmwolf45', name: 'MFS Tigris .40 Cal Mag', compatibility: ['Sturmwolf 45'], isPrestige: true },
        { id: 'extended_mag_i', name: 'Extended Mag I', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P', 'Grimhawk'], exclude: ['X9 Maverick', 'CBRS-3', 'Carbon 57', 'Swordfish A1', 'Warden 308', 'M10 Breacher'] },
        { id: 'extended_mag_ii', name: 'Extended Mag II', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['X9 Maverick', 'CBRS-3', 'Echo 12', 'Swordfish A1', 'M34 Novaline', 'CODA 9', 'Warden 308', 'M10 Breacher'] },
        { id: '30_rnd_fast_ext_mag', name: 'MFS Impetus Fast Mag', compatibility: ['VX Compact'], isPrestige: true },
        { id: '75_round_extended_mag', name: '75 Round Extended Mag', compatibility: ['CBRS-3'] },
        { id: 'auto_rechamber_mag', name: 'MFS Carousel Fast Mag', compatibility: ['CBRS-3'], isPrestige: true },
        { id: 'fast_mag_ii', name: 'Fast Mag II', compatibility: ['Kogot-7', 'Razor 9mm', 'MPC-25', 'Akita', 'Sokol 545', 'KRS-7.62', 'Hawker HX', 'Shadow SK'] },
        { id: '3d_print_mag', name: 'Carbon 57 Fabricator mag', compatibility: ['Carbon 57'], isConversion: true },
        { id: 'extended_mag_i_prestige', name: 'MFS Renown Plus Mag', compatibility: ['Carbon 57'], isPrestige: true },
        { id: 'belt_fed', name: 'Belt Fed', compatibility: ['LMG'], exclude: ['Mk.78'], conflicts: {'XM325': ['underbarrels'] } },
        { id: 'belt_fed_prestige', name: 'MFS Heatshield Belt Fed', compatibility: ['Mk.78'], isPrestige: true },
        { id: '36_round_fast_mag', name: '36 Round Fast Mag', compatibility: ['Swordfish A1'] },
        { id: '32_round_fast_mag', name: '32 Round Fast Mag', compatibility: ['Swordfish A1'] },
        { id: '48_round_extended_mag', name: '48 Round Extended Mag', compatibility: ['Swordfish A1'] },
        { id: '60_round_drum_mag', name: '60 Round Drum Mag', compatibility: ['Swordfish A1'] },
        { id: 'extended_mag_ii_prestige', name: 'MFS DeltaCell Bulk Mag', compatibility: ['CODA 9'], conflicts: ['hybrid_dual_stock'], isPrestige: true },
        { id: 'ricochet_projectile_prestige', name: 'MFS Deflection Core', compatibility: ['Siren'], isPrestige: true },
        { id: 'air_burst_rounds_prestige', name: 'MFS Airstrike Mag', compatibility: ['GDL Havoc'], isPrestige: true },
        { id: 'crossbow_bolt_prestige', name: 'TriBolt', compatibility: ['NX Ravager'], isPrestige: true }
    ]
},

// === REAR GRIPS ===
rearGrips: {
    name: 'Rear Grips',
    category: 'rearGrips',
    items: [
        { id: 'quickdraw_grip', name: 'Quickdraw Grip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['M10 Breacher'] },
        { id: 'mobile_quickdraw_grip', name: 'Mobile Quickdraw Grip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['M10 Breacher'] },
        { id: 'stabilization_grip', name: 'Stabilization Grip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['M10 Breacher'] },
        { id: 'sprint_to_fire_grip', name: 'Sprint to Fire Grip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P', 'GDL Havoc'], exclude: ['M10 Breacher'] },
        { id: 'accuracy_grip', name: 'Accuracy Grip', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['M10 Breacher'] },
        { id: 'handling_grip', name: 'Handling Grip', compatibility: ['Siren'] },
        { id: 'mobility_grip', name: 'Mobility Grip', compatibility: ['Siren', 'GDL Havoc'] },
        { id: 'jog_grip', name: 'Jog Grip', compatibility: ['GDL Havoc'] },
        { id: 'sprint_grip', name: 'Sprint Grip', compatibility: ['GDL Havoc'] },
        { id: 'mobile_sprint_out_grip', name: 'Mobile Sprint Out Grip', compatibility: ['GDL Havoc'] }
    ]
},

// === STOCKS ===
stocks: {
    name: 'Stocks',
    category: 'stocks',
    items: [
        { id: 'mobility_stock', name: 'Mobility Stock', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'Stryder 300', 'Hawker HX', 'XR-3 ION', 'Velox 5.7'], exclude: ['REV-46', 'Razor 9mm', 'SG-12', 'M10 Breacher'], 
            weaponRequirements: {'Velox 5.7': ['chassis']} },
        { id: 'control_stock', name: 'Control Stock', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'Stryder 300', 'Hawker HX', 'Velox 5.7'], 
            exclude: ['Peacekeeper Mk1', 'CBRS-3', 'VST', 'REV-46', 'Razor 9mm', 'SG-12', 'M10 Breacher', 'Akita', 'Shadow SK', 'XR-3 ION'], weaponRequirements: {'Velox 5.7': ['chassis'] } },
        { id: 'ads_movement_stock', name: 'ADS Movement Stock', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'Stryder 300', 'Hawker HX', 'XR-3 ION', 'Velox 5.7'], exclude: ['CBRS-3', 'VST', 'REV-46', 'Razor 9mm', 'SG-12', 'XR-3 ION'], 
            weaponRequirements: {'Velox 5.7': ['chassis'] } },
        { id: 'tactical_spread_stock', name: 'Tactical Spread Stock', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'Stryder 300', 'Hawker HX', 'Shadow SK', 'XR-3 ION'], 
            exclude: ['CBRS-3', 'VST', 'REV-46', 'Ryden 45K', 'Razor 9mm', 'Carbon 57', 'SG-12', 'M10 Breacher', 'M8A1'] },
        { id: 'heavy_stock', name: 'Heavy Stock', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR'], exclude: ['REV-46', 'SG-12', 'M10 Breacher', 'Echo 12', 'Akita', 'Hawker HX'], lockedWith: {'MXR-17': ['rearGrips'] } },
        { id: 'akimbo', name: 'Akimbo', compatibility: ['VST', '1911', 'Jäger 45', 'Velox 5.7', 'CODA 9'], conflicts: ['tactical_laser', 'strelok_laser'] },
        { id: 'akimbo_prestige', name: 'MFS Kogot-7 Akimbo', compatibility: ['Kogot-7'], conflicts: ['category:underbarrels', 'tactical_laser', 'strelok_laser', 'hybrid_01'], isPrestige: true },
        { id: 'flip_stock', name: 'MFS Reforge Flip Stock', compatibility: ['REV-46'], isPrestige: true },
        { id: 'mobility_pad', name: 'Mobility Pad', compatibility: ['SMG', 'SG-12', 'VS Recon'], exclude: ['REV-46', 'Sturmwolf 45', 'Ryden 45K', 'RK-9', 'Dravec 45', 'MPC-25'] },
        { id: 'control_pad', name: 'Control Pad', compatibility: ['SG-12', 'SMG'], exclude: ['REV-46', 'Sturmwolf 45', 'Ryden 45K', 'RK-9', 'Dravec 45', 'MPC-25'] },
        { id: 'ads_movement_pad', name: 'ADS Movement Pad', compatibility: ['SMG', 'SG-12', 'VS Recon'], exclude: ['REV-46', 'Sturmwolf 45', 'Ryden 45K', 'RK-9', 'Dravec 45', 'MPC-25'] },
        { id: 'tactical_spread_pad', name: 'Tactical Spread Pad', compatibility: ['SMG', 'SG-12', 'VS Recon'], exclude: ['REV-46', 'Sturmwolf 45', 'Ryden 45K', 'RK-9', 'Dravec 45', 'MPC-25'] },
        { id: 'heavy_pad', name: 'Heavy Pad', compatibility: ['SMG'], exclude: ['CBRS-3', 'VST', 'Sturmwolf 45', 'Ryden 45K', 'RK-9', 'Razor 9mm', 'Dravec 45', 'MPC-25'] },
        { id: 'mobile_flinch_pad', name: 'Mobile Flinch Pad', compatibility: ['SG-12', 'VS Recon'] },
        { id: 'tactical_jump_stock_prestige', name: 'MFS Full Stock+', compatibility: ['Ryden 45K'], isPrestige: true },
        { id: 'hybrid_dual_stock', name: 'Coda 9 Adaptive Discharge Mod', compatibility: ['CODA 9'], conflicts: ['extended_mag_ii_prestige'], isConversion: true },
        { id: 'tactical_control_stock_prestige', name: 'MFS Counterforce-C1 Stock', compatibility: ['Peacekeeper Mk1'], isPrestige: true },
        { id: 'mobile_tactical_stock_prestige', name: 'MFS Striker Tactical Stock', compatibility: ['M8A1'], isPrestige: true },
        { id: 'level_action', name: 'M10 Breacher Argus Lever', compatibility: ['M10 Breacher'], conflicts: ['strelok_laser', 'shotgun_slugs', 'ads_choke'], isConversion: true },
        { id: 'primed_stock', name: 'Primed Stock', compatibility: ['M10 Breacher'] },
        { id: 'aim_speed_stock', name: 'Aim Speed Stock', compatibility: ['M10 Breacher'] },
        { id: 'locomotion_stock', name: 'Locomotion Stock', compatibility: ['M10 Breacher'] },
        { id: 'marathon_ready_stock', name: 'Marathon-Ready Stock', compatibility: ['M10 Breacher'] },
        { id: 'pro_move_sprint_stock_prestige', name: 'MFS XK-Lite Stock', compatibility: ['M10 Breacher'], isPrestige: true },
        { id: 'mobile_flinch_stock', name: 'Mobile Flinch Stock', compatibility: ['Echo 12', 'Akita', 'Stryder 300', 'Hawker HX', 'Shadow SK', 'XR-3 ION'] },
        { id: 'smg_conversion_kit', name: 'Mk.78 Lightframe PDW Conversion', compatibility: ['Mk.78'], conflicts: ['long_barrel', 'mid_range_barrel', 'hybrid_barrel', 'short_barrel', 'control_barrel'], isConversion: true },
        { id: 'xm325_titan_wield', name: 'XM325 Titan Wield', compatibility: ['XM325'], conflicts: ['category:underbarrels', 'category:magazines', 'tactical_laser', 'strelok_laser'], isConversion: true },
        { id: 'akita_scorchlink_akimbo', name: 'Akita ScorchLink Akimbo', compatibility: ['Akita'], conflicts: ['category:magazines', 'category:underbarrels', 'tactical_laser', 'strelok_laser'], isConversion: true },
        { id: 'mobility_handling_stock', name: 'MFS GD-7 Shock Stock', compatibility: ['Akita'], isPrestige: true },
        { id: 'flinch_resist_pad', name: 'Flinch Resist Pad', compatibility: ['VS Recon'] },
        { id: 'flinch_resist_stock', name: 'Flinch Resist Stock', compatibility: ['Shadow SK', 'XR-3 ION'] },
        { id: 'quickdraw_grip_m10', name: 'Quickdraw Grip', compatibility: ['M10 Breacher'] },
        { id: 'mobility_control_stock', name: 'Mobility Control Stock', compatibility: ['Velox 5.7'], weaponRequirements: {'Velox 5.7': ['chassis'] } },
        { id: 'dual_wield', name: 'Warden 308 Revolver Akimbo', compatibility: ['Warden 308'], weaponRequirements: {'Warden 308': ['warden_308_badlands_pistol_kit'] }, conflicts: ['tactical_laser', 'strelok_laser'] },
        { id: 'semi_auto_conversion', name: 'M34 Novaline Garand Conversion', compatibility: ['M34 Novaline'], conflicts: ['category:rearGrips', 'category:magazines', 'category:optics', 'control_barrel'], isConversion: true }
    ]
},

// === COMBS ===
combs: {
    name: 'Combs',
    category: 'combs',
    items: [
        { id: 'quickdraw_comb', name: 'Quickdraw Comb', compatibility: ['MXR-17', 'AK-27'], weaponRequirements: {'MXR-17': ['heavy_stock'], 'AK-27': ['ak_27_battle_scar'] } },
        { id: 'sprint_to_fire_comb', name: 'Sprint to Fire Comb', compatibility: ['MXR-17', 'AK-27'], weaponRequirements: {'MXR-17': ['heavy_stock'], 'AK-27': ['ak_27_battle_scar'] } },
        { id: 'mobile_quickdraw_comb', name: 'Mobile Quickdraw Comb', compatibility: ['MXR-17', 'AK-27'], weaponRequirements: {'MXR-17': ['heavy_stock'], 'AK-27': ['ak_27_battle_scar'] } },
        { id: 'stabilization_comb', name: 'Stabilization Comb', compatibility: ['MXR-17', 'AK-27'], weaponRequirements: {'MXR-17': ['heavy_stock'], 'AK-27': ['ak_27_battle_scar'] } },
        { id: 'accuracy_comb', name: 'Accuracy Comb', compatibility: ['MXR-17', 'AK-27'], weaponRequirements: {'MXR-17': ['heavy_stock'], 'AK-27': ['ak_27_battle_scar'] } },
        { id: 'recoil_control_riser', name: 'Recoil Control Riser', compatibility: ['Warden 308', 'Shadow SK'] },
        { id: 'steady_sway_riser', name: 'Steady Sway Riser', compatibility: ['Warden 308', 'Shadow SK'] },
        { id: 'stable_focus_riser', name: 'Stable Focus Riser', compatibility: ['Warden 308', 'Shadow SK'] },
        { id: 'mobility_riser', name: 'Mobility Riser', compatibility: ['Warden 308', 'Shadow SK'] },
        { id: 'mobile_recoil_riser', name: 'Mobile Recoil Riser', compatibility: ['Warden 308', 'Shadow SK'] },
        { id: 'warden_308_badlands_pistol_kit', name: 'Warden 308 Badlands Pistol Kit', compatibility: ['Warden 308'], conflicts: ['long_barrel', 'bullet_velocity_barrel', 'hybrid_barrel', 'short_barrel', 'control_barrel',
            'mobility_stock', 'ads_movement_stock', 'control_stock', 'tactical_spread_stock', 'heavy_stock', 'tactical_laser'], isConversion: true },
        { id: 'shadow_sk_masterkey', name: 'Shadow SK 12-gauge Masterkey', compatibility: ['Shadow SK'], conflicts: ['tactical_laser', 'category:stocks'], isConversion: true }
    ]
},

// === LASERS ===
lasers: {
    name: 'Lasers',
    category: 'lasers',
    items: [
        { id: 'steady_aim_laser', name: 'Steady Aim Laser', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'strelok_laser', name: 'Strelok Laser', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['Voyak KT-3'] },
        { id: 'handling_laser', name: 'Handling Laser', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'tactical_laser', name: 'Tactical Laser', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], conflicts: {'SR': ['category:optic'], 'AR': ['launcher_standard', 'launcher_high_explosive', 'launcher_smoke', 'launcher_drill_charge'],   
            'MMR': ['launcher_standard', 'launcher_high_explosive', 'launcher_smoke', 'launcher_drill_charge'] } },
        { id: 'stable_laser', name: 'Stable Laser', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['Dravec 45', 'XM325', 'EGRT-17', 'REV-46', 'KRS-7.62', 'Swordfish A1'] },
        { id: 'stable_range_laser', name: 'Stable Range Laser', compatibility: ['EGRT-17', 'REV-46', 'KRS-7.62', 'Swordfish A1'] },
        { id: 'strelok_laser_prestige', name: 'MFS Anti-Dispersion Module', compatibility: ['Voyak KT-3'], isPrestige: true },
        { id: 'mobile_range_laser', name: 'MFS Agile Laser Pro', compatibility: ['Dravec 45'], isPrestige: true },
        { id: 'no_spread_laser', name: 'MPC-25 ContraBloom Laser', compatibility: ['MPC-25'], conflicts: ['category:underbarrels', 'category:optics'], isConversion: true },
        { id: 'stable_range_turret_laser', name: 'MFS Motion Strike Laser', compatibility: ['XM325'], isPrestige: true },
        { id: 'binary_fire_light_prestige', name: 'MFS Pulse Fire Taclight', compatibility: ['SG-12'], isPrestige: true },
        { id: 'steady_aim_laser_prestige_sk', name: 'MFS Convergence Box Laser', compatibility: ['Shadow SK'], isPrestige: true }
    ]
},

// === FIRE MODS ===
fireMods: {
    name: 'Fire Mods',
    category: 'fireMods',
    items: [
        { id: 'rapid_fire', name: 'Rapid Fire', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['AK-27', 'Sokol 545', 'Warden 308'] },
        { id: 'fmj_ammo', name: 'FMJ Ammo', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['EGRT-17', 'M15 MOD 0'] },
        { id: 'recoil_springs', name: 'Recoil Springs', compatibility: ['AR', 'SMG', 'SG', 'LMG', 'MMR', 'SR', 'P'] },
        { id: 'high_velocity_ammo', name: 'High-Velocity Ammo', compatibility: ['AR', 'SMG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['EGRT-17'] },
        { id: 'rapid_fire_prestige', name: 'Enhanced Cycle System', compatibility: ['AK-27'], isPrestige: true },
        { id: 'ammo_conversion_prestige', name: 'MFS 5.56M Defense Conversion', compatibility: ['VST'], isPrestige: true },
        { id: 'ricochet_ammo_prestige', name: 'MFS Heated Echo Rounds', compatibility: ['EGRT-17'], isPrestige: true },
        { id: 'fmj_ammo_prestige', name: 'MFS 5.56 NATO FMJ', compatibility: ['M15 MOD 0'], isPrestige: true },
        { id: 'rapid_fire_burst', name: 'MFS 48-Dread Burst Mod', compatibility: ['Sokol 545'], isPrestige: true },
        { id: '5_round_burst_prestige', name: 'MFS Penta Burst Mod', compatibility: ['Swordfish A1'], conflicts: ['category:magazines'], isPrestige: true },
        { id: 'rapid_fire_trigger_prestige', name: 'MFS Snap Trigger', compatibility: ['Warden 308'], isPrestige: true },
        { id: 'fracture_ammo', name: 'Ryden 45K Sweeper Rig', compatibility: ['Ryden 45K'], conflicts: ['category:magazines', 'category:barrels'], isConversion: true },
        { id: 'razor_9mm_wildfire_conversion', name: 'Razor 9mm Wildfire Conversion', compatibility: ['Razor 9mm'], conflicts: ['category:magazines', 'category:barrels', 'steady_aim_laser', 'tactical_laser', 'strelok_laser'], isConversion: true },
        { id: 'shotgun_slugs', name: 'Shotgun Slugs', compatibility: ['SG'] },
        { id: 'incendiary_ammo', name: 'Incendiary Ammo', compatibility: ['SG'] },
        { id: 'launcher_conversion_kit', name: 'Echo-12 Backlash Launcher', compatibility: ['Echo 12'], conflicts: ['category:magazines', 'stable_velocity_barrel', 'long_barrel', 'hybrid_barrel', 'damage_barrel'], isConversion: true },
        { id: 'explosive_bolt', name: 'Explosive Crossbow Bolt', compatibility: ['NX Ravager'] },
    ]
}

};

// Функции для работы с модулями
function getAttachmentsByTypeBO7(type) {
    return window.ATTACHMENTS_BO7[type] ? window.ATTACHMENTS_BO7[type].items : [];
}

function getAllAttachmentsBO7() {
    const all = [];
    for (const type in window.ATTACHMENTS_BO7) {
        all.push(...window.ATTACHMENTS_BO7[type].items);
    }
    return all;
}

function isAttachmentCompatibleBO7(attachment, weaponCategory, weaponName = null, currentAttachments = []) {
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

    // ★★★ НОВАЯ ПРОВЕРКА: lockedWith ★★★
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

// ============================================
// ФУНКЦИИ ДЛЯ РАБОТЫ С ПРИВИЛЕГИРОВАННЫМИ МОДУЛЯМИ (PRESTIGE)
// ============================================

function isPrestigeAttachment(attachment) {
    return attachment && attachment.isPrestige === true;
}

function canUsePrestigeAttachment(weaponName, attachment, currentAttachments = []) {
    if (!attachment || !weaponName) return false;
    
    // Если модуль не престижный - всегда доступен
    if (!isPrestigeAttachment(attachment)) return true;
    
    // Проверяем, есть ли уже другие престижные модули (обычно только 1 престижный модуль на оружие)
    const hasOtherPrestige = currentAttachments.some(att => 
        att.id !== attachment.id && isPrestigeAttachment(att)
    );
    
    // Если есть другой престижный модуль - этот недоступен
    if (hasOtherPrestige) return false;
    
    // Проверяем требования для престижного модуля (если есть)
    if (attachment.prestigeRequirements) {
        const required = attachment.prestigeRequirements[weaponName];
        if (required) {
            if (Array.isArray(required)) {
                return required.some(reqId => 
                    currentAttachments.some(att => att.id === reqId)
                );
            }
            return currentAttachments.some(att => att.id === required);
        }
    }
    
    return true;
}

function getAvailablePrestigeAttachments(weaponName, currentAttachments = []) {
    const allAttachments = getAllAttachmentsBO7();
    const available = [];
    
    for (const att of allAttachments) {
        if (isPrestigeAttachment(att)) {
            // Проверяем совместимость с оружием
            const category = getAttachmentCategory(att.id);
            if (!category) continue;
            
            // Проверяем базовую совместимость
            const weaponCategory = getWeaponCategory(weaponName);
            if (!isAttachmentBaseCompatible(att, weaponCategory, weaponName)) continue;
            
            // Проверяем, не заблокирован ли другими модулями
            if (isLockedByOther(att, weaponName, currentAttachments)) continue;
            if (hasForbiddenWith(att, weaponName, currentAttachments)) continue;
            if (!checkRequirement(att, weaponName, currentAttachments)) continue;
            
            available.push(att);
        }
    }
    
    return available;
}

function checkPrestigeAvailability(attachment, weaponName, currentAttachments = []) {
    if (!attachment || !weaponName) {
        return { available: false, reason: 'Модуль не найден' };
    }
    
    if (!isPrestigeAttachment(attachment)) {
        return { available: true, reason: 'Обычный модуль' };
    }
    
    // Проверяем, есть ли уже другой престижный модуль
    const hasOtherPrestige = currentAttachments.some(att => 
        att.id !== attachment.id && isPrestigeAttachment(att)
    );
    if (hasOtherPrestige) {
        return { available: false, reason: 'Уже установлен другой престижный модуль' };
    }
    
    // Проверяем требования
    if (attachment.prestigeRequirements) {
        const required = attachment.prestigeRequirements[weaponName];
        if (required) {
            let hasRequired = false;
            if (Array.isArray(required)) {
                hasRequired = required.some(reqId => 
                    currentAttachments.some(att => att.id === reqId)
                );
            } else {
                hasRequired = currentAttachments.some(att => att.id === required);
            }
            if (!hasRequired) {
                return { available: false, reason: 'Требуется установить другие модули' };
            }
        }
    }
    
    return { available: true, reason: 'Доступен' };
}

function isPrestigeComboValid(attachment, currentAttachments = []) {
    if (!attachment || !isPrestigeAttachment(attachment)) return true;
    
    // Проверяем конфликты с другими престижными модулями
    const hasOtherPrestige = currentAttachments.some(att => 
        att.id !== attachment.id && isPrestigeAttachment(att)
    );
    
    return !hasOtherPrestige;
}

function getAllPrestigeAttachmentsForWeapon(weaponName) {
    if (!weaponName) return [];
    
    const allAttachments = getAllAttachmentsBO7();
    const result = [];
    const weaponCategory = getWeaponCategory(weaponName);
    
    for (const att of allAttachments) {
        if (isPrestigeAttachment(att)) {
            if (isAttachmentBaseCompatible(att, weaponCategory, weaponName)) {
                result.push(att);
            }
        }
    }
    
    return result;
}

function hasPrestigeInCategory(category, selectedAttachments = {}) {
    if (!category || !selectedAttachments[category]) return false;
    
    const attachment = findAttachmentById(selectedAttachments[category]);
    return attachment ? isPrestigeAttachment(attachment) : false;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        ATTACHMENTS_BO7: window.ATTACHMENTS_BO7,
        getAttachmentsByTypeBO7, 
        getAllAttachmentsBO7, 
        isAttachmentCompatibleBO7,
        isPrestigeAttachment,
        canUsePrestigeAttachment,
        getAvailablePrestigeAttachments,
        checkPrestigeAvailability,
        isPrestigeComboValid,
        getAllPrestigeAttachmentsForWeapon,
        hasPrestigeInCategory
    };
}