ServerEvents.recipes(event => {
    event.remove({id: "tfmg:industrial_blasting/steel"})
    event.custom({
        "type": "tfmg:industrial_blasting",
        "ingredients": [
            {
                "count": 1,
                "item": "tfmg:blasting_mixture"
            }
        ],
        "processingTime": 200,
        "results": [
            {
                "fluid": "tconstruct:molten_steel",
                "amount": 90
            },
            {
                "fluid": "tfmg:molten_slag",
                "amount": 50
            }
        ]
    })
})