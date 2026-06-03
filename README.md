# TOTK Recipe Finder

A lightweight browser app for planning meals in The Legend of Zelda: Tears of the Kingdom.

Select the food and cooking materials you currently have in your inventory, and the app shows which meals you can cook right now, which recipes are almost available, and what ingredients are missing. Recipes are ranked from most useful to least useful, with sorting options for best result, cookable meals, missing materials, and heart recovery.

The app runs entirely in the browser with plain HTML, CSS, and JavaScript. No installation, build step, or backend is required.

The current recipe catalog includes 230 Recipe Book rows covering 228 numbered Tears of the Kingdom entries, including variants, roasted foods, frozen foods, elixirs, and flexible requirements like `Any Fruit`, `Any Mushroom`, `Any Fish`, and `Any Raw Meat`.

## Online

The app is available at:

`https://mattxcz.github.io/TOTK-Recipe-Finder/`

The app is fully static, so GitHub Pages can serve it directly from `index.html`.

## How to Run it yourself
1. Download or clone this repository.
2. Open `index.html` in any modern web browser.
3. Select the ingredients you have in your inventory.
4. Browse the available and almost-available recipes.

That is all. No package manager, server, or build process is needed.

## Features

- Inventory-style ingredient selection
- Locally bundled recipe and inventory icons
- Cookable recipe detection
- Missing ingredient hints
- Flexible recipe matching for ingredient categories and Recipe Book variants
- Recipe ranking by usefulness
- Sorting by best result, availability, missing materials, or hearts
- Local browser storage for selected inventory
- Works by opening `index.html` directly

## Data Sources

Recipe names, numbering, ingredients, food effects, and recipe icons were expanded using Zelda Dungeon and Fextralife Tears of the Kingdom recipe references.

## AI Disclaimer

This project was created with assistance from AI. Recipe data, rankings, and descriptions may be incomplete or inaccurate and should be treated as a helpful fan-made guide rather than an authoritative source.

## Legal Disclaimer

This is a fan-made helper tool and is not affiliated with, endorsed by, or sponsored by Nintendo. The Legend of Zelda: Tears of the Kingdom and related names, icons, and assets belong to their respective owners.
