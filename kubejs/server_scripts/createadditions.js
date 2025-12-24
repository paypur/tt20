ServerEvents.recipes(event => {
    let replace_spool = (spool, coil) => {
        event.remove({ output: spool })
        event.replaceInput({ input: spool }, spool, coil)
    }

    event.remove({ output: "createaddition:spool" });
    replace_spool("createaddition:copper_spool", 'immersiveengineering:wirecoil_copper');
    replace_spool("createaddition:gold_spool", 'immersiveengineering:wirecoil_electrum');
    replace_spool("createaddition:electrum_spool", 'immersiveengineering:wirecoil_steel');

    event.replaceInput({}, "createaddition:capacitor", "tfmg:capacitor_item");

    /* Liquid Blaze Burning
     */

    event.remove({ type: "createaddition:liquid_burning" });

    const blaze_burning = (fluid, time, superheated) => {
        event.custom({
            "type": "createaddition:liquid_burning",
            "input": {
                "fluidTag": fluid,
                "amount": 1000
            },
            "superheated": superheated,
            "burnTime": time
        })
    };

    blaze_burning("minecraft:lava", 10 * 60 * 20, false);
    blaze_burning("tconstruct:blazing_blood", 15 * 60 * 20, true);
    blaze_burning("forge:ethanol", 12 * 60 * 20, false);
    blaze_burning("forge:biodiesel", 20 * 60 * 20, true);
})

ServerEvents.tags('fluid', event => {
    event.removeAll('create:fan_processing_catalysts/blasting');

    event.remove("minecraft:water", "createaddition:seed_oil", "createaddition:bioethanol")
})
