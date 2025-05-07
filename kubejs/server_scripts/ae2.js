ServerEvents.recipes(event => {
    event.remove({output: "ae2:controller"})
    event.recipes.createMechanicalCrafting("ae2:controller", [
        'SSCSS',
        'SRUBS',
        'CLEOC',
        'SUGUS',
        'SSCSS'
    ], {
        S: 'ae2:smooth_sky_stone_block',
        C: '#ae2:covered_dense_cable',
        R: 'projectred_illumination:red_inverted_fixture_light',
        G: 'projectred_illumination:green_inverted_fixture_light',
        B: 'projectred_illumination:blue_inverted_fixture_light',
        U: 'mekanism:alloy_atomic',
        L: 'ae2:calculation_processor',
        E: 'ae2:engineering_processor',
        O: 'ae2:logic_processor'
    })
})