

export class User
{
    id:number;
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    dtIn:Date;
    addByUser:number;
    constructor(Id:number,DtIn:Date,email:string,firstName:string,lastName:string)
    {
    this.id=Id;
    this.email=email;
    this.password="";
    this.firstName=firstName;
    this.lastName=lastName;
    this.dtIn=DtIn;
    this.addByUser=1;
     }
}