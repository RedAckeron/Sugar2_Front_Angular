export class Adr
{
    id!:number;
    adrInfo!:string;
    adrRue!:string;
    adrNo!:string;
    adrVille!:string;
    adrCp!:string;
    adrPays!:string;

//    constructor(Id:number,IdCustomer:number,AdrInfo:string,AdrRue:string,AdrNo:string,AdrVille:string,AdrCp:string,AdrPays:string)
//     {
//     this.id=Id;
//     this.idCustomer=IdCustomer;
//     this.adrInfo=AdrInfo;
//     this.adrRue=AdrRue;
//     this.adrNo=AdrNo;
//     this.adrVille=AdrVille;
//     this.adrCp=AdrCp;
//     this.adrPays=AdrPays;
//     }

}
export class AdrLight
     {
      id:number;
      adrInfo:string;
      constructor(Id:number,AdrInfo:string)
      {
      this.id=Id;
      this.adrInfo=AdrInfo;
      }
     }
