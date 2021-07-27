
import { Image, Products } from './products'

export interface Category {
  id?: string
  title?: string
  image?: Image
  orderdetails?: []
  products?: Products[]
  createdAt?: string
  published_at?: string
}