export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  badge?: string;
  gradient: string;
  icon: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Quantum Pro Headphones",
    description:
      "Experience sound like never before with our flagship noise-cancelling headphones. Featuring 40mm drivers, 30-hour battery life, and adaptive ANC technology that adjusts to your environment in real-time.",
    price: 349.99,
    category: "Audio",
    badge: "Best Seller",
    gradient: "from-violet-600 to-indigo-600",
    icon: "🎧",
  },
  {
    id: 2,
    title: "NovaSkin Smart Watch",
    description:
      "A smartwatch that goes beyond fitness tracking. Built-in ECG, SpO2 monitoring, GPS, and a stunning AMOLED display with always-on mode. Water-resistant up to 50m.",
    price: 499.99,
    category: "Wearables",
    badge: "New",
    gradient: "from-emerald-500 to-teal-600",
    icon: "⌚",
  },
  {
    id: 3,
    title: "Arc Mechanical Keyboard",
    description:
      "A premium 75% layout mechanical keyboard with hot-swappable switches, per-key RGB, and aluminum construction. Compatible with all major operating systems. Includes USB-C braided cable.",
    price: 189.99,
    category: "Peripherals",
    gradient: "from-orange-500 to-rose-600",
    icon: "⌨️",
  },
  {
    id: 4,
    title: "Lumis 4K Monitor",
    description:
      "A 27-inch 4K IPS monitor with 144Hz refresh rate, HDR600 support, and 99% DCI-P3 color coverage. Perfect for creators and gamers alike. USB-C, HDMI 2.1, and DisplayPort 1.4 inputs.",
    price: 799.99,
    category: "Displays",
    badge: "Editor's Choice",
    gradient: "from-sky-500 to-blue-700",
    icon: "🖥️",
  },
  {
    id: 5,
    title: "ZeroG Ergonomic Chair",
    description:
      "Engineered for all-day comfort with lumbar support, 4D armrests, and a breathable mesh back. Supports up to 150kg and is fully adjustable to fit any body type.",
    price: 649.99,
    category: "Furniture",
    gradient: "from-pink-500 to-fuchsia-700",
    icon: "🪑",
  },
  {
    id: 6,
    title: "FluxPad Ultra Drawing Tablet",
    description:
      "A professional-grade drawing tablet with 8192 levels of pressure sensitivity, tilt support, and a textured surface that mimics paper. Includes the SlimPen stylus with no charging required.",
    price: 279.99,
    category: "Creative",
    badge: "Pro Pick",
    gradient: "from-yellow-400 to-orange-600",
    icon: "🖊️",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
