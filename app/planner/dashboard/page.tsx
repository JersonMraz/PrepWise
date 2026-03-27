"use client";

import { BookOpen, CalendarCheck, TrendingUp, Utensils } from "lucide-react";
import { RecipeCard } from "../../components/RecipeCard";
import { recipes, mealPlan } from "../../data/recipes";
import heroImg from "@/public/assets/hero-recipe.jpg";
// import { div } from "framer-motion/client";
import Image from "next/image";

const stats = [
    { label: "Recipes Saved", value: "24", icon: BookOpen, color: "bg-primary/10 text-primary" },
    { label: "Meals Planned", value: "12", icon: CalendarCheck, color: "bg-accent/10 text-accent" },
    { label: "This Week", value: "5 days", icon: Utensils, color: "bg-primary/10 text-primary" },
    { label: "Calories Avg", value: "1,840", icon: TrendingUp, color: "bg-accent/10 text-accent" },
];

const days = ["Mon", "Tue", "Wed"];

export default function Home() {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Welcome hero */}
            <div className="relative overflow-hidden rounded-2xl">
                <Image src={heroImg} alt="Fresh food" className="h-48 md:h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/20 flex items-center px-6 md:px-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                            Good morning, Jamie 👋
                        </h1>
                        <p className="mt-1 text-sm text-primary-foreground/80 max-w-md">
                            You have 3 meals planned for today. Let's make something delicious!
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-card shadow-soft p-4 flex items-center gap-3">
                        <div className={`rounded-lg p-2 ${s.color}`}>
                            <s.icon className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-lg font-heading font-semibold text-card-foreground">{s.value}</p>
                            <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Today's meal plan */}
            <section>
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">Today's Meal Plan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(["breakfast", "lunch", "dinner"] as const).map((meal) => {
                        const recipeId = mealPlan["Mon"]?.[meal];
                        const recipe = recipeId ? recipes.find((r) => r.id === recipeId) : null;
                        return (
                            <div key={meal} className="rounded-xl bg-card shadow-soft p-4">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{meal}</p>
                                {recipe ? (
                                    <div className="flex items-center gap-3">
                                        <Image src={recipe.image} alt={recipe.title} className="h-12 w-12 rounded-lg object-cover" loading="lazy" />
                                        <div>
                                            <p className="text-sm font-medium text-card-foreground">{recipe.title}</p>
                                            <p className="text-xs text-muted-foreground">{recipe.calories} cal · {recipe.prepTime} min</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-muted-foreground italic">No meal planned</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Recommended */}
            <section>
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">Recommended Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipes.slice(0, 6).map((r) => (
                        <RecipeCard key={r.id} recipe={r} />
                    ))}
                </div>
            </section>
        </div>
    )
}