import { CmdLight } from "./Cmd";
import { DlcLight } from "./Dlc";
import { OdpLight } from "./Odp";
import { RprLight } from "./Rpr";

export class CustomerSummary{
    IdCustomer:number;
    qtAdr:Array<number>;
    qtOdp:Array<OdpLight>;
    qtCmd:Array<CmdLight>;
    qtFct:Array<number>;
    qtRpr:Array<RprLight>;
    qtDlc:Array<DlcLight>;
    constructor(idCustomer:number,qtAdr:Array<number>,qtOdp:Array<OdpLight>,qtCmd:Array<CmdLight>,qtFct:Array<number>,qtRpr:Array<RprLight>,qtDlc:Array<DlcLight>)
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
