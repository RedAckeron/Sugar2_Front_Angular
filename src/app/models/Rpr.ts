export class Rpr
{
    Id:number;
    DtIn:Date;
    AddByUser:number;
    IdCustomer:number;

    constructor(Id:number,DtIn:Date,AddByUser:number,IdCustomer:number)
    {
    this.Id=Id;
    this.DtIn=DtIn;
    this.AddByUser=AddByUser;
    this.IdCustomer=IdCustomer;
     }
    }
export class RprLight
     {
         id:number;
         dtIn:Date;

         constructor(Id:number,dtIn:Date)
          {
          this.id=Id;
          this.dtIn=dtIn;
          }
     }
