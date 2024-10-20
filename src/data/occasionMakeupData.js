// data/occasionMakeupData.js
const occasionMakeupData = [
    {
        occasion: "Party Look",
        products: [
            {
                productName: "Foundation",
                brand: "Brand A",
                shade: "Medium",
                price: 1200,
                alternative: { productName: "Foundation", brand: "Brand B", price: 1300 },
            },
            {
                productName: "Lipstick",
                brand: "Brand B",
                shade: "Shade 02",
                price: 500,
                alternative: { productName: "Lipstick", brand: "Brand A", price: 550 },
            },
            {
                productName: "Eyeshadow",
                brand: "Brand B",
                shade: "Smoky",
                price: 1000,
                alternative: { productName: "Eyeshadow", brand: "Brand A", price: 900 },
            },
        ],
        totalCost: 2700,
    },
    {
        occasion: "Casual Day Out",
        products: [
            {
                productName: "Foundation",
                brand: "Brand B",
                shade: "Fair",
                price: 1300,
                alternative: { productName: "Foundation", brand: "Brand A", price: 1200 },
            },
            {
                productName: "Blush",
                brand: "Brand A",
                shade: "Peach",
                price: 700,
                alternative: { productName: "Blush", brand: "Brand B", price: 750 },
            },
            {
                productName: "Lipstick",
                brand: "Brand A",
                shade: "Shade 01",
                price: 500,
                alternative: { productName: "Lipstick", brand: "Brand B", price: 550 },
            },
        ],
        totalCost: 2500,
    },
    // Add more occasion looks here
];

export default occasionMakeupData;
