ServerEvents.recipes(event => {
    ["amethyst", "apatite", "azure_silver", "bismuth", "bort", "cinnabar", "crimson_iron", "desh", "dilithium",
        "electrotine", "green_sapphire", "iridium", "niter", "peridot", "platinum", "ruby", "sapphire", "ostrum",
        "calorite", "titanium", "tungsten", "coal", "lapis", "diamond", "redstone", "emerald", "quartz"]
        .forEach(o => {
        event.remove({output: `moremekanismprocessing:crystal_${o}`});
        event.remove({output: `moremekanismprocessing:shard_${o}`});
        event.remove({output: `moremekanismprocessing:clump_${o}`});
        event.remove({output: `moremekanismprocessing:dirty_dust_${o}`});
        event.remove({output: `moremekanismprocessing:dust_${o}`});
        event.remove({output: `moremekanismprocessing:clean_${o}`});
        event.remove({output: `moremekanismprocessing:dirty_${o}`});
        event.remove({output: `moremekanismprocessing:gem_${o}`});
        event.remove({output: `moremekanismprocessing:${o}_ingot`});
        event.remove({output: `moremekanismprocessing:${o}_nugget`});
    });

})