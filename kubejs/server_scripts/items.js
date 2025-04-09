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
                not: [{mod: "tconstruct"}, {mod: "draconicevolution"}, {mod: "mekanism"}, {mod: "create"}, {mod: "cataclysm"}]
            })
        });
})