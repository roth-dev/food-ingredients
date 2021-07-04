import { ImageSourcePropType } from 'react-native'
import assets from '../assets'
export interface Category {
  id: number
  title: string
  image: ImageSourcePropType
  bgColor?: string
}

export interface PopularItem {
  id: number,
  catId: number,
  price: number,
  image: ImageSourcePropType,
  title: string,
  description: string,
}

export interface Recommended {
  id: number,
  catId: number,
  price: number,
  title: string,
  slug: string,
  description: string,
  image: ImageSourcePropType,
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Tacos",
    image: assets.TACOS,
    bgColor: "#D0E6A5"
  },
  {
    id: 2,
    title: "Fries",
    image: assets.FRIES,
    bgColor: "#86E3CE"
  },
  {
    id: 3,
    title: "Burger",
    image: assets.BURGER,
    bgColor: "#FFDD95"
  },
  {
    id: 4,
    title: "Pizza",
    image: assets.PIZZA,
    bgColor: "#FFACAC"
  },
  {
    id: 5,
    title: "Buritos",
    image: assets.BURITOS,
    bgColor: "#CCAAD9"
  },
]

export const popularItems: PopularItem[] = [
  {
    id: 1,
    catId: 4,
    price: 12.58,
    image: assets.POPULARPIZZA,
    title: "Pizza Clásica",
    description: "Salsa clásica de la casa",
  },
  {
    id: 2,
    catId: 3,
    price: 12.58,
    image: assets.POPULARBURGER,
    title: "Hamburguesa mix",
    description: "Salsa clásica de la casa",
  },
  {
    id: 3,
    catId: 4,
    price: 12.58,
    image: assets.POPULARPIZZA,
    title: "Pizza Clásica",
    description: "Salsa clásica de la casa",
  }
]
export const recommended: Recommended[] = [
  {
    id: 1,
    catId: 4,
    price: 12.58,
    slug: "Naturales",
    image: assets.DRINK1,
    title: "Malteadas tropicales",
    description: "Elaborado con jugos naturales",
  },
  {
    id: 2,
    catId: 3,
    price: 12.58,
    slug: "Naturales",
    image: assets.DRINK2,
    title: "Malteadas tropicales",
    description: "Salsa clásica de la casa",
  },

]