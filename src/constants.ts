import { Project } from "./types";

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "ESP32-S3 IoT Gateway",
    description: "A robust industrial IoT gateway featuring the ESP32-S3 w/ Wi-Fi 6 & Bluetooth LE. Includes RS485 interface and 24V DC input protection.",
    imageUrl: "https://picsum.photos/seed/pcb1/800/600",
    author: {
      id: "u1",
      username: "CircuitWizard",
      avatarUrl: "https://picsum.photos/seed/u1/100/100",
      isVerified: true,
      reputation: 950
    },
    tags: ["IoT", "ESP32", "Industrial", "RS485"],
    specs: [
      { key: "MCU", value: "ESP32-S3-WROOM-1" },
      { key: "Input Voltage", value: "9-36V DC" },
      { key: "Interfaces", value: "USB-C, RS485, I2C" },
      { key: "Dimensions", value: "80mm x 50mm" }
    ],
    bom: [
      { partNumber: "ESP32-S3-WROOM-1", description: "MCU Module", quantity: 1, manufacturer: "Espressif" },
      { partNumber: "MAX485", description: "RS-485 Transceiver", quantity: 1, manufacturer: "Maxim" },
      { partNumber: "TPS54302", description: "Buck Converter", quantity: 1, manufacturer: "TI" }
    ],
    siliconSeal: true,
    forks: 42,
    stars: 128,
    price: 15,
    createdAt: "2023-10-15",
    downloads: [120, 132, 101, 134, 190, 230, 210]
  },
  {
    id: "2",
    title: "OpenSplit Ergonomic Keyboard",
    description: "60% split mechanical keyboard PCB with hot-swap sockets and QMK/VIA support. Features per-key RGB and USB-C interconnect.",
    imageUrl: "https://picsum.photos/seed/pcb2/800/600",
    author: {
      id: "u2",
      username: "KeyMaster",
      avatarUrl: "https://picsum.photos/seed/u2/100/100",
      isVerified: false,
      reputation: 300
    },
    tags: ["Keyboard", "Mechanical", "HID", "USB-C"],
    specs: [
      { key: "Controller", value: "RP2040" },
      { key: "Switch Type", value: "MX Hot-swap" },
      { key: "Lighting", value: "SK6812 Mini-E" },
      { key: "Firmware", value: "QMK / VIA" }
    ],
    bom: [
      { partNumber: "RP2040", description: "Microcontroller", quantity: 2, manufacturer: "Raspberry Pi" },
      { partNumber: "Kailh-Hot-Swap", description: "Hot Swap Socket", quantity: 64, manufacturer: "Kailh" }
    ],
    siliconSeal: false,
    forks: 12,
    stars: 450,
    price: 'Free',
    createdAt: "2023-11-02",
    downloads: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    id: "3",
    title: "Solar LiPo Charger MPPT",
    description: "High-efficiency MPPT solar charger for single-cell LiPo batteries. Perfect for remote sensor nodes. Ultra-low quiescent current.",
    imageUrl: "https://picsum.photos/seed/pcb3/800/600",
    author: {
      id: "u3",
      username: "GreenEnergy",
      avatarUrl: "https://picsum.photos/seed/u3/100/100",
      isVerified: true,
      reputation: 1200
    },
    tags: ["Power", "Solar", "Battery", "Green"],
    specs: [
      { key: "IC", value: "SPV1040" },
      { key: "Max Input", value: "5.5V" },
      { key: "Charging Current", value: "Up to 800mA" },
      { key: "Efficiency", value: "95%" }
    ],
    bom: [
      { partNumber: "SPV1040", description: "Solar Boost Converter", quantity: 1, manufacturer: "STMicro" },
      { partNumber: "Inductor 10uH", description: "Power Inductor", quantity: 1, manufacturer: "Bourns" }
    ],
    siliconSeal: true,
    forks: 8,
    stars: 89,
    price: 5,
    createdAt: "2023-09-10",
    downloads: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    id: "4",
    title: "FPGA Video Scaler",
    description: "Zero-latency HDMI video scaler based on Artix-7 FPGA. Open source bitstream available via IPFS.",
    imageUrl: "https://picsum.photos/seed/pcb4/800/600",
    author: {
      id: "u4",
      username: "LogicGate",
      avatarUrl: "https://picsum.photos/seed/u4/100/100",
      isVerified: true,
      reputation: 5000
    },
    tags: ["FPGA", "Video", "HDMI", "High Speed"],
    specs: [
      { key: "FPGA", value: "XC7A35T" },
      { key: "Memory", value: "256MB DDR3" },
      { key: "I/O", value: "HDMI In/Out" }
    ],
    bom: [
      { partNumber: "XC7A35T-1CPG236C", description: "Artix-7 FPGA", quantity: 1, manufacturer: "Xilinx" },
      { partNumber: "MT41K128M16", description: "DDR3 DRAM", quantity: 1, manufacturer: "Micron" }
    ],
    siliconSeal: true,
    forks: 156,
    stars: 1024,
    price: 50,
    createdAt: "2023-08-05",
    downloads: [400, 300, 200, 278, 189, 239, 349]
  }
];

export const CATEGORIES = ["All", "IoT", "Keyboard", "Power", "FPGA", "Robotics", "Audio"];
