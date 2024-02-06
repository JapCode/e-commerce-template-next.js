const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui-kits" as const,
    featured: [
      {
        name: "Editor picks",
        href: "# ",
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "# ",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "# ",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon picks",
        href: "# ",
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrival",
        href: "# ",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestsellers Icons",
        href: "# ",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];

export default PRODUCT_CATEGORIES;
