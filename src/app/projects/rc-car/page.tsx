import ProjectDetailPage from "../_components/project-detail-page";

export default function RcCarPage() {
  return (
    <ProjectDetailPage
      title="RC Car Platform"
      overview="Built an autonomous-ready RC car platform with onboard sensing, control loops, and embedded software for rapid prototyping."
      highlights={[
        "Integrated IMU, distance sensors, and motor drivers",
        "Implemented closed-loop speed and steering control",
        "Designed modular firmware for quick feature testing",
        "Bench-tested reliability across varied terrain",
      ]}
      tools={["Embedded C", "STM32", "PID Control", "Sensor Fusion"]}
    />
  );
}
