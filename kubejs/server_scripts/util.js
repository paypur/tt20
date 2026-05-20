// priority: 10
global.replace = (event, item, recipe, dict) => {
    const split = item.split("x ");

    const count = split.length === 2 ? parseInt(split[0]) : 1;
    item = split.length === 2 ? split[1] : item;

    event.remove({output: item});
    event.shaped(Item.of(item, count), recipe, dict);
}

global.replaceShapeless = (event, item, recipe_items) => {
    const split = item.split(" ");
    item = split.length === 2 ? split[1] : item;
    event.remove({output: item});
    event.shapeless(Item.of(item, 1), recipe_items);
}

global.blast_furnace = (event, input, result_formatted, ticks) => {
    let result;

    const match = result_formatted.match(/(\d+)x (.*)/);
    if (match) {
        result = parseItem(match[2]);
        result["count"] = parseInt(match[1]);
    } else {
        result = parseItem(result_formatted);
    }

    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {"tag": input},
        "result": result,
        "slag": { "item": "immersiveengineering:slag" },
        "time": ticks
    });
}

function parseItem(item) {
    return item.includes("forge:") ? { "tag" : item } : { "item" : item }
}