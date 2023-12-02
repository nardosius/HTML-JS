const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best Tiramisu in town",
        price: "$5.00", 
    },

    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        price: "$4.50", 
    },
    
    {
        id: "3",
        title: "Chocolate Mousse",
        description: "Unexplored flavour",
        price: "$6.00", 
    },
];

const topDesserts = data.map(dessert => {//map retruns an object from array
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price,
    }
})

console.log(topDesserts);