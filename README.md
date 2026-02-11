

# Digispace

Frontend implementation of the DigiSpace dashboard design using **React + TypeScript + Apache ECharts**.

Live Demo:
👉 [https://avm-demo-lilac.vercel.app/](https://avm-demo-lilac.vercel.app/)

---

## Resolution Used

The design is not responsive as per instructions.
I built the layout based on:

**Resolution: 1440 × 900** (Also responsive across multiple screen sizes)

_*Note: May overlap at minor places_

All spacing, font sizes, paddings, and alignments were tuned to match the provided design at this resolution.

---

## Tech Stack

* React
* TypeScript
* Apache ECharts
* Tailwind CSS
* Vite
* Vercel (deployment)

---

## Implementation Notes

* Each card (Lights, Carbon Intensity, Water Consumption, etc.) is built as an **independent component**.
* Gauge and pie charts are implemented using **Apache ECharts**.
* Fonts and colors were taken from `colors_fonts.txt`.
* All provided icons were used wherever available.
* The layout structure allows cards to be dynamically added or removed (adaptive layout behavior supported).
* The design aims to be as pixel-perfect as possible based on the provided `Frontend-Test.jpg`.

Where exact parity was limited:

* Some micro-typography differences may occur due to rendering differences between browser engines and the original design source.
* ECharts label rendering has minor layout constraints compared to static design tools.
* Minor placement issues could be there as well for chart labels.

---

## Status

* [x] TypeScript used
* [x] Hosted on Vercel
* [x]  Redux for State Management
* [] Tests (planned)

---