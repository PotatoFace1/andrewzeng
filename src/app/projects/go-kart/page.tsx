import { PROJECT_PAGES } from "@/content/project-pages";
import ProjectPageLayout from "../_components/project-page-layout";

export default function GoKartPage() {
  return <ProjectPageLayout project={PROJECT_PAGES["go-kart"]} />;
}
