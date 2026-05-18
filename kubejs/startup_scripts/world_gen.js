WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = ['tconstruct:cobalt_ore', 'create:zinc_ore', 'create:deepslate_zinc_ore']
    })
})