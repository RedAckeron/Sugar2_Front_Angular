export class CustomerSummary{
    IdCustomer:number;
    qtAdr:number;
    qtOdp:number;
    qtCmd:number;
    qtFct:number;
    qtRpr:number;
    qtDlc:number;
    constructor(idCustomer:number,qtAdr:number,qtOdp:number,qtCmd:number,qtFct:number,qtRpr:number,qtDlc:number)
    {
        this.IdCustomer=idCustomer;
        this.qtAdr=qtAdr;
        this.qtOdp=qtOdp;
        this.qtCmd=qtCmd;
        this.qtFct=qtFct;
        this.qtRpr=qtRpr;
        this.qtDlc=qtDlc;
    }
}
