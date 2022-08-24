import {Schema , model} from "mongoose"
import { IUser } from "../types/database"

const userSchema = new Schema<IUser>({
name :String,
picture:String, 
brief:String, 
accounts:[{
    logo:String, 
    linl :String 
}]

})
module.exports= model("User",userSchema)