JEIEvents.removeCategories(event => {
    // https://www.reddit.com/r/CreateMod/comments/1ceabxl/removing_bulk_blastingsmoking_recipies/
    event.remove("create:fan_blasting");

    // TODO: doesnt work
    ["#minecraft:swords", "#minecraft:pickaxes", "#minecraft:axes", "#minecraft:shovels",
        "#minecraft:hoes", "#minecraft:bows", "#minecraft:crossbows", "#forge:tools/shields",
        "#minecraft:helmets", "#minecraft:chestplates", "#minecraft:leggings", "#minecraft:boots"]
        .forEach((tag) => {
            event.hide({
                output: tag,
                not: [{mod: "tconstruct"}, {mod: "draconicevolution"}, {mod: "mekanism"}, {mod: "create"}, {mod: "cataclysm"}]
            })
        });
})