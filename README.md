# 🧙‍♂️ Recipe Wizard

**Transform your pantry into a recipe generator!**

Recipe Wizard is an innovative mobile application that revolutionizes how you discover recipes. Instead of searching for recipes first, simply tell us what ingredients you have, and we'll find delicious recipes that match your pantry. Perfect for reducing food waste, discovering new cuisines, and making quick meal decisions.

---

## 🎯 Overview

Recipe Wizard is a **reverse recipe search engine** built for mobile platforms. Traditional recipe apps require you to search by recipe name or cuisine type. Recipe Wizard flips this paradigm—you provide ingredients, and we find recipes.

### Why Recipe Wizard?

- **Reduce Food Waste**: Use ingredients before they expire
- **Discover New Recipes**: Find cuisines and dishes you've never tried
- **Save Time**: Quick meal planning without endless scrolling
- **Budget Friendly**: Cook with what you already have
- **User-Friendly**: Intuitive interface for all ages

### Key Statistics

- **9 Ingredient Categories**: Comprehensive ingredient database
- **1000+ Recipes**: Curated from AllRecipes.com
- **Flexible Matching**: Find exact or close matches
- **Fast Search**: Real-time ingredient filtering

---

## ✨ Features

### 1. **Ingredient Selection System**

Recipe Wizard organizes ingredients into 9 logical categories for easy browsing:

#### **Dairy**
- Milk, Yogurt, Cheese, Butter, Cream, Sour Cream, Cottage Cheese

#### **Vegetables**
- Carrots, Broccoli, Spinach, Tomatoes, Onions, Garlic, Bell Peppers, Mushrooms, Zucchini, Potatoes, Celery, Cabbage, Lettuce, Corn, Green Beans, Peas

#### **Fruits**
- Apples, Bananas, Oranges, Strawberries, Blueberries, Lemons, Limes, Grapes, Watermelon, Pineapple, Peaches, Mangoes, Avocados, Berries

#### **Baking & Grains**
- All-Purpose Flour, Wheat Flour, Cornmeal, Oats, Rice, Pasta, Bread Crumbs, Yeast, Baking Powder, Baking Soda, Sugar, Brown Sugar, Honey

#### **Condiments & Sauces**
- Salt, Pepper, Soy Sauce, Vinegar, Olive Oil, Vegetable Oil, Hot Sauce, Mustard, Ketchup, Mayo, Peanut Butter

#### **Meats**
- Chicken, Beef, Pork, Turkey, Lamb, Ground Beef, Bacon, Sausage, Ham

#### **Seafood**
- Salmon, Tuna, Shrimp, Cod, Tilapia, Crab, Lobster, Mussels, Clams

#### **Liquids**
- Water, Milk, Broth, Wine, Beer, Orange Juice, Lemon Juice, Coconut Milk, Tomato Juice

#### **Nuts & Spices**
- Almonds, Peanuts, Walnuts, Pecans, Cashews, Cinnamon, Basil, Oregano, Garlic Powder, Cumin, Paprika, Thyme, Rosemary

### 2. **Advanced Search Functionality**

- **Real-time Search**: Type ingredient names for instant filtering
- **Multi-category Search**: Search across all categories simultaneously
- **Autocomplete**: Suggestions as you type
- **Case-Insensitive**: Search works with any capitalization

### 3. **Flexible Recipe Matching**

Recipe Wizard offers two matching algorithms:

#### **Exact Matches**
- Recipes where ALL your selected ingredients are present
- Ideal when you want recipes using exactly what you have
- Ensures no unexpected ingredient substitutions

#### **Close Matches**
- Recipes missing only ONE of your selected ingredients
- Great for discovering recipes where you might substitute an ingredient
- Expands possibilities while maintaining relevance

### 4. **Recipe Discovery**

- **Direct Links**: Click through to AllRecipes.com for full instructions
- **Ingredients Display**: See which of your ingredients are in each recipe
- **Missing Ingredients**: Identify which single ingredient you might need
- **Toggle View**: Easily switch between exact and close matches

### 5. **User Interface**

- **Intuitive Navigation**: Tab-based navigation for easy access
- **Visual Feedback**: Clear indicators for selected ingredients
- **Loading States**: Smooth experience with loading screens
- **Responsive Design**: Optimized for all device sizes
- **Professional Branding**: Custom header with Recipe Wizard logo

### 6. **Ingredient Management**

- **Add Ingredients**: Browse categories and select ingredients
- **View Selection**: See all your selected ingredients at a glance
- **Remove Items**: Easily deselect ingredients
- **Clear All**: Reset your selection quickly
- **Persistence**: Your selections are remembered during the session

---

---

## 🏗 Architecture

### Application Flow

