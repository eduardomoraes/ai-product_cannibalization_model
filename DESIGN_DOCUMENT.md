# Design Document: Strategic Retail Analytics Assistant (Cannibalization Focus)

## 1. Introduction & Purpose

This document outlines the design for an interactive application aimed at Sales Directors in the physical product industry. The primary purpose of this application is to detect, simulate, and provide strategic recommendations regarding product cannibalization. It will help users understand the impact of new product launches (both own and competitor) and make informed decisions to optimize their product portfolio, maximize margins, and manage shelf space effectively.

The system is envisioned as an intelligent assistant, leveraging both quantitative analysis and business logic, aligning with the role prompt: *"You are a strategic retail analytics assistant... Your goal is to detect and simulate product cannibalization..."*

## 2. Core App Functionality & User Flow

### 2.1. Core Functionalities:
*   **Cannibalization Detection:** Analyze historical data to identify and quantify cannibalization instances.
*   **New Product Launch Simulation (Own Products):** Forecast sales of new SKUs and their impact on existing products, category sales, margin mix, and suggest pilot retailers.
*   **Competitor Launch Simulation:** Forecast the impact of competitor SKUs on own products' sales, market share, and shelf space.
*   **Financial Impact Estimation:** Integrated into simulations, showing changes in revenue, volume, and margins.
*   **Action Recommendation:** Suggest strategic actions (launch, delay, reposition, discontinue) based on analyses.
*   **Strategic Guidance Support:** Provide data-driven insights for price-pack architecture and product line design.

### 2.2. Basic User Flow:
1.  **Login & Dashboard:** Overview of portfolio health, cannibalization alerts, recent simulations.
2.  **Cannibalization Detection:** Setup analysis parameters (products, retailers, time) -> View results (KPIs, list of cannibalizing pairs) -> Drill down to detailed analysis.
3.  **New Product Launch Simulation:** Define new product attributes (features, price, brand, launch quarter) -> Define scenario context (retailers, marketing) -> Identify potential cannibalization targets -> Run simulation -> View comprehensive results.
4.  **Competitor Launch Simulation:** Define competitor product details -> Define market context -> Identify affected SKUs -> Run simulation -> View impact analysis.
5.  **Review Recommendations & Strategic Insights:** Integrated into simulation results and potentially a dedicated strategy section.

## 3. Data Requirements

### 3.1. Historical Sales Data:
*   **Granularity:** SKU, Date (day/week), Retailer, Store (opt.), Units Sold, Revenue.
*   **Desirable:** Promotions, COGS.
*   **Format:** Tabular (CSV, DB tables).

### 3.2. Product Master Data (Own & Competitor):
*   **Attributes:** SKU_ID, Name, Brand, Category, Launch_Date, Price, Unit_Cost, Package_Size, **Key_Features** (critical for overlap analysis), Tier.
*   **Format:** Tabular.

### 3.3. Competitor Data:
*   Pricing, promotions, launch dates, market share (if available).

### 3.4. Retailer Data:
*   Listings, shelf-space info (opt.).

### 3.5. Data Ingestion:
*   CSV/Excel uploads, database connectors, APIs. Basic validation upon ingestion.

## 4. UI Mockups & Key Performance Indicators (KPIs)

### Screen 1: Dashboard
*   **Widgets:** Overall Portfolio Health (Sales, Margin, Market Share trends), Cannibalization Hotspots (High-risk SKUs, Revenue Lost), Recent Simulations.
*   **KPIs:** Total Sales, Overall Margin %, Cannibalization Rate, Est. Revenue Impact from Cannibalization.

### Screen 2: Cannibalization Detection View
*   **Setup:** Select category, SKUs, retailer, period.
*   **Results:** Summary (SKUs analyzed, avg. rate, total impact), Table/Visual of cannibalizing pairs.
*   **KPIs:** Cannibalization Rate (%), Volume/Revenue Impact, Correlation Score, Margin Shift.

### Screen 3: Simulation Setup
*   **Wizard:** Select type (Own/Competitor Launch) -> Define Product (Features, Price, COGS) -> Define Scenario (Launch Q, Retailers, Marketing) -> Identify Overlap/Affected SKUs.
*   **KPIs (Input/System-derived):** Feature Overlap Score, Price Point Difference.

