ServerEvents.recipes(event => {
    const replace = (id, craft, map) => {
        event.remove({output: id});
        event.shaped(id, craft, map);
    }

    // make ore processing require ore block
    // mek only has vanilla and own ores
    ["iron", "gold", "copper", "zinc", "nickel", "osmium", "tin", "lead", "uranium", "cobalt"]
        .forEach((ore) => {
            event.remove({id: `mekanism:processing/${ore}/slurry/dirty/from_raw_ore`})
            event.remove({id: `mekanism:processing/${ore}/clump/from_raw_ore`})
            event.remove({id: `mekanism:processing/${ore}/shard/from_raw_ore`})
            event.remove({id: `mekanism:processing/${ore}/dust/from_raw_ore`})
            event.remove({id: `mekanism:processing/${ore}/slurry/dirty/from_raw_block`})
            event.remove({id: `mekanism:processing/${ore}/clump/from_raw_block`})
            event.remove({id: `mekanism:processing/${ore}/shard/from_raw_block`})
            event.remove({id: `mekanism:processing/${ore}/dust/from_raw_block`})
        });

    event.remove({output: "mekanism:steel_casing"});
    event.shaped(Item.of("mekanism:steel_casing"), ["ABA", "BCB", "ABA"], {
        A: "mekanism:ingot_steel", B: "#forge:ingots/osmium", C: "tfmg:steel_casing"
    })

    /* Circuits
     */
    event.remove({output: "mekanism:basic_control_circuit"});
    // event.shapeless("mekanism:basic_control_circuit", ["create:electron_tube", "tfmg:capacitor_item", "projectred_core:plate", "tfmg:resistor"]);

    /* Alloys
     */
    event.remove({id: "mekanism:metallurgic_infusing/alloy/infused"});
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {"amount": 10, "tag": "mekanism:redstone"},
        "itemInput": {"ingredient": {"item": "create:andesite_alloy"}},
        "output": {"item": "mekanism:alloy_infused"}
    });

    event.remove({id: "mekanism:metallurgic_infusing/alloy/reinforced"});
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {"amount": 20, "tag": "mekanism:diamond"},
        "itemInput": {"ingredient": {"item": "tconstruct:slimesteel_ingot"}},
        "output": {"item": "mekanism:alloy_reinforced"}
    });

    event.remove({id: "mekanism:metallurgic_infusing/alloy/atomic"});
    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "chemicalInput": {"amount": 40, "tag": "mekanism:refined_obsidian"},
        "itemInput": {"ingredient": {"item": "tconstruct:manyullyn_ingot"}},
        "output": {"item": "mekanism:alloy_atomic"}
    });

    /* Power Generation
     */
    event.replaceInput({id: "mekanismgenerators:generator/heat"}, "minecraft:copper_ingot", "#forge:plates/copper");
    event.replaceInput({id: "mekanismgenerators:generator/heat"}, "#minecraft:planks", "#forge:plates/copper");
    event.replaceInput({id: "mekanismgenerators:generator/heat"}, "#forge:ingots/osmium", "mekanism:steel_casing");
    event.replaceInput({id: "mekanismgenerators:generator/heat"}, "#kubejs:furnace", "minecraft:blast_furnace");

    replace(
        "mekanismgenerators:solar_panel",
        ["G", "S", "R"],
        { G: "#forge:glass_panes", S: "enderio:photovoltaic_plate", R: "minecraft:redstone"}
    );

    replace(
        "mekanismgenerators:solar_generator",
        ["PPP", " I "],
        {P: "mekanismgenerators:solar_panel", I: "mekanism:alloy_infused"}
    );

    replace(
        "mekanismgenerators:bio_generator",
        ["ACA", "BDB", "EZE"],
        {
            A: "minecraft:redstone",
            B: "mekanism:bio_fuel",
            C: "mekanism:basic_control_circuit",
            E: "#forge:ingots/osmium",
            D: "mekanism:steel_casing",
            Z: "minecraft:blast_furnace"
        }
    )

    event.remove({output: "mekanismgenerators:advanced_solar_generator"})
    event.recipes.createMechanicalCrafting("mekanismgenerators:advanced_solar_generator", [
        " G G ",
        " GSG ",
        "  S  ",
        "  S  ",
        " ECE "
    ], {
        C: "mekanism:steel_casing",
        E: "mekanism:energy_tablet",
        S: "#forge:ingots/steel",
        G: "mekanismgenerators:solar_generator"
    });

    event.remove({output: "mekanismgenerators:wind_generator"})
    event.recipes.createMechanicalCrafting("mekanismgenerators:wind_generator", [
        "    A",
        "   A ",
        "AAI  ",
        "  BA ",
        "  S A",
        "  S  ",
        " ECE ",
    ], {
        A: "#forge:plates/aluminum",
        B: "create:windmill_bearing",
        C: "mekanism:steel_casing",
        E: "mekanism:energy_tablet",
        I: "mekanism:alloy_infused",
        S: "#forge:ingots/steel"
    });

    /* Standard Machines
     */
    const t1_machine_template = (machine, top, bottom) => {
        event.remove({output: `${machine}`});
        event.shaped(Item.of(`${machine}`), ["CTC", "ADA", "EBE"], {
            A: "mekanism:basic_control_circuit",
            C: "minecraft:redstone",
            E: "#forge:ingots/osmium",
            D: "mekanism:steel_casing",
            T: `${top}`,
            B: `${bottom}`
        });
    };

    // left <-> right
    replace("mekanism:metallurgic_infuser", ["ABC", "DED", "FGF"], {
        A: "mekanism:basic_chemical_tank",
        B: "mekanism:basic_pressurized_tube",
        C: "minecraft:blast_furnace",
        D: "mekanism:basic_control_circuit",
        E: "mekanism:steel_casing",
        F: "#forge:ingots/osmium",
        G: "mekanism:basic_universal_cable"
    });

    replace("mekanism:energized_smelter", ["ABA", "CDC", "EFE"], {
        A: "#forge:ingots/osmium",
        B: "minecraft:cauldron",
        C: "tfmg:electromagnetic_coil",
        D: "mekanism:steel_casing",
        E: "mekanism:basic_control_circuit",
        F: "mekanism:basic_universal_cable"
    });

    replace("mekanism:crusher", ["ABA", "CDC", "EFE"], {
        A: "create:metal_bracket",
        B: "create:mechanical_press",
        C: "mekanism:basic_control_circuit",
        D: "mekanism:steel_casing",
        E: "#forge:ingots/osmium",
        F: "mekanism:basic_universal_cable"
    });

    replace("mekanism:precision_sawmill", ["ABG", "CDC", "EFE"], {
        A: "create:encased_fan",
        B: "create:mechanical_saw",
        G: "create:belt_connector",
        C: "mekanism:basic_control_circuit",
        D: "mekanism:steel_casing",
        E: "#forge:ingots/osmium",
        F: "mekanism:basic_universal_cable"
    });

    /* Tier 2 Machines
     */
    replace("mekanism:enrichment_chamber", ["CTC", "ADA", "EBE"], {
        A: "mekanism:advanced_control_circuit",
        C: "mekanism:alloy_infused",
        E: "#forge:ingots/osmium",
        D: "mekanism:steel_casing",
        T: "create:millstone",
        B: "mekanism:advanced_universal_cable"
    });

    // TODO: doesnt work
    event.replaceInput({id: "mekanism:chemical_infuser"}, "mekanism:basic_control_circuit", "mekanism:advanced_control_circuit");
    event.replaceInput({id: "mekanism:chemical_infuser"}, "mekanism:basic_chemical_tank", "mekanism:advanced_chemical_tank");

    /* Tier Installers
     */
    event.remove({output: "mekanism:basic_tier_installer"});
    event.shaped("mekanism:basic_tier_installer", ["RCR", "SHS", "RCR"], {
        R: "minecraft:redstone",
        C: "mekanism:basic_control_circuit",
        S: "mekanism:steel_casing",
        H: "mekanism:hdpe_sheet",
    });

    event.remove({output: "mekanism:advanced_tier_installer"});
    event.shaped("mekanism:advanced_tier_installer", ["RCR", "SHS", "RCR"], {
        R: "mekanism:alloy_infused",
        C: "mekanism:advanced_control_circuit",
        S: "mekanism:steel_casing",
        H: "mekanism:hdpe_sheet",
    });

    event.remove({output: "mekanism:elite_tier_installer"});
    event.shaped("mekanism:elite_tier_installer", ["RCR", "SHS", "RCR"], {
        R: "mekanism:alloy_reinforced",
        C: "mekanism:elite_control_circuit",
        S: "mekanism:steel_casing",
        H: "mekanism:hdpe_sheet",
    });

    event.remove({output: "mekanism:ultimate_tier_installer"});
    event.shaped("mekanism:ultimate_tier_installer", ["RCR", "SHS", "RCR"], {
        R: "mekanism:alloy_atomic",
        C: "mekanism:ultimate_control_circuit",
        S: "mekanism:steel_casing",
        H: "mekanism:hdpe_sheet",
    });

    /*
     * Teleportation
     */
    event.remove({output: "mekanism:teleporter"});
    event.remove({output: "mekanism:teleporter_frame"});
    event.remove({output: "mekanism:portable_teleporter"});
    event.remove({output: "mekanism:module_teleportation_unit"});
})