const categoriesToHide = [
    "ali:plant_loot", // Buggy visual preview
    "ali:block_loot",
    "ali:hero_loot",
    "emixx:villager_trades",
]

const recipesToHide = [
    // Not relevant to gameplay
    "minecraft:/chests/spawn_bonus_chest",
    "minecraft:/dispensers/trial_chambers/chamber",
    "minecraft:/dispensers/trial_chambers/water",
    "minecraft:/dispensers/trial_chambers/corridor",
    // Redundant information
    "minecraft:/gameplay/fishing/junk",
    "minecraft:/gameplay/fishing/treasure",
    "minecraft:/gameplay/fishing/fish",
    "minecraft:/chests/trial_chambers/reward_common",
    "minecraft:/chests/trial_chambers/reward_ominous_common",
    "minecraft:/chests/trial_chambers/reward_rare",
    "minecraft:/chests/trial_chambers/reward_ominous_rare",
    "minecraft:/chests/trial_chambers/reward_unique",
    "minecraft:/chests/trial_chambers/reward_ominous_unique",
    "minecraft:/equipment/trial_chamber",
    "minecraft:/equipment/trial_chamber_melee",
    "minecraft:/equipment/trial_chamber_ranged",
]

RecipeViewerEvents.removeCategories(event => {
    categoriesToHide.forEach(category => {
        event.remove(category)
    })
})

RecipeViewerEvents.removeRecipes(event => {
    recipesToHide.forEach(recipe => {
        event.remove(recipe)
    })
})