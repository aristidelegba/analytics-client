import { MatomoMethod } from "../../types";
import matomoClientCore from "../core";

export const EventsMethods = {
  getCategory: "Events.getCategory",
  getAction: "Events.getAction",
  getName: "Events.getName",
};
export const EventsSegments = {
  eventCategory: "eventCategory",
};

// export const getEventsCategory: MatomoMethod =
//   matomoClientCore.createMatomoAPIRequest(eventsNames.getCategory);
// export const getEventsAction: MatomoMethod =
//   matomoClientCore.createMatomoAPIRequest(eventsNames.getAction);
// export const getEventsName: MatomoMethod =
//   matomoClientCore.createMatomoAPIRequest(eventsNames.getName);
