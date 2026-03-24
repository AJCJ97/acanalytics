---
title: Supermarket Sales EDA
description: Exploratory Data Analysis for Sales Trends and Anomalies
pubDate: 2026-03-23
---

### 📊 Supermarket Sales – Exploratory Data Analysis (EDA)

**Project Type:** Exploratory Data Analysis & Data Cleaning  
**Role:** Data Analyst  
**Tools:** Python (Pandas, Matplotlib)  
**Context:** Personal Project – Data Preparation & Business Insights  

---

### 🔍 Project Overview

This project analyzes a dataset of 9,800 supermarket transactions to identify sales trends, detect anomalies, and prepare the data for a future Power BI model.

The analysis combines:
* **Pandas** for data cleaning, aggregation, and transformation.
* **Matplotlib** for trend visualization and outlier detection.
* A **business-oriented approach** focused on discovering key revenue-driving categories and unusual transactions.

---

## 🎯 Business Questions Addressed

1. How do sales trend over time?
2. Which product categories generate the most revenue?
3. Are there any anomalies or outliers in the sales amounts?
4. Is the data clean and structured for Business Intelligence reporting?

---

## 🧮 Data Preparation (Python)

The dataset was processed using Python to ensure data quality:
* Removed 11 records with null values in the `Postal Code` column to prevent geolocation mapping errors.
* Validated that there are 0 duplicate records.
* Converted `Order Date` and `Ship Date` columns to `datetime` format to enable time-intelligence analysis.
* Exported a clean, optimized dataset ready for SQL Server and Power BI integration.

---

## 📈 Insight 1 – Annual Sales Trend

### 🔎 Key Insights
* There is consistent year-over-year growth in total sales.
* Transaction volume increases in parallel with revenue.

### 💡 Business Interpretation
* Current customer retention and expansion strategies are yielding positive returns.
* Growth demands scalability in shipping logistics.

### ✅ Actionable Insight
* Analyze current supply chain capacity to prevent bottlenecks as transaction volumes scale.

---

## 📈 Insight 2 – Sales by Category

### 🔎 Key Insights
* The **Technology** category is the primary revenue driver, generating $79,501.
* Some categories exhibit high inventory turnover but contribute marginally to total revenue.

### 💡 Business Interpretation
* The supermarket heavily relies on high-ticket items for financial stability.
* Lower-priced items act as traffic generators but do not sustain cash flow alone.

### ✅ Actionable Insight
* Prioritize inventory management and pricing strategies for the Technology category.
* Implement cross-selling tactics to push technology accessories alongside high-turnover items.

---

## 📊 Insight 3 – Distribution & Outliers

### 🔎 Key Insights
* The sales distribution indicates the vast majority of tickets are of low amounts.
* Extreme outliers exist, with single transactions exceeding $20,000.

### 💡 Business Interpretation
* Two distinct customer profiles operate within the same system: traditional retail consumers and wholesale/corporate (B2B) buyers.
* Mixing these transactions skews the average ticket size for regular customers.

### ✅ Actionable Insight
* Segment the database to separate retail and wholesale sales channels.
* Develop a dedicated B2B loyalty program for accounts making purchases over $10,000.

---

## 🧠 Overall Conclusions

* Revenue is highly concentrated in the **Technology** category.
* The detection of massive outlier purchases highlights the need for a dedicated B2B strategy.
* Raw data has been successfully cleaned and standardized, ensuring reliability for future managerial reporting in Power BI.
