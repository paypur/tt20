ServerEvents.recipes(event => {
    // use tfmg coke oven instead
    event.remove({output: "immersiveengineering:cokebrick"});
    event.remove({type: "immersiveengineering:coke_oven"});

    event.replaceInput({output: "immersiveengineering:blastbrick"}, "#forge:ingots/brick", "tfmg:fireproof_brick");
});