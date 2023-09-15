import { Adr } from "./AdrModel";
export class Customer{

    id:number;
    firstName:string;
    lastName:string;
    constructor(id:number,firstname:string,lastname:string)
    {
        this.id=id;
        this.firstName=firstname;
        this.lastName=lastname;
    }
}
