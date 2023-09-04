import { Item } from "./item";

export class Odp
{
    Id:number;
    DtIn:Date;
    AddByUser:number;
    IdCustomer:number;
    basket:Array<Item>;
    constructor(Id:number,DtIn:Date,AddByUser:number,IdCustomer:number,basket:Array<Item>)
    {
    this.Id=Id;
    this.DtIn=DtIn;
    this.AddByUser=AddByUser;
    this.IdCustomer=IdCustomer;
    this.basket=basket
     }
    }
export class OdpLight
     {
         id:number;
         dtIn:Date;

         constructor(Id:number,dtIn:Date)
          {
          this.id=Id;
          this.dtIn=dtIn;
          }
     }
