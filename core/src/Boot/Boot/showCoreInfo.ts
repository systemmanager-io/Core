import {coreDebug} from "../../Lib/debug";
import bootLogo from "../../Assets/Boot/bootLogo"
import bootInfo from "../../Assets/Boot/bootInfo";

export function showLogo() {
    coreDebug(bootLogo);
    coreDebug(bootInfo);
    coreDebug("SystemManager Booting up");
}
