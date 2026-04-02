// priority: 10
global.replace = (event, id, recipe, dict) => {
    event.remove({output: id});
    event.shaped(Item.of(id, 1), recipe, dict);
}