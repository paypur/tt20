ServerEvents.recipes(event => {
    event.remove({output: 'projectred_core:plate'});
    let inter = 'kubejs:incomplete_circuit_plate'
    event.recipes.create.sequenced_assembly([
        'projectred_core:plate'
    ], 'create:cardboard', [ // input
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        event.recipes.createDeploying(inter, [inter, 'tfmg:copper_wire']),
        event.recipes.createDeploying(inter, [inter, 'create:cardboard']),
        event.recipes.createPressing(inter, inter),
    ])
    .transitionalItem(inter).loops(1);
})