# Playwright Webshop E2E Automation (SauceDemo)

![Playwright](https://img.shields.io/badge/Framework-Playwright-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-2f74c0?logo=typescript&logoColor=white)
![CI Status](https://github.com/kumsat/playwright-webshop-e2e-tests/actions/workflows/playwright-ci.yml/badge.svg)

End-to-End UI automation framework built using **Playwright + TypeScript** for the demo webshop **SauceDemo**.  
This project demonstrates real-world automation practices including Page Object Model (POM), fixtures, reporting, traces, and CI/CD.

---

## 🧪 Tech Stack

- **Playwright** (Chromium, Firefox, WebKit)
- **TypeScript**
- **Page Object Model (POM)**
- **GitHub Actions CI**
- **HTML, trace, and screenshot reporting**

---

## 📁 Folder Structure

playwright-webshop-e2e-tests/
│
├── tests/
│ ├── login.spec.ts # Login scenarios
│ ├── search.spec.ts # Inventory & product list tests
│ └── checkout.spec.ts # Add-to-cart & checkout flow
│
├── page-objects/
│ ├── BasePage.ts # Shared utilities
│ ├── LoginPage.ts # Login interactions
│ ├── InventoryPage.ts # Products page locators & actions
│ └── CartPage.ts # Cart & checkout operations
│
├── fixtures/
│ └── test-data.json # User credentials & reusable data
│
├── playwright-report/ # Auto-generated HTML reports
├── test-results/ # Traces, screenshots, videos
│
├── playwright.config.ts # Playwright configuration file
└── README.md


---

## ▶️ Running Tests Locally

### 1️⃣ Install dependencies

```bash
npm install

