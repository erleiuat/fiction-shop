// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import shopItems from 'public/shop_data/items/'

export default function shopItemsAPI(req, res) {
  res.status(200).json(shopItems)
}
