//attributes Startup Script
EntityJSEvents.attributes(event => {
    /**
     * While the entity builders come with pre-added default attributes you may
     * add your own attributes here as well for more control over your entity's attributes.
     * This also works to modify existing mob's attributes such as in this example we are modifying
     * an allay's max health.
     */

    // TODO: doesnt work, should be correct though
    // event.getAllTypes().forEach(entity => {
        // let resource = entity.toString();
        // resource = resource.substring(resource.indexOf(".") + 1).replace(".", ":");
        // event.modify(resource, attributes => {
        //     attributes.add("minecraft:generic.knockback_resistance", 0.5);
        // });
    // });

    event.modify("minecraft:wither_skeleton", a => a.add("minecraft:generic.max_health", 24));
    event.modify("minecraft:blaze", a => a.add("minecraft:generic.max_health", 24));
    event.modify("minecraft:piglin", a => a.add("minecraft:generic.max_health", 20));
});