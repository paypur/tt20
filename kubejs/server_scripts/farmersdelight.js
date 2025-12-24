ServerEvents.recipes(event => {
    // normal recipe already removed by remove all recipes with vanilla tools
    event.shaped('farmersdelight:cooking_pot',
        "BCB",
        {
           B: "#minecraft:wooden_buttons",
           C: "minecraft:cauldron"
        })

    event.remove({output: "farmersdelight:fried_egg"});
    event.smelting("farmersdelight:fried_egg", "#forge:eggs").xp(0.35);
    event.smoking("farmersdelight:fried_egg", "#forge:eggs").xp(0.35);
})