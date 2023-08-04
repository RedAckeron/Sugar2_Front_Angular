export class CustomerAddress
{
    Id:number;
    IdCustomer:number;
    AdrInfo:string;
    AdrRue:string;
    AdrNo:string;
    AdrVille:string;
    AdrCp:string;
    AdrPays:string;

   constructor(Id:number,IdCustomer:number,AdrInfo:string,AdrRue:string,AdrNo:string,AdrVille:string,AdrCp:string,AdrPays:string)
    {
    this.Id=Id;
    this.IdCustomer=IdCustomer;
    this.AdrInfo=AdrInfo;
    this.AdrRue=AdrRue;
    this.AdrNo=AdrNo;
    this.AdrVille=AdrVille;
    this.AdrCp=AdrCp;
    this.AdrPays=AdrPays;
    }

}