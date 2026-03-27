"use client";

import Link from "next/link";
import { Button } from "./components/ui/button";
import { ChefHat, CalendarCheck, ShoppingCart, Heart, ArrowRight, Sparkles, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../public/assets/hero-recipe.jpg";
import Image from "next/image";

const features = [
  {
    icon: Sparkles,
    title: "Smart Recipe Finder",
    desc: "Discover thousands of recipes filtered by cuisine, diet, and prep time.",
  },
  {
    icon: CalendarCheck,
    title: "Meal Planner",
    desc: "Drag-and-drop weekly meal plans that fit your lifestyle and goals.",
  },
  {
    icon: ShoppingCart,
    title: "Auto Grocery Lists",
    desc: "Generate shopping lists from your meal plan in one click.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    desc: "Bookmark recipes you love and access them anytime, anywhere.",
  },
];

const stats = [
  { value: "10k+", label: "Recipes", icon: ChefHat },
  { value: "50k+", label: "Happy Cooks", icon: Users },
  { value: "5 min", label: "Avg. Plan Time", icon: Clock },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <ChefHat className="h-7 w-7 text-primary" />
            <span className="text-xl font-heading font-bold text-foreground">MealFlow</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#stats" className="hover:text-foreground transition-colors">Community</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col-reverse md:flex-row items-center gap-10 px-4 py-16 md:py-24">
          <motion.div className="flex-1 space-y-6" {...fade()}>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Your kitchen companion ✨
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Plan meals.<br />
              <span className="text-primary">Cook smarter.</span>
            </h1>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Find recipes you'll love, plan your week effortlessly, and auto-generate grocery lists — all in one beautiful app.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/sign-up">
                  Start Free <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/recipes">Browse Recipes</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <Image src={heroImg} alt="Delicious food spread" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl grid grid-cols-3 divide-x divide-border py-10 px-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="flex flex-col items-center gap-1 text-center" {...fade(i * 0.1)}>
              <s.icon className="h-5 w-5 text-primary mb-1" />
              <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div className="text-center mb-12" {...fade()}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Everything you need to eat well
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            From discovering new recipes to planning your entire week — MealFlow has you covered.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl bg-card shadow-card p-6 space-y-3 hover:shadow-elevated transition-shadow"
              {...fade(i * 0.1)}
            >
              <div className="inline-flex rounded-xl bg-primary/10 p-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12" {...fade()}>
            Three steps to better meals
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Find Recipes", desc: "Search by ingredient, cuisine, or dietary preference." },
              { step: "2", title: "Plan Your Week", desc: "Drag recipes into your calendar for a balanced week." },
              { step: "3", title: "Shop & Cook", desc: "Get an auto-generated grocery list and start cooking!" },
            ].map((item, i) => (
              <motion.div key={item.step} className="text-center space-y-3" {...fade(i * 0.15)}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-heading font-bold">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <motion.div
          className="rounded-2xl bg-primary p-10 md:p-16 text-center space-y-5"
          {...fade()}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            Ready to simplify mealtime?
          </h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto">
            Join thousands of home cooks who plan, shop, and eat better with MealFlow.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">
              Get Started — It's Free <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ChefHat className="h-5 w-5 text-primary" />
            <span className="font-heading font-semibold text-foreground">MealFlow</span>
          </div>
          <p>© {new Date().getFullYear()} MealFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
