import specials from 'public/shop_data/items/specials.json'
import premium from 'public/shop_data/items/premium.json'
import vehicles from 'public/shop_data/items/vehicles.json'
import clothing from 'public/shop_data/items/clothing.json'
import tools from 'public/shop_data/items/tools.json'
import food from 'public/shop_data/items/food.json'
import pharmacy from 'public/shop_data/items/pharmacy.json'

module.exports = [...specials, ...premium, ...vehicles, ...clothing, ...tools, ...food, ...pharmacy]
