export interface UserInput {
  identifier: string
  password: string
}

export interface UserResponse {
  jwt?: string
  user?: any
}