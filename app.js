const iconCache = {
  "BotW Apple Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/f2/BotW_Apple_Icon.png/revision/latest?cb=20210311192526",
  "BotW Apple Pie Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e7/BotW_Apple_Pie_Icon.png/revision/latest?cb=20210311192612",
  "BotW Armored Carp Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/8/86/BotW_Armored_Carp_Icon.png/revision/latest?cb=20210311192909",
  "BotW Bird Egg Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/75/BotW_Bird_Egg_Icon.png/revision/latest?cb=20210311193842",
  "BotW Cane Sugar Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b5/BotW_Cane_Sugar_Icon.png/revision/latest?cb=20181117141321",
  "BotW Chillshroom Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/26/BotW_Chillshroom_Icon.png/revision/latest?cb=20171223204738",
  "BotW Copious Simmered Fruit Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/ce/BotW_Copious_Simmered_Fruit_Icon.png/revision/latest?cb=20171227175525",
  "BotW Egg Pudding Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/22/BotW_Egg_Pudding_Icon.png/revision/latest?cb=20171227180323",
  "BotW Endura Carrot Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/09/BotW_Endura_Carrot_Icon.png/revision/latest?cb=20171223204554",
  "BotW Fish and Mushroom Skewer Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/2d/BotW_Fish_and_Mushroom_Skewer_Icon.png/revision/latest?cb=20171228103842",
  "BotW Fortified Pumpkin Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/ec/BotW_Fortified_Pumpkin_Icon.png/revision/latest?cb=20171223204523",
  "BotW Fresh Milk Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6a/BotW_Fresh_Milk_Icon.png/revision/latest?cb=20181117141300",
  "BotW Goat Butter Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/76/BotW_Goat_Butter_Icon.png/revision/latest?cb=20181117141358",
  "BotW Goron Spice Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6f/BotW_Goron_Spice_Icon.png/revision/latest?cb=20181117141410",
  "BotW Hearty Bass Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/0/0c/BotW_Hearty_Bass_Icon.png/revision/latest?cb=20171226115430",
  "BotW Hearty Truffle Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/cc/BotW_Hearty_Truffle_Icon.png/revision/latest?cb=20171223203507",
  "BotW Hylian Rice Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/67/BotW_Hylian_Rice_Icon.png/revision/latest?cb=20181117141343",
  "BotW Hylian Shroom Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/13/BotW_Hylian_Shroom_Icon.png/revision/latest?cb=20171223205416",
  "BotW Hyrule Bass Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/66/BotW_Hyrule_Bass_Icon.png/revision/latest?cb=20171226115717",
  "BotW Meat Curry Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/1/10/BotW_Meat_Curry_Icon.png/revision/latest?cb=20171227180647",
  "BotW Meat and Rice Bowl Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/e/e6/BotW_Meat_and_Rice_Bowl_Icon.png/revision/latest?cb=20171227175802",
  "BotW Mighty Bananas Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/57/BotW_Mighty_Bananas_Icon.png/revision/latest?cb=20171220152147",
  "BotW Mighty Carp Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c8/BotW_Mighty_Carp_Icon.png/revision/latest?cb=20171226114754",
  "BotW Raw Bird Drumstick Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c5/BotW_Raw_Bird_Drumstick_Icon.png/revision/latest?cb=20171222162101",
  "BotW Raw Meat Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/52/BotW_Raw_Meat_Icon.png/revision/latest?cb=20171222162022",
  "BotW Raw Prime Meat Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c3/BotW_Raw_Prime_Meat_Icon.png/revision/latest?cb=20171222162033",
  "BotW Rock Salt Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/21/BotW_Rock_Salt_Icon.png/revision/latest?cb=20181117125616",
  "BotW Rushroom Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/55/BotW_Rushroom_Icon.png/revision/latest?cb=20171223210434",
  "BotW Salt-Grilled Prime Meat Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/9/9f/BotW_Salt-Grilled_Prime_Meat_Icon.png/revision/latest?cb=20171227181345",
  "BotW Silent Princess Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/4/48/BotW_Silent_Princess_Icon.png/revision/latest?cb=20181117130043",
  "BotW Silent Shroom Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/36/BotW_Silent_Shroom_Icon.png/revision/latest?cb=20171223203834",
  "BotW Stamella Shroom Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/c/c2/BotW_Stamella_Shroom_Icon.png/revision/latest?cb=20171223203923",
  "BotW Staminoka Bass Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/7/79/BotW_Staminoka_Bass_Icon.png/revision/latest?cb=20171226115112",
  "BotW Sunshroom Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/5/5d/BotW_Sunshroom_Icon.png/revision/latest?cb=20171223203939",
  "BotW Swift Carrot Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/3/32/BotW_Swift_Carrot_Icon.png/revision/latest?cb=20171223203952",
  "BotW Tabantha Wheat Icon.png": "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/a/a3/BotW_Tabantha_Wheat_Icon.png/revision/latest?cb=20181117141332"
};

