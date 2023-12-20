import { EventCategory } from "@src/lib/matomo/types";

export const mergeEventsPerCategories = (
    categories: Record<string, EventCategory[]>
  ): Record<string, EventCategory> => {
    const merged: Record<string, EventCategory> = {};

    for (const date in categories) {
      const events = categories[date];
      for (const event of events) {
        const { label, ...rest } = event;
        if (merged[label]) {
          merged[label] = {
            ...merged[label],
            ...rest,
            nb_visits: merged[label].nb_visits + event.nb_visits,
            nb_events: merged[label].nb_events + event.nb_events,
          };
        } else {
          merged[label] = { ...rest };
        }
      }
    }

    return merged;
  };