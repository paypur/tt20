ServerEvents.recipes(event => {
    event.remove({output: "ae2:controller"})
    event.recipes.createMechanicalCrafting("ae2:controller", [
        'SSCSS',
        'SRUBS',
        'CLEOC',
        'SUGUS',
        'SSCSS'
    ], {
        S: 'ae2:sky_stone_block',
        C: '#ae2:covered_dense_cable',
        R: 'projectred_illumination:red_inverted_fixture_light',
        G: 'projectred_illumination:green_inverted_fixture_light',
        B: 'projectred_illumination:blue_inverted_fixture_light',
        U: '#forge:ingots/platinum',
        L: 'ae2:calculation_processor',
        E: 'ae2:engineering_processor',
        O: 'ae2:logic_processor'
    })

    /* Non block items, replaced with silver
     */
    event.replaceInput({output: "ae2:advanced_card"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:view_cell"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:item_cell_housing"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:item_storage_cell_1k"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:item_storage_cell_4k"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:item_storage_cell_16k"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:item_storage_cell_64k"}, "minecraft:iron_ingot", "#forge:ingots/silver");
    event.replaceInput({output: "ae2:item_storage_cell_256k"}, "minecraft:iron_ingot", "#forge:ingots/silver");

    event.replaceInput({mod: "ae2"}, "minecraft:iron_ingot", "#forge:ingots/aluminum");
})
