import { CustomerAddress } from "./customerAddress";

export class Customer{

    id:number;
    firstName:string;
    lastName:string;
    dtIn:Date;
    addByUser:number;
    addresses:CustomerAddress[];
    constructor(id:number,firstname:string,lastname:string,dtin:Date,addbyuser:number,addresses:CustomerAddress[])
    {
        this.id=id;
        this.firstName=firstname;
        this.lastName=lastname;
        this.dtIn=dtin;
        this.addByUser=addbyuser;
        this.addresses=addresses;
    }
}