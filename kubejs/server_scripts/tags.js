ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('kubejs:leather', 'minecraft:leather')
  event.add('kubejs:leather', 'minecraft:rabbit_hide')

  event.add('kubejs:gearbox', 'create:gearbox')
  event.add('kubejs:gearbox', 'create:vertical_gearbox')
})
