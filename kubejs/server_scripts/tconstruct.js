// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    const replace = (replace, recipe, dict) => {
        event.remove({output: replace})
        event.shaped(Item.of(replace, 1), recipe, dict)
    };

    replace('tconstruct:travelers_helmet', [' C ', 'ABA'], {
        A: 'minecraft:glass_pane', B: '#forge:ingots/copper', C: 'minecraft:string'
    });

    event.replaceInput({output: 'tconstruct:travelers_helmet'}, 'minecraft:leather', '#kubejs:leather');
    event.replaceInput({output: 'tconstruct:travelers_chestplate'}, 'minecraft:leather', '#kubejs:leather');
    event.replaceInput({output: 'tconstruct:travelers_leggings'}, 'minecraft:leather', '#kubejs:leather');
    event.replaceInput({output: 'tconstruct:travelers_boots'}, 'minecraft:leather', '#kubejs:leather');


    event.replaceInput({output: 'tconstruct:seared_heater'}, 'minecraft:air', 'minecraft:blast_furnace');

    event.replaceInput({mod: 'tconstruct'}, 'minecraft:glass', 'tconstruct:clear_glass');
    event.blasting('tconstruct:clear_glass', 'minecraft:glass');

    replace('tconstruct:smeltery_controller', ['BBB', 'BGB', 'SFS'], {
        B: '#forge:ingots/bronze',
        G: 'tconstruct:clear_glass',
        S: 'tconstruct:seared_bricks',
        F: 'minecraft:blast_furnace'
    });

    // event.remove({output: "tconstruct:grout"});
    // event.recipes.createMixing(["2x tconstruct:grout"], ["minecraft:clay_ball", "minecraft:gravel", "#minecraft:sand", Fluid.of('minecraft:water', 250)]);

    const copper_2_bronze = ['tconstruct:seared_chute', 'tconstruct:seared_drain'];
    copper_2_bronze.forEach((s) => event.replaceInput({output: s}, 'minecraft:copper_ingot', '#forge:ingots/bronze'));

    // TODO: use bronze in smeltery stuff
    // alloy with create first

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

    // event.remove({id:'tconstruct:tools/modifiers/upgrade/netherite'})
    // // for this code to work, kubejs:incomplete_spore_blossom needs to be added to the game
    // let inter = 'kubejs:incomplete_spore_blossom' // making a variable to store the transitional item makes the code more readable
    // event.recipes.create.sequenced_assembly([
    //     'minecraft:dark_oak_leaves'
    // ], 'minecraft:flowering_azalea_leaves', [ // 'minecraft:flowering_azalea_leaves' is the input
    //     // the transitional item is a variable, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly
    //     event.recipes.createPressing(inter, inter),
    //     // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    //     event.recipes.createDeploying(inter, [inter, 'minecraft:hanging_roots']),
    //     event.recipes.createFilling(inter, [inter, Fluid.water(420)]),
    //     event.recipes.createDeploying(inter, [inter, 'minecraft:moss_carpet']),
    //     event.recipes.createCutting(inter, inter)
    // ]).transitionalItem(inter).loops(2) // set the transitional item and the number of loops



})
