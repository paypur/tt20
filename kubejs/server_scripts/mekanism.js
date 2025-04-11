ServerEvents.recipes(event => {
    // make ore processing require ore block
    // mek only has vanilla and own ores
    ['iron', 'gold', 'copper', "osmium", "tin", "lead", "uranium"]
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
    // TODO: missing processing for other modded ores

    /*
     * Circuits
     */
    event.remove({output: "mekanism:basic_control_circuit"});
    event.shapeless(
        "mekanism:basic_control_circuit",
        ['create:electron_tube',
            'tfmg:capacitor_',
            '#forge:wires/copper',
            '#forge:ingots/osmium']
    )

    event.remove({output: "mekanism:metallurgic_infuser"});
    event.shaped(
        Item.of('mekanism:metallurgic_infuser'),
        [
            'ABA',
            'CDE',
            'FBF'
        ],
        {
            C: 'mekanism:basic_chemical_tank',
            D: 'mekanism:steel_casing',
            B: 'mekanism:basic_control_circuit',
            A: 'minecraft:redstone',
            F: 'mekanism:ingot_osmium',
            E: 'minecraft:blast_furnace'
        }
    )

})