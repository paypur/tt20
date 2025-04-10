// https://kubejs.com/wiki/addons/jei
JEIEvents.hideItems(event => {
    [
        "minecraft:wooden", "minecraft:stone", "minecraft:iron", "minecraft:golden", "minecraft:diamond",
        "minecraft:netherite", "minecraft:leather", "minecraft:chainmail", "ae2:certus_quartz", "ae2:fluix",
        "ae2:nether_quartz", "tfmg:steel", "tfmg:aluninum", "tfmg:lead"
    ].forEach((prefix) => {
        event.hide(`${prefix}_sword`);
        event.hide(`${prefix}_pickaxe`);
        event.hide(`${prefix}_axe`);
        event.hide(`${prefix}_shovel`);
        event.hide(`${prefix}_hoe`);
        event.hide(`${prefix}_helmet`);
        event.hide(`${prefix}_chestplate`);
        event.hide(`${prefix}_leggings`);
        event.hide(`${prefix}_boots`);
    });
})

JEIEvents.removeCategories(event => {
    // https://www.reddit.com/r/CreateMod/comments/1ceabxl/removing_bulk_blastingsmoking_recipies/
    event.remove("create:fan_blasting");
})