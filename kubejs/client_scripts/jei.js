// https://kubejs.com/wiki/addons/jei
JEIEvents.hideItems(event => {
    [
        "minecraft:wooden", "minecraft:stone", "minecraft:iron", "minecraft:golden", "minecraft:diamond",
        "minecraft:netherite", "minecraft:leather", "minecraft:chainmail", "ae2:certus_quartz", "ae2:fluix",
        "ae2:nether_quartz", "tfmg:steel", "tfmg:aluminum", "tfmg:lead"
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

    ["amethyst", "apatite", "azure_silver", "bismuth", "bort", "cinnabar", "crimson_iron", "desh", "dilithium",
        "electrotine", "green_sapphire", "iridium", "niter", "peridot", "platinum", "ruby", "sapphire", "ostrum",
        "calorite", "titanium", "tungsten", "coal", "lapis", "diamond", "redstone", "emerald", "quartz"]
        .forEach(o => {
            event.hide(`moremekanismprocessing:crystal_${o}`);
            event.hide(`moremekanismprocessing:shard_${o}`);
            event.hide(`moremekanismprocessing:clump_${o}`);
            event.hide(`moremekanismprocessing:dirty_dust_${o}`);
            event.hide(`moremekanismprocessing:dust_${o}`);
            event.hide(`moremekanismprocessing:clean_${o}`);
            event.hide(`moremekanismprocessing:dirty_${o}`);
            event.hide(`moremekanismprocessing:gem_${o}`);
            event.hide(`moremekanismprocessing:${o}_ingot`);
            event.hide(`moremekanismprocessing:${o}_nugget`);
        });
})

JEIEvents.removeCategories(event => {
    // https://www.reddit.com/r/CreateMod/comments/1ceabxl/removing_bulk_blastingsmoking_recipies/
    event.remove("create:fan_blasting");
    // event.remove("create:automatic_shaped");
    // event.remove("create:automatic_shapeless");
    event.remove("tfmg:casting");
})