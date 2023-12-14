// visitsSummary.ts

import { MatomoMethod } from "../../types";
import matomoClientCore from "../core";


export const getVisitsSummary: MatomoMethod = matomoClientCore.createMatomoAPIRequest('VisitsSummary.get');

console.log('matomoClientCore', matomoClientCore.matomoConfigs)
export default {getVisitsSummary};
