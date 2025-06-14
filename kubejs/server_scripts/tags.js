ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('kubejs:leather', 'minecraft:leather');
    event.add('kubejs:leather', 'minecraft:rabbit_hide');

    event.add('kubejs:gearbox', 'create:gearbox');
    event.add('kubejs:gearbox', 'create:vertical_gearbox');

    event.add('kubejs:furnace', 'minecraft:furnace');
    event.add('kubejs:furnace', "quark:deepslate_furnace");
    event.add('kubejs:furnace', "quark:blackstone_furnace");

    // add plates to tags
    ["aluminum", "constantan", "lead", "nickel", "silver", "steel"]
        .forEach((s) => event.add(`forge:plates/${s}`, `kubejs:metal_plate_${s}`));

    // adds crushed to dust tag
    ["iron", "gold", "copper", "zinc", "osmium", "tin", "lead", "uranium", "nickel"]
        .forEach(s => event.add(`forge:dusts/${s}`, `create:crushed_raw_${s}`));

    event.add("forge:dusts/sulfur", 'tfmg:sulfur_dust');

    event.removeAll('create:fan_processing_catalysts/blasting');

    ["amethyst", "apatite", "azure_silver", "bismuth", "bort", "cinnabar", "crimson_iron", "desh", "dilithium",
        "electrotine", "green_sapphire", "iridium", "niter", "peridot", "platinum", "ruby", "sapphire", "ostrum",
        "calorite", "titanium", "tungsten", "coal", "lapis", "diamond", "redstone", "emerald", "quartz"]
        .forEach(o => {
            event.removeAllTagsFrom(`moremekanismprocessing:crystal_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:shard_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:clump_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:dirty_dust_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:dust_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:gem_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:${o}_ingot`);
            event.removeAllTagsFrom(`moremekanismprocessing:${o}_nugget`);
        });
})

// https://www.reddit.com/r/CreateMod/comments/1ceabxl/comment/mjyy56s
ServerEvents.tags('block', event => {
    event.removeAll("create:fan_processing_catalysts/blasting");

    event.removeAll("create:windmill_sails");
    event.add("create:windmill_sails", "create:white_sail");
    // event.add("create:windmill_sails", "create:sail_frame");
})

ServerEvents.tags('fluid', event => {
    event.removeAll('create:fan_processing_catalysts/blasting');

    // fluid specific
    ["amethyst", "apatite", "azure_silver", "bismuth", "bort", "cinnabar", "crimson_iron", "desh", "dilithium",
        "electrotine", "green_sapphire", "iridium", "niter", "peridot", "platinum", "ruby", "sapphire", "ostrum",
        "calorite", "titanium", "tungsten", "coal", "lapis", "diamond", "redstone", "emerald", "quartz"]
        .forEach(o => {
            event.removeAllTagsFrom(`moremekanismprocessing:clean_${o}`);
            event.removeAllTagsFrom(`moremekanismprocessing:dirty_${o}`);
        });
})
