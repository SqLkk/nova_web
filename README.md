# NOV4 (Supernova) — Enterprise B2B Landing Page & Interactive Factory Sandbox 🚀

High-converting, enterprise-grade B2B landing page & interactive sandbox for **NOV4**, an on-premises Industrial BI, SCADA Reporting, and Real-Time OEE Analytics Platform designed specifically for manufacturing plants, automotive lines, and heavy industry.

---

## ⚡ Quick Start

```bash
cd nova-website
npm install      # (Already installed)
npm run dev      # Starts local development server at http://localhost:3000
```

To create an optimized production build:
```bash
npm run build    # Compiles static production bundle into dist/
npm run preview  # Previews production build locally
```

---

## 🏭 What Was Built

### 1. Visual Style & Aesthetic
- **Palantir Foundry meets Siemens MindSphere**: Deep charcoal/slate dark-mode palette (`#080C14`, `#0B0F17`, `#0F172A`), industrial neon cyan accents (`#00E5FF`), emerald green uptime indicators (`#10B981`), and amber alert highlights (`#F59E0B`).
- **Technical Typography**: Clean sans-serif paired with `JetBrains Mono` for PLC tags, timestamps, OEE indices, and sensor telemetry.

### 2. Header / Navigation
- **Branding**: NOV4 geometric emblem with `Local-First Industrial Intelligence` descriptor and `v2.8-AIRGAP` firmware badge.
- **Air-Gap Status**: Live pulsing indicator confirming 100% disconnected OT network posture.
- **Direct Navigation**: Platform Modules, Architecture & Security, Interactive Simulator (`Try Now`), ROI Calculator, Enterprise Licensing.
- **Primary CTA**: "Book Plant Demo" modal trigger.

### 3. Hero Section
- **Headline**: *"Zero-Cloud Industrial BI. Real-Time OEE & Automated Plant Reporting."*
- **Subheadline**: Explicitly detailing elimination of manual shift reports and $15,000/hr unplanned micro-stops.
- **Trust Badges**: 100% Air-Gapped, Zero Data Leaves Factory, OPC-UA/Modbus Ready, < 10ms Query Latency.
- **Live Dark-Mode Industrial Dashboard Preview**:
  - Circular SVG OEE gauge running at **88.4%** with Availability (92.1%), Performance (96.8%), and Quality (99.2%) breakdown.
  - Downtime Root-Cause Waterfall chart highlighting *Hydraulic Pressure Fault* and *Optical Feeder Jam*.
  - Live Shift Handover Sheet preview with 1-click Export indicator.

### 4. Interactive "Try NOV4" Live Sandbox (`#try-nov4`) 🎮
Customer experience sandbox populated with realistic industrial dummy data based on the **Apex Enterprise Smart Factory Specification**:
- **Line Switcher**:
  - *Munich Gigafactory 01* — Schuler 2,500T Servo Stamping Press (Siemens S7-1500, OPC-UA)
  - *Munich Gigafactory 01* — KUKA Titan KR-1000 Laser Welding Cell (Modbus TCP)
  - *Stuttgart Powertrain Works* — DMG MORI 5-Axis CNC Cell (Sinumerik ONE)
- **Live Telemetry Streams**: Hydraulic pressure (bar), spindle/motor load (%), vibration RMS (mm/s), bearing temperature (°C), active power (kW), and shift units produced.
- **Interactive Simulation Controls**:
  - `Simulate Pressure Anomaly`: Drops hydraulic pressure to 162.5 bar, triggers telemetry alarm, recalibrates OEE down, and auto-logs root cause ticket.
  - `Simulate 42s Micro-Stop`: Demonstrates sub-minute bottleneck detection that operators usually omit on paper clipboards.
  - `Telemetri Yayını: Canlı / Duraklat`: Toggleable live streaming simulation.
  - `Sıfırla`: Restores nominal baseline values.
- **Guided Step-by-Step Hints / Tour Tips**: Interactive onboarding card with step 1 to 4 guiding prospective buyers through line switching, micro-stop detection, root-cause tagging, and 1-click report generation.
- **Path Definer™ Visual DAG Flow**: Interactive 4-node pipeline (`OT Gateway` → `Edge Filter` → `OEE Engine` → `Report Dispatcher`) with clickable node inspection.
- **Live Downtime Event Audit Table**: Dynamic log with event ID, timestamps, financial impact ($), and resolution status.

### 5. Problem vs. Solution
Side-by-side high-contrast comparison of **The Legacy Pain** (15h/week lost to Excel, operator micro-stop blind spots, cloud SaaS blocked by OT security) vs. **The NOV4 Workflow** (automated DAG pipelines, sub-minute anomaly detection, local PostgreSQL/SQLite).

### 6. Core Platform Modules
Deep-dive cards into NOV4's three core products:
1. **Path Definer & DAG Pipeline Engine**
2. **Real-Time OEE & Downtime Studio**
3. **Automated Compliance & Report Studio**

### 7. Security & Industrial Architecture (For OT / IT Directors)
- Deployment options: Bare-Metal Linux/Windows, VMware ESXi OVA, or local Docker.
- Native brownfield connectors: Siemens S7, OPC-UA (IEC 62541), Modbus TCP, Rockwell CIP, Wonderware, Oracle, MS SQL.
- Air-gap verified: Zero outbound telemetry, local RBAC, SHA-256 tamper-evident audit ledger.

### 8. Interactive ROI Calculator
Dynamic sliders for:
- Hourly Cost of Downtime ($2,000 to $40,000/hr)
- Unplanned Downtime Hours/Month
- Engineering Hours Spent on Manual Reporting/Week
- **Live Output**: Immediate calculation of monthly savings, annual savings, and payback period in days (< 45 days).

### 9. Enterprise Procurement & Licensing Model
Structured for corporate CapEx/OpEx procurement:
- **Tier 1**: Line-Based Perpetual License (up to 3 lines / 10 machines).
- **Tier 2**: Plant-Wide Site License (unlimited machines, full DAG engine).
- **Service**: Annual Enterprise SLA & Maintenance Agreement.
- **Corporate PO & Net 30/60 Terms**: Enterprise invoice support for SAP Ariba, Coupa, etc.

### 10. Lead Capture & Walkthrough Booking Modal
Enterprise intake capturing: Full Name, Work Email, Plant/Company Name, Location, SCADA Infrastructure dropdown, Primary Challenge, and preferred demo format. Includes simulated submission and confirmation screen with calendar alignment notice.

### 11. 1-Click Shift Handover Report Modal
Detailed inspection of an automated shift handover sheet with ISO 9001 compliance stamp, shift KPIs, corrective actions, operator remarks, SHA-256 cryptographic proof, and CSV/XLSX export.

---

## 🌐 Deploying to a Custom Domain

When you acquire your domain (e.g., `nov4.ai`, `supernov4.com`, or your company domain):

### Option A: Static Hosting (Vercel / Cloudflare Pages / Netlify / GitHub Pages)
1. Run `npm run build` inside `nova-website/`.
2. Deploy the generated `dist/` directory to any host.
3. In your DNS provider (Cloudflare, GoDaddy, Namecheap), point an `A` record or `CNAME` record to the hosting provider.

### Option B: On-Premises Plant Web Server (NGINX / Apache)
Point your NGINX configuration to the `dist` folder:
```nginx
server {
    listen 80;
    server_name nov4.plant.internal;

    location / {
        root /path/to/super_nov4/nova-website/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```
