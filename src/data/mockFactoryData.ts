export interface ProductionLine {
  id: string;
  code: string;
  name: string;
  plant: string;
  machine: string;
  protocol: string;
  plcType: string;
  status: 'RUNNING' | 'WARNING' | 'STOPPED' | 'MAINTENANCE';
  targetCycleTime: number; // sec
  currentCycleTime: number; // sec
  oee: number;
  availability: number;
  performance: number;
  quality: number;
  shiftTarget: number;
  unitsProduced: number;
  goodUnits: number;
  scrapUnits: number;
  telemetry: {
    hydraulicPressure: number; // bar
    hydraulicNominal: number;
    spindleLoad: number; // %
    vibrationRms: number; // mm/s
    temperature: number; // °C
    activePower: number; // kW
  };
  recentDowntimes: {
    id: string;
    timestamp: string;
    reason: string;
    category: string;
    durationMinutes: number;
    financialImpact: number;
    status: 'RESOLVED' | 'INVESTIGATING' | 'OPEN';
  }[];
}

export const INITIAL_PLANT_DATA: ProductionLine[] = [
  {
    id: 'line-stamping',
    code: 'PLANT-MUC-01 :: LINE-01',
    name: 'High-Speed Servo Stamping Line 01',
    plant: 'Munich Smart Gigafactory',
    machine: 'Schuler 2,500T Servo Press',
    protocol: 'OPC-UA (IEC 62541)',
    plcType: 'Siemens SIMATIC S7-1500F',
    status: 'RUNNING',
    targetCycleTime: 3.6,
    currentCycleTime: 3.68,
    oee: 88.4,
    availability: 92.1,
    performance: 96.8,
    quality: 99.2,
    shiftTarget: 4500,
    unitsProduced: 3980,
    goodUnits: 3948,
    scrapUnits: 32,
    telemetry: {
      hydraulicPressure: 212.4,
      hydraulicNominal: 210.0,
      spindleLoad: 78.5,
      vibrationRms: 1.42,
      temperature: 46.8,
      activePower: 340.2
    },
    recentDowntimes: [
      {
        id: 'DT-8941',
        timestamp: '11:42:15',
        reason: 'Hydraulic Proportional Valve Pressure Drift',
        category: 'Unplanned Mechanical',
        durationMinutes: 24,
        financialImpact: 4000,
        status: 'RESOLVED'
      },
      {
        id: 'DT-8942',
        timestamp: '13:05:40',
        reason: 'Blank Infeed Stacker Sensor Micro-stop',
        category: 'Feed Jam (42s Micro-Stop)',
        durationMinutes: 3,
        financialImpact: 500,
        status: 'RESOLVED'
      },
      {
        id: 'DT-8943',
        timestamp: '14:20:00',
        reason: 'Scheduled Die Surface Lubrication Check',
        category: 'Preventative Maintenance',
        durationMinutes: 15,
        financialImpact: 0,
        status: 'RESOLVED'
      }
    ]
  },
  {
    id: 'line-welding',
    code: 'PLANT-MUC-01 :: LINE-04',
    name: 'Robotic Battery Tray Laser Welding Cell',
    plant: 'Munich Smart Gigafactory',
    machine: 'KUKA KR-1000 Titan 6-Axis + IPG Fiber Laser',
    protocol: 'Modbus TCP / Profinet',
    plcType: 'KUKA KRC4 / Beckhoff TwinCAT 3',
    status: 'RUNNING',
    targetCycleTime: 48.0,
    currentCycleTime: 49.2,
    oee: 85.2,
    availability: 89.5,
    performance: 97.1,
    quality: 98.0,
    shiftTarget: 320,
    unitsProduced: 284,
    goodUnits: 278,
    scrapUnits: 6,
    telemetry: {
      hydraulicPressure: 184.0,
      hydraulicNominal: 180.0,
      spindleLoad: 64.2,
      vibrationRms: 0.98,
      temperature: 52.4,
      activePower: 185.6
    },
    recentDowntimes: [
      {
        id: 'DT-7712',
        timestamp: '09:15:22',
        reason: 'Laser Shielding Gas Differential Pressure Low',
        category: 'Process Interlock',
        durationMinutes: 18,
        financialImpact: 3100,
        status: 'RESOLVED'
      },
      {
        id: 'DT-7715',
        timestamp: '12:30:10',
        reason: 'Electrode Tip Changer Pneumatic Alignment Delay',
        category: 'Tooling Micro-stop',
        durationMinutes: 6,
        financialImpact: 950,
        status: 'RESOLVED'
      }
    ]
  },
  {
    id: 'line-cnc',
    code: 'PLANT-STG-02 :: CELL-03',
    name: '5-Axis Stator Housing Precision CNC Cell',
    plant: 'Stuttgart Precision Powertrain Works',
    machine: 'DMG MORI DMC 85 FD duoBLOCK',
    protocol: 'Siemens Industrial Ethernet / OPC-UA',
    plcType: 'Siemens Sinumerik ONE 840D sl',
    status: 'RUNNING',
    targetCycleTime: 85.0,
    currentCycleTime: 86.5,
    oee: 91.6,
    availability: 94.2,
    performance: 98.0,
    quality: 99.3,
    shiftTarget: 180,
    unitsProduced: 168,
    goodUnits: 167,
    scrapUnits: 1,
    telemetry: {
      hydraulicPressure: 160.0,
      hydraulicNominal: 160.0,
      spindleLoad: 82.0,
      vibrationRms: 2.15,
      temperature: 44.1,
      activePower: 92.4
    },
    recentDowntimes: [
      {
        id: 'DT-6501',
        timestamp: '08:45:00',
        reason: 'Coolant Sump Fine-Filter Backwash Cycle',
        category: 'Autonomous Maintenance',
        durationMinutes: 8,
        financialImpact: 1200,
        status: 'RESOLVED'
      }
    ]
  }
];

