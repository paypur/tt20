MoreJSEvents.villagerTrades((event) => {
    /*
     * Will remove all vanilla trades. You can also just remove them for specific professions.
     */
    event.removeVanillaTrades();
    // event.removeVanillaTrades([...professions], level);

    /*
     * Will remove all mod trades. You can also just remove them for specific professions.
     */
    event.removeModdedTrades();
    // event.removeModdedTrades([...professions], level);
});