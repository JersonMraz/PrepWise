"use client";
import { Clock, Flame, Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type { Recipe } from "../data/recipes";
import Image from "next/image";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [saved, setSaved] = useState(recipe.saved ?? false);

  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group block rounded-2xl bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved(!saved);
          }}
          className="absolute top-3 right-3 rounded-full bg-card/80 backdrop-blur-sm p-2 transition-colors hover:bg-card"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${saved ? "fill-accent text-accent" : "text-muted-foreground"}`}
          />
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-heading font-semibold text-card-foreground leading-tight">{recipe.title}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {recipe.calories} cal
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {recipe.prepTime} min
          </span>
          <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
            {recipe.cuisine}
          </span>
        </div>
      </div>
    </Link>
  );
}