export const DAG_PIPELINE_NODES = [
  {
    id: 'source-opc',
    type: 'INPUT',
    title: 'Industrial OT Gateway',
    protocol: 'OPC-UA / S7-1500 / Modbus TCP',
    latency: '8.4 ms',
    rate: '1,200 tags/sec',
    status: 'ACTIVE',
    detail: 'Direct read from PLC DB blocks & historian buffers. No internet connection required.'
  },
  {
    id: 'filter-edge',
    type: 'TRANSFORM',
    title: 'Path Definer Filter Engine',
    protocol: 'Zero-Copy RingBuffer',
    latency: '1.2 ms',
    rate: '100% On-Prem',
    status: 'ACTIVE',
    detail: 'Deadband filtering, 3-sigma noise suppression, micro-stop duration classification (< 60s).'
  },
  {
    id: 'calc-oee',
    type: 'ANALYTICS',
    title: 'OEE & Downtime Engine',
    protocol: 'ISA-88 / ISA-95 Tree',
    latency: '3.1 ms',
    rate: 'Live Matrix',
    status: 'ACTIVE',
    detail: 'Calculates Availability x Performance x Quality real-time. Correlates alarm tags with root causes.'
  },
  {
    id: 'output-report',
    type: 'OUTPUT',
    title: 'Compliance & Shift Dispatcher',
    protocol: 'Automated PDF / Excel Engine',
    latency: '0.4s compile',
    rate: 'Daily / Shift Event',
    status: 'ACTIVE',
    detail: 'Zero manual clipboard entry. Auto-delivers shift handover sheet to local network drives.'
  }
];

export const SHIFT_HANDOVER_MOCK = {
  facility: 'Munich Smart Gigafactory 01',
  shift: 'Early Shift Alpha (06:00 — 14:00)',
  supervisor: 'Markus Weber (Shift Master II)',
  plantLine: 'Line 01 - Servo Stamping 2500T',
  targetQty: 4500,
  actualQty: 3980,
  oeeScore: '88.4%',
  unplannedDowntime: '27 min',
  topBottleneck: 'Hydraulic Proportional Valve Pressure Drift (24m)',
  operatorRemarks: 'Shift completed with 99.2% Quality. Hydraulic pump pressure stabilized following valve calibration at 12:10. Next shift should monitor sensor SNS-PRESS-02.'
};
