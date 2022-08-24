export interface IUser{
    name:string 
    picture: string 
    brief : string 
    accounts:[IAccount]
};
 interface IAccount{
    logo:string
    link:string
 }