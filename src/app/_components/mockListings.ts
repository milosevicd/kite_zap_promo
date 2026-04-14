import type { Dict } from "@/i18n/types";

export type ListingType = keyof Dict["listings"]["types"];
export type ConditionKey = keyof Dict["listings"]["conditions"];

export type MockListing = {
  id: string;
  type: ListingType;
  brand: string;
  model: string;
  year: number;
  price: number;
  condition: ConditionKey;
  location: string;
  image: string;
};

export const MOCK_LISTINGS: MockListing[] = [
  {
    id: "1",
    type: "kite",
    brand: "Duotone",
    model: "Evo 10m",
    year: 2023,
    price: 950,
    condition: "excellent",
    location: "Cascais",
    image: "/images/duotone-kite.png",
  },
  {
    id: "2",
    type: "bar",
    brand: "North",
    model: "Navigator",
    year: 2022,
    price: 280,
    condition: "good",
    location: "Lisboa",
    image: "/images/north-bar.png",
  },
  {
    id: "3",
    type: "board",
    brand: "Core",
    model: "Fusion 4",
    year: 2024,
    price: 620,
    condition: "new",
    location: "Guincho",
    image: "/images/twin-tip-board.png",
  },
  {
    id: "4",
    type: "harness",
    brand: "Mystic",
    model: "Stealth",
    year: 2023,
    price: 180,
    condition: "good",
    location: "Viana do Castelo",
    image: "/images/harness.jpg",
  },
];
