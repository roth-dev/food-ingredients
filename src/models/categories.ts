
import { Image, Produts } from './products'

export interface Category {
  id?: string
  title?: string
  image?: Image
  orderdetails?: []
  products?: Produts[]
  createdAt?: string
  published_at?: string
}