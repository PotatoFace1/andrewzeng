import ProjectDetailPage from "../_components/project-detail-page";

export default function FmcwRadarPage() {
  return (
    <ProjectDetailPage
      title="FMCW Radar"
      overview="Designed and tested an FMCW radar prototype to estimate target distance and relative motion from reflected chirp signals."
      highlights={[
        "Implemented chirp-based signal generation and acquisition",
        "Applied FFT-based processing for range estimation",
        "Validated measurements against controlled test distances",
        "Improved SNR with filtering and signal windowing",
      ]}
      tools={["MATLAB", "Python", "RF Lab Equipment", "Signal Processing"]}
    />
  );
}
