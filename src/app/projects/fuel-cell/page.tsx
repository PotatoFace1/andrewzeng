import ProjectDetailPage from "../_components/project-detail-page";

export default function FuelCellPage() {
  return (
    <ProjectDetailPage
      title="Fuel Cell"
      overview="Prototyped a compact fuel-cell-based power system and evaluated output regulation, transient behavior, and load compatibility."
      highlights={[
        "Characterized voltage-current curves under variable loads",
        "Designed regulation stage for stable output delivery",
        "Monitored thermal and efficiency performance over time",
        "Validated reliability during long-duration operation",
      ]}
      tools={[
        "Circuit Design",
        "Power Analysis",
        "DC-DC Conversion",
        "Lab Instrumentation",
      ]}
    />
  );
}
