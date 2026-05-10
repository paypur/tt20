// priority: 10
global.replace = (event, item, recipe, dict) => {
    const split = item.split(" ");
    item = split.length === 2 ? split[1] : item;

    event.remove({output: item});
    event.shaped(Item.of(item, 1), recipe, dict);
}

global.replaceShapeless = (event, item, recipe_items) => {
    const split = item.split(" ");
    item = split.length === 2 ? split[1] : item;
    event.remove({output: item});
    event.shapeless(Item.of(item, 1), recipe_items);
}