export type ProjectSection = {
  heading: string;
  /** Paragraphs separated by blank lines (\n\n). */
  body: string;
};

export type ProjectPageContent = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  date: string;
  github: { href: string; label: string } | null;
  sections: ProjectSection[];
  /** Thumbnail for listings (optional; falls back to placeholder). */
  thumbnailSrc?: string;
};

/** Narrative order: hardware → full system → sensing / signals */
export const PROJECT_SLUG_ORDER = [
  "lunabotics",
  "rc-car",
  "fmcw-radar",
] as const;

export const PROJECT_PAGES: Record<string, ProjectPageContent> = {
  "fmcw-radar": {
    slug: "fmcw-radar",
    title: "FMCW Radar — Object Tracking",
    oneLiner:
      "Built an FMCW radar system to detect and track objects in real time using TI's mmWave evaluation module.",
    tags: [
      "Python",
      "TI AWR6843AOP",
      "mmWave Studio",
      "Code Composer Studio",
      "FFT",
      "Signal Processing",
      "Uniflash",
    ],
    date: "February 2026 — Present",
    github: null,
    thumbnailSrc: "/radar2.png",
    sections: [
      {
        heading: "Summary",
        body: `This project uses Frequency Modulated Continuous Wave (FMCW) radar to measure the range and velocity of a moving object. The hardware is TI's AWR6843AOP mmWave evaluation module which is a small board with on-chip transmit and receive antennas that sends out frequency chirps and listens for reflections. The processing pipeline I built takes the raw return signals and turns them into a range-Doppler map that updates in real time, showing where the object is and how fast it's moving.`,
      },
      {
        heading: "How It Works",
        body: `The radar transmits a linear frequency sweep (a "chirp"). When that chirp bounces off a target and comes back, there's a frequency difference between what's currently being transmitted and what's being received—the beat frequency. That beat frequency is directly proportional to range: farther target, higher beat frequency.

To extract it, I run a Range FFT across the ADC samples from each chirp. That gives a spectrum where each peak corresponds to a target at a specific distance. I apply a window function before the FFT to keep the sidelobes down so nearby targets don't bleed into each other.

Velocity comes from the Doppler FFT. Across successive chirps in a frame, a moving target's return signal shifts in phase. Running an FFT across chirps at each range bin pulls out that phase shift as a Doppler frequency, which maps directly to radial velocity. The result is a 2D range-Doppler map.

From there, I threshold the map to pick out the object's return and track its position frame to frame.`,
      },
      {
        heading: "Toolchain",
        body: `The TI ecosystem has a few moving parts. Code Composer Studio handles the firmware on the radar module. Uniflash is used to flash the firmware onto the EVM. mmWave Studio configures the chirp parameters and handles raw data capture from the board. The actual signal processing pipeline runs in Python on the laptop side.`,
      },
      {
        heading: "Challenges",
        body: `Getting all four tools to cooperate with the EVM was honestly one of the more tedious parts of the project. Driver issues, firmware version mismatches, and serial port configuration took longer than I'd like to admit, as well as the general learning curve of teaching myself the basics of RF and signal processing.

Additionally, reducing chatter when using the radar was challenging, since the radar picked up reflections from everything near me. On the range-Doppler map these show up as strong returns at zero or near-zero Doppler (since they're stationary), but they smear into the bins around them.`,
      },
      {
        heading: "Future Plans",
        body: `In the future, I'd like to implement further hardware to the radar, including developing my own launch monitor for golf shots, or a three axis gimbal to continuously allow the radar to track moving objects`,
      },
    ],
  },

  "rc-car": {
    slug: "rc-car",
    title: "Autonomous RC Car",
    oneLiner: "Designed and built a fully autonomous RC car from scratch.",
    tags: [
      "Python",
      "Arduino Nano",
      "AutoCAD",
      "Laser Cutting",
      "3D Printing",
      "IR Sensors",
      "Machine Learning",
      "Embedded Systems",
    ],
    date: "May 2024 — August 2024",
    github: null,
    thumbnailSrc: "/temp.png",
    sections: [
      {
        heading: "Summary",
        body: `This is a ground-up autonomous vehicle built in collaboration with a University of Michigan engineering professor. I designed the chassis in AutoCAD, fabricated it with laser-cut acrylic and 3D-printed mounts, wrote the Arduino firmware for sensor integration and motor control, and built a Python-based ML pipeline for camera-driven object recognition and obstacle avoidance.

The system also has a manual RC mode controlled via laptop arrow keys for testing and data collection. The whole thing was designed to be replicable and documented well enough that other students could build one from the same plans and code.`,
      },
      {
        heading: "System Architecture",
        body: `The car has two layers. The embedded layer is an Arduino Nano running firmware that polls IR proximity sensors, reads wheel RPM via IR encoders, reads a gyroscope for heading, and drives the motors via PWM. It communicates over USB serial to a laptop running the software layer where a Python pipeline that takes camera frames, runs them through an object recognition model, makes avoidance decisions, and sends motor commands back to the Arduino.

In manual mode, the laptop sends motor commands directly from keyboard arrow key inputs, which was useful for driving the car around to collect training data and for quick hardware testing.`,
      },
      {
        heading: "The Build",
        body: `The chassis is laser-cut acrylic panels with 3D-printed brackets for the sensor mounts and motor housings. I designed it in AutoCAD with modularity in mind where sensors mount in standardized slots so you can swap or add them without redesigning the frame.

The firmware runs a polling loop: read all sensors, package the data, send it over serial, receive motor commands, update PWM outputs. The IR sensors handle close-range obstacle detection, the camera handles object recognition at longer range, and the wheel encoders plus gyro give basic speed telemetry.

The ML pipeline on the laptop side takes camera frames, runs preprocessing, feeds them through the object recognition model, and outputs a decision either stopping, turning, or continuing. The model was trained on data from YOLO to recognize objects`,
      },
      {
        heading: "Challenges",
        body: `The hardest part of this project was the code. This was built before AI coding assistants existed so every line was written by hand. Fortunately, I had a fantastic mentor to coach me through the programming. The firmware side (Arduino C) and the Python ML side are fundamentally different programming environments, and getting them to talk reliably over serial while keeping the sensor polling loop tight was a lot of manual work.`,
      },
      {
        heading: "Future Plans",
        body: `In the future, I'd love to scale up and create something larger that is more capable. I'd also swap the IR proximity sensors for ultrasonics or a small LiDAR for better range data..`,
      },
    ],
  },

  lunabotics: {
    slug: "lunabotics",
    title: "Lunabotics — PCB Design",
    oneLiner:
      "Designed two PCBs from scratch in KiCad for Northeastern's Lunabotics lunar rover—a power distribution board and an I2C sensor bus board.",
    tags: [
      "KiCad",
      "PCB Design",
      "I2C",
      "Power Distribution",
      "Voltage Regulation",
      "IR Sensors",
      "LiDAR",
      "Soldering",
    ],
    date: "January 2026 — Present",
    github: {
      href: "https://github.com/QuinnMulhern/LunaboticsElectrical/tree/main/2025-2026",
      label: "Team electrical (GitHub)",
    },
    thumbnailSrc: "/pcb.png",
    sections: [
      {
        heading: "Summary",
        body: `As part of Northeastern's Lunabotics team, I designed two PCBs that handled the rover's electrical backbone. The power distribution board regulated voltages from the main battery to safe levels for each sensor and peripheral, preventing sensitive components from getting fried.

The I2C bus board served as the central hub connecting IR sensors, LiDAR, and other peripherals to the rover's main controller over a shared I2C bus. Both boards were designed from scratch in KiCad. Additionally I had zero PCB design experience going in.`,
      },
      {
        heading: "Power Distribution Board",
        body: `The rover runs off a main battery that delivers more voltage than most of the sensors can handle. This board steps it down to the specific voltage rails each component needs (3.3V, 5V, etc.) using voltage regulators. I selected regulators based on the current draw of each rail and added decoupling capacitors for clean power delivery.`,
      },
      {
        heading: "I2C Bus Board",
        body: `The I2C board is a hub—it takes the I2C data and clock lines from the main controller and fans them out to all the sensors and peripherals on the rover. IR sensors, LiDAR, and supporting devices all connect through this board. I sized the pull-up resistors for the bus based on the number of devices and bus length, chose connectors that made it easy to plug and unplug sensors during assembly and testing, and routed the layout to keep the I2C traces clean and short.`,
      },
      {
        heading: "Learning Curve",
        body: `This was my first time designing a PCB so I had to learn KiCad's full workflow from scratch. The hardest part was managing complexity: dozens of footprints, nets, and component placements simultaneously across two boards. Keeping schematics clean and well-labeled turned out to be just as important as getting the electrical design right.`,
      },
      {
        heading: "What I'd Improve",
        body: `This is an ongoing project for the NASA Lunabotics Competition, and I am attempting to continue to hone my skills through PCB design, as well as understanding how integrated systems like our rover communicate internally. A more fundamental and solidified knowledge of embedded systems, signal flow, and system-level architecture.`,
      },
    ],
  },
};

export function getProject(slug: string): ProjectPageContent | undefined {
  return PROJECT_PAGES[slug];
}

export const PROJECTS_THREAD =
  "Work spans the full stack—from PCB layout and embedded firmware to sensing, signal processing, and system integration.";
