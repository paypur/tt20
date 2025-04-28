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
        }
    );

    event.remove({output: "mekanism:steel_casing"});
    event.shaped(
        Item.of("mekanism:steel_casing"),
        [
            "ABA",
            "BCB",
            "ABA"
        ],
        {
            A: "mekanism:ingot_steel",
            B: "mekanism:ingot_osmium",
            C: "tfmg:steel_casing"
        }
    )

    /*
     * Circuits
     */
    event.remove({output: "mekanism:basic_control_circuit"});
    event.shapeless(
        "mekanism:basic_control_circuit",
        ["create:electron_tube",
            "tfmg:capacitor_",
            "#forge:wires/copper",
            "tfmg:resistor_"]
    )

    /*
     * Basic Machines
     */
    const basic_machine_template = (machine, top, bottom) => {
        event.remove({output: `${machine}`});
        event.shaped(
            Item.of(`${machine}`),
            [
                'ATA',
                'CDC',
                'EBE'
            ],
            {
                A: 'minecraft:redstone',
                C: 'mekanism:basic_control_circuit',
                E: 'mekanism:ingot_osmium',
                D: 'mekanism:steel_casing',
                T: `${top}`,
                B: `${bottom}`
            }
        );
    };

    event.remove({output: "mekanism:metallurgic_infuser"});
    event.shaped(
        Item.of("mekanism:metallurgic_infuser"),
        [
            "AEA",
            "BDB",
            "FCF"
        ],
        {
            C: "mekanism:basic_chemical_tank",
            D: "mekanism:steel_casing",
            B: "mekanism:basic_control_circuit",
            A: "minecraft:redstone",
            F: "mekanism:ingot_osmium",
            E: "minecraft:blast_furnace"
        }
    )

    event.remove({output: "mekanism:energized_smelter"});
    event.shaped(
        Item.of('mekanism:energized_smelter'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            D: 'mekanism:steel_casing',
            C: 'mekanism:basic_control_circuit',
            A: 'minecraft:redstone',
            F: 'tfmg:copper_coil',
            E: 'mekanism:ingot_osmium',
            B: 'minecraft:blast_furnace'
        }
    )

    basic_machine_template("mekanism:crusher",  "create:mechanical_press", "mekanism:block_lead");
    basic_machine_template("mekanism:enrichment_chamber",  "create:millstone", "create:encased_fan");

    /*
     * Teleportation
     */
    event.remove({output: "mekanism:teleporter"});
    event.remove({output: "mekanism:teleporter_frame"});
    event.remove({output: "mekanism:portable_teleporter"});
    event.remove({output: "mekanism:module_teleportation_unit"});
})