### Screen 4: Simulation Results
*   **Summary:** Forecasted Sales (New SKU), Impact on Existing SKUs (Sales, Margin Change), Net Category/Portfolio Sales Change, Margin Mix Shift, Impact on Competitor Share (if applicable).
*   **Visuals:** Scenario comparison tables ("With" vs. "Without" Launch), sales trend graphs, market share charts.
*   **Recommendations:** Launch/Delay/Reposition, Retailer Pilot Suggestions.
*   **KPIs:** As above, plus ROI/Payback (opt.), Shelf Space Impact.

## 5. Backend Logic and Models

### 5.1. Data Processing & Preparation:
Ingestion, validation, cleaning, transformation, feature engineering (product feature vectorization, lagged variables).

### 5.2. Cannibalization Detection Module:
*   **Models:** Correlation analysis, Intervention Analysis (DiD), Regression Models (`Sales_Victim ~ ... + Sales_Cannibal`), Uplift Modeling.
*   **Inputs:** Feature Overlap Score, Price Proximity.

### 5.3. Sales Forecasting & Simulation Module:
*   **Baseline Sales Forecasting:** Time Series Models (ARIMA, Prophet), ML Regression.
*   **New Product Sales Forecasting:** Look-alike Modeling, Market Response Models, Bass Diffusion.
*   **Cannibalization Impact Estimation:** Based on Cross-Elasticity or dynamic Cannibalization Factor (CF) influenced by feature overlap, price, brand loyalty. `AdjustedSales_Victim = BaselineSales_Victim - (Sales_NewSKU * CF_Victim)`.
*   **Competitor Launch Simulation:** Similar logic, focusing on impact on own SKUs.
*   **Margin & Financial Calculation:** Arithmetic based on forecasted units, COGS, prices.

### 5.4. Recommendation Engine Module:
*   **Rule-based system** using thresholds from analyses (e.g., `IF Net_Portfolio_Margin_Change > X% ... THEN Recommend "Proceed"`).
*   Retailer pilot suggestions based on incremental gain vs. cannibalized volume per retailer.

### 5.5. Key Concepts Integrated:
Elasticity, market share decomposition, price-pack architecture considerations, feature overlap, contribution margin shifts.

### 5.6. Tech Stack (Suggestion):
Python backend (Pandas, Scikit-learn, Statsmodels), Relational DB (PostgreSQL), FastAPI/Flask.

## 6. Example Combo Prompt Usage

*   **Prompt:** *"Given our historical sales data by SKU, simulate what would happen if we launch a new mid-tier flavored sparkling water in Q4 under Brand X. Forecast its sales and its cannibalization effect on existing SKUs. Show output as graphs and scenario comparisons. Also suggest which retailers are least risky to pilot."*
*   **Handling:**
    1.  **User Input:** User inputs parameters ("mid-tier flavored sparkling water," "Q4," "Brand X," price, features, etc.) via the **Simulation Setup** UI.
    2.  **Backend Processing:**
        *   New product sales forecast (look-alike model).
        *   Cannibalization estimation on existing SKUs (using feature overlap, price proximity to determine impact).
        *   Financial impact calculation.
        *   Retailer risk assessment for pilot launch.
    3.  **Output (Simulation Results Screen):**
        *   Graphs: Forecasted sales for new SKU, impact on existing SKUs, category sales comparison.
        *   Tables: Scenario comparison ("With" vs. "Without" launch) for sales, revenue, margin.
        *   Ranked list of retailers for pilot launch with supporting KPIs.

## 7. Addressing Strategic Questions

### 7.1. Price Pack Architecture:
*   The app informs this by allowing users to simulate different price/pack scenarios and observe the cannibalization impact.
*   Detection module can reveal past patterns related to price/pack sensitivity.

### 7.2. Product Line Architecture (Protecting Flagships, Allowing Innovation):
*   Simulations are crucial for testing the impact of innovations on flagships *before* launch.
*   Helps identify "white space" for innovations that grow the category with manageable cannibalization.
*   Provides portfolio margin impact to support strategic trade-offs.
*   The app provides quantitative data; strategic interpretation remains with the user, guided by the app's outputs.

## 8. Future Considerations / Optional Additions
*   Deeper integration of shelf-space economics if reliable data becomes available.
*   More advanced ML models (e.g., Bayesian networks for causal inference, reinforcement learning for optimal pricing/promotion strategies under cannibalization constraints).
*   Direct "what-if" analysis for price changes on existing products and their cross-effects.
```