const wikiIcon = (fileName) => iconCache[fileName] || "";

const ingredients = [
  { id: "apple", name: "Apple", type: "food", tag: "fruit", icon: "A", file: "BotW Apple Icon.png", color: "#b94d45" },
  { id: "golden-apple", name: "Golden Apple", type: "food", tag: "rare fruit", icon: "G", file: "BotW Apple Icon.png", color: "#c9972e" },
  { id: "hylian-shroom", name: "Hylian Shroom", type: "food", tag: "mushroom", icon: "H", file: "BotW Hylian Shroom Icon.png", color: "#9b6b3d" },
  { id: "stamella-shroom", name: "Stamella Shroom", type: "effect", tag: "stamina", icon: "S", file: "BotW Stamella Shroom Icon.png", color: "#d28934" },
  { id: "rushroom", name: "Rushroom", type: "effect", tag: "speed", icon: "R", file: "BotW Rushroom Icon.png", color: "#6d64a8" },
  { id: "sunshroom", name: "Sunshroom", type: "effect", tag: "cold resist", icon: "S", file: "BotW Sunshroom Icon.png", color: "#d96a3c" },
  { id: "chillshroom", name: "Chillshroom", type: "effect", tag: "heat resist", icon: "C", file: "BotW Chillshroom Icon.png", color: "#4386a8" },
  { id: "silent-shroom", name: "Silent Shroom", type: "effect", tag: "stealth", icon: "S", file: "BotW Silent Shroom Icon.png", color: "#4d6e78" },
  { id: "hearty-truffle", name: "Hearty Truffle", type: "effect", tag: "extra hearts", icon: "T", file: "BotW Hearty Truffle Icon.png", color: "#7b5a46" },
  { id: "hylian-rice", name: "Hylian Rice", type: "cooking", tag: "grain", icon: "R", file: "BotW Hylian Rice Icon.png", color: "#d5c58f" },
  { id: "bird-egg", name: "Bird Egg", type: "food", tag: "egg", icon: "E", file: "BotW Bird Egg Icon.png", color: "#d8b85b" },
  { id: "fresh-milk", name: "Fresh Milk", type: "cooking", tag: "dairy", icon: "M", file: "BotW Fresh Milk Icon.png", color: "#6399a8" },
  { id: "goat-butter", name: "Goat Butter", type: "cooking", tag: "dairy", icon: "B", file: "BotW Goat Butter Icon.png", color: "#b89435" },
  { id: "tabantha-wheat", name: "Tabantha Wheat", type: "cooking", tag: "grain", icon: "W", file: "BotW Tabantha Wheat Icon.png", color: "#a87935" },
  { id: "cane-sugar", name: "Cane Sugar", type: "cooking", tag: "sweetener", icon: "S", file: "BotW Cane Sugar Icon.png", color: "#b99273" },
  { id: "rock-salt", name: "Rock Salt", type: "cooking", tag: "seasoning", icon: "S", file: "BotW Rock Salt Icon.png", color: "#71828d" },
  { id: "goron-spice", name: "Goron Spice", type: "cooking", tag: "seasoning", icon: "G", file: "BotW Goron Spice Icon.png", color: "#b96530" },
  { id: "raw-meat", name: "Raw Meat", type: "food", tag: "meat", icon: "M", file: "BotW Raw Meat Icon.png", color: "#a7443f" },
  { id: "prime-meat", name: "Raw Prime Meat", type: "food", tag: "meat", icon: "P", file: "BotW Raw Prime Meat Icon.png", color: "#8f3437" },
  { id: "raw-bird", name: "Raw Bird Drumstick", type: "food", tag: "meat", icon: "D", file: "BotW Raw Bird Drumstick Icon.png", color: "#a75b42" },
  { id: "hylian-bass", name: "Hyrule Bass", type: "food", tag: "fish", icon: "B", file: "BotW Hyrule Bass Icon.png", color: "#386f8d" },
  { id: "hearty-bass", name: "Hearty Bass", type: "effect", tag: "extra hearts", icon: "B", file: "BotW Hearty Bass Icon.png", color: "#2f7d89" },
  { id: "staminoka-bass", name: "Staminoka Bass", type: "effect", tag: "stamina", icon: "B", file: "BotW Staminoka Bass Icon.png", color: "#4b8d56" },
  { id: "mighty-carp", name: "Mighty Carp", type: "effect", tag: "attack up", icon: "C", file: "BotW Mighty Carp Icon.png", color: "#7462a2" },
  { id: "armored-carp", name: "Armored Carp", type: "effect", tag: "defense up", icon: "C", file: "BotW Armored Carp Icon.png", color: "#5b7080" },
  { id: "swift-carrot", name: "Swift Carrot", type: "effect", tag: "speed", icon: "C", file: "BotW Swift Carrot Icon.png", color: "#d47b33" },
  { id: "endura-carrot", name: "Endura Carrot", type: "effect", tag: "extra stamina", icon: "E", file: "BotW Endura Carrot Icon.png", color: "#d68c2f" },
  { id: "mighty-bananas", name: "Mighty Bananas", type: "effect", tag: "attack up", icon: "B", file: "BotW Mighty Bananas Icon.png", color: "#d3aa31" },
  { id: "fortified-pumpkin", name: "Fortified Pumpkin", type: "effect", tag: "defense up", icon: "P", file: "BotW Fortified Pumpkin Icon.png", color: "#c06f2d" },
  { id: "silent-princess", name: "Silent Princess", type: "effect", tag: "stealth", icon: "P", file: "BotW Silent Princess Icon.png", color: "#517fa3" }
].map((ingredient) => ({ ...ingredient, image: wikiIcon(ingredient.file) }));

