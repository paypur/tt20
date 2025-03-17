JEIEvents.removeCategories(event => {
    // https://www.reddit.com/r/CreateMod/comments/1ceabxl/removing_bulk_blastingsmoking_recipies/
    const removeCategories = [
        'create:fan_blasting'
    ]

    removeCategories.forEach((id) => {
        event.remove(id)
    })
})