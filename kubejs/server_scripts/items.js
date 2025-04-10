ServerEvents.recipes(event => {
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
                not: [{mod:"alexscaves"}, {mod: "tconstruct"}, {mod: "draconicevolution"}, {mod: "mekanism"}, {mod: "create"}, {mod: "cataclysm"}]
            })
        });

    // stuff missed by tag
    [
        "tfmg:steel", "tfmg:aluninum", "tfmg:lead"
    ].forEach((prefix) => {
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
})