```
┌─────────────────────────────────────────────┐
│         App.js (Root Component)             │
└──────────────┬──────────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
       ▼                ▼
  Navigation      MainMenu
  (Stack/Tab)     (Home Screen)
       │
   ┌───┼───────────────────────┐
   │   │                       │
   ▼   ▼                       ▼
 Add  Search            Ingredients   Results
Ingred  Tab              List Tab      Tab
   │
   └──► Category Views
        (Vegetables, Fruits, Dairy, etc.)
   │
   └──► Search Component
   │
   └──► Checkout/Review
   │
   └──► Results Display
        ├─ ExactMatches
        └─ CloseMatches
```

### State Management

```
Global State (Context API or Redux)
├── selectedIngredients: []
├── searchQuery: ""
├── currentResults: {
│   exact: [],
│   close: []
│}
└── userPreferences: {}

Component State (Local)
├── Loading states
├── Modal visibility
├── Tab selection
└── UI interactions
```

### Data Flow

```
User Selects Ingredient
         │
         ▼
Update Local State
         │
         ▼
Add to selectedIngredients array
         │
         ▼
Display in Ingredients List
         │
         ▼
User Initiates Search
         │
         ▼
Run Matching Algorithm
         │
         ├─ Filter exact matches
         │
         └─ Filter close matches
         │
         ▼
Display Results
```

## 🐛 Troubleshooting

### Common Issues & Solutions

#### **Issue: App won't start**
```
Error: Unable to find a matching variant...
```
**Solution**:
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### **Issue: Blank screen on startup**
```
Check LogBox for errors
```
**Solution**:
```bash
# Ensure assets are loaded
expo start --clear

# Check app.json configuration
cat app.json
```

#### **Issue: Recipe search returns no results**
**Possible Causes**:
- Recipe database not loaded
- Ingredient name mismatch
- Corrupted JSON file

**Solution**:
```bash
# Validate JSON files
npm run validate-data

# Regenerate recipes
python ScraperUpgraded.py --regenerate
```

#### **Issue: iOS build fails**
```
Build error: Pod installation failed
```
**Solution**:
```bash
# Clean iOS build
rm -rf ios build
expo prebuild --clean

# Rebuild
npm run ios
```

#### **Issue: Android build fails**
```
Build error: Android SDK not found
```
**Solution**:
```bash
# Set ANDROID_HOME
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools

# Try again
npm run android
```

#### **Issue: Slow search performance**
**Solution**:
- Use production build instead of dev
- Optimize JSON database size
- Implement debouncing in search

---

## 🚀 Future Enhancements

### Phase 2 Features (Q2 2026)
- [ ] **User Authentication**: Google/Apple Sign-in
- [ ] **Cloud Sync**: Firebase for user data backup
- [ ] **Dietary Filters**: Vegetarian, Vegan, Gluten-free options
- [ ] **Allergen Management**: Common allergen detection
- [ ] **Favorites System**: Save and organize recipes
- [ ] **Shopping List**: Generate from recipe ingredients

### Phase 3 Features (Q3 2026)
- [ ] **Nutritional Info**: Calories, macros, vitamins
- [ ] **Recipe Ratings**: User reviews and ratings
- [ ] **Social Sharing**: Share recipes with friends
- [ ] **Meal Planning**: Weekly meal plan generator
- [ ] **Dark Mode**: Theme preferences
- [ ] **Multiple Languages**: i18n support

### Phase 4 Features (Q4 2026)
- [ ] **Backend API**: Dedicated recipe database
- [ ] **Advanced Filters**: Cooking time, difficulty, cuisine
- [ ] **Substitution Engine**: Smart ingredient substitutions
- [ ] **Barcode Scanner**: Quick ingredient addition
- [ ] **Voice Search**: Voice-activated ingredient search
- [ ] **AR Features**: Cooking instructions with AR

### Technical Improvements
- [ ] **TypeScript Migration**: Full type safety
- [ ] **Unit Tests**: Jest testing framework
- [ ] **E2E Tests**: Detox for mobile testing
- [ ] **Performance**: Code splitting and lazy loading
- [ ] **Accessibility**: WCAG compliance
- [ ] **Analytics**: Usage tracking and insights

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Fork & Clone
```bash
git clone https://github.com/yourusername/RecipeWizard.git
cd RecipeWizard-main
```

### Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### Make Changes & Test
```bash
# Test your changes
npm test

# Run linting
npm run lint
```

### Commit & Push
```bash
git commit -m "Add: description of your changes"
git push origin feature/your-feature-name
```

### Create Pull Request
- Go to GitHub repository
- Click "New Pull Request"
- Select your branch
- Add description and submit

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Include test cases
- One feature per PR

---

## 📄 License

This project is licensed under the **MIT License** - see LICENSE file for details.

```
MIT License

Copyright (c) 2026 Prabhdeep Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```



**Made with ❤️ by Prabhdeep Singh**

**Last Updated**: June 6, 2025
