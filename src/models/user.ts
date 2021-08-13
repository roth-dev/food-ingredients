export interface UserInput {
  identifier?: string
  username?:string
  email?:string
  phonenumber?:string
  password?: string
}

export interface UserResponse {
  jwt?: string
  user?: any
}