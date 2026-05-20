ServerEvents.recipes(event => {
    const ID = "immersivegeology:";

    const casting_basin = (input, fluid, output, time) => {
        event.custom({
            "type": "tconstruct:casting_basin",
            "cast": {
                "item": input
            },
            "cast_consumed": true,
            "cooling_time": time,
            "fluid": fluid,
            "result": output
        });
    };

    casting_basin(ID + "storage_block_refractory_brick", { "amount": 90, "tag": "forge:molten_bronze" }, ID + "storage_block_reinforced_refractory_brick",57);

    global.blast_furnace(event, 'forge:crushed_ore/sphalerite', '5x immersivegeology:nugget_zinc', 10 * 20);
    global.blast_furnace(event, 'forge:slag/sphalerite', 'immersivegeology:ingot_zinc', 45 * 20);
});