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

    /* Nerfs plates
     */
    const replacePlates = (plate, ingot) => {
        event.remove({ output: plate, type: "minecraft:crafting_shapeless" })
        event.shaped(
            plate,
            ["H", "I", "I"],
            { H: Item.of('immersiveengineering:hammer').ignoreNBT(), I: ingot }
        )
        .damageIngredient('immersiveengineering:hammer')
        .keepIngredient('immersiveengineering:hammer')
    }

    replacePlates("immersiveengineering:plate_copper", "#forge:ingots/copper")
    replacePlates("immersiveengineering:plate_aluminum", "#forge:ingots/aluminum")
    replacePlates("immersiveengineering:plate_lead", "#forge:ingots/lead")
    replacePlates("immersiveengineering:plate_silver", "#forge:ingots/silver")
    replacePlates("immersiveengineering:plate_nickel", "#forge:ingots/nickel")
    replacePlates("immersiveengineering:plate_uranium", "#forge:ingots/uranium")
    replacePlates("immersiveengineering:plate_constantan", "#forge:ingots/constantan")
    replacePlates("immersiveengineering:plate_electrum", "#forge:ingots/electrum")
    replacePlates("immersiveengineering:plate_steel", "#forge:ingots/steel")
    replacePlates("immersiveengineering:plate_iron", "#forge:ingots/iron")
    replacePlates("immersiveengineering:plate_gold", "#forge:ingots/gold")
    replacePlates("create:brass_sheet", "#forge:ingots/brass")
    replacePlates("createaddition:zinc_sheet", "#forge:ingots/zinc")
    replacePlates("kubejs:invar_plate", "#forge:ingots/invar")

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