const recipes = [
  { name: "Hearty Fish Skewer", file: "BotW Hearty Fish Skewer Icon.png", ingredients: ["hearty-bass"], hearts: 8, effect: "Full recovery + extra hearts", score: 96, description: "A superb panic meal from one strong fish." },
  { name: "Hearty Mushroom Skewer", file: "BotW Hearty Mushroom Skewer Icon.png", ingredients: ["hearty-truffle"], hearts: 7, effect: "Full recovery + extra hearts", score: 92, description: "Excellent when you need to survive a rough fight." },
  { name: "Enduring Fried Wild Greens", file: "BotW Enduring Fried Wild Greens Icon.png", ingredients: ["endura-carrot"], hearts: 4, effect: "Stamina recovery + bonus stamina", score: 88, description: "A top pick for climbing, scouting, and long glides." },
  { name: "Energizing Fish Skewer", file: "BotW Energizing Fish Skewer Icon.png", ingredients: ["staminoka-bass"], hearts: 3, effect: "Stamina recovery", score: 78, description: "A practical field meal for long routes." },
  { name: "Mighty Simmered Fruit", file: "BotW Mighty Simmered Fruit Icon.png", ingredients: ["mighty-bananas", "apple"], hearts: 5, effect: "Attack up", score: 84, description: "A strong low-cost meal before combat." },
  { name: "Mighty Seafood Rice Balls", file: "BotW Mighty Seafood Rice Balls Icon.png", ingredients: ["mighty-carp", "hylian-rice", "rock-salt"], hearts: 7, effect: "Attack up", score: 86, description: "A stronger battle meal with solid healing." },
  { name: "Tough Pumpkin Stew", file: "BotW Tough Pumpkin Stew Icon.png", ingredients: ["fortified-pumpkin", "fresh-milk", "rock-salt"], hearts: 6, effect: "Defense up", score: 82, description: "Useful when a long fight is coming." },
  { name: "Tough Fish Skewer", file: "BotW Tough Fish Skewer Icon.png", ingredients: ["armored-carp"], hearts: 4, effect: "Defense up", score: 74, description: "A simple defensive meal from one fish." },
  { name: "Hasty Mushroom Skewer", file: "BotW Hasty Mushroom Skewer Icon.png", ingredients: ["rushroom"], hearts: 2, effect: "Movement speed up", score: 68, description: "Cheap and handy for crossing the map." },
  { name: "Hasty Fried Wild Greens", file: "BotW Hasty Fried Wild Greens Icon.png", ingredients: ["swift-carrot", "rock-salt"], hearts: 4, effect: "Movement speed up", score: 72, description: "A better speed meal when you have seasoning." },
  { name: "Spicy Mushroom Skewer", file: "BotW Spicy Mushroom Skewer Icon.png", ingredients: ["sunshroom"], hearts: 2, effect: "Cold resistance", score: 70, description: "Basic protection for cold areas." },
  { name: "Chilly Mushroom Skewer", file: "BotW Chilly Mushroom Skewer Icon.png", ingredients: ["chillshroom"], hearts: 2, effect: "Heat resistance", score: 70, description: "Useful in scorching regions." },
  { name: "Sneaky Mushroom Skewer", file: "BotW Sneaky Mushroom Skewer Icon.png", ingredients: ["silent-shroom", "silent-princess"], hearts: 4, effect: "Stealth up", score: 76, description: "Good for hunting, gathering, and quiet scouting." },
  { name: "Meat and Rice Bowl", file: "BotW Meat and Rice Bowl Icon.png", ingredients: ["raw-meat", "hylian-rice"], hearts: 6, effect: "No effect", score: 58, description: "Reliable healing from common supplies." },
  { name: "Meat Curry", file: "BotW Meat Curry Icon.png", ingredients: ["raw-meat", "hylian-rice", "goron-spice"], hearts: 7, effect: "No effect", score: 63, description: "A filling meal for ordinary travel." },
  { name: "Fish and Mushroom Skewer", file: "BotW Fish and Mushroom Skewer Icon.png", ingredients: ["hylian-bass", "hylian-shroom"], hearts: 5, effect: "No effect", score: 52, description: "A simple fish and mushroom combination." },
  { name: "Apple Pie", file: "BotW Apple Pie Icon.png", ingredients: ["apple", "tabantha-wheat", "cane-sugar", "goat-butter"], hearts: 6, effect: "No effect", score: 56, description: "A sweet recipe for village supply runs." },
  { name: "Egg Pudding", file: "BotW Egg Pudding Icon.png", ingredients: ["bird-egg", "fresh-milk", "cane-sugar"], hearts: 5, effect: "No effect", score: 50, description: "A compact dessert for a smaller heal." },
  { name: "Copious Simmered Fruit", file: "BotW Copious Simmered Fruit Icon.png", ingredients: ["golden-apple", "apple"], hearts: 8, effect: "No effect", score: 66, description: "Strong healing without spending effect materials." },
  { name: "Salt-Grilled Prime Meat", file: "BotW Salt-Grilled Prime Meat Icon.png", ingredients: ["prime-meat", "rock-salt"], hearts: 9, effect: "No effect", score: 67, description: "Lots of hearts without using buff ingredients." }
].map((recipe) => ({ ...recipe, image: wikiIcon(recipe.file) }));

