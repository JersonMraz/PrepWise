import { StaticImageData } from "next/image";
import recipe1 from "../../public/assets/recipe-1.jpg";
import recipe2 from "../../public/assets/recipe-2.jpg";
import recipe3 from "../../public/assets/recipe-3.jpg";
import recipe4 from "../../public/assets/recipe-4.jpg";
import recipe5 from "../../public/assets/recipe-5.jpg";
import recipe6 from "../../public/assets/recipe-6.jpg";

export interface Recipe {
    id: string;
    title: string;
    image: StaticImageData;
    calories: number;
    prepTime: number;
    cuisine: string;
    diet: string;
    ingredients: string[];
    steps: string[];
    nutrition: { protein: number; carbs: number; fat: number; fiber: number };
    saved?: boolean;
}

export const recipes: Recipe[] = [
    {
        id: "1",
        title: "Mediterranean Quinoa Bowl",
        image: recipe1,
        calories: 420,
        prepTime: 25,
        cuisine: "Mediterranean",
        diet: "Vegetarian",
        ingredients: ["1 cup quinoa", "1 avocado", "200g cherry tomatoes", "150g feta cheese", "Fresh basil", "2 tbsp olive oil", "Salt & pepper"],
        steps: ["Cook quinoa according to package directions.", "Slice avocado and halve tomatoes.", "Arrange quinoa in a bowl, top with avocado, tomatoes, and crumbled feta.", "Drizzle with olive oil, season, and garnish with basil."],
        nutrition: { protein: 18, carbs: 45, fat: 22, fiber: 8 },
    },
    {
        id: "2",
        title: "Grilled Salmon & Vegetables",
        image: recipe2,
        calories: 380,
        prepTime: 30,
        cuisine: "American",
        diet: "Keto",
        ingredients: ["2 salmon fillets", "1 lemon", "200g green beans", "2 sweet potatoes", "2 tbsp olive oil", "Fresh chives", "Salt & pepper"],
        steps: ["Preheat grill to medium-high.", "Season salmon with lemon juice, salt, and pepper.", "Grill salmon for 4-5 minutes per side.", "Roast sweet potatoes and blanch green beans.", "Plate together and garnish with chives."],
        nutrition: { protein: 35, carbs: 28, fat: 16, fiber: 5 },
    },
    {
        id: "3",
        title: "Pesto Pasta Pomodoro",
        image: recipe3,
        calories: 520,
        prepTime: 20,
        cuisine: "Italian",
        diet: "Vegetarian",
        ingredients: ["300g spaghetti", "100g basil pesto", "200g cherry tomatoes", "50g parmesan", "Fresh basil leaves", "2 tbsp olive oil"],
        steps: ["Cook pasta al dente.", "Halve cherry tomatoes and sauté in olive oil.", "Toss drained pasta with pesto and tomatoes.", "Top with shaved parmesan and fresh basil."],
        nutrition: { protein: 16, carbs: 62, fat: 24, fiber: 4 },
    },
    {
        id: "4",
        title: "Berry Smoothie Bowl",
        image: recipe4,
        calories: 310,
        prepTime: 10,
        cuisine: "American",
        diet: "Vegan",
        ingredients: ["1 cup mixed berries", "1 banana", "100ml almond milk", "30g granola", "1 tbsp chia seeds", "Coconut flakes"],
        steps: ["Blend berries, banana, and almond milk until smooth.", "Pour into a bowl.", "Top with granola, chia seeds, and coconut flakes.", "Serve immediately."],
        nutrition: { protein: 8, carbs: 52, fat: 10, fiber: 9 },
    },
    {
        id: "5",
        title: "Thai Green Curry",
        image: recipe5,
        calories: 450,
        prepTime: 35,
        cuisine: "Thai",
        diet: "Gluten-Free",
        ingredients: ["400ml coconut milk", "2 tbsp green curry paste", "300g chicken breast", "1 red pepper", "100g jasmine rice", "Fresh cilantro"],
        steps: ["Cook rice according to package.", "Sauté curry paste in a pan for 1 minute.", "Add coconut milk and sliced chicken, simmer 15 minutes.", "Add sliced peppers and cook 5 more minutes.", "Serve curry over rice, garnish with cilantro."],
        nutrition: { protein: 30, carbs: 38, fat: 24, fiber: 3 },
    },
    {
        id: "6",
        title: "Chicken Avocado Tacos",
        image: recipe6,
        calories: 390,
        prepTime: 20,
        cuisine: "Mexican",
        diet: "Gluten-Free",
        ingredients: ["300g chicken breast", "2 avocados", "8 corn tortillas", "1 lime", "Fresh cilantro", "Salsa", "Salt & cumin"],
        steps: ["Season chicken with cumin and salt, grill until cooked.", "Dice chicken and slice avocado.", "Warm tortillas.", "Fill with chicken, avocado, salsa, and cilantro.", "Squeeze lime over top and serve."],
        nutrition: { protein: 28, carbs: 34, fat: 18, fiber: 7 },
    },
];

export const mealPlan: Record<string, { breakfast?: string; lunch?: string; dinner?: string }> = {
    Mon: { breakfast: "4", lunch: "1", dinner: "2" },
    Tue: { lunch: "3", dinner: "5" },
    Wed: { breakfast: "4", dinner: "6" },
    Thu: { lunch: "1" },
    Fri: { breakfast: "4", lunch: "6", dinner: "2" },
    Sat: { dinner: "3" },
    Sun: { lunch: "5", dinner: "6" },
};

export const groceryItems = [
    { category: "Vegetables", items: [{ name: "Cherry tomatoes", checked: false }, { name: "Avocado", checked: true }, { name: "Red pepper", checked: false }, { name: "Sweet potatoes", checked: false }, { name: "Green beans", checked: true }] },
    { category: "Protein", items: [{ name: "Salmon fillets", checked: false }, { name: "Chicken breast", checked: false }] },
    { category: "Dairy", items: [{ name: "Feta cheese", checked: false }, { name: "Parmesan", checked: true }] },
    { category: "Grains", items: [{ name: "Quinoa", checked: false }, { name: "Spaghetti", checked: false }, { name: "Jasmine rice", checked: true }, { name: "Corn tortillas", checked: false }, { name: "Granola", checked: false }] },
    { category: "Other", items: [{ name: "Coconut milk", checked: false }, { name: "Basil pesto", checked: true }, { name: "Green curry paste", checked: false }, { name: "Almond milk", checked: false }, { name: "Chia seeds", checked: false }] },
];
