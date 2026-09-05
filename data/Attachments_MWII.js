// ============================================
// ATTACHMENTS DATA - Modern Warfare II (2022)
// ============================================

window.ATTACHMENTS_MWII = {
    // === OPTICS ===
    optics: {
            name: 'Optics',
            category: 'optics',
            items: [
                { id: 'chrios_holo', name: 'Chrios Holo', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'Victus XMR', 'Basilisk'], exclude: ['FSS Hurricane'] },
                { id: 'df105_reflex_sight', name: 'DF105 Reflex Sight', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto', '.50 GS', 'GS Magna', 'Basilisk'], exclude: ['FSS Hurricane', 'KV Broadside'] },
                { id: 'aim_op_v4', name: 'Aim OP-V4', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto', '.50 GS', 'FTAC Siege', 'GS Magna', 'Basilisk'] },
                { id: 'xrk_on_point_optic', name: 'XRK On-Point Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P890', 'X12', '9mm Daemon', 'GL', 'S'] },
                { id: 'monocle_ct90', name: 'Monocle CT90', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'sz_recharge_dx', name: 'SZ Recharge-DX', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P890', 'X12', '9mm Daemon', 'GL', 'S'] },
                { id: 'corvus_sol_76', name: 'Corvus Sol-76', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P890', 'X12', '9mm Daemon', 'GL', 'S'] },
                { id: 'sz_sro_7', name: 'SZ SRO-7', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'corio_re_x_pro', name: 'Corio RE-X Pro', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'jak_glassless_optic', name: 'JAK Glassless Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P', 'GL', 'S'] },
                { id: 'quarters_classic_reflex', name: 'Quarters Classic Reflex', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P', 'GL', 'S'] },
                { id: 'qtg_reflex_sight', name: 'QTG Reflex Sight', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P890', 'X12', 'FTAC Siege', 
                    '.50 GS', 'GS Magna', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'fss_spectre_microtherm', name: 'FSS Spectre Microtherm', compatibility: 'all', exclude: ['SR', '.50 GS', 'GS Magna', 'X12', 'X13 Auto', 'FTAC Siege', 'GL', 'S'] },
                { id: 'jak_nrg_iv_optic', name: 'JAK NRG-IV Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'Kastov-74u', 'FSS Hurricane', 'SG', 
                    'P890', 'X12', 'Basilisk', 'FTAC Siege', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'caucasus_reflex_sight', name: 'Caucasus Reflex Sight', compatibility: 'all', exclude: ['SR', 'P890', 'X12', 'FTAC Siege', '.50 GS', 'GS Magna', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'mk_3_reflector', name: 'MK. 3 Reflector', compatibility: 'all', exclude: ['SR', 'P890', 'X12', 'FTAC Siege', '.50 GS', 'GS Magna', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'nydar_model_2023', name: 'Nydar Model 2023', compatibility: 'all', exclude: ['SR', 'P890', 'X12', 'FTAC Siege', '.50 GS', 'GS Magna', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'dragons_eye_optic', name: 'Dragons Eye Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'Victus XMR', 'MCPR-300', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'cronen_intlas_msp_12', name: 'Cronen INTLAS MSP-12', compatibility: 'all', exclude: ['SR', 'GL', 'S'], conflicts: ['category:lasers'] },
                { id: 'kr_v4_1x_riser', name: 'KR V4 1X Riser', compatibility: 'all', exclude: ['SR', 'FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'sz_lonewolf_optic', name: 'SZ Lonewolf Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'bpz40_hybrid', name: 'BPZ40 Hybrid', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'], coflicts: ['level_aim_bipod', 'cornerstone_bipod', 'xten_stable_shot', 'hardstance_bipod'] },
                { id: 'sz_vortex_90', name: 'SZ Vortex-90', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'hybrid_firepoint', name: 'Hybrid Firepoint', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'sz_oscar_9', name: 'SZ Oscar-9', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'thermo_optic_x9', name: 'Thermo-Optic X9', compatibility: 'all', exclude: ['Lachmann Shroud', '556 Icarus', 'FSS Hurricane', 'Lachmann Sub', 'P', 'GL', 'S'] },
                { id: 'angel_40_4_8x', name: 'Angel-40 4.8x', compatibility: 'all', exclude: ['SMG', 'RPK', 'SAKIN MG38', '556 Icarus', 'RAPP H', 'MMR', 'Carrack .300', 'HCR 56', 'SG', 'P', 'GL', 'S'] },
                { id: 'teplo_clear_shot', name: 'Teplo Clear Shot', compatibility: 'all', exclude: ['FSS Hurricane', '556 Icarus', 'P', 'GL', 'S'], coflicts: ['level_aim_bipod', 'cornerstone_bipod', 'xten_stable_shot', 'hardstance_bipod'] },
                { id: 'corio_enforcer_optic', name: 'Corio Enforcer Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'P890', 'X12', '9mm Daemon', 'FTAC Siege', 'GL', 'S'] },
                { id: 'dr582_hybrid_sight', name: 'DR582 Hybrid Sight', compatibility: 'all', exclude: ['Lockwood Mk2', 'MCPR-300', 'FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'heinrichter_hybrid_scope', name: 'Heinrichter Hybrid Scope', compatibility: 'all', exclude: ['SMG', 'RAAL MG', 'SG', 'P', 'GL', 'S'] },
                { id: 'sz_battle_optic', name: 'SZ Battle Optic', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'kazan_holo', name: 'Kazan-Holo', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'sz_hm5_precision_hybrid_optic', name: 'SZ HM5 Precision Hybrid Optic', compatibility: 'all', exclude: ['SMG', 'SG', 'RAAL MG', 'P', 'GL', 'S'] },
                { id: 'corvus_downrange_00', name: 'Corvus Downrange-00', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL'] },
                { id: 'sz_holotherm', name: 'SZ Holotherm', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'xten_angel_40', name: 'XTEN Angel-40', compatibility: 'all', exclude: ['SP-X 80', 'LA-B 330', 'Carrack .300', 'FJX Imperium', 'MCPR-300', 'FSS Hurricane', 'P890', 'X12', 'FTAC Siege', '9mm Daemon', 'GL', 'S'] },
                { id: 'aw_gen_1_optic', name: 'AW Gen.1 Optic', compatibility: 'all', exclude: ['SR', 'P', 'GL', 'S'] },
                { id: 'ares_clear_shot', name: 'Ares Clear Shot', compatibility: 'all', exclude: ['Kastov-74u', 'SG', 'SMG', 'RAAL MG', 'RPK', 'SAKIN MG38', 'P', 'GL', 'S'] },
                { id: 'kr_minitac_40_riser', name: 'KR Minitac-40 Riser', compatibility: 'all', exclude: ['SR', 'FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'sz_sigma_iv_optic', name: 'SZ Sigma-IV Optic', compatibility: 'all', exclude: ['SR', '.50 GS', 'GS Magna', 'Basilisk', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: 'schlager_3_4x', name: 'Schlager 3.4x', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'vlk_4_0_optic', name: 'VLK 4.0 Optic', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'tx4_havoc', name: 'TX4 Havoc', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'forge_tac_delta_4', name: 'Forge Tac Delta 4', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'sz_bullseye_optic', name: 'SZ Bullseye Optic', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'cronen_zero_p_optic', name: 'Cronen Zero-P Optic', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'kr_intlas_lsj_3', name: 'KR INTLAS LSJ-3', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] , conflicts: ['category:lasers'] },
                { id: 'sz_aggressor_ir_optic', name: 'SZ Aggressor-IR Optic', compatibility: 'all', exclude: ['FSS Hurricane', '556 Icarus', 'P', 'GL', 'S'] },
                { id: 'aok_4_0x_rq_9_recon', name: 'AOK 4.0x RQ-9 Recon', compatibility: 'all', exclude: ['SR', 'FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'intlas_cas_14', name: 'INTLAS CAS-14', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'], conflicts: ['category:lasers'] },
                { id: 'kr_mortis_precision_2_5x', name: 'KR Mortis Precision 2.5x', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'corio_elt_10_2_5x', name: 'Corio ELT-10 2.5x', compatibility: 'all', exclude: ['FSS Hurricane', 'Victus XMR', 'P', 'GL', 'S'] },
                { id: 'tos_nightfall_2_5x_thermal_optic', name: 'TOS Nightfall 2.5x Thermal Optic', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'corio_eagleseye_2_5x', name: 'Corio Eagleseye 2.5x', compatibility: 'all', exclude: ['FSS Hurricane', 'Expedite 12', 'P', 'GL', 'S'] },
                { id: 'holo_craft_optic', name: 'Holo-Craft Optic', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'sl_truesight_2_5x', name: 'SL Truesight 2.5x', compatibility: 'all', exclude: ['FSS Hurricane', 'SG', 'P', 'GL', 'S'] },
                { id: 'kr_marauder_9_riser', name: 'KR Marauder 9 Riser', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'sz_minitac_40', name: 'SZ Minitac-40', compatibility: 'all', exclude: ['TAQ-M', 'SR', '.50 GS', 'GS Magna', 'Basilisk', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: 'schlager_night_view', name: 'Schlager Night View', compatibility: 'all', exclude: ['FSS Hurricane', '556 Icarus', 'P', 'GL', 'S'] },
                { id: 'teplo_op3_scope', name: 'Teplo-OP3 Scope', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'jak_bullseye', name: 'JAK Bullseye', compatibility: 'all', exclude: ['SR', 'SG', 'P', 'GL', 'S'] },
                { id: 'xten_erx_10_mini', name: 'XTEN ERX-10 Mini', compatibility: 'all', exclude: ['SR', 'P890', 'X12', 'FTAC Siege', '.50 GS', 'GS Magna', '9mm Daemon', 'X13 Auto', 'GL', 'S'] },
                { id: 'mors_dot_sight', name: 'MORS Dot Sight', compatibility: 'all', exclude: ['MCPR-300', 'Carrack .300', 'P', 'GL', 'S'] },
                { id: 'slimline_pro', name: 'Slimline Pro', compatibility: 'all', exclude: ['SR', '.50 GS', 'GS Magna', 'Basilisk', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: 'sz_mini', name: 'SZ Mini', compatibility: 'all', exclude: ['SR', '.50 GS', 'GS Magna', 'Basilisk', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: 'cronen_mini_pro', name: 'Cronen Mini Pro', compatibility: 'all', exclude: ['SR', '.50 GS', 'GS Magna', 'Basilisk', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: 'vx350_thermal_optic', name: 'VX350 Thermal Optic', compatibility: 'all', exclude: ['FSS Hurricane', 'RPK', 'SAKIN MG38', '556 Icarus', 'P', 'GL', 'S'] },
                { id: 'slate_reflector', name: 'Slate Reflector', compatibility: 'all', exclude: ['SR', 'RAPP H', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: '3x_rfl_optic', name: '3x RFL-Optic', compatibility: 'all', exclude: ['SMG', 'Kastov-74u', 'SG', 'SAKIN MG38', '556 Icarus', 'P', 'GL', 'S'] },
                { id: 'ftac_charlie_7', name: 'FTAC Charlie-7', compatibility: 'all', exclude: ['SMG', 'SG', 'RAAL MG', 'SAKIN MG38', '556 Icarus', 'Kastov-74u', 'P', 'GL', 'S'] },
                { id: 'corvus_ghostview', name: 'Corvus Ghostview', compatibility: 'all', exclude: ['FSS Hurricane', 'P', 'GL', 'S'] },
                { id: 'drexsom_prime_90', name: 'Drexsom Prime-90', compatibility: 'all', exclude: ['Kastov-74u', 'SG', 'SMG', 'RAAL MG', 'RPK', 'SAKIN MG38', 'P', 'GL', 'S'] },
                { id: 'hmw_20_optic', name: 'HMW-20 Optic', compatibility: 'all', exclude: ['Kastov-74u', 'SG', 'SMG', 'RAAL MG', 'SAKIN MG38', 'P', 'GL', 'S'] },
                { id: 'ds_farsight_11', name: 'DS Farsight 11', compatibility: 'all', exclude: ['Kastov-74u', 'SMG', 'SG', 'RAAL MG', 'RPK', 'SAKIN MG38', 'P', 'GL', 'S'] },
                { id: 'luca_bandera_scope', name: 'Luca Bandera Scope', compatibility: 'all', exclude: ['Kastov-74u', 'SMG', 'SG', 'RAAL MG', 'RPK', 'SAKIN MG38', 'P', 'GL', 'S'] },
                { id: 'vigilant_30_c_iron', name: 'Vigilant-30 C-Iron', compatibility: ['TAQ-56', 'STB 556', 'M13B', 'Tempus Torrent'] },
                { id: 'luca_canis_4x_optic', name: 'Luca Canis 4x Optic', compatibility: ['STB 556', 'MX9', 'HCR 56'] },
                { id: 'xten_intlas_as_7', name: 'XTEN INTLAS AS-7', compatibility: ['LMG', 'MMR', 'SR']  },
                { id: 'corio_sz_hs_800', name: 'Corio SZ-HS 800', compatibility: ['SR'] },
                { id: '6_3x_14x_carrack', name: '6.3x-14x Carrack', compatibility: ['SR'] },
                { id: 'corio_13x_vrs', name: 'Corio 13x VRS', compatibility: ['SR'], exclude: ['LA-B 330'] },
                { id: 'raptor_fvm40', name: 'Raptor-FVM40', compatibility: ['SR'], exclude: ['Carrack .300'] },
                { id: 'signal_50_8x', name: 'Signal 50 8x', compatibility: ['SR'] },
                { id: 'journeyman_32_scope', name: 'Journeyman-32 Scope', compatibility: ['SR'] },
                { id: 'imperium_12x', name: 'Imperium 12x', compatibility: ['SR'], exclude: ['FJX Imperium'] },
                { id: 'mcpr_300_9_5x', name: 'MCPR-300 9.5x', compatibility: ['SR'], exclude: ['MCPR-300'] },
                { id: 'mors_hexer_optic', name: 'MORS Hexer Optic', compatibility: ['MMR', 'SR'], exclude: ['SA-B 50'] },
                { id: 'akilina_lr_stalk_optic', name: 'Akilina LR-Stalk Optic', compatibility: ['MMR', 'SR'] },
                { id: '6x_short_zoom_optic', name: '6x Short-Zoom Optic', compatibility: ['MMR', 'SR'] }, 
                { id: 'kr_katt_50_8x_scope', name: 'KR KATT-50 8x Scope', compatibility: ['MMR', 'SR'] },
                { id: 'sz_ultra_11_5x', name: 'SZ Ultra 11.5x', compatibility: ['SR'] },
                { id: 'sightmax_clear_shot', name: 'Sightmax Clear Shot', compatibility: ['SR'], coflicts: ['level_aim_bipod', 'cornerstone_bipod', 'xten_stable_shot', 'hardstance_bipod'] },
                { id: 'sz_heatsource_800', name: 'SZ Heatsource 800', compatibility: ['MMR', 'SR'], exclude: ['Crossbow'] },
                { id: 'luca_field_6', name: 'Luca Field-6', compatibility: ['MMR', 'SR'] },
                { id: 'dxs_coriolis_v4', name: 'DXS Coriolis v4', compatibility: ['MMR', 'SR'] },
                { id: 'lachmann_impact_9', name: 'Lachmann Impact 9', compatibility: ['MMR', 'SR'] },
                { id: 'ftac_locus_sp', name: 'FTAC Locus SP', compatibility: ['MMR', 'SR'] },
                { id: 'sp_x_80_6_6x', name: 'SP-X 80 6.6x', compatibility: ['MMR', 'SR'], exclude: ['SP-X 80', 'LA-B 330'] },
                { id: 'hurricane_9_variable_optic', name: 'Hurricane 9 Variable Optic', compatibility: ['SR'] },
                { id: 'daunt_c80', name: 'Daunt-C80', compatibility: ['SG'] },
                { id: 'corio_rv500_optic', name: 'Corio RV500 Optic', compatibility: ['Basilisk'] },
                { id: 'cronen_irons', name: 'Cronen Irons', compatibility: ['MCPR-300']},
                { id: 'cronen_mini_red_dot', name: 'Cronen Mini Red Dot', compatibility: 'all', exclude: ['SR', '.50 GS', 'GS Magna', 'Basilisk', 'GL', 'S'], conflicts: ['impact_point'] },
                { id: 'victus_13x', name: 'Victus 13x', compatibility: ['SR'], exclude: ['Victus XMR'] },
                { id: 'corio_cqc_scope', name: 'Corio CQC Scope', compatibility: ['SG'] }
            ]
        },

        // === MUZZLES ===
        muzzles: {
                name: 'Muzzles',
                category: 'muzzles',
                items: [
                    { id: 'ster45_skyfury_compensator', name: 'STER45 Skyfury Compensator', compatibility: ['AR', 'HCR 56', '556 Icarus'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist']},
                    { id: 'ster45_skyfury_compensator_s', name: 'STER45 Skyfury Compensator S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'ster45_skyfury_compensator_l', name: 'STER45 Skyfury Compensator L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'LMG', 'MMR', 'SR'], exclude: ['HCR 56', '556 Icarus', 'Crossbow', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ster45_skyfury_compensator_xl', name: 'STER45 Skyfury Compensator XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'ster45_skyfury_compensator_xs', name: 'STER45 Skyfury Compensator XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'bruen_harmonic_suppressor_l', name: 'Bruen Harmonic Suppressor L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'LMG', 'MMR'], exclude: ['Lockwood Mk2', 'HCR 56', '556 Icarus', 'Crossbow', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'] } },
                    { id: 'quartermaster_suppressor', name: 'Quartermaster Suppressor', compatibility: ['AR', 'BR', 'SMG', 'LMG', 'MMR', 'SR'], exclude: ['Crossbow', 'Lachmann Shroud'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'] } },
                    { id: 'shadowstrike_suppressor', name: 'Shadowstrike Suppressor', compatibility: ['AR', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'RAAL MG', 'Crossbow',  'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'shadowstrike_suppressor_s', name: 'Shadowstrike Suppressor S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'shadowstrike_suppressor_l', name: 'Shadowstrike Suppressor L', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'SR'], exclude: ['Signal 50', 'Victus XMR'],
                        weaponRequirements: {'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'vt7_spiritfire_suppressor', name: 'VT-7 Spitfire Suppressor', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'vt7_spiritfire_suppressor_l', name: 'VT-7 Spitfire Suppressor L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'HCR 56', 'Signal 50', 'Crossbow', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'vt7_spiritfire_suppressor_xl', name: 'VT-7 Spitfire Suppressor XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'scratch_20_l_suppressor', name: 'Scratch 20-L Suppressor', compatibility: ['AR', 'BR', 'LMG', 'MMR'], exclude: ['Lockwood Mk2', 'SP-R 208', 'RAAL MG', 'SA-B 50'], 
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'hrmes_mod_suppressor', name: 'HRMES Mod Suppressor', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'hrmes_mod_suppressor_l', name: 'HRMES Mod Suppressor L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'hrmes_mod_suppressor_s', name: 'HRMES Mod Suppressor S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'hrmes_mod_suppressor_xs', name: 'HRMES Mod Suppressor XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'cronen_maw_86', name: 'Cronen MAW-86', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'monolithic_suppressor', name: 'Monolithic Suppressor', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'monolithic_suppressor_l', name: 'Monolithic Suppressor L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'Crossbow', 'HCR 56', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'monolithic_suppressor_xl', name: 'Monolithic Suppressor XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'monolithic_suppressor_s', name: 'Monolithic Suppressor S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'monolithic_suppressor_xs', name: 'Monolithic Suppressor XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'colossus_suppressor', name: 'Colossus Suppressor', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'colossus_suppressor_l', name: 'Colossus Suppressor L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'],
                        exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Signal 50', 'Victus XMR'],
                            weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'colossus_suppressor_s', name: 'Colossus Suppressor S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'colossus_suppressor_xl', name: 'Colossus Suppressor XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'colossus_suppressor_xs', name: 'Colossus Suppressor XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'cronen_dark_kx30', name: 'Cronen Dark KX30', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'RPK', 'SAKIN MG38', 'RAPP H', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'Lockwood Mk2'], 
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'dark_kx30', name: 'Dark KX30', compatibility: ['AR', 'FTAC Recon', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2', 'SR'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'Signal 50', 'Victus XMR', 'Carrack .300'] },
                    { id: 'l4r_flash_hider', name: 'L4R Flash Hider', compatibility: ['AR', 'BR', 'SMG', 'LMG', 'MMR', 'FTAC Siege'], exclude: ['Lachmann Shroud', 'Crossbow', 'RAAL MG', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'sonic_suppressor', name: 'Sonic Suppressor', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'sonic_suppressor_l', name: 'Sonic Suppressor L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'sonic_suppressor_s', name: 'Sonic Suppressor S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'sonic_suppressor_xl', name: 'Sonic Suppressor XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'sonic_suppressor_xs', name: 'Sonic Suppressor XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'zulu_60', name: 'Zulu-60', compatibility: ['AR', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Lockwood Mk2', 'Crossbow', 'RAAL MG'], weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 
                        'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'echoline_gs_x', name: 'Echoline GS-X', compatibility: ['AR', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'Lockwood Mk2', 'RAAL MG'], weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 
                        'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'zlr_talon_5', name: 'ZLR Talon 5', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'MMR'], exclude: ['FTAC Recon', 'Lockwood Mk2'], weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 
                        'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'fr_titan_silencer', name: 'FR Titan Silencer', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'polarfire_c', name: 'Polarfire-S', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'hasher_65_silencer', name: 'Husher-65 Silencer', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'kastovia_dx90', name: 'Kastovia DX90', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'tzl_90_v3', name: 'TZL-90 V3', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'RAAL MG', 'Crossbow', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'eight_point_flash_hider', name: 'Eight-Point Flash Hider', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'gl_clear_assault', name: 'GL Clear Breach', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Crossbow', 'RAAL MG', '556 Icarus', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'ta_hul_breech_kl', name: 'TA Hul-Breach KL', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'SMG', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 's_37c_dl_breacher_device', name: 'S-37C DL Breacher Device', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 's_37c_dl_breacher_device_s', name: 'S-37C DL Breacher Device S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 's_37c_dl_breacher_device_l', name: 'S-37C DL Breacher Device L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Lockwood Mk2', 'RAAL MG', '556 Icarus', 'HCR 56'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'] } },
                    { id: 'jak_bfb', name: 'JAK BFB', compatibility: ['AR', 'BR', 'SMG', 'LMG', 'MMR', 'SR'], exclude: ['Lachmann Shroud'], 
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ex_01_match_compensator', name: 'EX-01 Match Compensator', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'ex_01_match_compensator_l', name: 'EX-01 Match Compensator L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'Crossbow', 'HCR 56', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 't51r_billeted_brake', name: 'T51R Billeted Brake', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 't51r_billeted_brake_l', name: 'T51R Billeted Brake L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'Lockwood Mk2', 'RAAL MG', '556 Icarus', 'HCR 56'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 't51r_billeted_brake_s', name: 'T51R Billeted Brake S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'casus_brake', name: 'Casus Brake', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'casus_brake_l', name: 'Casus Brake L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'HCR 56', 'Signal 50', 'Victus XMR'], 
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'casus_brake_xl', name: 'Casus Brake XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 't4lr_sabre_compensator', name: 'T4LR Saber Compensator', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 't4lr_sabre_compensator_l', name: 'T4LR Saber Compensator L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'HCR 56', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 't4lr_sabre_compensator_s', name: 'T4LR Saber Compensator S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'elr_blackfire_compensator', name: 'ELR Blackfire Compensator', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'elr_blackfire_compensator_l', name: 'ELR Blackfire Compensator L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'HCR 56', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'elr_blackfire_compensator_s', name: 'ELR Blackfire Compensator S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'elr_blackfire_compensator_xl', name: 'ELR Blackfire Compensator XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'elr_blackfire_compensator_xs', name: 'ELR Blackfire Compensator XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'purifier_muzzle_brake', name: 'Purifier Muzzle Brake', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'purifier_muzzle_brake_l', name: 'Purifier Muzzle Brake L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR', 'SR'], exclude: ['556 Icarus', 'Crossbow', 'HCR 56', 'Signal 50', 'Victus XMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'purifier_muzzle_brake_s', name: 'Purifier Muzzle Brake S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'wraithguard_compensator', name: 'Wraithguard Compensator', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'wraithguard_compensator_l', name: 'Wraithguard Compensator L', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['556 Icarus', 'Crossbow', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'wraithguard_compensator_s', name: 'Wraithguard Compensator S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'zehmn35_compensated_flash_hider', name: 'ZEHMN35 Compensated Flash Hider', compatibility: ['AR', 'BR', 'SMG', 'LMG', 'MMR', 'SR', 'P'], exclude: ['Lachmann Shroud', 'Crossbow', '.50 GS', 'Basilisk', 'GS Magna'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'sakin_tread_40', name: 'Sakin Tread-40', compatibility: ['AR', 'BR', 'LMG', 'MMR'], exclude: ['FTAC Recon', 'RAAL MG',  'Crossbow', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'sa_leveler_55', name: 'SA Leveler 55', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['RAAL MG', '556 Icarus', 'Crossbow', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'ty_lr8', name: 'TY-LR8', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['RAAL MG', '556 Icarus', 'Crossbow', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'lockshot_kt85', name: 'Lockshot KT85', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'SMG', 'LMG', 'MMR'], exclude: ['RAAL MG', '556 Icarus', 'Crossbow', 'HCR 56', 'Lockwood Mk2'],
                            weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'cronen_sp_dr', name: 'Cronen SP-DR', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG'], exclude: ['RAAL MG', '556 Icarus', 'Crossbow', 'HCR 56'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'bore_490', name: 'Bore-490', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['RAAL MG', '556 Icarus', 'Crossbow', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'tempus_gh50', name: 'Tempus GH50', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'BR', 'LMG', 'MMR'], exclude: ['RAAL MG', '556 Icarus', 'Crossbow', 'HCR 56', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] } },
                    { id: 'corvus_slash_gen_2', name: 'Corvus Slash Gen. 2', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'vlk_koloss_flash_hider', name: 'VLK Koloss Flash Hider', compatibility: ['AR', '556 Icarus', 'HCR 56'], exclude: ['Kastov 762', 'Chimera', 'TR-76 Geist'] },
                    { id: 'xten_rr_40', name: 'XTEN RR-40', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'exf_huntress_90', name: 'EXF Huntress-90', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'xten_black_kite', name: 'XTEN Black Kite', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'bruen_pendulum', name: 'Bruen Pendulum', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'avr_t90_comp', name: 'AVR-T90 Comp', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'lacerta_compensator', name: 'Lacerta Compensator', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'xrk_sandstorm', name: 'XRK Sandstorm', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'bruen_cubic_comp', name: 'Bruen Cubic Comp', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'fdx_202_flash_hider', name: 'FDX-202 Flash Hider', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'singvard_mkv', name: 'Singuard MKV', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'sa_schalldampfer_99', name: 'SA Schalldämpfer 99', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'xten_razor_comp', name: 'XTEN Razor Comp', compatibility: ['SMG'], exclude: ['Lachmann Shroud'] },
                    { id: 'the_trebuchet_brake', name: 'The Trebuchet Brake', compatibility: ['SMG'], exclude: ['Lachmann Shroud'] },
                    { id: 'ecs_requieter_suppressor', name: 'ECS Requieter Suppressor', compatibility: ['SMG'], exclude: ['Lachmann Shroud'], conflicts: ['category:lasers'] },
                    { id: 'spiral_v35_flash_hider', name: 'Spiral V3.5 Flash Hider', compatibility: ['SMG'], exclude: ['Lachmann Shroud'] },
                    { id: 'xrk_knockout_breach', name: 'XRK KnockOut Breach', compatibility: ['SMG'], exclude: ['Lachmann Shroud'] },
                    { id: 'caster_x1_compensator', name: 'Caster-X1 Compensator', compatibility: ['Kastov 762', 'Chimera', 'TR-76 Geist', 'SO-14', 'TAQ-V', 'Lachmann-762', 'Cronen Squall', 'RPK', 'RAPP H', 'MMR'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'KV Broadside': ['jak_jawbreaker'] }, exclude: ['Lockwood Mk2'] },
                    { id: 'bruen_agent_90', name: 'Bruen Agent 90', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80', 'Signal 50', 'Victus XMR'], 
                        lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ftac_reaper', name: 'FTAC Reaper', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ftac_dreadnought', name: 'FTAC Dreadnought', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'talon_sixtin', name: 'Talon Sixteen', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80', 'Signal 50', 'Victus XMR'], 
                        lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'nilsound_90', name: 'Nilsound 90', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80', 'Signal 50', 'Victus XMR'], 
                        lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ported_dz38r', name: 'Ported DZ38', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ta_cg76', name: 'TA CG76', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ap_390_flash_hider', name: 'AP-390 Flash Hider', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'bvm_338', name: 'BVM-338', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'xrk_kraken', name: 'XRK Kraken', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'shred_cp90', name: 'Shred CP90', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'cronen_dm338', name: 'Cronen DM338', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'exf_relentless_40', name: 'EXF Relentless-40', compatibility: ['FTAC Recon', 'RAAL MG', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'], lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 't7_demon_helix', name: 'Demon Helix T7', compatibility: ['FTAC Recon', 'Lockwood Mk2', 'MCPR-300', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'echoless_80', name: 'Echoless-80', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'harbinger_d20', name: 'Harbinger D20', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'broadhead_3dp', name: 'Broadhead 3DP', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'silentfire_xg6', name: 'Silentfire XG6', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'fss_covert_v', name: 'FSS Covert V', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'jcz_390_muzzle_device', name: 'JCZ-390 Muzzle Device', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'endless_30_compensator', name: 'Endless 30 Compensator', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545', 'SMG'] },
                    { id: 'c400_door_knocker', name: 'C400 Door Knocker', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'rf_crown_50', name: 'RF Crown 50', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'ftac_castle_comp', name: 'FTAC Castle Comp', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545', 'SMG'], 
                        exclude: ['Lachmann Shroud'] },
                    { id: 'xten_havoc_90', name: 'XTEN Havoc 90', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'cronen_op44', name: 'Cronen OP44', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'xten_ported_290', name: 'XTEN Ported 290', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'fjx_fulcrum_pro', name: 'FJX Fulcrum Pro', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'komodo_heavy', name: 'Komodo Heavy', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'gauge_9_mono', name: 'Gauge-9 Mono', compatibility: ['TAQ-56', 'M4', 'STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'M13C', 'Lachmann-556', 'M16', 'Kastov-74u', 'Kastov 545'] },
                    { id: 'hole_punch_breacher', name: 'Hole Punch Breacher', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'sa_gf90_flash_hider', name: 'SA GF90 Flash Hider', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'cn30_suppressor', name: 'CN30 Suppressor', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'forge_dx90', name: 'Forge DX90-F', compatibility: ['SMG', 'FTAC Siege', 'P890', 'X12', '9mm Daemon', 'X13 Auto'], exclude: ['Lachmann Shroud'] },
                    { id: 'ft_steel_fire', name: 'FT Steel Fire', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'xrk_qz_105', name: 'XRK QZ-105', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'bruen_tri_port', name: 'Bruen Tri-Port', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'vp27_mini_s', name: 'VP27 Mini Brake S', compatibility: ['SMG', 'FTAC Siege'], exclude: ['Lachmann Shroud'] },
                    { id: 'vp27_mini_xs', name: 'VP27 Mini Brake XS', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'corvus_series_d', name: 'Corvus Series-D', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'dzs_open_compensator', name: 'DZS Open Comp', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'xrk_ventor_900', name: 'XRK Ventor-900', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'slab_10_compensator', name: 'Slab-10 Comp', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: '905f_pistol_comp', name: 'Comp 905F Pistol', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'forge_dx30_s', name: 'Forge DX30-S', compatibility: ['P890', 'X12', '9mm Daemon', 'X13 Auto'] },
                    { id: 'matuzek_crown', name: 'Matuzek Crown', compatibility: ['.50 GS', 'GS Magna'] },
                    { id: 'sa_peak_77', name: 'SA Peak-77', compatibility: ['.50 GS', 'GS Magna'] },
                    { id: 'gw_flash_fifty', name: 'GW Flash Fifty', compatibility: ['.50 GS', 'GS Magna'] },
                    { id: 'potato_masher', name: 'Potato Masher', compatibility: ['.50 GS', 'GS Magna'] },
                    { id: 'ftac_fifty_comp', name: 'FTAC Fifty Comp', compatibility: ['.50 GS', 'GS Magna'] },
                    { id: 'exf_fifty_gs', name: 'EXF Fifty GS', compatibility: ['.50 GS', 'GS Magna'] },
                    { id: 'fss_covert_iv', name: 'FSS Covert IV', compatibility: ['SMG', 'FTAC Siege'] },
                    { id: 'rvs607_compensator', name: 'RVS607 Compensator', compatibility: ['Basilisk'] },
                    { id: 'ftac_h50_ported', name: 'FTAC H50 Ported', compatibility: ['Basilisk'] },
                    { id: 'fss_kl30', name: 'FSS KL30', compatibility: ['Basilisk'] },
                    { id: 'fss_vmw_flash_hider', name: 'FSS VMW Flash Hider', compatibility: ['Basilisk'] },
                    { id: 'sa_mx_50', name: 'SA MX-50', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'],
                        weaponRequirements: {'Chimera': ['10_sa_phoenix', '55_exf_op_40', '65_exf_vorpal'], 'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'mack_8_frostbite', name: 'MACK8 Frost Bite', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'],
                        weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] }, lockedWith: {'MX Guardian': ['jak_lance'] } },
                    { id: 'xten_full_choke', name: 'XTEN Full Choke', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ftac_tridentcore', name: 'FTAC Tridentcore', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'lockwood_smoothfire_12', name: 'Lockwood Smoothfire 12', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ovl_70_comp', name: 'OVL-70 Comp', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'rmge_7', name: 'RMGE-7', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'sr70_taq_brake', name: 'SR70 TAQ Brake', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'bryson_improved_choke', name: 'Bryson Improved Choke', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'flash_twist_90', name: 'Flash Twist-90', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'sa_schwelgen_dx', name: 'SA Schweigen DX', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'sa_schwelgen_xs', name: 'SA Schwelgen XS', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'bryson_choke', name: 'Bryson Choke', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'xten_quadflash', name: 'XTEN Quadflash', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'vulture_claw_breacher', name: 'Vulture Claw Breacher', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], lockedWith: {'MX Guardian': ['jak_lance'] }, 
                        weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'fss_thunderstrike', name: 'FSS Thunderstrike Brake', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'dr_77_ironhead', name: 'DR-77 Ironhead Brake', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'long_50', name: 'Long Haul 50', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890'] },
                    { id: 'wolf_call_300', name: 'Wolfcall 300', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890'] },
                    { id: 'xten_modified_choke', name: 'XTEN Modified Choke', compatibility: ['KV Broadside', 'Expedite 12', 'Bryson 800', 'MX Guardian', 'Bryson 890'] },
                    { id: 'mack_8', name: 'Mack8 Shotgun Breach', compatibility: ['Lockwood 300'] },
                    { id: 'db_dread', name: 'DB-Dread Comp', compatibility: ['Lockwood 300'] },
                    { id: 'reckoner_comp', name: 'Reckoner Comp', compatibility: ['Lockwood 300'] },
                    { id: 'sakin_db107', name: 'Sakin DB107', compatibility: ['Lockwood 300'] },
                    { id: 'tempus_vox', name: 'Tempus Vox', compatibility: ['Lockwood 300'] },
                    { id: 'db_big_bore', name: 'DB-Big Bore Comp', compatibility: ['Lockwood 300'] },
                    { id: 'xten_v2_choke', name: 'XTEN V2.0 Choke', compatibility: ['Lockwood 300'] },
                    { id: 'bryson_series_ix_choke', name: 'Bryson Series IX Choke', compatibility: ['Lockwood 300'] },
                    { id: 'xten_v1_3_choke', name: 'XTEN V1.3 Choke', compatibility: ['Lockwood 300'] },
                    { id: 'bryson_series_xii_choke', name: 'Bryson Series XII Choke', compatibility: ['Lockwood 300'] },
                    { id: 'gw_max_99', name: 'GW Max-99', compatibility: ['Lockwood 300'] },
                    { id: 'bruen_l40_cobra', name: 'Bruen L40 Kobra', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'mammoth_50', name: 'Mammoth 50 Suppressor', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'sa_shroud_flash_hider', name: 'SA Shroud Flash Hider', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'mv50_muzzle_brake', name: 'MV50 Muzzle Brake', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'demon_helix_xl', name: 'Demon Helix XL', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'h26_ported_comp', name: 'H26 Ported Comp', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'legion_fire_comp', name: 'Legion Fire Comp', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'vigilant_comp', name: 'Vigilante Comp', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'bruen_counter_ops', name: 'Bruen Counter-Ops', compatibility: ['Signal 50', 'Victus XMR'] },
                    { id: 'sa_mx_50', name: 'SA MX-50', compatibility: ['Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'crown_breaker_choke', name: 'Crown Breaker Choke', compatibility: ['Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'tectonica_suppressor', name: 'Tectonica Suppressor', compatibility: ['Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                    { id: 'ft_siege_control', name: 'FT Siege Control', compatibility: ['FTAC Siege'] },
                    { id: 'xrk_nightfall_suppressor_xl', name: 'XRK Nightfall Suppressor XL', compatibility: ['Victus XMR', 'Signal 50'] },
                    { id: 'shikra_silencer', name: 'Shikra Silencer', compatibility: ['Fennec 45'] }
                ]
            },
            
        // === BARRELS ===
        barrels: {
            name: 'Barrels',
            category: 'barrels',
            items: [
                { id: '14_carbine_shroud', name: '14" Carbine Shroud', compatibility: ['M4', 'M16'] },
                { id: '75_tempus_firebrand', name: '7.5" Tempus Firebrand', compatibility: ['M4', 'FTAC Recon'], conflicts: ['corvus_torch', 'corvus_masterkey', 'spw_40mm_drill', 'spw_40mm_he', 'level_aim_bipod', 'cornerstone_bipod', 'xten_stable_shot'] },
                { id: 'tempus_trench_pro', name: 'Tempus Trench Pro', compatibility: ['M4', 'FTAC Recon'] },
                { id: '419mm_exf_barrel', name: '419mm EXF Barrel', compatibility: ['M4', 'FTAC Recon'] },
                { id: 'hightower_20_barrel', name: 'Hightower 20" Barrel', compatibility: ['M4'] },
                { id: '115_t_h4_barrel', name: '11.5" T-H4 Barrel', compatibility: ['M4', 'M16'] },
                { id: '115_carbine_shroud', name: '11.5" Carbine Shroud', compatibility: ['M4', 'M16'] },
                { id: 'demo_501_factory', name: 'Demo 501 Factory', compatibility: ['M16'] },
                { id: 'bull_rider_165', name: 'Bull Rider 16.5"', compatibility: ['FTAC Recon'], conflicts: ['category:muzzles'] },
                { id: '12_tacshort_barrel', name: '12" Tacshort Barrel', compatibility: ['TAQ-56'] },
                { id: '175_tundra_pro_barrel', name: '17.5" Tundra Pro Barrel', compatibility: ['TAQ-56'] },
                { id: 'kas_10_584mm_barrel', name: 'KAS-10 584mm Barrel', compatibility: ['Kastov 762', 'RPK'] },
                { id: 'kas_7_406mm', name: 'KAS-7 406mm', compatibility: ['Kastov 762', 'Kastov 545', 'RPK'] },
                { id: 'ig_k30_406mm', name: 'IG-K30 406mm', compatibility: ['Kastov 762', 'Kastov 545'] },
                { id: 'kastovia_343', name: 'Kastovia 343', compatibility: ['Kastov 762'] },
                { id: '342mm_sakin_kl', name: '342mm Sakin KL', compatibility: ['Kastov 762', 'Kastov 545'] },
                { id: 'kastovia_406', name: 'Kastovia 406', compatibility: ['Kastov 545'] },
                { id: 'bruen_turaco_686mm', name: 'Bruen Turaco 686mm', compatibility: ['STB 556', 'HCR 56'], conflicts: ['category:muzzles'] },
                { id: 'ftac_fb20', name: 'FTAC FB20', compatibility: ['STB 556'] },
                { id: '18_bruen_guerilla', name: '18" Bruen Guerilla', compatibility: ['STB 556', 'HCR 56'] },
                { id: '20_bruen_s_620', name: '20" Bruen S-620', compatibility: ['STB 556', 'HCR 56'], conflicts: ['bruen_heavy_bipod'] },
                { id: '508mm_rear_guard', name: '508mm Rear Guard', compatibility: ['STB 556', 'MX9'] },
                { id: '165_bruen_s901_barrel', name: '16.5" Bruen S901 Barrel', compatibility: ['STB 556', 'MX9'] },
                { id: '165_stb_factory', name: '16.5" STB Factory', compatibility: ['MX9'] },
                { id: 'ftac_hornet_20_barrel', name: 'FTAC Hornet 20" Barrel', compatibility: ['HCR 56'] },
                { id: '159_lachmann_rapp_barrel', name: '15.9" Lachmann RAPP Barrel', compatibility: ['Lachmann-556', 'Lachmann-762'] },
                { id: 'lachmann_nova', name: 'Lachmann Nova', compatibility: ['Lachmann-556', 'Lachmann-762', 'RAPP H', 'LM-S'] },
                { id: 'lm_aurora_90_barrel', name: 'LM Aurora 90 Barrel', compatibility: ['Lachmann-556', 'Lachmann-762'] },
                { id: '106_lachstrike_barrel', name: '10.6" Lachstrike Barrel', compatibility: ['Lachmann-556', 'Lachmann-762', 'RAPP H'] },
                { id: 'lach_12_barrel', name: 'Lach-12 Barrel', compatibility: ['Lachmann-556'] },
                { id: 'romeo_ft_16_barrel', name: 'Romeo FT 16" Barrel', compatibility: ['Lachmann-762', 'RAPP H'] },
                { id: 'meer_56_11_factory', name: 'Meer-56 11" Factory', compatibility: ['Lachmann-762', 'RAPP H'] },
                { id: 'meer_76_449mm_factory', name: 'Meer-76 449mm Factory', compatibility: ['LM-S'] },
                { id: 'sa_ultra_iii', name: 'SA Ultra III', compatibility: ['Kastov-74u'] },
                { id: 'shorttac_190mm', name: 'ShortTac 190mm', compatibility: ['Kastov-74u'] },
                { id: 'br209_barrel', name: 'BR209 Barrel', compatibility: ['Kastov-74u'] },
                { id: 'kstv_17', name: 'KSTV-17', compatibility: ['Kastov-74u'] },
                { id: '14_bruen_echelon', name: '14" Bruen Echelon', compatibility: ['M13B', 'M13C'] },
                { id: '7_bruen_b_m20', name: '7" Bruen B-M20', compatibility: ['M13B', 'M13C'] },
                { id: 'm13c_factory_barrel', name: 'M13C Factory Barrel', compatibility: ['M13B'] },
                { id: '10_bruen_fct_6', name: '10" Bruen FCT-6', compatibility: ['M13C'] },
                { id: '10_sa_phoenix', name: '10" SA Phoenix', compatibility: ['Chimera'] },
                { id: '55_exf_op_40', name: '5.5" EXF OP-40', compatibility: ['Chimera'] },
                { id: '65_exf_vorpal', name: '6.5" EXF Vorpal', compatibility: ['Chimera'] },
                { id: 'rcq_7', name: 'RCQ-7', compatibility: ['ISO Hemlock'] },
                { id: 'series_4_mr', name: 'Series 4-MR', compatibility: ['ISO Hemlock'] },
                { id: 'cipher_121', name: 'Cipher-121', compatibility: ['ISO Hemlock'], conflicts: ['category:muzzles'] },
                { id: 'lr_30_56', name: 'LR-30/56', compatibility: ['ISO Hemlock'] },
                { id: 'fielder_t50', name: 'Fielder-T50', compatibility: ['ISO Hemlock'] },
                { id: '18_tack_2l', name: '18" Tack-2L', compatibility: ['Tempus Razorback'] },
                { id: '13_frenzy_ix', name: '13" Frenzy IX', compatibility: ['Tempus Razorback'] },
                { id: '16_tankr_v', name: '16" Tankr-V', compatibility: ['Tempus Razorback'] },
                { id: '17_io_xl', name: '17" IO-XL', compatibility: ['Tempus Razorback'], conflicts: ['category:optics'] },
                { id: '600mm_fr_longbore', name: '600mm FR Longbore', compatibility: ['FR Avancer'] },
                { id: '435mm_fr435', name: '435mm FR435', compatibility: ['FR Avancer'] },
                { id: '395mm_fr_minibore', name: '395mm FR Minibore', compatibility: ['FR Avancer'] },
                { id: 'bruen_bridle_60', name: 'Bruen Bridle 60', compatibility: ['TR-76 Geist'] },
                { id: 'loc5_long_barrel', name: 'LOC.5 Long Barrel', compatibility: ['TR-76 Geist'] },
                { id: 'loc2_short_barrel', name: 'LOC.2 Short Barrel', compatibility: ['TR-76 Geist'] },
                { id: 'bruen_bridle_heavy', name: 'Bruen Bridle Heavy', compatibility: ['TR-76 Geist'] },
                { id: 'freight_40_barrel', name: 'Freight-40 Barrel', compatibility: ['TR-76 Geist'], conflicts: ['category:muzzles'] },
                { id: '22_factory_fourteen_barrel', name: '22" Factory Fourteen Barrel', compatibility: ['SO-14'] },
                { id: '22_boremaster_barrel', name: '22" Boremaster Barrel', compatibility: ['SO-14', 'EBR-14'] },
                { id: '18_t300_barrel', name: '18" T300 Barrel', compatibility: ['SO-14', 'EBR-14'] },
                { id: '16_chrome_lined_rfx40_barrel', name: '16" Chrome-lined RFX40 Barrel', compatibility: ['SO-14', 'EBR-14'] },
                { id: 'lance_50_12_barrel', name: 'Lance-50 12" Barrel', compatibility: ['TAQ-V'] },
                { id: '18_precision_6_barrel', name: '18" Precision-6 Barrel', compatibility: ['TAQ-V'] },
                { id: 'sb68_16', name: 'SB6.8 16"', compatibility: ['Cronen Squall'] },
                { id: 'lr68_22', name: 'LR6.8 22"', compatibility: ['Cronen Squall'] },
                { id: 'hr68_barrel', name: 'HR6.8 Barrel', compatibility: ['Cronen Squall'] },
                { id: 'schlager_rv_b', name: 'Schlager RV-B', compatibility: ['VEL 46'] },
                { id: 'tango_228_barrel', name: 'Tango 228 Barrel', compatibility: ['VEL 46'] },
                { id: 'schlager_l203_barrel', name: 'Schlager L203 Barrel', compatibility: ['VEL 46'] },
                { id: 'lach_dx_203mm', name: 'Lach-DX 203mm', compatibility: ['VEL 46'] },
                { id: 'lachmann_dart_165mm', name: 'Lachmann Dart 165mm', compatibility: ['VEL 46'] },
                { id: 'lach_152_zulu', name: 'Lach-152 Zulu', compatibility: ['VEL 46'] },
                { id: 'lm_series_7', name: 'LM Series-7', compatibility: ['VEL 46'] },
                { id: '95_duke_30', name: '9.5" Duke-30', compatibility: ['PDSW 528'], conflicts: ['category:underbarrels'] },
                { id: 'ftac_series_ix_145', name: 'FTAC Series IX 14.5"', compatibility: ['PDSW 528'], conflicts: ['category:underbarrels'] },
                { id: 'ftac_defense_145', name: 'FTAC Defense 14.5"', compatibility: ['PDSW 528'] },
                { id: '17_corvus_prorange', name: '17" Corvus ProRange', compatibility: ['PDSW 528'] },
                { id: '16_cloak_90', name: '16" Cloak 90', compatibility: ['PDSW 528'], conflicts: ['category:muzzles'] },
                { id: '1875_cloak_90', name: '18.75" Cloak 90', compatibility: ['PDSW 528'], conflicts: ['category:muzzles'] },
                { id: 'ftac_85_recon', name: 'FTAC 8.5" Recon', compatibility: ['Fennec 45'] },
                { id: 'forge_tac_ninja', name: 'Forge Tac Ninja', compatibility: ['Fennec 45'], conflicts: ['category:muzzles'] },
                { id: 'fennec_covert_force', name: 'Fennec Covert Force', compatibility: ['Fennec 45'], conflicts: ['category:muzzles'] },
                { id: 'zlr_165_ignition_barrel', name: 'ZLR 16.5" Ignition Barrel', compatibility: ['Fennec 45'] },
                { id: '55_fennec_minitac', name: '5.5" Fennec Minitac', compatibility: ['Fennec 45'] },
                { id: 'ftac_m_sub_12', name: 'FTAC M-SUB 12"', compatibility: ['Lachmann Sub'] },
                { id: 'lachmann_pulsar', name: 'Lachmann Pulsar', compatibility: ['Lachmann Sub'], conflicts: ['commando_foregrip', 'edge_47_grip', 'demo_firm_grip', 'xten_gravedigger', 'ftac_ripper_56', 'demo_cleanshot_40', 'demo_imp_44_grip', 'ftac_tiger_grip',
                    'phase_3_grip', 'xten_drop_grip', 'bruen_sync_shot_grip', 'agent_grip', 'fss_sharkfin_90', 'ftac_sp_10_angled_grip', 'paracord_grip', 'ftac_rs_9_stealth_angled_grip', 'bruen_bastion_angled_grip', 'chewk_angled_grip', 'xten_tx_12_handstop',
                        'dr_6_handstop', 'xten_phantom_5_handstop', 'xrk_bw_4_handstop', 'ftac_msp_98_handstop', 'bruen_heavy_support_grip', 'xten_nexus_grip'] },
                { id: 'l38_falcon_226mm', name: 'L38 Falcon 226mm', compatibility: ['Lachmann Sub'] },
                { id: 'kas_1_254mm', name: 'KAS-1 254mm', compatibility: ['Vaznev-9K'] },
                { id: 'sa_response_iii', name: 'SA Response III', compatibility: ['Vaznev-9K'] },
                { id: 'bak_9_279mm_barrel', name: 'BAK-9 279mm Barrel', compatibility: ['Minibak'] },
                { id: 'fss_x7_barrel', name: 'FSS-X7 Barrel', compatibility: ['FSS Hurricane'], conflicts: ['category:muzzles'] },
                { id: 'fss_cannonade_16', name: 'FSS-Cannonade 16"', compatibility: ['FSS Hurricane'] },
                { id: '12_bruen_sz_36', name: '12" Bruen SZ-36', compatibility: ['BAS-P'] },
                { id: '65_bruen_drake', name: '6.5" Bruen Drake', compatibility: ['BAS-P'] },
                { id: '105_bruen_typhon', name: '10.5" Bruen Typhon', compatibility: ['BAS-P'], conflicts: ['category:muzzles'] },
                { id: '4_thunderfire', name: '4" Thunderfire', compatibility: ['BAS-P'], conflicts: ['category:underbarrels'] },
                { id: '4_frame_s_1', name: '4" Frame S-1', compatibility: ['ISO 45'], conflicts: ['commando_foregrip', 'edge_47_grip', 'demo_firm_grip', 'xten_gravedigger', 'ftac_ripper_56', 'demo_cleanshot_40', 'demo_imp_44_grip', 'ftac_tiger_grip',
                    'phase_3_grip', 'xten_drop_grip', 'bruen_sync_shot_grip', 'agent_grip', 'fss_sharkfin_90', 'ftac_sp_10_angled_grip', 'paracord_grip', 'ftac_rs_9_stealth_angled_grip', 'bruen_bastion_angled_grip', 'chewk_angled_grip', 'xten_tx_12_handstop',
                        'dr_6_handstop', 'xten_phantom_5_handstop', 'xrk_bw_4_handstop', 'ftac_msp_98_handstop', 'bruen_heavy_support_grip', 'xten_nexus_grip'] },
                { id: '7_ex_raptor_v2', name: '7" EX Raptor-V2', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: '9_ptx_trainer', name: '9" PTX Trainer', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: '16_xlb_s', name: '16" XLB-S', compatibility: ['ISO 45', 'ISO 9mm'], conflicts: ['category:muzzles'] },
                { id: 'iso_45_factory', name: 'ISO 45 Factory', compatibility: ['ISO 9mm'] },
                { id: '6_axeblade', name: '6" Axeblade', compatibility: ['ISO 45', 'ISO 9mm'], conflicts: ['category:muzzles'] },
                { id: '170mm_grapple_vi', name: '170mm Grapple VI', compatibility: ['Lachmann Shroud'] },
                { id: '114mm_darkstar', name: '114mm Darkstar', compatibility: ['Lachmann Shroud'] },
                { id: '295_rifled_barrel', name: '29.5" Rifled Barrel', compatibility: ['Bryson 800'] },
                { id: '215_bryson_shredder', name: '21.5" Bryson Shredder', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: '215_recourse_barrel', name: '21.5" Recourse Barrel', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: '18_demo_firewall', name: '18" Demo Firewall', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: '16_bryson_shockwave', name: '16" Bryson Shockwave', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: '16_bryson_factory_barrel', name: '16" Bryson Factory Barrel', compatibility: ['Bryson 800'] },
                { id: '8_xrk_cqb_barrel', name: '8" XRK CQB Barrel', compatibility: ['Bryson 800'], conflicts: ['category:underbarrels', 'category:lasers', 'category:guards'] },
                { id: '185_emperor_barrel', name: '18.5" Emperor Barrel', compatibility: ['Expedite 12'] },
                { id: '14_polarize_barrel', name: '14" Polarize Barrel', compatibility: ['Expedite 12'] },
                { id: '14_shorty_barrel', name: '14" Shorty Barrel', compatibility: ['Expedite 12'], conflicts: ['category:muzzles'] },
                { id: '185_battlemaster', name: '18.5" Battlemaster', compatibility: ['Expedite 12'], conflicts: ['category:muzzles'] },
                { id: '419mm_schlager_salvo', name: '419mm Schlager Salvo', compatibility: ['Expedite 12'] },
                { id: 'matuzek_812_barrel', name: 'Matuzek 812 Barrel', compatibility: ['Lockwood 300'] },
                { id: '597mm_matuzek_inferno', name: '597mm Matuzek Inferno', compatibility: ['Lockwood 300'] },
                { id: '711mm_matuzek_d50', name: '711mm Matuzek D50', compatibility: ['Lockwood 300'] },
                { id: '11_bryson_special', name: '11" Bryson Special', compatibility: ['Lockwood 300'] },
                { id: '215_bryson_tacfire', name: '21.5" Bryson Tacfire', compatibility: ['Bryson 890'] },
                { id: 'zlr_sport_8', name: 'ZLR Sport-8', compatibility: ['KV Broadside'] },
                { id: 'ltc_b', name: 'LTC-B', compatibility: ['KV Broadside'] },
                { id: 'warrior_wolf', name: 'Warrior Wolf', compatibility: ['KV Broadside'] },
                { id: 'range_twelve', name: 'Range Twelve', compatibility: ['KV Broadside'] },
                { id: 'deadsight_90', name: 'Deadsight 90', compatibility: ['KV Broadside'] },
                { id: 'velocious_40', name: 'Velocious 40', compatibility: ['KV Broadside'] },
                { id: 'gunner_d20', name: 'Gunner D20', compatibility: ['KV Broadside'] },
                { id: 'zlr_sport_xt', name: 'ZLR Sport XT', compatibility: ['KV Broadside'] },
                { id: 'mx_g_short', name: 'MX-G Short', compatibility: ['MX Guardian'] },
                { id: 'mx_g_mobile', name: 'MX-G Mobile', compatibility: ['MX Guardian'] },
                { id: 'hyp_lm', name: 'HYP-LM', compatibility: ['MX Guardian'] },
                { id: 'kyzyl_dawn_barrel', name: 'KYZYL Dawn Barrel', compatibility: ['SAKIN MG38'] },
                { id: '355mm_hgs_55', name: '355mm HGS-55', compatibility: ['SAKIN MG38'] },
                { id: '20_bruen_silver_series_barrel', name: '20" Bruen Silver Series Barrel', compatibility: ['SAKIN MG38'] },
                { id: 'exf_gulf_16_barrel', name: 'EXF Gulf-16 Barrel', compatibility: ['RAAL MG'] },
                { id: '21_exf_rhino_barrel', name: '21" EXF Rhino Barrel', compatibility: ['RAAL MG'] },
                { id: '265_demo_field_pro_barrel', name: '26.5" Demo Field Pro Barrel', compatibility: ['RAAL MG'] },
                { id: 'ftac_coldforge_16_barrel', name: 'FTAC Coldforge 16" Barrel', compatibility: ['556 Icarus'] },
                { id: 'ftac_sb', name: 'FTAC SB', compatibility: ['556 Icarus'] },
                { id: 'tac_597_barrel', name: 'TAC 597 Barrel', compatibility: ['RPK'] },
                { id: '225_elevate_11', name: '22.5" Elevate-11', compatibility: ['SP-R 208', 'SP-X 80'] },
                { id: '16_zlr_executor_80_barrel', name: '16" ZLR Executor 80 Barrel', compatibility: ['SP-R 208', 'LA-B 330', 'SP-X 80'] },
                { id: '235_fluted_r_67', name: '23.5" Fluted R-67', compatibility: ['SP-R 208', 'LA-B 330'] },
                { id: '185_xrk_resonate', name: '18.5" XRK Resonate', compatibility: ['SP-R 208', 'SA-B 50'], conflicts: ['category:muzzles'] },
                { id: '125_carbon_barrel', name: '12.5" Carbon Barrel', compatibility: ['SP-R 208', 'SA-B 50'] },
                { id: '9_tac_cb_55', name: '9" Tac-CB 55', compatibility: ['SA-B 50'] },
                { id: '185_bryson_lr_factory', name: '18.5" Bryson LR Factory', compatibility: ['SA-B 50', 'LA-B 330', 'SP-X 80'] },
                { id: '22_cavalry_barrel', name: '22" Cavalry Barrel', compatibility: ['LA-B 330', 'SP-X 80'], conflicts: ['category:muzzles'] },
                { id: '135_lonestar_barrel', name: '13.5" Lonestar Barrel', compatibility: ['Lockwood Mk2'], conflicts: ['lockwood_combat_guard', 'lockwood_commando_guard'] },
                { id: 'lockwood_frontiersman', name: 'Lockwood Frontiersman', compatibility: ['Lockwood Mk2'] },
                { id: '21_coyote_barrel', name: '21" Coyote Barrel', compatibility: ['Lockwood Mk2'] },
                { id: '25_buffalo_barrel', name: '25" Buffalo Barrel', compatibility: ['Lockwood Mk2'] },
                { id: '225_exf_alamo', name: '22.5" EXF Alamo', compatibility: ['Lockwood Mk2'], conflicts: ['category:muzzles', 'category:guards'] },
                { id: '155_theta_x13', name: '15.5" Theta-X13', compatibility: ['TAQ-M'] },
                { id: 'lr1_7_205_barrel', name: 'LR1:7 20.5" Barrel', compatibility: ['TAQ-M'] },
                { id: 'chroma_lrs', name: 'Chroma LRS', compatibility: ['Tempus Torrent'], conflicts: ['category:muzzles'] },
                { id: '16_tour_rp', name: '16" Tour RP', compatibility: ['Tempus Torrent'] },
                { id: '24_outreach_4', name: '24" Outreach 4', compatibility: ['Tempus Torrent'] },
                { id: '125_rugged_zn', name: '12.5" Rugged ZN', compatibility: ['Tempus Torrent'] },
                { id: '22_omx_456', name: '22" OMX-456', compatibility: ['MCPR-300'] },
                { id: '175_orca_barrel', name: '17.5" Orca Barrel', compatibility: ['MCPR-300'] },
                { id: '19_silentfire_barrel', name: '19" Silentfire Barrel', compatibility: ['MCPR-300'], conflicts: ['category:muzzles'] },
                { id: 'fss_jetstream', name: 'FSS Jetstream', compatibility: ['Signal 50'] },
                { id: '235_sa_fifty_h7', name: '23.5" SA Fifty-H7', compatibility: ['Signal 50'] },
                { id: '215_fluted_fifty', name: '21.5" Fluted Fifty', compatibility: ['Signal 50'] },
                { id: '29_tv_kilo_50', name: '29" TV Kilo-50', compatibility: ['Signal 50'] },
                { id: 'mack_8_335_super', name: 'Mack 8 33.5 Super', compatibility: ['Victus XMR'] },
                { id: 'mack_8_215_short', name: 'Mack 8 21.5 Short', compatibility: ['Victus XMR'] },
                { id: '26_mammoth_hb50', name: '26" Mammoth HB50', compatibility: ['Victus XMR'], conflicts: ['category:muzzles'] },
                { id: 'executor_546', name: 'Executor 546', compatibility: ['Victus XMR'], conflicts: ['category:muzzles'] },
                { id: 'fahrenheit_29', name: 'Fahrenheit 29"', compatibility: ['FJX Imperium'] },
                { id: 'lr_retort_19', name: 'LR-Retort 29"', compatibility: ['FJX Imperium'] },
                { id: 'tac_command_19', name: 'TAC-Command 19"', compatibility: ['FJX Imperium'] },
                { id: 'ceros_22', name: 'Ceros 22"', compatibility: ['FJX Imperium'] },
                { id: 'ceros_29', name: 'Ceros 29"', compatibility: ['FJX Imperium'] },
                { id: '26_cf_bipod_barrel', name: '26" CF-Bipod Barrel', compatibility: ['Carrack .300'] },
                { id: 'heavy_tac_300', name: 'Heavy-Tac 80', compatibility: ['Carrack .300'] },
                { id: '30_flintline_bipod', name: '30" Flintline Bipod', compatibility: ['Carrack .300'] },
                { id: '30_flintline', name: '30" Flintline', compatibility: ['Carrack .300'] },
                { id: '300_subsound', name: '300 Subsound', compatibility: ['Carrack .300'], conflicts: ['category:muzzles'] },
                { id: '300_subsound_bipod', name: '300 Subsound Bipod', compatibility: ['Carrack .300'], conflicts: ['category:muzzles'] },
                { id: 'matuzek_cottonmouth', name: 'Matuzek Cottonmouth', compatibility: ['P890'], conflicts: ['category:muzzles'] },
                { id: 'xrk_tacops_barrel', name: 'XRK TacOps Barrel', compatibility: ['P890'] },
                { id: 'matuzek_venom', name: 'Matuzek Venom', compatibility: ['P890'], conflicts: ['category:muzzles'] },
                { id: 'xten_harbinger', name: 'XTEN Harbinger', compatibility: ['P890'], conflicts: ['category:muzzles'] },
                { id: 'sa_brake_barrel', name: 'SA Brake Barrel', compatibility: ['.50 GS', 'GS Magna'], conflicts: ['category:muzzles'] },
                { id: 'sa_comp_barrel', name: 'SA Comp Barrel', compatibility: ['.50 GS', 'GS Magna'], conflicts: ['category:muzzles'] },
                { id: 'sa_longshot_50', name: 'SA Longshot-50', compatibility: ['.50 GS', 'GS Magna'] },
                { id: 'sa_tyrant_fifty', name: 'SA Tyrant Fifty', compatibility: ['.50 GS', 'GS Magna'] },
                { id: 'xrk_sidewinder_6_slide', name: 'XRK Sidewinder-6 Slide', compatibility: ['X12', 'X13 Auto'], conflicts: ['category:underbarrels'] },
                { id: 'bryson_snubby', name: 'Bryson Snubby', compatibility: ['Basilisk'], conflicts: ['category:muzzles'] },
                { id: 'ftac_fang_ported', name: 'FTAC Fang Ported', compatibility: ['Basilisk'] },
                { id: '675_corvus_cougar_500', name: '6.75" Corvus Cougar 500', compatibility: ['Basilisk'] },
                { id: '105_ftac_arrow', name: '10.5" FTAC Arrow', compatibility: ['Basilisk'], conflicts: ['category:muzzles'] },
                { id: 'ftac_carnivora_7', name: 'FTAC Carnivora 7"', compatibility: ['Basilisk'] },
                { id: 'xrk_luc_9', name: 'XRK LUC-9', compatibility: ['X12', 'X13 Auto'], conflicts: ['category:underbarrels'] },
                { id: 'impact_point', name: 'Impact Point', compatibility: ['X13 Auto'], conflicts: ['akimbo'] },
                { id: 'ratchet_be', name: 'Ratchet BE', compatibility: ['FTAC Siege'], conflicts: ['category:muzzles'] },
                { id: 'supertac_vi', name: 'SuperTac-VI', compatibility: ['FTAC Siege'], conflicts: ['category:muzzles'] },
                { id: 'mouse_40', name: 'Mouse 40', compatibility: ['FTAC Siege'] },
                { id: 'rn5_xv_9mm', name: 'RN5-XV 9mm', compatibility: ['FTAC Siege'] },
                { id: 'cmrn_50', name: 'CMRN-50', compatibility: ['FTAC Siege'] },
                { id: 'nst_81', name: 'NST-81', compatibility: ['FTAC Siege'], conflicts: ['category:muzzles'] },
                { id: 'ratchet_be_tac', name: 'Ratchet BE Tac', compatibility: ['FTAC Siege'], conflicts: ['category:muzzles'] },
                { id: 'exf_opal_9', name: 'EXF Opal-9', compatibility: ['9mm Daemon'] },
                { id: 'exf_trope_h', name: 'EXF Trope-H', compatibility: ['9mm Daemon'] },
                { id: 'ft_competition', name: 'FT Competition', compatibility: ['9mm Daemon'], conflicts: ['category:muzzles'] },
                { id: 'xten_windfall', name: 'XTEN Windfall', compatibility: ['9mm Daemon'] },
                { id: 'sa_longfire', name: 'SA Longfire', compatibility: ['9mm Daemon'] },
                { id: 'beast_fifty_long_barrel', name: 'Beast Fifty Long Barrel', compatibility: ['M4'], requires: ['jak_harbinger_kit'],
                    conflicts: ['14_carbine_shroud', '75_tempus_firebrand', 'tempus_trench_pro', '419mm_exf_barrel', 'hightower_20_barrel', '115_t_h4_barrel', '115_carbine_shroud'] },
                { id: 'mortar_50_short_barrel', name: 'Mortar 50 Short Barrel', compatibility: ['M4'], requires: ['jak_harbinger_kit'],
                    conflicts: ['14_carbine_shroud', '75_tempus_firebrand', 'tempus_trench_pro', '419mm_exf_barrel', 'hightower_20_barrel', '115_t_h4_barrel', '115_carbine_shroud'] }        
            ]
        },

        // === UNDERBARRELS ===
        underbarrels: {
            name: 'Underbarrels',
            category: 'underbarrels',
            items: [
                { id: 'merc_foregrip', name: 'Merc Foregrip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'lockgrip_precision_40', name: 'Lockgrip Precision-40', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'hex_40_grip', name: 'HEX-40 Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'schlager_tango', name: 'Schlager Tango', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'vx_pineapple', name: 'VX Pineapple', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'op_x9_foregrip', name: 'OP-X9 Foregrip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'operator_foregrip', name: 'Operator Foregrip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'tv_wrecker_grip', name: 'TV Wrecker Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_tilt_grip', name: 'Bruen Tilt Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'cronen_grooveshot_grip', name: 'Cronen Grooveshot Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'exf_backdraft_grip', name: 'EXF Backdraft Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_warrior_grip', name: 'Bruen Warrior Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'grv_z_short_grip', name: 'GRV-Z Short Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'kimura_ryn_03_vertical_grip', name: 'Kimura RYN-03 Vertical Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'kimura_seraphic_vertical_grip', name: 'Kimura Seraphic Vertical Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'sl_vertical_grip', name: 'SL Skeletal Vertical Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'holger_vertical_grip', name: 'Holger Vertical Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_tactical_vertical_grip', name: 'Bruen Tactical Vertical Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_pivot_vertical_grip', name: 'Bruen Pivot Vertical Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'GS Magna', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xrk_bowbreaker_grip', name: 'XRK Bowbreaker Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'commando_foregrip', name: 'Commando Foregrip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'BAS-P', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'] ,
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'edge_47_grip', name: 'Edge-47 Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'demo_firm_grip', name: 'Demo Firm Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xten_gravedigger', name: 'XTEN Gravedigger', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'ftac_ripper_56', name: 'FTAC Ripper 56', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] }, lockedWith: {'Lockwood Mk2': ['jak_wardens'] } },
                { id: 'demo_cleanshot_40', name: 'DEMO Cleanshot 40', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'demo_imp_44_grip', name: 'DEMO IMP-44 Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], 
                    exclude: ['Kastov-74u', 'Lachmann Shroud', 'Fennec 45', 'Lachmann Sub', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'ftac_tiger_grip', name: 'FTAC Tiger Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'fss_sharkfin_90', name: 'FSS Sharkfin 90', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                        'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'agent_grip', name: 'Agent Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_sync_shot_grip', name: 'Bruen Sync Shot Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xten_drop_grip', name: 'XTEN Drop Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xten_nexus_grip', name: 'XTEN Nexus Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'phase_3_grip', name: 'Phase-3 Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'X13 Auto'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'MX Guardian', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bipod_v9_grip', name: 'Bipod V9 Grip', compatibility: ['AR', 'BR', 'KV Broadside', 'LMG', 'MMR'], exclude: ['FR Avancer', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'], conflicts: ['teplo_clear_shot', 'bpz40_hybrid'], 
                    weaponRequirements: {'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'core_bp2', name: 'Core BP2', compatibility: ['AR', 'BR', 'KV Broadside', 'LMG', 'MMR'], exclude: ['FR Avancer', 'MX9', 'Minibak', 'RAAL MG', 'HCR 56', 'SP-R 208', 'SA-B 50'], conflicts: ['teplo_clear_shot', 'bpz40_hybrid'], 
                    weaponRequirements: {'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'level_aim_bipod', name: 'Level Aim Bipod', compatibility: ['AR', 'BR', 'KV Broadside', '556 Icarus', 'RAPP H', 'MMR', 'SR'], exclude: ['Chimera', 'FR Avancer', 'Crossbow', 'FJX Imperium'],
                    weaponRequirements: {'STB 556': ['ftac_fb20', '18_bruen_guerilla', 'bruen_turaco_686mm'], 'M13C': ['10_bruen_fct_6', '14_bruen_echelon'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] }, 
                        conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel'] },
                { id: 'cornerstone_bipod', name: 'Cornerstone Bipod', compatibility: ['AR', 'BR', 'KV Broadside', '556 Icarus', 'RAPP H', 'MMR', 'SR'], exclude: ['Chimera', 'FR Avancer', 'Crossbow', 'FJX Imperium'],
                    weaponRequirements: {'STB 556': ['ftac_fb20', '18_bruen_guerilla', 'bruen_turaco_686mm'], 'M13C': ['10_bruen_fct_6', '14_bruen_echelon'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] }, 
                        conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel'] },
                { id: 'xten_stable_shot', name: 'XTEN Stable Shot', compatibility: ['AR', 'BR', 'KV Broadside', '556 Icarus', 'RAPP H', 'MMR', 'SR'], exclude: ['Crossbow', 'FJX Imperium'],
                    weaponRequirements: {'STB 556': ['ftac_fb20', '18_bruen_guerilla', 'bruen_turaco_686mm'], 'M13C': ['10_bruen_fct_6', '14_bruen_echelon'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] }, 
                        conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel'] },
                { id: 'hardstance_bipod', name: 'Hardstance Bipod', compatibility: ['556 Icarus', 'RAPP H'] },
                { id: 'paracord_grip', name: 'Paracord Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR'], exclude: ['MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'ftac_sp_10_angled_grip', name: 'FTAC SP-10 Angled Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['FR Avancer', 'MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                        'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'ftac_rs_9_stealth_angled_grip', name: 'FTAC RS-9 Stealth Angled Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_bastion_angled_grip', name: 'Bruen Bastion Angled Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                        'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'chewk_angled_grip', name: 'Chewk Angled Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                        'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'bruen_heavy_support_grip', name: 'Bruen Heavy Support Grip', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'], conflicts: ['jak_lance'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xrk_bw_4_handstop', name: 'XRK BW-4 Handstop', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto', 'SA-B 50'], 
                    exclude: ['STB 556', 'FR Avancer', 'ISO 9mm', 'BAS-P', 'MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'ftac_msp_98_handstop', name: 'FTAC MSP-98 Handstop', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'],
                    exclude: ['STB 556', 'ISO 9mm', 'BAS-P', 'MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                            'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'X13 Auto': ['impact_point'] , 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo']} },
                { id: 'dr_6_handstop', name: 'DR-6 Handstop', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto'], exclude: ['STB 556', 'ISO 9mm', 'BAS-P', 'MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                        'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xten_phantom_5_handstop', name: 'XTEN Phantom-5 Handstop', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50', 'X13 Auto', 'SA-B 50'], 
                    exclude: ['STB 556', 'ISO 9mm', 'BAS-P', 'MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208'],
                        weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 
                            'X13 Auto': ['impact_point'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'xten_tx_12_handstop', name: 'XTEN TX-12 Handstop', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR',  'Signal 50'], exclude: ['STB 556', 'ISO 9mm', 'BAS-P', 'MX9', 'Minibak', 'MX Guardian', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'ISO 9mm': ['6_axeblade', 'iso_45_factory', '16_xlb_s', '9_ptx_trainer', '7_ex_raptor_v2'], 
                        'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'jak_slash', name: 'JAK Slash', compatibility: ['AR', 'BR', 'SMG', 'SG', 'LMG', 'MMR', 'Signal 50'], exclude: ['MX9', 'Minibak', 'RAAL MG', 'SP-R 208', 'SA-B 50'],
                    weaponRequirements: {'PDSW 528': ['ftac_defense_145', '17_corvus_prorange', '16_cloak_90', '1875_cloak_90'], 'Lockwood Mk2': ['lockwood_commando_guard', 'lockwood_combat_guard', '225_exf_alamo'] } },
                { id: 'dm_proto_grip', name: 'DM Proto-Grip', compatibility: ['Tempus Razorback'] },
                { id: 'fr_avancer_bipod', name: 'FR Avancer Bipod', compatibility: ['FR Avancer'] },
                { id: 'wedge_grip', name: 'Wedge Grip', compatibility: ['FTAC Siege'], conflicts: ['akimbo', 'mouse_40'] },
                { id: 'rebel_hx', name: 'Rebel-HX', compatibility: ['FTAC Siege'], conflicts: ['akimbo', 'mouse_40'] },
                { id: 's40_h_grip', name: 'S40-H Grip', compatibility: ['FTAC Siege'], conflicts: ['akimbo', 'mouse_40'] },
                { id: 'demo_narrow_grip', name: 'Demo Narrow Grip', compatibility: ['RAAL MG'] },
                { id: 'xrk_dune_grip', name: 'XRK Dune Grip', compatibility: ['RAAL MG'] },
                { id: 'sa_side_grip', name: 'SA Side Grip', compatibility: ['RAAL MG'] },
                { id: 'raal_bipod', name: 'RAAL Bipod', compatibility: ['RAAL MG'] },
                { id: 'rpk_bipod', name: 'RPK Bipod', compatibility: ['RPK'], conflicts: ['jak_cataclysm'] },
                { id: 'soshki', name: 'Soshki', compatibility: ['SAKIN MG38'] },
                { id: 'sakin_side_grip', name: 'Sakin Side Grip', compatibility: ['SAKIN MG38'] },
                { id: 'cronen_wl55', name: 'Cronen WL55', compatibility: ['SAKIN MG38'] },
                { id: 'bruen_tilted_warrior_grip', name: 'Bruen Tilted Warrior Grip', compatibility: ['SAKIN MG38'] },
                { id: 'bracefire_hc', name: 'Bracefire-HC', compatibility: ['RAPP H'], conflicts: ['category:optics'] },
                { id: 'b052_grip', name: 'B052 Grip', compatibility: ['RAPP H'] },
                { id: 'hound_9g_grip', name: 'Hound-9G Grip', compatibility: ['RAPP H'] },
                { id: 'bruen_heavy_bipod', name: 'Bruen Heavy Bipod', compatibility: ['HCR 56'] },
                { id: 'spw_40mm_he', name: 'SPW 40MM HE', compatibility: ['M4', 'M13B', 'M13C', 'M16', 'Cronen Squall', 'FTAC Recon', 'Tempus Torrent'], conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel'], 
                    lockedWith: {'Tempus Torrent': ['50_round_drum'] },
                        weaponRequirements: {'M13C': ['10_bruen_fct_6', '14_bruen_echelon'] } },
                { id: 'spw_40mm_drill', name: 'SPW 40MM Drill', compatibility: ['M4', 'M13B', 'M13C', 'M16', 'Cronen Squall', 'FTAC Recon', 'Tempus Torrent'], conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel'],
                    lockedWith: {'Tempus Torrent': ['50_round_drum'] },
                        weaponRequirements: {'M13C': ['10_bruen_fct_6', '14_bruen_echelon'] } },
                { id: 'kl40_m2', name: 'KL40-M2', compatibility: ['Kastov 762', 'Kastov 545', 'KV Broadside'], lockedWith: {'KV Broadside': ['25_shell_mag'] } },
                { id: 'kl40_m2_drill', name: 'KL40-M2 Drill', compatibility: ['Kastov 762', 'Kastov 545', 'KV Broadside'], lockedWith: {'KV Broadside': ['25_shell_mag'] } },
                { id: 'tl40_fire_drake', name: 'TL40 Fire Drake', compatibility: ['STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'Lachmann-556', 'Lachmann-762'], lockedWith: {'Lachmann-762': ['50_round_drum'] } },
                { id: 'tl40_drill', name: 'TL40 Drill', compatibility: ['STB 556', 'ISO Hemlock', 'Tempus Razorback', 'FR Avancer', 'Lachmann-556', 'Lachmann-762'], lockedWith: {'Lachmann-762': ['50_round_drum'] } },
                { id: 'hellscream_40mm', name: 'Hellscream 40mm', compatibility: ['TAQ-56', 'TAQ-V'], lockedWith: {'TAQ-V': ['50_round_drum'] } },
                { id: 'hellscream_40mm_drill', name: 'Hellscream 40mm Drill', compatibility: ['TAQ-56', 'TAQ-V'], lockedWith: {'TAQ-V': ['50_round_drum'] } },
                { id: 'corvus_masterkey', name: 'Corvus Masterkey', compatibility: ['AR', 'BR', 'KV Broadside', 'Tempus Torrent'], exclude: ['STB 556', 'Chimera', 'Tempus Razorback', 'FR Avancer', 'TR-76 Geist', 'Kastov-74u', 'Lachmann-762', 'SO-14'],
                    conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel', '50_round_drum'], weaponRequirements: {'M13C': ['10_bruen_fct_6', '14_bruen_echelon'] }, 
                        lockedWith: {'TAQ-V': ['50_round_drum'], 'Tempus Torrent': ['50_round_drum'], 'KV Broadside': ['25_shell_mag'] } },
                { id: 'corvus_torch', name: 'Corvus Torch', compatibility: ['AR', 'BR', 'KV Broadside'], exclude: ['STB 556', 'Chimera', 'Tempus Razorback', 'FR Avancer', 'TR-76 Geist', 'Kastov-74u', 'Kastov 545', 'Lachmann-762', 'SO-14'],
                    conflicts: ['7_bruen_b_m20', 'm13c_factory_barrel'], weaponRequirements: {'M13C': ['10_bruen_fct_6', '14_bruen_echelon']  }, lockedWith: {'TAQ-V': ['50_round_drum'], 'KV Broadside': ['25_shell_mag'] } }
            ]
        },
            
        // === REAR GRIPS ===
        rearGrips: {
            name: 'Rear Grips',
            category: 'rearGrips',
            items: [
                { id: 'xrk_response_grip', name: 'XRK Response Grip', compatibility: ['TAQ-56', 'TAQ-V', 'TAQ-M'] },
                { id: 'fss_combat_grip', name: 'FSS Combat Grip', compatibility: ['TAQ-56', 'TAQ-V', 'TAQ-M'] },
                { id: 'demo_cleanshot_grip', name: 'Demo Cleanshot Grip', compatibility: ['TAQ-56', 'TAQ-V', 'TAQ-M'] },
                { id: 'tv_ergo_grip', name: 'TV Ergo Grip', compatibility: ['TAQ-M'] },
                { id: 'd15_grip', name: 'D15 Grip', compatibility: ['M4', 'M16', 'Cronen Squall', 'FTAC Recon', 'FSS Hurricane', '556 Icarus', 'Tempus Torrent'] },
                { id: 'sakin_zx_grip', name: 'Sakin ZX Grip', compatibility: ['M4', 'ISO Hemlock', 'M16', 'Cronen Squall', 'FTAC Recon', 'FSS Hurricane', '556 Icarus', 'Tempus Torrent'] },
                { id: 'xten_grip', name: 'XTEN Grip', compatibility: ['M4', 'ISO Hemlock', 'M16', 'Cronen Squall', 'FTAC Recon', 'FSS Hurricane', '556 Icarus', 'Tempus Torrent'] },
                { id: 'phantom_grip', name: 'Phantom Grip', compatibility: ['M4', 'ISO Hemlock', 'FSS Hurricane', 'Tempus Torrent'] },
                { id: 'support_cp90_grip', name: 'Support CP90 Grip', compatibility: ['M4', 'ISO Hemlock', 'M16', 'Cronen Squall', 'FTAC Recon', 'Tempus Torrent'] },
                { id: 'bruen_g305_grip_wrap', name: 'Bruen G305 Grip Wrap', compatibility: ['STB 556', 'PDSW 528', 'MX9', 'RAAL MG', 'SAKIN MG38', 'HCR 56', 'Victus XMR'] },
                { id: 'stip_40_grip', name: 'STIP-40 Grip', compatibility: ['STB 556', 'PDSW 528', 'MX9', 'RAAL MG', 'SAKIN MG38', 'HCR 56', 'Victus XMR'] },
                { id: 'bruen_q900_grip', name: 'Bruen Q900 Grip', compatibility: ['STB 556', 'MX9', 'HCR 56', 'Victus XMR'] },
                { id: 'bruen_q900_grip_wrap', name: 'Bruen Q900 Grip Wrap', compatibility: ['RAAL MG', 'SAKIN MG38'] },
                { id: 'ivanov_st_70_grip', name: 'Ivanov ST-70 Grip', compatibility: ['Kastov 762', 'Kastov-74u', 'Kastov 545', 'Minibak', 'Vaznev-9K', 'KV Broadside', 'RPK'] },
                { id: 'demo_x2_grip', name: 'Demo-X2 Grip', compatibility: ['Kastov 762', 'Kastov-74u', 'Kastov 545', 'Minibak', 'Vaznev-9K', 'KV Broadside', 'RPK'] },
                { id: 'true_tac_grip', name: 'True-Tac Grip', compatibility: ['Kastov 762', 'Kastov-74u', 'Kastov 545', 'Minibak', 'Vaznev-9K', 'KV Broadside', 'RPK'] },
                { id: 'brace_ls', name: 'Brace LS', compatibility: ['Kastov 762', 'KV Broadside', 'RPK'] },
                { id: 'bruen_gr_500', name: 'Bruen GR-500', compatibility: ['M13B', 'Chimera', 'M13C', 'BAS-P'] },
                { id: 'd37_grip', name: 'D37 Grip', compatibility: ['M13B', 'Chimera', 'M13C', 'BAS-P'] },
                { id: 'bruen_flash_grip', name: 'Bruen Flash Grip', compatibility: ['M13B', 'Chimera', 'M13C', 'BAS-P'] },
                { id: 'casus_x', name: 'Casus X', compatibility: ['Tempus Razorback'] },
                { id: 'flt_22', name: 'FLT-22', compatibility: ['Tempus Razorback'] },
                { id: 'erg_x1', name: 'ERG-X1', compatibility: ['Tempus Razorback'] },
                { id: 'sa_cation_grip', name: 'SA Cation Grip', compatibility: ['FR Avancer'] },
                { id: 'fr_tack_3', name: 'FR Tack-3', compatibility: ['FR Avancer'] },
                { id: 'rmt_grip', name: 'RMT Grip', compatibility: ['FR Avancer'] },
                { id: 'stip_66_grip', name: 'STIP-66 Grip', compatibility: ['TR-76 Geist'] },
                { id: 'cronen_resistor_grip', name: 'Cronen Resistor Grip', compatibility: ['TR-76 Geist'] },
                { id: 'tactical_grip_tape', name: 'Tactical Grip Tape', compatibility: ['TR-76 Geist'] },
                { id: 's_grip_zero', name: 'S-Grip Zero', compatibility: ['Lachmann-556', 'Lachmann-762', 'MCW 6.8'] },
                { id: 'lm_cronus_grip', name: 'LM Cronus Grip', compatibility: ['Lachmann-556', 'Lachmann-762', 'Lachmann Shroud', 'Lachmann Sub', 'LM-S'] },
                { id: 'lmk64_grip', name: 'LMK64 Grip', compatibility: ['Lachmann-556', 'Lachmann-762', 'RAPP H', 'LM-S'] },
                { id: 'lachmann_tcg_10', name: 'Lachmann TCG-10', compatibility: ['Lachmann-762', 'Lachmann Shroud', 'Lachmann Sub', 'RAPP H', 'LM-S'] },
                { id: 'cronen_em55_grip', name: 'Cronen EM55 Grip', compatibility: ['SO-14', 'EBR-14'], conflicts: ['category:rearGrips'], weaponRequirements: {'SO-14': ['ftac_rtp_40_stock', 'so_r55_adaptor']} },
                { id: 'fss_gen_7_grip', name: 'FSS Gen. 7 Grip', compatibility: ['SO-14', 'EBR-14'], conflicts: ['category:rearGrips'], weaponRequirements: {'SO-14': ['ftac_rtp_40_stock', 'so_r55_adaptor']} },
                { id: 'fss_spider_grip', name: 'FSS Spider Grip', compatibility: ['SO-14', 'EBR-14'], conflicts: ['category:rearGrips'], weaponRequirements: {'SO-14': ['ftac_rtp_40_stock', 'so_r55_adaptor']} },
                { id: 'stalwart_gx', name: 'Stalwart GX', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: 'exp_shear', name: 'EXP Shear', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: 'a30_stout', name: 'A30 Stout', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: 'sakin_rubber_grip', name: 'Sakin Rubber Grip', compatibility: ['VEL 46'] },
                { id: 'zlr_combat_grip', name: 'ZLR Combat Grip', compatibility: ['VEL 46'] },
                { id: 'schlager_soldier_grip', name: 'Schlager Soldier Grip', compatibility: ['VEL 46'] },
                { id: 'fennec_stippled_grip', name: 'Fennec Stippled Grip', compatibility: ['Fennec 45'] },
                { id: 'fennec_textured_grip', name: 'Fennec Textured Grip', compatibility: ['Fennec 45'] },
                { id: 'fennec_rubber_grip', name: 'Fennec Rubber Grip', compatibility: ['Fennec 45'] },
                { id: 'goliath_77_grip', name: 'Goliath 77 Grip', compatibility: ['Expedite 12'] },
                { id: 'padded_shotgun_comb', name: 'Padded Shotgun Comb', compatibility: ['Expedite 12'] },
                { id: 'schlager_void_grip', name: 'Schlager Void Grip', compatibility: ['Expedite 12'] },
                { id: 'schlager_fang_grip', name: 'Schlager Fang Grip', compatibility: ['Expedite 12'] },
                { id: 'fss_ammo_sleeve', name: 'FSS Ammo Sleeve', compatibility: ['Expedite 12'] },
                { id: 'cronen_ergo', name: 'Cronen Ergo', compatibility: ['MX Guardian'] },
                { id: 'xrk_rush', name: 'XRK Rush', compatibility: ['MX Guardian'] },
                { id: 'bruen_b60', name: 'Bruen B60', compatibility: ['MX Guardian'] },
                { id: 'stream_sk', name: 'Stream-SK', compatibility: ['MX Guardian'] },
                { id: 'schlager_match_grip', name: 'Schlager Match Grip', compatibility: ['SA-B 50', 'SP-X 80'] },
                { id: 'cronen_grip_wrap', name: 'Cronen Grip Wrap', compatibility: ['SA-B 50', 'SP-X 80'] },
                { id: 'bruen_lynx_grip', name: 'Bruen Lynx Grip', compatibility: ['SA-B 50', 'SP-X 80'] },
                { id: 'cronen_zero_grip', name: 'Cronen Zero Grip', compatibility: ['MCPR-300'] },
                { id: 'cronen_rfx_300', name: 'Cronen RFX-300', compatibility: ['MCPR-300'] },
                { id: 'cronen_cheetah_grip', name: 'Cronen Cheetah Grip', compatibility: ['MCPR-300'] },
                { id: 'stalwart_grip', name: 'Stalwart Grip', compatibility: ['Signal 50'] },
                { id: 'cronen_blockade_grip', name: 'Cronen Blockade Grip', compatibility: ['Signal 50'] },
                { id: 'sa_finesse_grip', name: 'SA Finesse Grip', compatibility: ['Signal 50'] },
                { id: 'cp60_grip', name: 'CP60 Grip', compatibility: ['FJX Imperium'] },
                { id: 'skull_40', name: 'Skull-40', compatibility: ['FJX Imperium'] },
                { id: 'tv_nought_grip', name: 'TV Nought Grip', compatibility: ['Carrack .300'] },
                { id: 'engage_20_grip', name: 'Engage-20 Grip', compatibility: ['Carrack .300'] },
                { id: 'carrack_palm', name: 'Carrack Palm', compatibility: ['Carrack .300'] },
                { id: 'bruen_anchor_grip', name: 'Bruen Anchor Grip', compatibility: ['P890'] },
                { id: 'bp_grain_grip', name: 'BP-Grain Grip', compatibility: ['P890'] },
                { id: 'bruen_rsh_80_grip', name: 'Bruen RSH-80 Grip', compatibility: ['P890'] },
                { id: 'fjx_dvf60_grip', name: 'FJX DVF60 Grip', compatibility: ['P890'] },
                { id: 'gs50_wood_grain', name: 'GS .50 Wood Grain', compatibility: ['.50 GS', 'GS Magna'] },
                { id: 'exf_resistance_grip', name: 'EXF Resistance Grip', compatibility: ['.50 GS', 'GS Magna'] },
                { id: 'exf_shoreline_grip', name: 'EXF Shoreline Grip', compatibility: ['.50 GS', 'GS Magna'] },
                { id: 'xrk_field_grip', name: 'XRK Field Grip', compatibility: ['X12', 'X13 Auto'] },
                { id: 'cronen_lima_6', name: 'Cronen Lima-6', compatibility: ['X12', 'X13 Auto'] },
                { id: 'ftac_ol_z_grip', name: 'FTAC OL-Z Grip', compatibility: ['X12', 'X13 Auto'] },
                { id: 'bryson_wd_85_grip', name: 'Bryson WD-85 Grip', compatibility: ['Basilisk'] },
                { id: 'so_ro_99_grip', name: 'SO RO-99 Grip', compatibility: ['Basilisk'] },
                { id: 'bryson_duel_grip', name: 'Bryson Duel Grip', compatibility: ['Basilisk'] },
                { id: 'ftac_hold', name: 'FTAC Hold', compatibility: ['FTAC Siege'] },
                { id: 'sur_160', name: 'SUR-160', compatibility: ['FTAC Siege'] },
                { id: 'ftac_stead', name: 'FTAC Stead', compatibility: ['FTAC Siege'] },
                { id: 'sgt_grip', name: 'SGT Grip', compatibility: ['9mm Daemon'] },
                { id: 'daemon_hand', name: 'Daemon Hand', compatibility: ['9mm Daemon'] },
                { id: 'magwell_grip', name: 'Magwell Grip', compatibility: ['9mm Daemon'] },
                { id: 'razorleaf_grip', name: 'Razorleaf Grip', compatibility: ['9mm Daemon'] },
                { id: 'akimbo', name: 'Akimbo', compatibility: ['P'], conflicts: ['category:underbarrels'] }
            ]
        },
        // === STOCKS ===
        stocks: {
            name: 'Stocks',
            category: 'stocks',
            items: [
                { id: 'ravage_8', name: 'Ravage-8', compatibility: ['M4', 'M16', 'FTAC Recon', 'FSS Hurricane', '556 Icarus', 'Tempus Torrent'] },
                { id: 'demo_fade_pro_stock', name: 'Demo Fade Pro Stock', compatibility: ['M4', 'M16', 'FTAC Recon', 'FSS Hurricane', '556 Icarus', 'Tempus Torrent'] },
                { id: 'tempus_p80_strike_stock', name: 'Tempus P80 Strike Stock', compatibility: ['M4'] },
                { id: 'demo_precision_elite_factory', name: 'Demo Precision Elite Factory', compatibility: ['M4', 'FTAC Recon', '556 Icarus', 'Tempus Torrent'] },
                { id: 'corio_precio_factory', name: 'Corio Precio Factory', compatibility: ['M4', 'M16', '556 Icarus', 'Tempus Torrent'] },
                { id: 'demo_d50_buffer_tube', name: 'Demo D50 Buffer Tube', compatibility: ['M4'] },
                { id: 'pso_heavy', name: 'PSO Heavy', compatibility: ['M4', 'M16', 'FTAC Recon', '556 Icarus', 'Tempus Torrent'] },
                { id: 'torrent_span_9', name: 'Torrent Span-9', compatibility: ['M4', 'M16', 'FTAC Recon', 'FSS Hurricane', 'ISO 45', 'ISO 9mm', '556 Icarus'] },
                { id: 'jak_cutthroat', name: 'JAK Cutthroat', compatibility: ['M4', 'M16', 'FTAC Recon', 'FSS Hurricane', '556 Icarus'] },
                { id: 'assault_60_stock_factory', name: 'Assault-60 Stock Factory', compatibility: ['M16', 'FTAC Recon', 'FSS Hurricane', 'Tempus Torrent'] },
                { id: 'demo_quicksilver_stock', name: 'Demo Quicksilver Stock', compatibility: ['FSS Hurricane'] },
                { id: 'demo_quicksilver_collapsed', name: 'Demo Quicksilver Collapsed', compatibility: ['FSS Hurricane'] },
                { id: 'tv_lpx_434', name: 'TV LPX-434', compatibility: ['TAQ-56', 'TAQ-V'] },
                { id: 'tactique_brute_stock', name: 'Tactique Brute Stock', compatibility: ['TAQ-56', 'TAQ-V', 'TAQ-M'] },
                { id: 'tv_xline_pro', name: 'TV XLine Pro', compatibility: ['TAQ-56', 'TAQ-V', 'TAQ-M'] },
                { id: 'tv_cardinal_stock', name: 'TV Cardinal Stock', compatibility: ['TAQ-56', 'TAQ-V'] },
                { id: 'tv_ballast_stock', name: 'TV Ballast Stock', compatibility: ['TAQ-M'] },
                { id: 'tacverte_core_stock', name: 'Tacverte Core Stock', compatibility: ['TAQ-M'] },
                { id: 'ivanov_wood_stock', name: 'Ivanov Wood Stock', compatibility: ['Kastov 762', 'Kastov 545', 'Kastov-74u', 'RPK'] },
                { id: 'kstv_rpk_factory', name: 'KSTV-RPK Factory', compatibility: ['Kastov 762', 'Kastov 545', 'Kastov-74u'] },
                { id: 'ft_tac_elite_stock', name: 'FT TAC-Elite Stock', compatibility: ['Kastov 762', 'Kastov 545', 'Kastov-74u', 'Vaznev-9K', 'Minibak', 'KV Broadside', 'RPK'] },
                { id: 'kastov_rama', name: 'Kastov-Rama', compatibility: ['Kastov 762', 'Kastov 545'] },
                { id: 'prolite_tl3_stock', name: 'Prolite TL3 Stock', compatibility: ['Kastov 762', 'Kastov 545', 'RPK'], conflicts: ['jak_cataclysm'] },
                { id: 'markeev_r7_stock', name: 'Markeev R7 Stock', compatibility: ['Kastov 762', 'Kastov 545', 'Kastov-74u', 'Vaznev-9K', 'Minibak', 'KV Broadside'] },
                { id: 'exo_tac', name: 'EXO-TAC', compatibility: ['Kastov 762', 'Kastov 545', 'KV Broadside', 'RPK'] },
                { id: 'broadside_fct', name: 'Broadside FCT', compatibility: ['Kastov 762', 'Kastov 545', 'Kastov-74u', 'Vaznev-9K', 'Minibak', 'RPK'] },
                { id: 'vlk_stockless', name: 'VLK Stockless', compatibility: ['Kastov-74u', 'Vaznev-9K', 'Minibak', 'KV Broadside'] },
                { id: 'spetnaz_s10_stock', name: 'Spetnaz S10 Stock', compatibility: ['Kastov-74u', 'Vaznev-9K', 'Minibak', 'KV Broadside', 'RPK'] },
                { id: 'otrezat_stock', name: 'Otrezat Stock', compatibility: ['Kastov-74u', 'Vaznev-9K', 'Minibak', 'KV Broadside'] },
                { id: 'k_bloc_stock', name: 'K-Bloc Stock', compatibility: ['KV Broadside'] },
                { id: 'heavy_support_stock', name: 'Heavy Support Stock', compatibility: ['RPK'] },
                { id: 'bruen_mx9_stock', name: 'Bruen MX9 Stock', compatibility: ['STB 556', 'HCR 56'] },
                { id: 'bruen_hcr_56_stock', name: 'Bruen HCR 56 Stock', compatibility: ['STB 556', 'MX9'] },
                { id: 'bruen_stb_556_stock', name: 'Bruen STB 556 Stock', compatibility: ['MX9', 'HCR 56'] },
                { id: 'lm_s_factory_g79_stock', name: 'LM-S Factory G79 Stock', compatibility: ['Lachmann-556', 'Lachmann-762'] },
                { id: 'rapp_762_factory', name: 'RAPP-762 Factory', compatibility: ['Lachmann-556', 'Lachmann-762', 'LM-S'] },
                { id: 'lachmann_s76_factory_stock', name: 'Lachmann S76 Factory Stock', compatibility: ['Lachmann-556', 'Lachmann Sub', 'Lachmann Shroud', 'RAPP H', 'LM-S'] },
                { id: 'ft_mobile_stock', name: 'FT Mobile Stock', compatibility: ['Lachmann-556', 'Lachmann-762', 'Lachmann Sub', 'Lachmann Shroud', 'RAPP H', 'LM-S'] },
                { id: 'lachmann_s9_factory', name: 'Lachmann S9 Factory', compatibility: ['Lachmann-556', 'Lachmann-762'] },
                { id: 'meer_recoil_56_factory_stock', name: 'Meer Recoil-56 Factory Stock', compatibility: ['Lachmann-762', 'Lachmann Sub', 'Lachmann Shroud', 'RAPP H', 'LM-S'] },
                { id: 'lm_stockless_mod', name: 'LM Stockless Mod', compatibility: ['Lachmann Sub', 'Lachmann Shroud'] },
                { id: 'ravage_10', name: 'Ravage-10', compatibility: ['M13B', 'Chimera', 'M13C', 'BAS-P'] },
                { id: 'bruen_r90_factory', name: 'Bruen R90 Factory', compatibility: ['M13B', 'M13C'] },
                { id: 'bruen_flash_v4_stock', name: 'Bruen Flash V4 Stock', compatibility: ['M13B', 'M13C', 'BAS-P'] },
                { id: 'm13c_factory_stock', name: 'M13C Factory Stock', compatibility: ['M13B', 'Chimera'] },
                { id: 'm13c_fs_collapsed', name: 'M13C FS Collapsed', compatibility: ['M13B', 'Chimera', 'M13C'] },
                { id: 'trx_56_stock', name: 'TRX-56 Stock', compatibility: ['Chimera', 'M13C'] },
                { id: 'br_stockless_mod', name: 'BR Stockless Mod', compatibility: ['BAS-P'] },
                { id: 'r_com_s4', name: 'R-Com S4', compatibility: ['ISO Hemlock'] },
                { id: 'raid_90', name: 'Raid 90', compatibility: ['ISO Hemlock'] },
                { id: 'mace_600', name: 'Mace 600', compatibility: ['ISO Hemlock'] },
                { id: 'res_2', name: 'RES-2', compatibility: ['ISO Hemlock'] },
                { id: 'iso_stockless_mod', name: 'ISO Stockless Mod', compatibility: ['ISO Hemlock'] },
                { id: 'tr_preamble', name: 'TR Preamble', compatibility: ['Torrent Razorback'] },
                { id: 'opr_threat', name: 'OPR Threat', compatibility: ['Torrent Razorback'] },
                { id: 'ta_ergo', name: 'TA Ergo', compatibility: ['Torrent Razorback'] },
                { id: 'fr_sprinter', name: 'FR Sprinter', compatibility: ['FR Avancer'] },
                { id: 'wmg_tac', name: 'WMG-TAC', compatibility: ['FR Avancer'] },
                { id: 'scout_ld_stock_pad', name: 'Scout-LD Stock Pad', compatibility: ['TR-76 Geist'] },
                { id: 'expedite_grid_pad', name: 'Expedite Grid Pad', compatibility: ['TR-76 Geist'] },
                { id: 'demo_tac_pad', name: 'Demo Tac Pad', compatibility: ['TR-76 Geist'] },
                { id: 'ftac_rtp_40_stock', name: 'FTAC RTP-40 Stock', compatibility: ['SO-14'], conflicts: ['category:combs'] },
                { id: 'so_r55_adaptor', name: 'SO R55 Adaptor', compatibility: ['SO-14'], conflicts: ['category:combs'] },
                { id: 'model_1957_stock', name: 'Model 1957 Stock', compatibility: ['SO-14'] },
                { id: 'b13_pad', name: 'B13 Pad', compatibility: ['Cronen Squall'] },
                { id: 'b66_pad', name: 'B66 Pad', compatibility: ['Cronen Squall'] },
                { id: 'fjx_z_pad_9', name: 'FJX Z-Pad 9', compatibility: ['Cronen Squall'] },
                { id: 'lm_precision_stock', name: 'LM Precision Stock', compatibility: ['VEL 46'] },
                { id: 'assault_60_stock', name: 'Assault-60 Stock', compatibility: ['VEL 46'] },
                { id: 'demo_rxt_stock', name: 'Demo RXT Stock', compatibility: ['VEL 46'] },
                { id: 'vel_a_568_collapsed', name: 'VEL A-568 Collapsed', compatibility: ['VEL 46'] },
                { id: 'hollow_extended_stock', name: 'Hollow Extended Stock', compatibility: ['PDSW 528'] },
                { id: 'cqb_stock', name: 'CQB Stock', compatibility: ['PDSW 528'] },
                { id: 'guard_duty_stock', name: 'Guard Duty Stock', compatibility: ['PDSW 528'] },
                { id: 'fss_heavy_stock_pro', name: 'FSS Heavy Stock Pro', compatibility: ['PDSW 528'] },
                { id: 'fennec_bullfighter', name: 'Fennec Bullfighter', compatibility: ['Fennec 45'] },
                { id: 'ftac_xcommand_stock', name: 'FTAC XCommand Stock', compatibility: ['Fennec 45'] },
                { id: 'ftac_locktight_stock', name: 'FTAC Locktight Stock', compatibility: ['Fennec 45'] },
                { id: 'agile_assault_7_stock', name: 'Agile Assault-7 Stock', compatibility: ['Fennec 45'] },
                { id: 'ftac_stock_cap', name: 'FTAC Stock Cap', compatibility: ['Fennec 45'] },
                { id: 'sk_3_cheetah', name: 'SK-3 Cheetah', compatibility: ['ISO 45'] },
                { id: 'mace_650', name: 'MACE 650', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: 'demo_fade_tac', name: 'Demo Fade TAC', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: 'collapsed_stock', name: 'Collapsed Stock', compatibility: ['ISO 45', 'ISO 9mm'] },
                { id: 'res_2_iso', name: 'Res 2', compatibility: ['ISO 9mm'] },
                { id: 'ftac_apollo_stock', name: 'FTAC Apollo Stock', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'fss_guardian_stock', name: 'FSS Guardian Stock', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'fss_watchman', name: 'FSS Watchman', compatibility: ['Bryson 800'] },
                { id: 'xten_ripcord_stock', name: 'XTEN Ripcord Stock', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'stockless_pistol_grip', name: 'Stockless Pistol Grip', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'sawed_off_mod', name: 'Sawed Off Mod', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'bryson_800_factory_stock', name: 'Bryson 800 Factory Stock', compatibility: ['Bryson 890'] },
                { id: 'resonance_stock_collapsed', name: 'Resonance Stock Collapsed', compatibility: ['Expedite 12'] },
                { id: 'fss_frame_stock', name: 'FSS Frame Stock', compatibility: ['Expedite 12'] },
                { id: 'bryson_reverb_55_stock', name: 'Bryson Reverb-55 Stock', compatibility: ['Expedite 12'], conflicts: ['schlager_void_grip', 'schlager_fang_grip', 'goliath_77_grip'] },
                { id: 'schlager_resonance', name: 'Schlager Resonance', compatibility: ['Expedite 12'] },
                { id: 'sweetspot_stock', name: 'SweetSpot Stock', compatibility: ['Lockwood 300'] },
                { id: 'bryson_natural_series_stock', name: 'Bryson Natural Series Stock', compatibility: ['Lockwood 300'] },
                { id: 'cronen_marshal_stock', name: 'Cronen Marshal Stock', compatibility: ['Lockwood 300'] },
                { id: 'heist_stock_mod', name: 'Heist Stock Mod', compatibility: ['Lockwood 300'] },
                { id: 'exf_impact_pad', name: 'EXF Impact Pad', compatibility: ['MX Guardian'] },
                { id: 'rustler_pad', name: 'Rustler Pad', compatibility: ['MX Guardian'] },
                { id: 'mx_dcp_0', name: 'MX DCP-0', compatibility: ['MX Guardian'] },
                { id: 'sakin_riptide_stock', name: 'Sakin Riptide Stock', compatibility: ['SAKIN MG38'] },
                { id: 'ftac_condor_stock', name: 'FTAC Condor Stock', compatibility: ['SAKIN MG38'] },
                { id: 'cheetah_stm_stock', name: 'Cheetah STM Stock', compatibility: ['SAKIN MG38'] },
                { id: 'demo_h_40', name: 'Demo H-40', compatibility: ['RAAL MG'] },
                { id: 'demo_nimble_stock', name: 'Demo Nimble Stock', compatibility: ['RAAL MG'] },
                { id: 'fss_riot_stock', name: 'FSS Riot Stock', compatibility: ['RAAL MG'] },
                { id: 'demo_folding_stock', name: 'Demo Folding Stock', compatibility: ['RAAL MG'] },
                { id: 'ftac_valor_stock', name: 'FTAC Valor Stock', compatibility: ['EBR-14'] },
                { id: 'so_90_factory_stock', name: 'SO-90 Factory Stock', compatibility: ['EBR-14'], conflicts: ['category:rearGrips'] },
                { id: 'so_r55_adaptor_ebr', name: 'SO-R55 Adaptor', compatibility: ['EBR-14'] },
                { id: 'zrl_t70_pad_extension', name: 'ZRL T70 Pad Extension', compatibility: ['SP-R 208', 'LA-B 330'] },
                { id: 'bryson_inforcer_stock', name: 'Bryson Inforcer Stock', compatibility: ['SP-R 208', 'LA-B 330'] },
                { id: 'demo_vx509_stock', name: 'Demo VX509 Stock', compatibility: ['Lockwood Mk2'] },
                { id: 'lockwood_bullseye_stock', name: 'Lockwood Bullseye Stock', compatibility: ['Lockwood Mk2'] },
                { id: 'cut_off_stock_mod', name: 'Cut Off Stock Mod', compatibility: ['Lockwood Mk2'] },
                { id: 'ftac_ezx_pro', name: 'FTAC EZX-Pro', compatibility: ['SA-B 50'] },
                { id: 'assault_60_stock_sa', name: 'Assault-60 Stock', compatibility: ['SA-B 50'] },
                { id: 'xrk_specter_mod', name: 'XRK Specter Mod', compatibility: ['SA-B 50'] },
                { id: 'ft_apex_15', name: 'FT Apex 1.5', compatibility: ['Crossbow'] },
                { id: 'ftac_piercer', name: 'FTAC Piercer', compatibility: ['Crossbow'] },
                { id: 'ft_dart_cb', name: 'FT Dart CB', compatibility: ['Crossbow'] },
                { id: 'speedtrak_echo', name: 'Speedtrak ECHO', compatibility: ['Crossbow'] },
                { id: 'cronen_lion_stock', name: 'Cronen Lion Stock', compatibility: ['MCPR-300'] },
                { id: 'cronen_lw_88_stock', name: 'Cronen LW-88 Stock', compatibility: ['MCPR-300'] },
                { id: 'fss_merc_stock', name: 'FSS Merc Stock', compatibility: ['MCPR-300'] },
                { id: 'fss_echo_stock', name: 'FSS Echo Stock', compatibility: ['Signal 50'] },
                { id: 'so_inline_stock', name: 'SO Inline Stock', compatibility: ['Signal 50'] },
                { id: 'ftac_invisi_670_stock', name: 'FTAC Invisi-670 Stock', compatibility: ['Signal 50'] },
                { id: 'ftac_homeland', name: 'FTAC Homeland', compatibility: ['Victus XMR'] },
                { id: 'xrk_bullseye', name: 'XRK Bullseye', compatibility: ['Victus XMR'] },
                { id: 'xrk_rise_50', name: 'XRK Rise 50', compatibility: ['Victus XMR'] },
                { id: 'exf_colonel', name: 'EXF Colonel', compatibility: ['Victus XMR'] },
                { id: 'fjx_lux_7', name: 'FJX LUX-7', compatibility: ['FJX Imperium'] },
                { id: 'rib400', name: 'RIB400', compatibility: ['FJX Imperium'] },
                { id: 'fjx_kilo_tac', name: 'FJX Kilo-Tac', compatibility: ['FJX Imperium'] },
                { id: 'carrack_ops_stock', name: 'Carrack Ops Stock', compatibility: ['Carrack .300'] },
                { id: 'lex_v14_stock', name: 'Lex V14 Stock', compatibility: ['Carrack .300'] },
                { id: 'xrk_pistol_stock', name: 'XRK Pistol Stock', compatibility: ['X12'], conflicts: ['cronen_lima_6', 'akimbo'] },
                { id: 'xrk_dynamic_precision_stock', name: 'XRK Dynamic Precision Stock', compatibility: ['X13 Auto'], weaponRequirements: {'X13 Auto': ['impact_point'] } },
                { id: 'xrk_bar_stock', name: 'XRK Bar Stock', compatibility: ['X13 Auto'], weaponRequirements: {'X13 Auto': ['impact_point'] } },
                { id: 'x13_coachwhip_stock', name: 'X13 Coachwhip Stock', compatibility: ['X13 Auto'], weaponRequirements: {'X13 Auto': ['impact_point'] } },
                { id: 'siege_wire_stock', name: 'Siege Wire Stock', compatibility: ['FTAC Siege'], conflicts: ['akimbo'] },
                { id: 'heist_lw', name: 'Heist-LW', compatibility: ['FTAC Siege'], conflicts: ['akimbo'] },
                { id: 'ftac_folder', name: 'FTAC Folder', compatibility: ['FTAC Siege'], conflicts: ['akimbo'] },
                { id: 'ftac_siege_stock', name: 'FTAC Siege Stock', compatibility: ['FTAC Siege'], conflicts: ['akimbo'] }
            ]
        },

        // === MAGAZINES ===
        magazines: {
            name: 'Magazines',
            category: 'magazines',
            items: [
                { id: 'single_tap_mod', name: 'Single Tap Mod', compatibility: ['STB 556', 'TR-76 Geist'] },
                { id: 'fennec_double_tap_mod', name: 'Fennec Double Tap Mod', compatibility: ['Fennec 45'] },
                { id: 'minibak_grip_mag', name: 'Minibak Grip Mag', compatibility: ['Minibak'] },
                { id: 'mx_pro_mag', name: 'MX Pro Mag', compatibility: ['MX Guardian'] },
                { id: '5_round_mag', name: '5 Round Mag', compatibility: ['FTAC Recon', 'SA-B 50', 'MCPR-300'] },
                { id: '5_shell_mag', name: '5 Shell Mag', compatibility: ['Bryson 890'] },
                { id: '7_round_mag', name: '7 Round Mag', compatibility: ['Signal 50', 'Victus XMR', 'FJX Imperium'] },
                { id: '8_round_mag', name: '8 Round Mag', compatibility: ['LA-B 330', 'SP-X 80'] },
                { id: '9_round_mag', name: '9 Round Mag', compatibility: ['Victus XMR'] },
                { id: '10_round_mag', name: '10 Round Mag', compatibility: ['Lachmann-762', 'SP-R 208', 'Carrack .300', 'P890', '.50 GS', 'GS Magna'] },
                { id: '12_round_mag', name: '12 Round Mag', compatibility: ['ISO 45', 'P890'] },
                { id: '12_shell_mag', name: '12 Shell Mag', compatibility: ['Bryson 890', 'KV Broadside'] },
                { id: '13_round_mag', name: '13 Round Mag', compatibility: ['.50 GS', 'GS Magna'] },
                { id: '15_round_mag', name: '15 Round Mag', compatibility: ['Lachmann-556', 'M16', 'Lachmann-762', 'FTAC Recon', 'Lachmann Sub', 'Lachmann Shroud', 'EBR-14', 'SP-R 208', 'LM-S', 'SA-B 50', 'TAQ-M', 'MCPR-300', 'Carrack .300'] },
                { id: '20_round_mag', name: '20 Round Mag', compatibility: ['Kastov 762', 'Kastov 545', 'Kastov-74u', 'Chimera', 'ISO Hemlock', 'BAS-P', 'ISO 9mm', 'EBR-14', 'LM-S', 'TAQ-M', 'FTAC Siege', '9mm Daemon'] },
                { id: '24_round_mag', name: '24 Round Mag', compatibility: ['X12', 'X13 Auto'] },
                { id: '25_round_mag', name: '25 Round Mag', compatibility: ['SO-14'] },
                { id: '25_shell_drum', name: '25 Shell Drum', compatibility: ['KV Broadside'] },
                { id: '26_round_mag', name: '26 Round Mag', compatibility: ['9mm Daemon'] },
                { id: '30_round_mag', name: '30 Round Mag', compatibility: ['Lachmann-762', 'TAQ-V', 'Cronen Squall', 'VEL 46', 'HCR 56', 'RPK', 'Tempus Torrent'] },
                { id: '32_round_mag', name: '32 Round Mag', compatibility: ['MX9'] },
                { id: '33_round_mag', name: '33 Round Mag', compatibility: ['X12', 'X13 Auto'] },
                { id: '40_round_mag', name: '40 Round Mag', compatibility: ['TAQ-56', 'Kastov 762', 'Lachmann-556', 'M16', 'Lachmann Sub', 'Lachmann Shroud', 'RPK'] },
                { id: '42_round_mag', name: '42 Round Mag', compatibility: ['STB 556', 'HCR 56'] },
                { id: '45_round_mag', name: '45 Round Mag', compatibility: ['M4', 'Kastov 545', 'Kastov-74u', 'M13B', 'Chimera', 'ISO Hemlock', 'Torrent Razorback', 'FR Avancer', 'M13C', 'TR-76 Geist', 'Vaznev-9K'] },
                { id: '45_round_drum', name: '45 Round Drum', compatibility: ['ISO 45'] },
                { id: 'fennec_mag_45', name: 'Fennec Mag 45', compatibility: ['Fennec 45'] },
                { id: '50_round_mag', name: '50 Round Mag', compatibility: ['VEL 46', 'FTAC Siege'] },
                { id: '50_round_belt_mag', name: '50 Round Belt Mag', compatibility: ['RAAL MG'] },
                { id: '50_round_drum', name: '50 Round Drum', compatibility: ['Lachmann-762', 'SO-14', 'TAQ-V', 'Cronen Squall', 'Lachmann Sub', 'BAS-P', 'Lachmann Shroud', 'ISO 9mm', 'Tempus Torrent', 'X12', 'X13 Auto'] },
                { id: '60_round_mag', name: '60 Round Mag', compatibility: ['M4', 'TAQ-56', 'Lachmann-556', 'M16', 'Kastov 545', 'M13B', 'Torrent Razorback', 'FR Avancer', 'VEL 46'] },
                { id: '72_round_mag', name: '72 Round Mag', compatibility: ['FTAC Siege'] },
                { id: '100_round_mag', name: '100 Round Mag', compatibility: ['HCR 56', '556 Icarus'] },
                { id: '100_round_drum', name: '100 Round Drum', compatibility: ['RPK'] },
                { id: '100_round_belt_mag', name: '100 Round Belt Mag', compatibility: ['RAAL MG', 'RAPP H'] },
                { id: '125_round_belt_mag', name: '125 Round Belt Mag', compatibility: ['SAKIN MG38'] },
                { id: '150_round_box_mag', name: '150 Round Box Magazine', compatibility: ['SAKIN MG38'] }
            ]
        },

        guards: {
            name: 'Guards',
            category: 'guards',
            items: [
                { id: 'bryson_natural_series_handguard', name: 'Bryson Natural Series Handguard', compatibility: ['Lockwood 300'] },
                { id: 'demo_carbon_guard', name: 'Demo Carbon Guard', compatibility: ['Lockwood 300'] },
                { id: 'buck_pro', name: 'Buck-Pro', compatibility: ['Lockwood 300'] },
                { id: 'lockwood_combat_guard', name: 'Lockwood Combat Guard', compatibility: ['Lockwood Mk2'] },
                { id: 'lockwood_saddle_guard', name: 'Lockwood Saddle Guard', compatibility: ['Lockwood Mk2'] },
                { id: 'lockwood_commando_guard', name: 'Lockwood Commando Guard', compatibility: ['Lockwood Mk2'] },
                { id: 'tv_cf40_guard', name: 'TV CF40 Guard', compatibility: ['Expedite 12'] },
                { id: 'az_40_shotguard', name: 'AZ-40 Shotguard', compatibility: ['Expedite 12'] },
                { id: 'azarov_t15', name: 'Azarov T15', compatibility: ['Expedite 12'] },
                { id: 'demo_x50_tactical_pump', name: 'Demo X50 Tactical Pump', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'lockwood_series_ii', name: 'Lockwood Series II', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'demo_dropzone_pump', name: 'Demo Dropzone Pump', compatibility: ['Bryson 800', 'Bryson 890'] },
                { id: 'corvus_responder', name: 'Corvus Responder', compatibility: ['Victus XMR'] }
            ]
        },
            
        arms: {
            name: 'Arms',
            category: 'arms',
            items: [
                { id: 'thunder_200lb', name: 'Thunder 200lb', compatibility: ['Crossbow'] },
                { id: 'carbon_elite_v3', name: 'Carbon Elite v3', compatibility: ['Crossbow'] },
                { id: 'so_momenti', name: 'SO Momenti', compatibility: ['Crossbow'] },
                { id: 'quill_xe_100lb', name: 'Quill XE 100lb', compatibility: ['Crossbow'] }
            ]
        },

        boltsCrossbow: {
            name: 'Bolts Crossbow',
            category: 'boltsCrossbow',
            items: [
                { id: 'ftac_caustic_20_bolts', name: 'FTAC Caustic 20" Bolts', compatibility: ['Crossbow'] },
                { id: 'blastcap_20_bolts', name: 'Blastcap 20" Bolts', compatibility: ['Crossbow'] },
                { id: 'brightblaze_20_bolts', name: 'Brightblaze 20" Bolts', compatibility: ['Crossbow'] }
            ]
        },

        bolts: {
            name: 'Bolts',
            category: 'bolts',
            items: [
                { id: 'hardbolt_21', name: 'Hardbolt 2.1', compatibility: ['KV Broadside'] },
                { id: 'dashbolt_60', name: 'Dashbolt 60', compatibility: ['KV Broadside'] },
                { id: 'expedite_l_bolt', name: 'Expedite L-Bolt', compatibility: ['Expedite 12'] },
                { id: 'expedite_hz3_bolt', name: 'Expedite HZ3 Bolt', compatibility: ['Expedite 12'] },
                { id: 'fss_st87_bolt', name: 'FSS ST87 Bolt', compatibility: ['SP-R 208', 'SA-B 50', 'LA-B 330', 'SP-X 80'] },
                { id: 'zlr_reinforced_lockbolt', name: 'ZLR Reinforced Lockbolt', compatibility: ['SP-R 208', 'SA-B 50', 'LA-B 330', 'SP-X 80'] },
                { id: 'cronen_b85_bolt', name: 'Cronen B85 Bolt', compatibility: ['MCPR-300'] },
                { id: 'cronen_smooth_bolt', name: 'Cronen Smooth Bolt', compatibility: ['MCPR-300'] },
                { id: 'fjx_blast', name: 'FJX Blast', compatibility: ['FJX Imperium'] },
                { id: 'fjx_h_bolt', name: 'FJX H-Bolt', compatibility: ['FJX Imperium'] },
            ]
        },

        levers: {
            name: 'Levers',
            category: 'levers',
            items: [
                { id: 'stallion_lever', name: 'Stallion Lever', compatibility: ['Lockwood Mk2'] },
                { id: 'longhorn_lever', name: 'Longhorn Lever', compatibility: ['Lockwood Mk2'] }
            ]
        },

        loaders: {
            name: 'Loaders',
            category: 'loaders',
            items: [
                { id: 'b_3st_loader', name: 'B-3ST Loader', compatibility: ['Basilisk'] },
                { id: 's40_rapid_loader', name: 'S40 Rapid Loader', compatibility: ['Basilisk'] }
            ]
        },

        rails: {
            name: 'Rails',
            category: 'rails',
            items: [
                { id: 'integrated_reflex_rail', name: 'Integrated Reflex Rail', compatibility: ['PDSW 528'], conflicts: ['category:optics'] },
                { id: 'gr33_light_rail', name: 'GR33 Light Rail', compatibility: ['PDSW 528'] }
            ]
        },

        // === CONVERSION KITS ===
        conversionKits: {
            name: 'Conversion Kits',
            category: 'conversionKits',
            items: [
                { id: 'jak_harbinger_kit', name: 'JAK Harbinger Kit', compatibility: ['M4'],
                    conflicts: ['category:ammunition', 'category:magazines', 'category:muzzles', '14_carbine_shroud', '75_tempus_firebrand', 'tempus_trench_pro', '419mm_exf_barrel', 'hightower_20_barrel', '115_t_h4_barrel', '115_carbine_shroud'] },
                { id: 'jak_requiem', name: 'JAK Requiem', compatibility: ['Kastov 762', 'Kastov 545'], conflicts: ['category:barrels'] },
                { id: 'jak_patriot', name: 'JAK Patriot', compatibility: ['M16'], conflicts: ['category:barrels'] },
                { id: 'jak_decimator', name: 'JAK Decimator', compatibility: ['Lachmann Shroud'], conflicts: ['category:rearGrips'] },
                { id: 'jak_jawbreaker', name: 'JAK Jawbreaker', compatibility: ['KV Broadside'], conflicts: ['category:magazines', 'category:barrels', 'category:ammunitions', 'category:bolts'] },
                { id: 'jak_lance', name: 'JAK Lance', compatibility: ['MX Guardian'], conflicts: ['category:ammunitions', 'category:magazines', 'category:muzzles', 'category:barrels', 'category:rearGrips'] },
                { id: 'jak_protean', name: 'JAK Protean', compatibility: ['RAAL MG'], conflicts: ['canted_vibro_dot_7', 'category:barrels', 'category:underbarrels'] },
                { id: 'jak_cataclysm', name: 'JAK Cataclysm', compatibility: ['RPK'], conflicts: ['category:ammunitions', 'category:magazines', 'category:barrels', 'prolite_tl3_stock', 'rpk_bipod'] },
                { id: 'jak_wardens', name: 'JAK Wardens', compatibility: ['Lockwood Mk2'], conflicts: ['category:barrels', 'category:underbarrels', 'category:combs', 'category:levers', 'category:stocks', 'category:guards'] },
                { id: 'jak_gunslinger', name: 'JAK Gunslinger', compatibility: ['Basilisk'], conflicts: ['category:ammunitions', 'category:loaders', 'category:triggerActions'] }
            ]
        },

        // === TRIGGER ACTION ===
        triggerActions: {
            name: 'Trigger Actions',
            category: 'triggerActions',
            items: [
                { id: 'sa_competition_trigger', name: 'SA Competition Trigger', compatibility: ['.50 GS'] },
                { id: 'sa_fifty_trigger', name: 'SA Fifty Trigger', compatibility: ['.50 GS'] },
                { id: 'sa_hare_trigger', name: 'SA Hare Trigger', compatibility: ['.50 GS'] },
                { id: 'bruen_mg80', name: 'Bruen MG80', compatibility: ['P890'] },
                { id: 'xrk_heavy_v3', name: 'XRK Heavy V3', compatibility: ['P890'] },
                { id: 'bruen_express', name: 'Bruen Express', compatibility: ['P890'] },
                { id: 'p890_double_action', name: 'P890 Double Action', compatibility: ['P890'], conflicts: ['akimbo']},
                { id: 'xrk_lighting_fire_trigger', name: 'XRK Lighting Fire Trigger', compatibility: ['X12'] },
                { id: 'xrk_tr9_trigger', name: 'XRK TR9 Trigger', compatibility: ['X12'] },
                { id: 'xrk_v6_matchr', name: 'XRK v6 Match', compatibility: ['X12'] },
                { id: 'bryson_hta', name: 'Bryson HTA', compatibility: ['Basilisk'] },
                { id: 'basilisk_ht_7', name: 'Basilisk HT-7', compatibility: ['Basilisk'] },
                { id: 'bryson_match_grade', name: 'Bryson Match Grade', compatibility: ['Basilisk'] },
                { id: 'rapid_30_trigger', name: 'Rapid 30 Trigger', compatibility: ['9mm Daemon'] },
                { id: 'dex8_trigger', name: 'DEX8 Trigger', compatibility: ['9mm Daemon'] },
                { id: 'precision_trigger', name: 'Precision Trigger', compatibility: ['9mm Daemon'] }
            ]
        },

        // === COMB ===
        combs: {
            name: 'Combs',
            category: 'combs',
            items: [
                { id: 'schlager_ttf3_riser', name: 'Schlager TTF3 Riser', compatibility: ['STB 556', 'MX9', 'HCR 56'] },
                { id: 'bruen_ts_30_comb', name: 'Bruen TS-30 Comb', compatibility: ['STB 556', 'MX9', 'HCR 56'] },
                { id: 'ftac_c11_riser', name: 'FTAC C11 Riser', compatibility: ['STB 556', 'MX9', 'HCR 56'] },
                { id: 'ltx_eclipse', name: 'LTX Eclipse', compatibility: ['Tempus Razorback'] },
                { id: 'sl_k_trim', name: 'SL-K Trim', compatibility: ['Tempus Razorback'] },
                { id: 'h1_precision', name: 'H1 Precision', compatibility: ['Tempus Razorback'] },
                { id: 'fr_anchor', name: 'FR Anchor', compatibility: ['FR Avancer'] },
                { id: 'fr_ton_618', name: 'FR Ton-618', compatibility: ['FR Avancer'] },
                { id: 'fr_giga', name: 'FR Giga', compatibility: ['FR Avancer'] },
                { id: 'schlager_honor_comb', name: 'Schlager Honor Comb', compatibility: ['TR-76 Geist'] },
                { id: 'exf_trapper_comb', name: 'EXF Trapper Comb', compatibility: ['TR-76 Geist'] },
                { id: 'fss_hardtop_comb', name: 'FSS Hardtop Comb', compatibility: ['TR-76 Geist'] },
                { id: 'demo_flak_comb', name: 'Demo Flak Comb', compatibility: ['Cronen Squall'] },
                { id: 'sab_comb', name: 'SAB Comb', compatibility: ['Cronen Squall'] },
                { id: 'pd_a40_sleeve', name: 'PD-A40 Sleeve', compatibility: ['SO-14', 'EBR-14'], conflicts: ['category:rearGrips'], weaponRequirements: {'EBR-14': ['so_90_factory_stock'] } },
                { id: '5gn_tac_comb', name: '5GN Tac-Comb', compatibility: ['SO-14', 'EBR-14'], conflicts: ['category:rearGrips'], weaponRequirements: {'EBR-14': ['so_90_factory_stock'] } },
                { id: 'fss_ls_3_comb', name: 'FSS LS-3 Comb', compatibility: ['SO-14', 'EBR-14'], conflicts: ['category:rearGrips'], weaponRequirements: {'EBR-14': ['so_90_factory_stock'] } },
                { id: 'ftac_h86_cheek_rest', name: 'FTAC H86 Cheek Rest', compatibility: ['PDSW 528'] },
                { id: 'tv_taccomb', name: 'TV Taccomb', compatibility: ['PDSW 528'] },
                { id: 'mack_8_ontrak_comb', name: 'Mack 8 OnTrak Comb', compatibility: ['PDSW 528'] },
                { id: 'aim_assist_406', name: 'Aim-Assist 406', compatibility: ['SP-R 208', 'LA-B 330'] },
                { id: 'fss_el_t_pouch', name: 'FSS EL-T Pouch', compatibility: ['SP-R 208', 'LA-B 330'] },
                { id: 'cronen_gi40_cheek_raiser', name: 'Cronen GI40 Cheek Raiser', compatibility: ['SP-R 208', 'LA-B 330'] },
                { id: 'lockwood_defender_comb', name: 'Lockwood Defender Comb', compatibility: ['Lockwood Mk2'] },
                { id: 'wingman_comb', name: 'Wingman Comb', compatibility: ['Lockwood Mk2'] },
                { id: 'lockwood_merciless', name: 'Lockwood Merciless', compatibility: ['Lockwood Mk2'] }
            ]
        },

        // === LASERS ===
        lasers: {
            name: 'Lasers',
            category: 'lasers',
            items: [
                { id: 'sz_1mw_peq', name: 'SZ 1MW PEQ', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'schlager_peq_box_iv', name: 'Schlager PEQ Box IV', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'corio_laz_44_v3', name: 'Corio LAZ-44 V3', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'fss_ole_v_laser', name: 'FSS OLE-V Laser', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'canted_vibro_dot_7', name: 'Canted Vibro-Dot 7', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'MCPR-300'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], 
                        conflicts: ['category:optics', 'bipod_v9_grip', 'core_bp2', 'level_aim_bipod', 'cornerstone_bipod', 'xten_stable_shot', 'hardstance_bipod', 'fr_avancer_bipod', 'raal_bipod', 'rpk_bipod', 'soshki', 'bruen_heavy_bipod'] },
                { id: '1mw_laser_box', name: '1MW Laser Box', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'stovl_dr_laser_box', name: 'STOVL DR Laser Box', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'corvus_peq_beam_5', name: 'Corvus PEQ Beam-5', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'ftac_grimline_laser', name: 'FTAC Grimline Laser', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'sl_razorhawk_laser_light', name: 'SL Razorhawk Laser Light', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'pro_sapphire_box_laser', name: 'Pro Sapphire Box Laser', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'verdant_hook_box_laser', name: 'Verdant Hook Box Laser', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'cs15_scarlet_box_laser', name: 'CS15 Scarlet Box Laser', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'luminate_44', name: 'Luminate-44', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: 'dxs_flash_90', name: 'DXS Flash 90', compatibility: ['AR', 'BR', 'Vaznev-9K', 'FSS Hurricane', 'Minibak', 'LMG', 'MMR', 'SR'], 
                    exclude: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'HCR 56', 'Lockwood Mk2', 'Crossbow'] },
                { id: '1mw_artemis_laser', name: '1MW Artemis Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: '1mw_quick_fire_laser', name: '1MW Quick Fire Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: 'accu_shot_5mw_laser', name: 'Accu-shot 5MW Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: 'vlk_lzr_7mw', name: 'VLK LZR 7MW', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: '7mw_canted_laser', name: '7MW Canted Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] , 
                    conflicts: ['category:optics', 'bipod_v9_grip', 'core_bp2', 'level_aim_bipod', 'cornerstone_bipod', 'xten_stable_shot', 'hardstance_bipod', 'fr_avancer_bipod', 'raal_bipod', 'rpk_bipod', 'soshki', 'bruen_heavy_bipod', 'jak_wardens'] },
                { id: 'schlager_ulo_66', name: 'Schlager ULO-66', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: 'stovl_tac_laser', name: 'STOVL Tac Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: 'hipshot_l20', name: 'Hipshot L20', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: 'point_g3p_04', name: 'Point-G3P 04', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: 'kimura_ryl33_laser_light', name: 'Kimura RYL33 Laser Light', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: 'cs15_scarlet_cylindrical_laser', name: 'CS15 Scarlet Cylindrical Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'HCR 56', 'Lockwood Mk2'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: 'pro_sapphire_cylindrical_laser', name: 'Pro Sapphire Cylindrical Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: 'verdant_hook_cylindrical_laser', name: 'Verdant Hook Cylindrical Laser', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: 'fjx_ultrabeam_xr', name: 'FJX Ultrabeam XR', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak']  },
                { id: 'exf_solarflare', name: 'EXF Solarflare', compatibility: ['STB 556', 'M13B', 'Chimera', 'M13C', 'TR-76 Geist', 'SMG', 'SG', 'HCR 56', 'Lockwood Mk2', 'Crossbow'], exclude: ['Vaznev-9K', 'FSS Hurricane', 'Minibak'] },
                { id: 'series_710_pistol_laser', name: 'Series 710 Pistol Laser', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'fjx_diod_70', name: 'FJX DIOD-70', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'xten_sidearm_l400', name: 'XTEN Sidearm-L400', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: '1mw_pistol_laser', name: '1MW Pistol Laser', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'kr_hx_15_laser_light', name: 'KR HX-15 Laser Light', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'cs15_scarlet_mounted_laser', name: 'CS15 Scarlet Mounted Laser', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'pro_sapphire_mounted_laser', name: 'Pro Sapphire Mounted Laser', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'verdant_hook_mounted_laser', name: 'Verdant Hook Mounted Laser', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'dzm_1000_l', name: 'DZM-1000 L', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'ftac_vortex_200', name: 'FTAC Vortex 200', compatibility: ['P'], exclude: ['Basilisk', 'GS Magna'] },
                { id: 'corvus_lzr_790', name: 'Corvus LZR-790', compatibility: ['Basilisk'] },
                { id: 'revo_lsd_7mw', name: 'Revo-LSD 7MW', compatibility: ['Basilisk'] },
                { id: 'basilisk_grip_laser', name: 'Basilisk Grip Laser', compatibility: ['Basilisk'] },
            ]
        },
            
        // === AMMUNITION ===
        ammunitions: {
            name: 'Ammunitions',
            category: 'ammunitions',
            items: [
                { id: 'low_grain_rounds', name: 'Low Grain Rounds', compatibility: 'all',
                    exclude: ['FTAC Recon', 'Lachmann Shroud', 'MX9', 'PDSW 528', 'VEL 46', 'Minibak', 'SG', 'RAAL MG', 'Lockwood Mk2', 'SA-B 50', 'Crossbow', 'TAQ-M', 'MCPR-300', 'FJX Imperium', 'Carrack .300',
                        'LA-B 330', 'SP-X 80', '.50 GS', 'GS Magna', 'GL'] },
                { id: 'high_grain_rounds', name: 'High Grain Rounds', compatibility: 'all',
                    exclude: ['FTAC Recon', 'Lachmann Shroud', 'MX9', 'PDSW 528', 'VEL 46', 'Minibak', 'SG', 'RAAL MG', 'Lockwood Mk2', 'SA-B 50', 'Crossbow', 'TAQ-M', 'MCPR-300', 'FJX Imperium', 'Carrack .300',
                        'LA-B 330', 'SP-X 80', '.50 GS', 'GS Magna', 'GL'] },
                { id: 'round_nose', name: 'Round Nose', compatibility: 'all',
                    exclude: ['Kastov 545', 'Kastov-74u', 'FTAC Recon', 'SMG', 'SG', 'RAAL MG', 'Lockwood Mk2', 'SA-B 50', 'Crossbow', 'TAQ-M', 'MCPR-300', 'FJX Imperium', 'Carrack .300',
                        'LA-B 330', 'SP-X 80', 'P890', '.50 GS', 'Basilisk', 'GS Magna', '9mm Daemon', 'FTAC Siege', 'X12', 'X13 Auto', 'GL'] },
                { id: 'mono', name: 'Mono', compatibility: 'all',
                    exclude: ['Kastov 545', 'Kastov-74u', 'FTAC Recon', 'SMG', 'SG', 'RAAL MG', 'Lockwood Mk2', 'SA-B 50', 'Crossbow', 'TAQ-M', 'MCPR-300', 'FJX Imperium', 'Carrack .300',
                        'LA-B 330', 'SP-X 80', 'P890', '.50 GS', 'Basilisk', 'GS Magna', '9mm Daemon', 'FTAC Siege', 'X12', 'X13 Auto', 'GL'] },
                { id: 'frangible', name: 'Frangible', compatibility: 'all', exclude: ['Lachmann Shroud', 'MX9', 'SG', 'Crossbow', 'Signal 50', 'Victus XMR', 'GL'] },
                { id: 'hollowpoint', name: 'Hollowpoint', compatibility: 'all', exclude: ['Lachmann Shroud', 'MX9', 'SG', 'Crossbow', 'GL'] },
                { id: 'armor_piercing', name: 'Armor Piercing', compatibility: 'all', exclude: ['Lachmann Shroud', 'MX9', 'SG', 'Crossbow', 'GL'] },
                { id: 'overpressured_p', name: 'Overpressured +P', compatibility: 'all', exclude: ['Lachmann Shroud', 'MX9', 'SG', 'Crossbow', 'Signal 50', 'Victus XMR', 'GL'] },
                { id: 'high_velocity', name: 'High Velocity', compatibility: 'all',
                    exclude: ['Chimera', 'Lachmann Shroud', 'MX9', 'ISO 45', 'PDSW 528', 'VEL 46', 'Fennec 45', 'FSS Hurricane', 'Minibak', 'SG', 'Crossbow', 'P890', '.50 GS', 'GS Magna', 'GL'] },
                { id: 'tracer', name: 'Tracer', compatibility: ['Kastov 545', 'Kastov-74u', 'PDSW 528', 'FSS Hurricane'] },
                { id: 'incendiary', name: 'Incendiary', compatibility: ['ISO Hemlock', 'FR Avancer', 'Lachmann-762', 'Cronen Squall', 'TAQ-V', 'SO-14', 'LMG', 'MMR', 'Signal 50', 'FJX Imperium', 'Carrack .300', 'LA-B 330', 'SP-X 80'] },
                { id: 'composite', name: 'Composite', compatibility: ['Cronen Squall'] },
                { id: 'cal_spire_point', name: 'Spire Point', compatibility: ['Signal 50', 'Victus XMR'] },
                { id: 'explosive', name: 'Explosive', compatibility: ['SR'], exclude: ['Carrack .300', 'LA-B 330', 'SP-X 80'] },
                { id: 'aet', name: 'AET', compatibility: ['P'] },
                { id: 'pistol_armor_piercing', name: 'Pistol Armor Piercing', compatibility: ['.50 GS', 'GS Magna'] },
                { id: 'snakeshot', name: 'Snakeshot', compatibility: ['Basilisk'] },
                { id: '300_blk_low_grain_rounds', name: '.300 BLK Low Grain Rounds', compatibility: ['ISO Hemlock'] },
                { id: '300_blk_high_grain_rounds', name: '.300 BLK High Grain Rounds', compatibility: ['ISO Hemlock'] },
                { id: '300_blk_round_nose', name: '.300 BLK Round Nose', compatibility: ['ISO Hemlock'] },
                { id: '300_blk_mono', name: '.300 BLK Mono', compatibility: ['ISO Hemlock'] },
                { id: '300_blk_hollowpoint', name: '.300 BLK Hollowpoint', compatibility: ['ISO Hemlock'] },
                { id: '300_blk_armor_piercing', name: '.300 BLK Armor Piercing', compatibility: ['ISO Hemlock'] },
                { id: '9mm_sub_fr', name: '9mm Sub FR', compatibility: ['Lachmann Shroud', 'MX9'] },
                { id: '9mm_sub_hp', name: '9mm Sub HP', compatibility: ['Lachmann Shroud', 'MX9'] },
                { id: '9mm_sub_ap', name: '9mm Sub AP', compatibility: ['Lachmann Shroud', 'MX9'] },
                { id: '9mm_sub_op', name: '9mm Sub OP', compatibility: ['Lachmann Shroud', 'MX9'] },
                { id: '12_gauge_explosive', name: '12 Gauge Explosive', compatibility: ['SG', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                { id: '12_gauge_slug', name: '12 Gauge Slug', compatibility: ['SG', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } },
                { id: '12_gauge_dragons_breath', name: '12 Gauge Dragons Breath', compatibility: ['SG', 'Lockwood Mk2'], weaponRequirements: {'Lockwood Mk2': ['jak_wardens'] } } 
            ]
        }
    };

// Функции для работы с модулями
function getAttachmentsByTypeMWII(type) {
    return window.ATTACHMENTS_MWII[type] ? window.ATTACHMENTS_MWII[type].items : [];
}

function getAllAttachmentsMWII() {
    const all = [];
    for (const type in window.ATTACHMENTS_MWII) {
        all.push(...window.ATTACHMENTS_MWII[type].items);
    }
    return all;
}

function isAttachmentCompatibleMWII(attachment, weaponCategory, weaponName = null, currentAttachments = []) {
    if (!attachment || !weaponCategory) return false;
    
    // Проверка исключений по оружию
    if (attachment.exclude && Array.isArray(attachment.exclude)) {
        // Проверяем точное совпадение по имени оружия
        if (weaponName && attachment.exclude.includes(weaponName)) {
            return false; // ❌ Оружие в списке исключений
        }
        // Проверяем по категории
        if (attachment.exclude.includes(weaponCategory)) {
            return false; // ❌ Категория в списке исключений
        }
    }

    // 🔥 НОВАЯ ЛОГИКА: lockedWith - модуль НЕДОСТУПЕН, если указанный модуль УЖЕ ВЫБРАН
    if (attachment.lockedWith && weaponName) {
        const lockedModules = attachment.lockedWith[weaponName];
        if (lockedModules) {
            const hasLocked = lockedModules.some(moduleId =>
                currentAttachments.some(att => att.id === moduleId)
            );
            if (hasLocked) {
                return false;
            }
        }
    }

    // Проверка weaponRequirements
    if (attachment.weaponRequirements && weaponName) {
        const requiredAttachments = attachment.weaponRequirements[weaponName];
        if (requiredAttachments) {
            const hasRequired = requiredAttachments.some(requiredId =>
                currentAttachments.some(att => att.id === requiredId)
            );
            if (!hasRequired) {
                return false;
            }
        }
    }
    
    // Проверка requires
    if (attachment.requires) {
        const hasRequiredModule = currentAttachments.some(att => att.id === attachment.requires);
        if (!hasRequiredModule) {
            return false;
        }
    }

    // Проверка совместимости
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
// ФУНКЦИЯ ПРОВЕРКИ КОНФЛИКТОВ
// ============================================
function hasConflict(attId1, attId2) {
    if (!attId1 || !attId2) return false;
    
    // Находим оба модуля
    let a1 = null, a2 = null;
    for (const cat of Object.keys(window.ATTACHMENTS_MWII)) {
        const items = window.ATTACHMENTS_MWII[cat].items;
        for (const it of items) {
            if (it.id === attId1) a1 = it;
            if (it.id === attId2) a2 = it;
        }
    }
    if (!a1 || !a2) {
        console.warn('Модуль не найден:', attId1, attId2);
        return false;
    }
    
    // Проверяем конфликты a против b
    const checkConflicts = (a, b) => {
        if (!a.conflicts) return false;
        
        for (const c of a.conflicts) {
            // 1. Точное совпадение по ID
            if (c === b.id) {
                console.log(`Конфликт: ${a.id} -> ${b.id} (точное совпадение)`);
                return true;
            }
            
            // 2. Конфликт по категории
            if (c.startsWith('category:')) {
                const targetCategory = c.replace('category:', '');
                console.log(`Проверка категории: ${targetCategory} для ${a.id} с ${b.id}`);
                
                // Перебираем все категории
                for (const [catKey, catData] of Object.entries(window.ATTACHMENTS_MWII)) {
                    // Формируем список возможных названий (с учётом singular/plural)
                    const possibleNames = new Set();
                    possibleNames.add(catKey);
                    possibleNames.add(catData.category);
                    // Добавляем варианты с 's' и без
                    if (catKey.endsWith('s')) possibleNames.add(catKey.slice(0, -1));
                    else possibleNames.add(catKey + 's');
                    if (catData.category.endsWith('s')) possibleNames.add(catData.category.slice(0, -1));
                    else possibleNames.add(catData.category + 's');
                    
                    if (possibleNames.has(targetCategory)) {
                        // Проверяем, принадлежит ли b этой категории
                        if (catData.items.some(item => item.id === b.id)) {
                            console.log(`Конфликт: ${a.id} -> ${b.id} (категория ${targetCategory})`);
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    
    // Проверяем в обе стороны
    const result = checkConflicts(a1, a2) || checkConflicts(a2, a1);
    if (result) {
        console.log(`Конфликт найден между ${a1.id} и ${a2.id}`);
    }
    return result;
}

// ============================================
// ФУНКЦИЯ ГЕНЕРАЦИИ СЛУЧАЙНОГО КЛАССА
// ============================================
function generateRandomClassMWII(excludeCategories = []) {
    const weaponsData = window.WEAPONS_MWII || {};
    if (!weaponsData || Object.keys(weaponsData).length === 0) return null;
    
    // Фильтруем категории, исключая те, что в excludeCategories
    let weaponTypes = Object.keys(weaponsData);
    if (excludeCategories && excludeCategories.length > 0) {
        weaponTypes = weaponTypes.filter(cat => !excludeCategories.includes(cat));
    }
    
    if (weaponTypes.length === 0) return null;
    
    const randomType = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
    const weapons = weaponsData[randomType]?.weapons || [];
    if (weapons.length === 0) return null;
    
    const weaponName = weapons[Math.floor(Math.random() * weapons.length)];
    
    const availableSlots = ['optics', 'muzzles', 'barrels', 'underbarrels', 'rearGrips', 'stocks', 'magazines', 'guards', 'arms', 'bolts', 'levers', 'loaders', 'rails', 'conversionKits', 'triggerActions', 'combs', 'lasers', 'ammunitions'];
    const selected = [];
    const usedCategories = new Set();
    
    // Перемешиваем слоты для случайности
    const shuffledSlots = availableSlots.sort(() => Math.random() - 0.5);
    
    // Ограничиваем количество модулей (1-5)
    const maxAttachments = Math.floor(Math.random() * 5) + 1;
    
    for (const slot of shuffledSlots) {
        if (selected.length >= maxAttachments) break;
        
        const items = getAttachmentsByTypeMWII(slot);
        if (!items || items.length === 0) continue;
        
        // Фильтруем совместимые модули
        let compatible = items.filter(att => 
            isAttachmentCompatibleMWII(att, randomType, weaponName, selected)
        );
        
        // Фильтруем по конфликтам с уже выбранными
        for (const selectedAtt of selected) {
            compatible = compatible.filter(att => 
                !hasConflict(att.id, selectedAtt.id)
            );
        }
        
        // Исключаем модули из уже использованных категорий
        compatible = compatible.filter(att => {
            const category = getModuleCategoryMWII(att);
            return !usedCategories.has(category);
        });
        
        if (compatible.length > 0) {
            const random = compatible[Math.floor(Math.random() * compatible.length)];
            selected.push(random);
            const category = getModuleCategoryMWII(random);
            if (category) usedCategories.add(category);
        }
    }
    
    return {
        weapon: {
            category: randomType,
            name: weaponName
        },
        attachments: selected
    };
}

// ДОБАВЛЯЕМ ВСПОМОГАТЕЛЬНУЮ ФУНКЦИЮ
function getModuleCategoryMWII(attachment) {
    if (!attachment) return null;
    for (const type in window.ATTACHMENTS_MWII) {
        if (window.ATTACHMENTS_MWII[type].items && 
            window.ATTACHMENTS_MWII[type].items.some(item => item.id === attachment.id)) {
            return type;
        }
    }
    return null;
}

// ============================================
// ГЕНЕРАЦИЯ С ПРОВЕРКОЙ КОНФЛИКТОВ
// ============================================
function generateAndValidate() {
    let loadout;
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
        loadout = generateRandomClassMWII(); // <-- ИСПРАВЛЕНО
        attempts++;
        
        if (loadout === null) {
            continue;
        }
        
        let hasConflicts = false;
        for (let i = 0; i < loadout.attachments.length; i++) {
            for (let j = i + 1; j < loadout.attachments.length; j++) {
                if (hasConflict(loadout.attachments[i].id, loadout.attachments[j].id)) {
                    hasConflicts = true;
                    break;
                }
            }
            if (hasConflicts) break;
        }
        
        if (!hasConflicts) {
            return loadout;
        }
    } while (attempts < maxAttempts);
    
    return loadout;
}

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        ATTACHMENTS_MWII: window.ATTACHMENTS_MWII,
        getAttachmentsByTypeMWII, 
        getAllAttachmentsMWII, 
        isAttachmentCompatibleMWII,
        generateAndValidate
    };
}