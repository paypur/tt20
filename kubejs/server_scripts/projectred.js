ServerEvents.recipes(event => {
    event.remove({output: 'projectred_core:plate'});
    let inter = 'kubejs:incomplete_circuit_plate'
    event.recipes.create.sequenced_assembly([
        '2x projectred_core:plate'
    ], 'minecraft:stone_pressure_plate', [ // input
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, 'tfmg:copper_cable']),
        event.recipes.createDeploying(inter, [inter, 'minecraft:stone_pressure_plate']),
        event.recipes.createPressing(inter, inter),
        event.recipes.createCutting(inter, inter)
    ])
    .transitionalItem(inter).loops(1);
})