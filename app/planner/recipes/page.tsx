"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { RecipeCard } from "../../components/RecipeCard";
import { recipes } from "../../data/recipes";

const diets = ["All", "Vegetarian", "Vegan", "Keto", "Gluten-Free"];
const cuisines = ["All", "Mediterranean", "Italian", "American", "Thai", "Mexican"];

export default function RecipeFinder() {
    const [query, setQuery] = useState("");
    const [diet, setDiet] = useState("All");
    const [cuisine, setCuisine] = useState("All");
    const [showFilters, setShowFilters] = useState(false);

    const filtered = useMemo(() => {
        return recipes.filter((r) => {
            const matchesQuery =
                !query ||
                r.title.toLowerCase().includes(query.toLowerCase()) ||
                r.ingredients.some((i) => i.toLowerCase().includes(query.toLowerCase()));
            const matchesDiet = diet === "All" || r.diet === diet;
            const matchesCuisine = cuisine === "All" || r.cuisine === cuisine;
            return matchesQuery && matchesDiet && matchesCuisine;
        });
    }, [query, diet, cuisine]);

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h1 className="text-2xl font-heading font-bold text-foreground">Recipe Finder</h1>
                <p className="text-sm text-muted-foreground mt-1">Search by name or ingredients</p>
            </div>

            {/* Search bar */}
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search recipes by name or ingredient..."
                        className="w-full rounded-xl border border-input bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 shadow-soft"
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`rounded-xl border border-input px-4 transition-colors ${showFilters ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-secondary"}`}
                >
                    <SlidersHorizontal className="h-5 w-5" />
                </button>
            </div>

            {/* Filters */}
            {showFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-card shadow-soft p-4">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Diet Type</p>
                        <div className="flex flex-wrap gap-2">
                            {diets.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setDiet(d)}
                                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${diet === d ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        }`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Cuisine</p>
                        <div className="flex flex-wrap gap-2">
                            {cuisines.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setCuisine(c)}
                                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${cuisine === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((r) => (
                    <RecipeCard key={r.id} recipe={r} />
                ))}
            </div>
            {filtered.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No recipes found. Try a different search!</p>
            )}
        </div>
    );
}
