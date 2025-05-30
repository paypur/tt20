// priority: 0
// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    event.create('incomplete_circuit_plate', 'create:sequenced_assembly')
    // event.create('blank_pcb').displayName("Blank PCB");

    event.create('metal_plate_aluminum').displayName("Aluminum Plate");
    event.create('metal_plate_constantan').displayName("Constantan Plate");
    event.create('metal_plate_lead').displayName("Lead Plate");
    event.create('metal_plate_nickel').displayName("Nickel Plate");
    event.create('metal_plate_silver').displayName("Silver Plate");
    event.create('metal_plate_steel').displayName("Steel Plate");
})

