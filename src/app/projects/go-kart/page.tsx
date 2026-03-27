import ProjectDetailPage from "../_components/project-detail-page";

export default function GoKartPage() {
  return (
    <ProjectDetailPage
      title="Go-Kart"
      overview="Developed and refined a custom go-kart platform, focusing on drivetrain performance, safety, and chassis reliability."
      highlights={[
        "Selected and integrated motor, controller, and gearing",
        "Improved braking response and stability under load",
        "Reinforced frame components for repeated testing cycles",
        "Collected telemetry for iterative performance tuning",
      ]}
      tools={["CAD", "Fabrication", "Power Electronics", "Data Logging"]}
    />
  );
}