const state = {
  owned: new Set(JSON.parse(localStorage.getItem("totk-owned") || "[]")),
  category: "all",
  query: "",
  sort: "best"
};

const ingredientById = new Map(ingredients.map((item) => [item.id, item]));
const ingredientGrid = document.querySelector("#ingredientGrid");
const recipeList = document.querySelector("#recipeList");
const ingredientTemplate = document.querySelector("#ingredientTemplate");
const recipeTemplate = document.querySelector("#recipeTemplate");

document.querySelector("#ingredientSearch").addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderIngredients();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item === button));
    renderIngredients();
  });
});

document.querySelector("#sortMode").addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderRecipes();
});

document.querySelector("#clearInventory").addEventListener("click", () => {
  state.owned.clear();
  persist();
  renderAll();
});

function persist() {
  localStorage.setItem("totk-owned", JSON.stringify([...state.owned]));
}

function renderIcon(container, item) {
  container.textContent = item.icon || item.name.slice(0, 2).toUpperCase();
  container.style.background = item.color || "#26332f";

  if (!item.image) return;

  const image = document.createElement("img");
  image.alt = "";
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    image.remove();
    container.textContent = item.icon || item.name.slice(0, 2).toUpperCase();
  });
  container.textContent = "";
  container.append(image);
  image.src = item.image;
}

