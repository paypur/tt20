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
})