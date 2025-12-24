ServerEvents.recipes(event => {
    event.remove({id: "tfmg:industrial_blasting/steel"})
    event.remove({id: "tfmg:industrial_blasting/steel_from_dust"})
    event.remove({id: "tfmg:industrial_blasting/steel_from_raw_iron"})
    event.custom({
        "type": "tfmg:industrial_blasting", "hotAirUsage": 20, "ingredients": [{
            "tag": "forge:dusts/iron"
        }, {
            "tag": "tfmg:flux"
        }], "processingTime": 20, "results": [{
            "amount": 90, "fluid": "tconstruct:molten_steel"
        }, {
            "amount": 90, "fluid": "tfmg:molten_slag"
        }, {
            "amount": 200, "fluid": "tfmg:furnace_gas"
        }]
    });

    event.remove({id: "tfmg:vat_machine_recipe/arc_furnace_steel"});
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": ["tfmg:firebrick_lined_vat"],
        "ingredients": [{
            "tag": "forge:dusts/iron"
        }, {
            "tag": "tfmg:flux"
        }, {
            "item": "tfmg:coal_coke_dust"
        }],
        "machines": ["tfmg:graphite_electrode", "tfmg:graphite_electrode", "tfmg:graphite_electrode"],
        "minSize": 9,
        "processingTime": 20,
        "results": [{
            "chance": 0.9, "item": "tfmg:coal_coke_dust"
        }, {
            "amount": 90, "fluid": "tconstruct:molten_steel"
        }, {
            "amount": 90, "fluid": "tfmg:molten_slag"
        }]
    })

    // because this lame mod can't be bothered to have a function crafting tree
    event.custom({
        "type": "tconstruct:casting_table", "cast": {
            "tag": "tconstruct:casts/multi_use/ingot"
        }, "cooling_time": 60, "fluid": {
            "amount": 90, "fluid": "tfmg:liquid_silicon"
        }, "result": {
            "item": "tfmg:silicon_ingot"
        }
    });

    event.custom({
        "type": "tconstruct:casting_table", "cast": {
            "tag": "tconstruct:casts/multi_use/ingot"
        }, "cooling_time": 60, "fluid": {
            "amount": 90, "fluid": "tfmg:molten_plastic"
        }, "result": {
            "item": "tfmg:plastic_sheet"
        }
    })

    event.remove({id: "tfmg:sequenced_assembly/unfinished_circuit_board"});
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": "tfmg:etched_circuit_board" },
        "loops": 1,
        "results": [{ "item": "mekanism:basic_control_circuit" }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{ "item": "tfmg:unfinished_circuit_board" }, { "tag": "immersiveengineering:circuits/logic" }],
            "results": [{ "item": "tfmg:unfinished_circuit_board" }]
        }, {
            "type": "create:deploying", "ingredients": [{ "item": "tfmg:unfinished_circuit_board" }, { "item": "tfmg:resistor" }],
            "results": [{  "item": "tfmg:unfinished_circuit_board" }]
        }, {
            "type": "create:deploying", "ingredients": [{ "item": "tfmg:unfinished_circuit_board" }, { "item": "tfmg:capacitor_item" }],
            "results": [{ "item": "tfmg:unfinished_circuit_board" }]
        }, {
            "type": "create:deploying", "ingredients": [{ "item": "tfmg:unfinished_circuit_board" }, { "tag": "forge:nuggets/tin" }],
            "results": [{ "item": "tfmg:unfinished_circuit_board" }]
        }],
        "transitionalItem": {  "item": "tfmg:unfinished_circuit_board" }
    })

    event.remove({id: "tfmg:coking/coal"});
    event.custom({
        "type": "tfmg:coking",
        "ingredients": [{"item": "minecraft:coal"}],
        "processingTime": 1200,
        "results": [{"item": "immersiveengineering:coal_coke"}, {"amount": 2, "fluid": "immersiveengineering:creosote"}, {"amount": 1, "fluid": "tfmg:carbon_dioxide"}]
    });

    event.remove({id: "tfmg:sequenced_assembly/steel_mechanism"});
    event.custom({
        "type": "create:sequenced_assembly", "ingredient": {
            "tag": "forge:plates/steel"
        }, "loops": 2, "results": [{
            "chance": 120.0, "item": "tfmg:steel_mechanism"
        }, {
            "chance": 4.0, "item": "minecraft:compass"
        }, {
            "chance": 4.0, "item": "tfmg:steel_ingot"
        }], "sequence": [{
            "type": "create:deploying", "ingredients": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }, {
                "item": "tfmg:steel_cogwheel"
            }], "results": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }]
        }, {
            "type": "create:deploying", "ingredients": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }, {
                "tag": "forge:plates/nickel"
            }], "results": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }]
        }, {
            "type": "create:deploying", "ingredients": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }, {
                "item": "tfmg:large_steel_cogwheel"
            }], "results": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }]
        }, {
            "type": "create:deploying", "ingredients": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }, {
                "tag": "forge:plates/lead"
            }], "results": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }]
        }, {
            "type": "create:deploying", "ingredients": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }, {
                "item": "tfmg:screw"
            }], "results": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }]
        }, {
            "type": "create:deploying", "ingredients": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }, {
                "item": "tfmg:screwdriver"
            }], "results": [{
                "item": "tfmg:unfinished_steel_mechanism"
            }]
        }], "transitionalItem": {
            "item": "tfmg:unfinished_steel_mechanism"
        }
    })

    event.remove({id: "tfmg:vat_machine_recipe/sulfuric_acid"});
    event.remove({id: "tfmg:vat_machine_recipe/etched_circuit_board"});

    event.remove({output: "tfmg:hardened_planks"});
    event.replaceInput({}, "tfmg:hardened_planks", '#forge:treated_wood');
});

ServerEvents.tags('item', event => {
  event.add("forge:coal_coke", "tfmg:coal_coke")
})