function renderIngredients() {
  ingredientGrid.innerHTML = "";
  const filtered = ingredients.filter((ingredient) => {
    const inCategory = state.category === "all" || ingredient.type === state.category;
    const matchesQuery = !state.query || `${ingredient.name} ${ingredient.tag}`.toLowerCase().includes(state.query);
    return inCategory && matchesQuery;
  });

  if (!filtered.length) {
    ingredientGrid.innerHTML = '<div class="empty-state">No materials found.</div>';
    return;
  }

  filtered.forEach((ingredient) => {
    const node = ingredientTemplate.content.firstElementChild.cloneNode(true);
    const owned = state.owned.has(ingredient.id);
    node.classList.toggle("selected", owned);
    node.setAttribute("aria-pressed", String(owned));
    renderIcon(node.querySelector(".ingredient-art"), ingredient);
    node.querySelector("strong").textContent = ingredient.name;
    node.querySelector("small").textContent = ingredient.tag;
    node.addEventListener("click", () => {
      if (state.owned.has(ingredient.id)) {
        state.owned.delete(ingredient.id);
      } else {
        state.owned.add(ingredient.id);
      }
      persist();
      renderAll();
    });
    ingredientGrid.append(node);
  });
}

function recipeStatus(recipe) {
  const missing = recipe.ingredients.filter((id) => !state.owned.has(id));
  const available = missing.length === 0;
  const ownedCount = recipe.ingredients.length - missing.length;
  return { missing, available, ownedCount };
}

function sortedRecipes() {
  return recipes
    .map((recipe) => ({ ...recipe, status: recipeStatus(recipe) }))
    .sort((a, b) => {
      if (state.sort === "available") {
        return Number(b.status.available) - Number(a.status.available) || b.score - a.score;
      }
      if (state.sort === "missing") {
        return a.status.missing.length - b.status.missing.length || b.score - a.score;
      }
      if (state.sort === "hearts") {
        return b.hearts - a.hearts || b.score - a.score;
      }
      const aScore = a.score + (a.status.available ? 40 : 0) + a.status.ownedCount * 8 - a.status.missing.length * 12;
      const bScore = b.score + (b.status.available ? 40 : 0) + b.status.ownedCount * 8 - b.status.missing.length * 12;
      return bScore - aScore;
    });
}

function renderRecipes() {
  recipeList.innerHTML = "";
  const ranked = sortedRecipes();
  const available = ranked.filter((recipe) => recipe.status.available);
  const almost = ranked.filter((recipe) => recipe.status.missing.length === 1);
  const bestEffect = available.find((recipe) => recipe.effect !== "No effect")?.effect.split(" ")[0] || "-";

  document.querySelector("#ownedCount").textContent = state.owned.size;
  document.querySelector("#availableCount").textContent = available.length;
  document.querySelector("#almostCount").textContent = almost.length;
  document.querySelector("#topEffect").textContent = bestEffect;
  document.querySelector("#resultSummary").textContent = state.owned.size
    ? `${available.length} meals can be cooked now, ${almost.length} are missing one material.`
    : "Choose ingredients and I will surface the best meals.";

  if (!state.owned.size) {
    recipeList.innerHTML = '<div class="empty-state">Start by selecting materials from your inventory.</div>';
    return;
  }

  ranked.forEach((recipe) => {
    const node = recipeTemplate.content.firstElementChild.cloneNode(true);
    const { missing, available: canCook } = recipe.status;
    node.classList.toggle("available", canCook);
    node.classList.toggle("locked", !canCook);
    renderIcon(node.querySelector(".recipe-icon"), recipe);
    node.querySelector("h3").textContent = recipe.name;
    node.querySelector(".recipe-description").textContent = recipe.description;
    node.querySelector(".recipe-meta").innerHTML = [
      pill(canCook ? "Cook now" : `${missing.length} missing`, canCook ? "good" : "warn"),
      pill(`${recipe.hearts} hearts`),
      pill(recipe.effect, recipe.effect === "No effect" ? "" : "good")
    ].join("");
    node.querySelector(".recipe-ingredients").innerHTML = recipe.ingredients
      .map((id) => {
        const ingredient = ingredientById.get(id);
        const className = state.owned.has(id) ? "good" : "missing";
        return pill(ingredient.name, className);
      })
      .join("");
    node.querySelector(".missing-line").textContent = canCook
      ? "You have everything needed."
      : `Missing: ${missing.map((id) => ingredientById.get(id).name).join(", ")}`;
    recipeList.append(node);
  });
}

function pill(text, className = "") {
  return `<span class="pill ${className}">${text}</span>`;
}

function renderAll() {
  renderIngredients();
  renderRecipes();
}

renderAll();
