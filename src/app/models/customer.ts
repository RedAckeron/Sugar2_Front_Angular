export class Customer{

    Id:number;
    FirstName:string;
    LastName:string;
    DtIn:Date;
    AddByUser:number;

    constructor(id:number,firstname:string,lastname:string,dtin:Date,addbyuser:number)
    {
        this.Id=id;
        this.FirstName=firstname;
        this.LastName=lastname;
        this.DtIn=dtin;
        this.AddByUser=addbyuser;
    }
}