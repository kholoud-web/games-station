import type { Category } from "@/types/home-types/category";

export const categories: Category[] = [
  {
    id: "keyboards",
    name: "Keyboards",
    image: "/images/categories/keyboards.webp",
    href: "/products?category=keyboards",
  },
  {
    id: "gaming-mice",
    name: "Gaming Mice",
    image: "/images/categories/gaming-mice.webp",
    href: "/products?category=gaming-mice",
  },
  {
    id: "headphones-audio",
    name: "Headphones & Audio",
    image: "/images/categories/headphones.webp",
    href: "/products?category=headphones-audio",
  },
  {
    id: "monitors",
    name: "Monitors",
    image: "/images/categories/monitors.webp",
    href: "/products?category=monitors",
  },
  {
    id: "controllers",
    name: "Consoles & Controllers",
    image: "/images/categories/controllers.webp",
    href: "/products?category=controllers",
  },
  {
    id: "pc-components",
    name: "PC Components",
    image: "/images/categories/pc-components.webp",
    href: "/products?category=pc-components",
  },
];