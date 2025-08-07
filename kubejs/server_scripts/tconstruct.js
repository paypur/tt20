// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    const replace = (replace, recipe, dict) => {
        event.remove({output: replace})
        event.shaped(Item.of(replace, 1), recipe, dict)
    };

    event.replaceInput({output: 'tconstruct:travelers_helmet'}, 'minecraft:leather', '#kubejs:leather');
    event.replaceInput({output: 'tconstruct:travelers_chestplate'}, 'minecraft:leather', '#kubejs:leather');
    event.replaceInput({output: 'tconstruct:travelers_leggings'}, 'minecraft:leather', '#kubejs:leather');
    event.replaceInput({output: 'tconstruct:travelers_boots'}, 'minecraft:leather', '#kubejs:leather');

    /*
     * Smeltery
     */
    event.replaceInput({output: 'tconstruct:seared_heater'}, 'minecraft:air', 'minecraft:blast_furnace');

    event.replaceInput({mod: 'tconstruct'}, 'minecraft:glass', 'tconstruct:clear_glass');
    event.blasting('tconstruct:clear_glass', 'minecraft:glass');


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
    event.recipes.createMixing([Fluid.of("tconstruct:scorched_stone", 250)], [Fluid.of("tconstruct:magma", 250), "minecraft:soul_soil", "minecraft:gravel"]).heated();

    event.remove({output: "tconstruct:scorched_alloyer"})
    event.recipes.createMechanicalCrafting("tconstruct:scorched_alloyer", [
        'GGDGG',
        'GOMOG',
        'DPNPD',
        'SSCSS',
        'SABAS',
    ], {
        A: 'mekanism:advanced_control_circuit',
        B: 'minecraft:blast_furnace',
        C: 'tfmg:steel_casing',
        D: 'tconstruct:scorched_drain',
        G: 'ae2:quartz_glass',
        S: 'tconstruct:scorched_bricks',
        O: 'tfmg:steel_cogwheel',
        N: 'create:basin',
        M: 'create:mechanical_mixer',
        P: 'tfmg:steel_pipe'
    })


    // TODO: change melting byproduct
    event.remove({output: 'tconstruct:foundry_controller'})
    event.recipes.createMechanicalCrafting('tconstruct:foundry_controller', [
        'NNNNN',
        'NGGGN',
        'NOCON',
        'NABAN',
        'SSSSS'
    ], {
        A: 'mekanism:advanced_control_circuit',
        B: 'minecraft:blast_furnace',
        C: 'tfmg:steel_casing',
        G: 'ae2:quartz_glass',
        N: 'tconstruct:nahuatl',
        S: 'tconstruct:scorched_bricks',
        O: 'create:content_observer'
    })

    event.replaceInput({mod: 'tconstruct'}, 'minecraft:quartz', 'ae2:quartz_glass')
    // event.replaceInput({output: 'tconstruct:scorched_duct'}, 'minecraft:gold_ingot', '#forge:ingots/cobalt');
    // wont working without assigning idk
    // TODO: change melting byproduct
    // ["tconstruct:scorched_chute", "tconstruct:scorched_drain"]
    //     .forEach(s => event.replaceInput({output: s}, 'tconstruct:obsidian_pane', "tconstruct:nahuatl"));

    /*
     * Modifiers
     */
    event.remove({id:'tconstruct:tools/modifiers/upgrade/diamond'})
    event.custom({
        "type": "tconstruct:modifier",
        "allow_crystal": true,
        "inputs": [
            {"item": "mekanism:dust_diamond"},
            {"item": "mekanism:dust_diamond"},
            {"item": "mekanism:dust_diamond"}
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

})
