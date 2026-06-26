# Spark Repair Estimator

A mobile-first repair cost estimator built for the Spark Homes Developer Contest.

## What it does

Acquisition agents walk through a property and use this app to estimate repair costs before making an offer. Every repair item has a standard unit cost loaded. The agent checks off what needs work, enters a quantity, and the app calculates a running total in real time.

## Features

- 75+ repair line items organized into 19 collapsible groups
- 5 sections: Interior/General, Kitchen, Bathrooms, Systems & Structure, Exterior
- Running cost total visible at all times
- Progress tracker showing how many groups have been reviewed
- Data saved automatically — nothing lost if you close the app
- Export estimate to Excel with one tap
- Works offline — installable as a PWA on Android and iOS

## Creative Addition

**Deal Analyzer** — agents can enter the purchase price and ARV (After Repair Value) to instantly see estimated profit margin and ROI. This answers the core question every acquisition agent asks: "Does this deal make money?"

## How to run it

1. Clone this repo
2. Open `index.html` with Live Server in VS Code
3. Or open directly in any browser

## Tech stack

- HTML, CSS, JavaScript (no frameworks)
- Tailwind CSS (CDN)
- xlsx-js-style for Excel export
- localStorage for data persistence
- Service Worker for offline support