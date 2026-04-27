const ID = "immersivegeology:";

ServerEvents.recipes(event => {
    const casting_basin = (input, fluid, output, time) => {
        event.custom({
            "type": "tconstruct:casting_basin",
            "cast": {
                "item": input
            },
            "cast_consumed": true,
            "conditions": [
                {
                    "type": "forge:mod_loaded",
                    "modid": "create"
                }
            ],
            "cooling_time": time,
            "fluid": fluid,
            "result": output
        });
    };

    casting_basin(ID + "storage_block_refractory_brick", { "amount": 90, "tag": "forge:molten_bronze" }, ID + "storage_block_reinforced_refractory_brick",57);
});