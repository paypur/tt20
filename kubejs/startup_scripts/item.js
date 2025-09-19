// priority: 0
// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    event.create('invar_ingot');
    event.create('invar_plate');
    event.create('invar_nugget');
    event.create('invar_dust');
})

StartupEvents.registry('block', event => {
    event.create('invar_block');
})

