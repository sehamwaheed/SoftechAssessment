import { ProductQ } from "./product.interface"
import { User } from "./user.interface"

export interface Order {
    OrderId: number
    OrderDate: string
    UserId: string
    Products: ProductQ[]
    PaymentType: string
    user?:User
  }
  
 