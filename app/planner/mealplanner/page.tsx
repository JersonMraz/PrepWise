"use client";

import { recipes, mealPlan } from "../../data/recipes";
import { Plus } from "lucide-react";
import Image from "next/image";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const meals = ["breakfast", "lunch", "dinner"] as const;

export default function MealPlanner() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h1 className="text-2xl font-heading font-bold text-foreground">Meal Planner</h1>
                <p className="text-sm text-muted-foreground mt-1">Plan your meals for the week</p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
                <div className="min-w-[700px] grid grid-cols-7 gap-2">
                    {days.map((day) => (
                        <div key={day} className="space-y-2">
                            <div className="text-center">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{day}</p>
                            </div>
                            {meals.map((meal) => {
                                const recipeId = mealPlan[day]?.[meal];
                                const recipe = recipeId ? recipes.find((r) => r.id === recipeId) : null;
                                return (
                                    <div
                                        key={meal}
                                        className="rounded-xl bg-card shadow-soft p-2 min-h-[90px] flex flex-col"
                                    >
                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{meal}</p>
                                        {recipe ? (
                                            <div className="flex-1 flex flex-col">
                                                <Image
                                                    src={recipe.image}
                                                    alt={recipe.title}
                                                    className="rounded-lg h-14 w-full object-cover"
                                                    loading="lazy"
                                                />
                                                <p className="text-[11px] font-medium text-card-foreground mt-1 leading-tight line-clamp-2">
                                                    {recipe.title}
                                                </p>
                                            </div>
                                        ) : (
                                            <button className="flex-1 flex items-center justify-center rounded-lg border border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-colors">
                                                <Plus className="h-4 w-4 text-muted-foreground" />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
