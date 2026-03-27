import ProjectDetailPage from "../_components/project-detail-page";

export default function CustomBusPcbPage() {
  return (
    <ProjectDetailPage
      title="Custom BUS PCB"
      overview="Designed and fabricated a custom communication bus PCB for embedded systems integration and multi-node testing."
      highlights={[
        "Created a multi-layer PCB layout in KiCad",
        "Integrated transceiver and microcontroller interfaces",
        "Added proper bus termination and signal integrity checks",
        "Validated communication across multiple nodes",
      ]}
      tools={["KiCad", "CAN Bus", "Embedded C", "Oscilloscope"]}
    />
  );
}
