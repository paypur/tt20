// https://kubejs.com/wiki/addons/create

ServerEvents.recipes(event => {
    const replace = (replace, recipe, dict) => {
        event.remove({output: replace})
        event.shaped(Item.of(replace, 1), recipe, dict)
    };

    replace('create:cogwheel', [" B ", "BSB", " B "], {B: "#minecraft:wooden_buttons", S: "create:shaft"},);

    replace('create:large_cogwheel', ["BPB", "PSP", "BPB"], {
        B: "#minecraft:wooden_buttons",
        P: "#minecraft:planks",
        S: "create:shaft"
    },);

    event.remove({id: "create:crafting/kinetics/large_cogwheel_from_little"});
    event.shaped('create:large_cogwheel', [" P ", "PSP", " P "], {P: "#minecraft:planks", S: "create:cogwheel"},);

    event.replaceInput({output: "create:water_wheel"}, "create:shaft", "#kubejs:gearbox");
    event.replaceInput({output: "create:crushing_wheel"}, "#forge:stone", "#kubejs:gearbox");

    event.remove({id: "create:crafting/materials/andesite_alloy"});
    event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc"});
    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "tconstruct:compat/create/andesite_alloy_iron"});

    /*
     * Milling Compat
     * TODO: probably do more
     */

    event.recipes.create.milling('create:crushed_raw_tin', '#forge:ingots/tin')
    event.recipes.create.milling('create:crushed_raw_tin', '#forge:raw_materials/tin')
})
