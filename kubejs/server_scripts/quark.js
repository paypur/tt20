ServerEvents.recipes(event => {
    event.remove({ output: 'quark:backpack' })
    event.shaped(
        Item.of('quark:backpack', 1),
        [
            'S S',
            'LCL',
            'LIL',
        ],
        {
            C: '#forge:chests',
            I: '#forge:ingots/iron',
            S: 'minecraft:string',
            L: '#kubejs:leather'
        }
    )
})
