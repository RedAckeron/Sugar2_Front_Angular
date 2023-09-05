import { CmdLight } from "./CmdModel";
import { OdpLight } from "./odp";
import { RprLight } from "./rpr";
import { CustomerAddress } from "./customerAddress";
import { DlcLight } from "./DlcModel";

export class CustomerSummary{
    IdCustomer:number;
    Adrs:Array<CustomerAddress>;
    OdpLights:Array<OdpLight>;
    CmdLights:Array<CmdLight>;
    FctLights:Array<number>;
    RprLights:Array<RprLight>;
    DlcLights:Array<DlcLight>;
    constructor(idCustomer:number,adrs:Array<CustomerAddress>,odpLights:Array<OdpLight>,cmdLights:Array<CmdLight>,fctLights:Array<number>,rprLights:Array<RprLight>,dlcLights:Array<DlcLight>)
    {
        this.IdCustomer=idCustomer;
        this.Adrs=adrs;
        this.OdpLights=odpLights;
        this.CmdLights=cmdLights;
        this.FctLights=fctLights;
        this.RprLights=rprLights;
        this.DlcLights=dlcLights;
    }
}
