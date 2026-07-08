// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const TCON = "tconstruct:";

ServerEvents.recipes(event => {
    const replace = (replace, recipe, dict) => {
        event.remove({output: replace})
        event.shaped(Item.of(replace, 1), recipe, dict)
    };

    const foundry = (input, output, byproducts, rate, temp, time) => {
        event.custom({
            "type": "tconstruct:ore_melting",
            "byproducts": byproducts,
            "conditions": [{
                "type": "mantle:tag_combination_filled",
                "ignore": "tconstruct:non_singular_ore_rates",
                "match": input
            }],
            "ingredient": {
                "type": "forge:difference",
                "base": {"tag": input},
                "subtracted": {"tag": "tconstruct:non_singular_ore_rates"}
            },
            "rate": rate,
            "result": output,
            "temperature": temp,
            "time": time
        })
    }

    /*
     * Smeltery
     */
    event.replaceInput({output: 'tconstruct:seared_heater'}, 'minecraft:air', 'minecraft:blast_furnace');

    event.replaceInput({mod: 'tconstruct'}, 'minecraft:glass', 'tconstruct:clear_glass');
    event.blasting('tconstruct:clear_glass', 'minecraft:glass');

    event.remove({id: TCON + "smeltery/casting/seared/brick_composite"});

    // event.shapeless(Item.of('mekanism:dust_bronze', 4), ['3x #forge:dusts/copper', '#forge:dusts/tin'])

    event.recipes.createMixing([Fluid.of('tconstruct:molten_slimesteel', 180)], [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('tconstruct:sky_slime', 250), Fluid.of('tconstruct:seared_stone', 250)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_amethyst_bronze', 90)], [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_amethyst', 100)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_rose_gold', 180)], [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_gold', 90)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_bronze', 360)], [Fluid.of('tconstruct:molten_copper', 270), Fluid.of('tconstruct:molten_tin', 90)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_invar', 270)], [Fluid.of('tconstruct:molten_iron', 180), Fluid.of('tconstruct:molten_nickel', 90)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_constantan', 180)], [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_nickel', 90)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_pewter', 270)], [Fluid.of('tconstruct:molten_tin', 180), Fluid.of('tconstruct:molten_lead', 90)]).heated();
    event.recipes.createMixing([Fluid.of('tconstruct:molten_brass', 180)], [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_zinc', 90)]).heated();

    replace('tconstruct:smeltery_controller', ['BBB', 'BGB', 'SFS'], {
        B: '#forge:ingots/bronze',
        G: 'create:precision_mechanism',
        S: 'tconstruct:seared_bricks',
        F: 'minecraft:blast_furnace'
    });

    // event.remove({output: "tconstruct:grout"});
    // event.recipes.createMixing(["2x tconstruct:grout"], ["minecraft:clay_ball", "minecraft:gravel", "#minecraft:sand", Fluid.of('minecraft:water', 250)]);

    // TODO: change melting byproduct
    // ["tconstruct:seared_chute", "tconstruct:seared_drain"]
    //     .forEach((s) => event.replaceInput({output: s}, 'minecraft:copper_ingot', '#forge:ingots/bronze'));
    /* Foundry
     */
    event.remove({id: 'tconstruct:smeltery/scorched/scorched_brick'})
    event.remove({id: 'tconstruct:smeltery/scorched/scorched_brick_kiln'})
    event.remove({id: 'tconstruct:smeltery/casting/scorched/brick_composite'})
    event.remove({id: 'tconstruct:smeltery/casting/scorched/polished_from_magma'})
    event.remove({id: 'tconstruct:smeltery/casting/scorched/stone_from_magma'})

    event.remove({output: "tconstruct:nether_grout"});
    event.recipes.createMixing([Item.of("tconstruct:nether_grout", 2)], ["minecraft:magma_cream", "create:scoria", "immersiveengineering:slag_gravel"]).heated();

    event.remove({output: "tconstruct:scorched_alloyer"})
    event.recipes.createMechanicalCrafting("tconstruct:scorched_alloyer", [
        'GGDGG',
        'GOMOG',
        'DPNPD',
        'SSSSS',
        'SABAS',
    ], {
        A: 'immersiveengineering:component_electronic',
        B: 'minecraft:blast_furnace',
        D: 'tconstruct:scorched_drain',
        G: 'ae2:quartz_glass',
        S: 'tconstruct:scorched_brick',
        O: 'create:cogwheel',
        N: 'immersiveengineering:heavy_engineering',
        M: 'create:mechanical_mixer',
        P: 'create:smart_fluid_pipe'
    })

    // TODO: change melting byproduct
    event.remove({output: 'tconstruct:foundry_controller'})
    event.recipes.createMechanicalCrafting('tconstruct:foundry_controller', [
        'SSSSS',
        'SGGGS',
        'SOCOS',
        'SABAS',
        'SSSSS'
    ], {
        A: 'immersiveengineering:component_electronic',
        B: 'minecraft:blast_furnace',
        C: 'immersiveengineering:heavy_engineering',
        G: 'ae2:quartz_glass',
        S: 'tconstruct:scorched_brick',
        O: 'create:content_observer'
    })

    event.replaceInput({mod: 'tconstruct'}, 'minecraft:quartz', 'ae2:quartz_glass')
    // event.replaceInput({output: 'tconstruct:scorched_duct'}, 'minecraft:gold_ingot', '#forge:ingots/cobalt');
    // wont working without assigning idk
    // TODO: change melting byproduct
    // ["tconstruct:scorched_chute", "tconstruct:scorched_drain"]
    //     .forEach(s => event.replaceInput({output: s}, 'tconstruct:obsidian_pane', "tconstruct:nahuatl"));


    /* Foundry Melting
     */
    event.remove({id: "tconstruct:smeltery/melting/diamond/ore_singular"});
    foundry("forge:ores/diamond",
        {"amount": 100, "fluid": "tconstruct:molten_diamond"},
        [{"amount": 30, "fluid": "tconstruct:molten_debris", "rate": "metal"}],
        "gem",
        1450,
        197);

    event.remove({id: "tconstruct:smeltery/melting/metal/molten_debris/ore"});
    foundry("forge:ores/netherite_scrap",
        { "amount": 90, "fluid": "tconstruct:molten_debris" },
        [],
        "metal",
        1175,
        143);


    /*
     * Modifiers
     */
    event.remove({id:'tconstruct:tools/modifiers/upgrade/diamond'})
    event.custom({
        "type": "tconstruct:modifier",
        "allow_crystal": true,
        "inputs": [
            {"tag": "forge:dusts/diamond"},
            {"tag": "forge:dusts/diamond"},
            {"tag": "forge:dusts/diamond"}
        ],
        "level": 1,
        "result": "tconstruct:diamond",
        "slots": {
            "upgrades": 1
        },
        "tools": {
            "tag": "tconstruct:modifiable/durability"
        }
    })

    /* Compat Removal
     */
    event.remove({id: "createaddition:compat/tconstruct/hepatizon" });
    event.remove({id: "createaddition:compat/tconstruct/manyullyn" });
    event.remove({id: "createaddition:compat/tconstruct/queens_slime" });
    event.remove({id: "immersiveengineering:alloysmelter/manyullyn" });
    event.remove({id: "immersiveengineering:arcfurnace/alloy_manyullyn" });
})
