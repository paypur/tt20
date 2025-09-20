LootJS.modifiers(event => {
    event.removeGlobalModifier("@endrem");

    event.addLootTableModifier("minecraft:entities/elder_guardian").randomChance(0.35).addLoot("endrem:guardian_eye");
    event.addLootTableModifier("minecraft:entities/evoker").randomChance(0.25).addLoot("endrem:magical_eye");
    event.addLootTableModifier("minecraft:entities/skeleton_horse").randomChance(0.25).addLoot("endrem:undead_soul");
    event.addLootTableModifier("minecraft:entities/witch").randomChance(0.125).addLoot("endrem:witch_pupil");
    event.addLootTableModifier("minecraft:entities/wither").randomChance(1).addLoot("endrem:wither_eye");

    event.addLootTableModifier("minecraft:chests/abandoned_mineshaft").randomChance(1).addLoot("endrem:lost_eye");
    event.addLootTableModifier("minecraft:chests/bastion_treasure").randomChance(1).addLoot("endrem:cursed_eye");
    event.addLootTableModifier("minecraft:chests/bastion_other").randomChance(0.125).addLoot("endrem:cursed_eye");
    event.addLootTableModifier("minecraft:chests/buried_treasure").randomChance(1).addLoot("endrem:black_eye");
    event.addLootTableModifier("minecraft:chests/desert_pyramid").randomChance(0.25).addLoot("endrem:old_eye");
    event.addLootTableModifier("minecraft:chests/igloo_chest").randomChance(1).addLoot("endrem:cold_eye");
    event.addLootTableModifier("minecraft:chests/jungle_temple").randomChance(0.5).addLoot("endrem:rogue_eye");
    event.addLootTableModifier("minecraft:chests/nether_bridge").randomChance(0.125).addLoot("endrem:nether_eye");
    event.addLootTableModifier("minecraft:chests/pillager_outpost").randomChance(1).addLoot("endrem:corrupted_eye");
    event.addLootTableModifier("minecraft:chests/woodland_mansion").randomChance(1).addLoot("endrem:magical_eye");
});
