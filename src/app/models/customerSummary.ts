import { CmdLight } from "./CmdModel";
import { OdpLight } from "./odp";
import { RprLight } from "./rpr";
import { DlcLight } from "./DlcModel";
import { FctLight } from "./FctModel";
import { AdrLight } from "./AdrModel";

export class CustomerSummary{
    idCustomer:number;
    adrLights:Array<AdrLight>=new Array<AdrLight>;
    odpLights:Array<OdpLight>=new Array<OdpLight>;
    cmdLights:Array<CmdLight>=new Array<CmdLight>;
    fctLights:Array<FctLight>=new Array<FctLight>;
    rprLights:Array<RprLight>=new Array<RprLight>;
    dlcLights:Array<DlcLight>=new Array<DlcLight>;
    constructor(idCustomer:number,adrLights:Array<AdrLight>,odpLights:Array<OdpLight>,cmdLights:Array<CmdLight>,fctLights:Array<FctLight>,rprLights:Array<RprLight>,dlcLights:Array<DlcLight>)
    {
        this.idCustomer=idCustomer;
        this.adrLights=adrLights;
        this.odpLights=odpLights;
        this.cmdLights=cmdLights;
        this.fctLights=fctLights;
        this.rprLights=rprLights;
        this.dlcLights=dlcLights;
    }
}
