# DigiSpace Frontend Dashboard

A modern, pixel-perfect, and highly responsive frontend dashboard built with Next.js, React, and Tailwind CSS. This project adheres strictly to provided design references, featuring complex customized charts, glassmorphic UI elements, and a robust adoptive layout system.

## 🌟 Key Features

*   **Pixel-Perfect Design Details**: meticulously crafted to match specific design requirements, including custom gradients varying from `#0f1c1f` to `#173230`, exact typography scales, and overlapping drop shadows.
*   **Glassmorphism UI**: Uses advanced Backdrop Blur (`backdrop-blur-xl`) and transparent rgba color layers (`rgba(18, 30, 31, 0.4)`) to create a stunning, frosted-glass aesthetic across all components.
*   **Custom Charting Solutions**:
    *   **Lights Card**: Features a 100% custom-built SVG radial gauge with dynamic tracking, precise stroke widths, and glowing thumb positioning to represent color temperature (2700k - 5000k).
    *   **Carbon Intensity**: A deeply customized ECharts Donut graph with overlapping segmented labels and invisible borders.
    *   **Energy & Footfall**: Fully styled line and bar charts with hover-state emphasis fixes ensuring components glow dynamically instead of turning default black.
*   **Adoptive Grid Layout**: The dashboard grid dynamically adjusts itself (`lg:grid-cols-X`) based on the number of active widgets, maintaining a flawless visual hierarchy even when components are added or removed.
*   **Global State Management**: Integrated **Jotai** (`activeCardsAtom`) to manage the visibility states of dashboard widgets, controlled via a custom Toggle Dropdown in the Topbar.
*   **Strictly Typed**: Entirely written in **TypeScript** (`.tsx`) enforcing strict interfaces, type definitions, and robust prop handling across all component architectures.
*   **Comprehensive Test Coverage**: Set up with **Vitest** and **React Testing Library** in a `jsdom` environment. Every component, including the Sidebar and Topbar, is verified by dedicated unit tests.

## 🚀 Tech Stack

*   **Framework**: Next.js 16.1.6 (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (with custom utility classes and complex CSS Variables)
*   **Icons**: Lucide React
*   **Charts**: ECharts (`echarts-for-react`) & Custom SVGs
*   **State Management**: Jotai
*   **Testing**: Vitest & React Testing Library

## ⚙️ How to Run Locally

1. **Clone the repository** (if not already local).
2. **Install dependencies**:
   This project uses `pnpm` as the primary package manager.
   ```bash
   pnpm install
   ```
3. **Run the development server**:
   ```bash
   pnpm run dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser to see the live dashboard.

## 🧪 Testing

The application includes a full test suite verifying component rendering and DOM state. To execute the tests:

```bash
pnpm test
```
*Note: The test environment utilizes `jsdom` and includes mocks for `window.matchMedia` and Canvas rendering engines to support ECharts.*

## 🌐 Deployment

This application is fully production-ready and has been successfully **deployed on Vercel**! 
Enjoy the live, adoptive dashboard experience on the web.
