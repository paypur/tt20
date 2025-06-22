ServerEvents.recipes(event => {
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
        A: "mekanism:ingot_steel", B: "mekanism:ingot_osmium", C: "tfmg:steel_casing"
    })

    /* Circuits
     */
    event.remove({output: "mekanism:basic_control_circuit"});
    event.shapeless("mekanism:basic_control_circuit", ["create:electron_tube", "tfmg:capacitor_", "projectred_core:plate", "tfmg:resistor_"]);

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
    event.replaceInput({id: "mekanismgenerators:generator/heat"}, "mekanism:ingot_osmium", "mekanism:steel_casing");
    event.replaceInput({id: "mekanismgenerators:generator/heat"}, "#kubejs:furnace", "minecraft:blast_furnace");

    event.remove({output: "mekanismgenerators:solar_panel"});
    event.shaped(
        "mekanismgenerators:solar_panel",
        ["G", "S", "R"],
        { G: "#forge:glass_panes", S: "enderio:photovoltaic_plate", R: "minecraft:redstone"}
    );

    event.remove({output: "mekanismgenerators:solar_generator"});
    event.shaped(
        "mekanismgenerators:solar_generator",
        ["PPP", " I "],
        {P: "mekanismgenerators:solar_panel", I: "mekanism:alloy_infused"}
    );

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
    const standard_machine_template = (machine, top, bottom) => {
        event.remove({output: `${machine}`});
        event.shaped(Item.of(`${machine}`), ["ATA", "CDC", "EBE"], {
            A: "minecraft:redstone",
            C: "mekanism:basic_control_circuit",
            E: "mekanism:ingot_osmium",
            D: "mekanism:steel_casing",
            T: `${top}`,
            B: `${bottom}`
        });
    };

    // left <-> right
    event.remove({output: "mekanism:metallurgic_infuser"});
    event.shaped("mekanism:metallurgic_infuser", ["ACA", "LDR", "ECE"], {
        A: "minecraft:redstone",
        C: "mekanism:basic_control_circuit",
        E: "mekanism:ingot_osmium",
        D: "mekanism:steel_casing",
        L: "mekanism:basic_chemical_tank",
        R: "minecraft:blast_furnace"
    });

    standard_machine_template("mekanism:energized_smelter", "minecraft:blast_furnace", "tfmg:copper_coil");
    standard_machine_template("mekanism:crusher", "create:mechanical_press", "mekanism:block_lead");
    standard_machine_template("mekanism:enrichment_chamber", "create:millstone", "create:encased_fan"); // 2x
    standard_machine_template("mekanism:precision_sawmill", "create:mechanical_saw", "mekanism:ingot_osmium");

    // TODO: doesnt work
    event.replaceInput({output: "mekanism:chemical_infuser"}, "mekanism:basic_control_circuit", "mekanism:advanced_control_circuit");
    event.replaceInput({output: "mekanism:chemical_infuser"}, "mekanism:basic_chemical_tank", "mekanism:advanced_chemical_tank");

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