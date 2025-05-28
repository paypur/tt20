ServerEvents.recipes(event => {
    // normal recipe already removed by remove all recipes with vanilla tools
    event.shaped('farmersdelight:cooking_pot',
        "BCB",
        {
           B: "#minecraft:wooden_buttons",
           C: "minecraft:cauldron"
        })
})