export interface Image {
  _id?: string,
  name?: string,
  alternativeText?: string,
  caption?: string,
  hash?: string,
  ext?: string,
  mime?: string,
  size?: number,
  width?: number,
  height?: number,
  url?: string,
}
export interface Products {
  id: string
  title: string
  image: Image
  category: string
  createdAt: string
  ingredients: string
  price: number
  published_at: string
  updatedAt: string
  descriptions: string
}