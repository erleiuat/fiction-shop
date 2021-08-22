import specials from 'public/shop_data/items/specials.json'
import premium from 'public/shop_data/items/premium.json'
import vehicles from 'public/shop_data/items/vehicles.json'
import clothing from 'public/shop_data/items/clothing.json'
import tools from 'public/shop_data/items/tools.json'
import fishing from 'public/shop_data/items/fishing.json'
import components from 'public/shop_data/items/components.json'
import food from 'public/shop_data/items/food.json'
import pharmacy from 'public/shop_data/items/pharmacy.json'

function addDiscount(item) {
  item.price_fame = Math.round(item.price_fame * 1.4)
  item.price = item.price_fame + '.00'
  item.buy_command = '!buyitem ' + item.keyword
  if (item.keyword) return item
}

module.exports = [
  ...specials.map(e => addDiscount(e)),
  ...premium.map(e => addDiscount(e)),
  ...vehicles.map(e => addDiscount(e)),
  ...clothing.map(e => addDiscount(e)),
  ...tools.map(e => addDiscount(e)),
  ...fishing.map(e => addDiscount(e)),
  ...components.map(e => addDiscount(e)),
  ...food.map(e => addDiscount(e)),
  ...pharmacy.map(e => addDiscount(e))
]
