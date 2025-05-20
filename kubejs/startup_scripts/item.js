// priority: 0
// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    event.create('incomplete_circuit_plate', 'create:sequenced_assembly')
    // event.create('blank_pcb').displayName("Blank PCB");
})

