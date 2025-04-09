ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('kubejs:leather', 'minecraft:leather');
  event.add('kubejs:leather', 'minecraft:rabbit_hide');

  event.add('kubejs:gearbox', 'create:gearbox');
  event.add('kubejs:gearbox', 'create:vertical_gearbox');

  // adds crushed to dust tag
  ["iron", "gold", "copper", "zinc", "osmium", "tin", "lead", "uranium", "nickel"]
      .forEach(s => event.add(`forge:dusts/${s}`, `create:crushed_raw_${s}`));

  event.add("forge:dusts/sulfur", 'tfmg:sulfur_dust');

  event.removeAll('create:fan_processing_catalysts/blasting');

})

// https://www.reddit.com/r/CreateMod/comments/1ceabxl/comment/mjyy56s
ServerEvents.tags('block', event => {
  event.removeAll('create:fan_processing_catalysts/blasting');
})

ServerEvents.tags('fluid', event => {
  event.removeAll('create:fan_processing_catalysts/blasting');
})
