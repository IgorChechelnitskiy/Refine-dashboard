import UpcomingEvents from "@/components/home/upcoming-events";
import DashboardTotalCountCard from "@/components/home/total-count-card";
import LatestActivities from "@/components/home/latest-activities";
import DealsChart from "@/components/home/deals-chart";
import UpcomingEventsSkeleton from "./skeleton/upcoming-events";
import AccordionHeaderSkeleton from "./skeleton/accordion-header";
import KanbanColumnSkeleton from "./skeleton/kanban";
import LatestActivitiesSkeleton from "./skeleton/latest-activities";
import ProjectCardSkeleton from "./skeleton/project-card";

export {
  DashboardTotalCountCard,
  UpcomingEvents,
  DealsChart,
  UpcomingEventsSkeleton,
  AccordionHeaderSkeleton,
  KanbanColumnSkeleton,
  LatestActivitiesSkeleton,
  ProjectCardSkeleton,
  LatestActivities,
};

export * from "./tags/user-tag";
export * from "./accordion";
export * from "./tasks/form/description";
export * from "./tasks/form/due-date";
export * from "./tasks/form/stage";
export * from "./tasks/form/title";
export * from "./tasks/form/users";
export * from "./tasks/form/header";
