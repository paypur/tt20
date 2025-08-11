ServerEvents.recipes(event => {
    const blast_furnace_tag = (input, result, time) => {
        event.custom({
            "type": "immersiveengineering:blast_furnace",
            "input": {"tag": input},
            "result": {"tag": result},
            "time": time
        });
    }

    const blueprint = (category, inputs, output) => {
        event.custom({
            "type": "immersiveengineering:blueprint",
            "category": category,
            "inputs": inputs,
            "result": output
        });
    }

    // use tfmg coke oven instead
    event.remove({output: "immersiveengineering:cokebrick"});
    event.remove({type: "immersiveengineering:coke_oven"});
    event.remove({type: "immersiveengineering:alloy"});

    blast_furnace_tag("forge:gems/quartz", "forge:ingots/silicon", 1200);

    event.replaceInput({output: "immersiveengineering:blastbrick"}, "#forge:ingots/brick", "tfmg:fireproof_brick");

    event.remove({id: /immersiveengineering:crafting\/(raw_)?hammercrushing_.*/ });

    /* Circuits
     */
    event.remove({output: "immersiveengineering:electron_tube"})
    blueprint("components",[
            {"tag": "forge:glass"},
            {"tag": "forge:plates/nickel"},
            {"tag": "forge:wires/copper"},
            {"item": "create:polished_rose_quartz"}
        ], {
            "count": 3,
            "item": "immersiveengineering:electron_tube"
        });

    event.replaceInput({}, "immersiveengineering:electron_tube", "#immersiveengineering:circuits/logic");

    event.shapeless("tfmg:empty_circuit_board", ["immersiveengineering:plate_duroplast", "minecraft:green_dye"]);

});