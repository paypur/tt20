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

    /* Ore Processing
     */
    const crushing = (material) => {
        event.custom({
            "type": "immersiveengineering:crusher",
            "conditions": [{"type": "forge:not", "value": {"type": "forge:tag_empty", "tag": `forge:ingots/${material}`}}],
            "energy": 3000,
            "input": {"tag": `forge:ingots/${material}`},
            "result": {"tag": `forge:dusts/${material}`},
            "secondaries": []
        });
        event.custom({
            "type": "immersiveengineering:crusher",
            "conditions": [{"type": "forge:not", "value": {"type": "forge:tag_empty", "tag": `forge:gems/${material}`}}],
            "energy": 3000,
            "input": {"tag": `forge:gems/${material}`},
            "result": {"tag": `forge:dusts/${material}`},
            "secondaries": []
        });
    };

    // Make ore processing require ore blocks
    event.remove({id: /immersiveengineering:crusher\/raw_(ore|block)_.*/});

    // only do ones the ie doesn't already add
    ["fluorite", "bronze", "lapis", "quartz", "emerald", "diamond", "steel", "obsidian", "refined_obsidian", "osmium", "tin", "lithium", "cobalt", "draconium"]
        .forEach(material => crushing(material));

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

    /* Machines
     */
    event.replaceInput({output: "immersiveengineering:cloche"}, "immersiveengineering:component_iron", "immersiveengineering:light_engineering");

    /* Power Generation
     */
    // TODO: nerf water wheel recipe
});