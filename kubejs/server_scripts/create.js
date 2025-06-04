// https://kubejs.com/wiki/addons/create

ServerEvents.recipes(event => {
    const replace = (replace, recipe, dict) => {
        event.remove({output: replace})
        event.shaped(Item.of(replace, 1), recipe, dict)
    };

    replace('create:cogwheel', [" B ", "BSB", " B "], {
        B: "#minecraft:wooden_buttons",
        S: "create:shaft"
    });
    replace('create:large_cogwheel', ["BPB", "PSP", "BPB"], {
        B: "#minecraft:wooden_buttons",
        P: "#minecraft:planks",
        S: "create:shaft"
    });

    event.remove({output: "create:sail_frame"});
    event.shaped("4x create:sail_frame", ["ASA", "S S", "ASA"], {A: "create:andesite_alloy", S: "#forge:stick"});
    event.remove({output: "create:white_sail"});
    event.shapeless("create:white_sail", ["create:sail_frame", "projectred_core:woven_cloth"]);

    // no more rng
    event.remove({output: 'create:precision_mechanism'});
    let inter = "create:incomplete_precision_mechanism";
    event.recipes.create.sequenced_assembly(
        ['create:precision_mechanism'],
        'create:brass_sheet', [ // input
            event.recipes.createDeploying(inter, [inter, "create:cogwheel"]),
            event.recipes.createDeploying(inter, [inter, "create:large_cogwheel"]),
            event.recipes.createDeploying(inter, [inter, "minecraft:iron_nugget"]),
        ]
    ).transitionalItem(inter)
    .loops(5);

    event.remove({id: "create:crafting/kinetics/large_cogwheel_from_little"});
    event.shaped('create:large_cogwheel', [" P ", "PSP", " P "], {P: "#minecraft:planks", S: "create:cogwheel"},);

    event.replaceInput({output: "create:water_wheel"}, "create:shaft", "#kubejs:gearbox");
    event.replaceInput({output: "create:crushing_wheel"}, "#forge:stone", "#kubejs:gearbox");

    event.remove({id: "create:crafting/materials/andesite_alloy"});
    event.remove({id: "create:crafting/materials/andesite_alloy_from_zinc"});
    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "tconstruct:compat/create/andesite_alloy_iron"});

    event.remove({id: "create:filling/blaze_cake"});
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "create:blaze_cake_base"
            },
            {
                "amount": 250,
                "fluid": "tconstruct:blazing_blood",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "create:blaze_cake"
            }
        ]
    });

    /* Missing Metal Plates
     */
    ["aluminum", "constantan", "lead", "nickel", "silver", "steel"]
        .forEach(s => event.recipes.create.pressing(`kubejs:metal_plate_${s}`, `#forge:ingots/${s}`));
    event.remove({id: "tfmg:sequenced_assembly/heavy_plate"});

    /*
     * Block Breakers
     */
    event.replaceInput({output: 'create:mechanical_saw'}, "create:iron_sheet", "#forge:plates/steel");
    event.replaceInput({output: 'create:mechanical_drill'}, "create:andesite_alloy", "#forge:ingots/steel");
    event.replaceInput({output: 'create:mechanical_drill'}, "minecraft:iron_ingot", "#forge:ingots/osmium");

    /*
     * Milling Compat
     * TODO: probably do more
     */

    // event.recipes.create.milling('create:crushed_raw_iron', '#forge:ingots/iron')
    // event.recipes.create.milling('create:crushed_raw_tin', '#forge:ingots/tin')
    ["iron", "gold", "copper", "zinc", "osmium", "tin", "lead", "uranium", "nickel"].forEach(ore =>
        event.recipes.create.milling(`create:crushed_raw_${ore}`, `#forge:raw_materials/${ore}`)
    );
})
