import { MatomoMethod } from "../../types";
import matomoClientCore from "../core";


export const getEventsCategory: MatomoMethod = matomoClientCore.createMatomoAPIRequest('Events.getCategory');
export const getEventsAction: MatomoMethod = matomoClientCore.createMatomoAPIRequest('Events.getAction');
export const getEventsName: MatomoMethod = matomoClientCore.createMatomoAPIRequest('Events.getName');
