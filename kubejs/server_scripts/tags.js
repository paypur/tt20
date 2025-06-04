ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('kubejs:leather', 'minecraft:leather');
  event.add('kubejs:leather', 'minecraft:rabbit_hide');

  event.add('kubejs:gearbox', 'create:gearbox');
  event.add('kubejs:gearbox', 'create:vertical_gearbox');

  event.add('kubejs:furnace', 'minecraft:furnace');
  event.add('kubejs:furnace', "quark:deepslate_furnace");
  event.add('kubejs:furnace', "quark:blackstone_furnace");

  // add plates to tags
  ["aluminum", "constantan", "lead", "nickel", "silver", "steel"]
      .forEach((s) => event.add(`forge:plates/${s}`, `kubejs:metal_plate_${s}`));

  // adds crushed to dust tag
  ["iron", "gold", "copper", "zinc", "osmium", "tin", "lead", "uranium", "nickel"]
      .forEach(s => event.add(`forge:dusts/${s}`, `create:crushed_raw_${s}`));

  event.add("forge:dusts/sulfur", 'tfmg:sulfur_dust');

  event.removeAll('create:fan_processing_catalysts/blasting');

})

// https://www.reddit.com/r/CreateMod/comments/1ceabxl/comment/mjyy56s
ServerEvents.tags('block', event => {
  event.removeAll("create:fan_processing_catalysts/blasting");

  event.removeAll("create:windmill_sails");
  event.add("create:windmill_sails", "create:white_sail");
  // event.add("create:windmill_sails", "create:sail_frame");
})

ServerEvents.tags('fluid', event => {
  event.removeAll('create:fan_processing_catalysts/blasting');
})
