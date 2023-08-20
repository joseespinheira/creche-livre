import { role } from "./role";

export interface user{
    id:number,
    name:string,
    login:string,
    password:string,
    role:role
}