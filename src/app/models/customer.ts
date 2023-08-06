import { CustomerAddress } from "./customerAddress";

export class Customer{

    id:number;
    firstName:string;
    lastName:string;
    email:string;
    call1:string;
    call2:string;
    dtIn:Date;
    addByUser:number;
    adresses:Array<CustomerAddress>;
    constructor(id:number,firstname:string,lastname:string,email:string,call1:string,call2:string,dtin:Date,addbyuser:number,addresses:CustomerAddress[])
    {
        this.id=id;
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.call1=call1;
        this.call2=call2;
        this.dtIn=dtin;
        this.addByUser=addbyuser;
        this.adresses=addresses;
    }
}