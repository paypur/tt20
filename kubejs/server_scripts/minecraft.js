ServerEvents.recipes(event => {
    const replace = (replace, recipe, dict) => {
        event.remove({output: replace})
        event.shaped(Item.of(replace, 1), recipe, dict)
    };

    event.remove({id: "minecraft:netherite_ingot"});

    ["#minecraft:swords", "#minecraft:pickaxes", "#minecraft:axes", "#minecraft:shovels",
        "#minecraft:hoes", "#forge:tools/bows", "#forge:tools/crossbows", "#forge:tools/shields",
        "#forge:armors/helmets", "#forge:armors/chestplates", "#forge:armors/leggings", "#forge:armors/boots"]
        .forEach((tag) => {
            event.remove({
                input: tag,
                not: [{mod: "draconicevolution"}, {mod: "mekanism"}, {mod: "create"}]
            })
            event.remove({
                output: tag,
                not: [{mod: "alexscaves"}, {mod: "tconstruct"}, {mod: "draconicevolution"}, {mod: "mekanism"}, {mod: "create"}, {mod: "cataclysm"}, {mod: "blue_skies"}]
            })
        });

    // stuff missed by tag
    ["tfmg:steel", "tfmg:aluminum", "tfmg:lead"]
        .forEach((prefix) => {
        event.remove({output:`${prefix}_sword`});
        event.remove({output:`${prefix}_pickaxe`});
        event.remove({output:`${prefix}_axe`});
        event.remove({output:`${prefix}_shovel`});
        event.remove({output:`${prefix}_hoe`});
        event.remove({output:`${prefix}_helmet`});
        event.remove({output:`${prefix}_chestplate`});
        event.remove({output:`${prefix}_leggings`});
        event.remove({output:`${prefix}_boots`});
    });

    /* Furnaces
     */
    event.replaceInput({input: "minecraft:furnace"}, "minecraft:furnace", "#kubejs:furnace");

    replace("minecraft:blast_furnace",
        [
            "AAA",
            "ABA",
            "CCC"
        ],
        {
            A: "minecraft:iron_ingot",
            C: "minecraft:smooth_stone",
            B: "#kubejs:furnace"
        }
    )

    event.remove({id: "minecraft:netherite_scrap"});
    event.remove({id: "minecraft:netherite_scrap_from_blasting"});

    event.replaceInput({}, 'minecraft:leather', '#forge:leather');
})