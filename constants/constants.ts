const arabian = require("@/assets/images/arabian.jpeg");
const burger = require("@/assets/images/burger.jpeg");
const breakfast = require("@/assets/images/download.jpeg");
const chicken = require("@/assets/images/chicken.jpeg");
const chineeese = require("@/assets/images/chineese.jpeg");
const seafood = require("@/assets/images/seafood.jpeg");
const coffee = require("@/assets/images/coffee.jpeg");
const deseerts = require("@/assets/images/deseerts.jpeg");
const habeshan = require("@/assets/images/habeshan.jpeg");
const icecream = require("@/assets/images/icecream.jpeg");
const indian = require("@/assets/images/indian.jpeg");
const italian = require("@/assets/images/italian.jpeg");
const lunch = require("@/assets/images/lunch.jpeg");
const mexican = require("@/assets/images/mexican.jpeg");
const pasta = require("@/assets/images/pasta.jpeg");
const pizza = require("@/assets/images/pizza.jpeg");
const salad = require("@/assets/images/salad.jpeg");
const shakes = require("@/assets/images/shakes.jpeg");
const soup = require("@/assets/images/soup.jpeg");
const sushi = require("@/assets/images/sushi.jpeg");
const steak = require("@/assets/images/steak.jpeg");
const dinner = require("@/assets/images/dinner.jpeg");

export const cafes = [];

interface mealTypesInterface {
  name: string;
  img: any;
}
export const mealTypes: mealTypesInterface[] = [
  { name: "Breakfast", img: breakfast },
  { name: "Lunch", img: lunch },
  { name: "Dinner", img: dinner },
  { name: "Pizza", img: pizza },
  { name: "Burger", img: burger },
  { name: "Chicken", img: chicken },
  { name: "Habeshan", img: habeshan },
  { name: "Arabian", img: arabian },
  { name: "Shakes and Juice", img: shakes },
  { name: "Desserts", img: deseerts },
  { name: "Seafood", img: seafood },
  { name: "Pasta", img: pasta },
  { name: "Steak", img: steak },
  { name: "Salads", img: salad },
  { name: "Soups", img: soup },
  { name: "Indian", img: indian },
  { name: "Chinese", img: chineeese },
  { name: "Mexican", img: mexican },
  { name: "Italian", img: italian },
  { name: "Sushi", img: sushi },
  { name: "Ice Cream", img: icecream },
  { name: "Coffee and Tea", img: coffee },
];

interface CaffesNearMeInterface {
  name: string;
  img?: any;
  minutes: number;
  distance: string;
  deliveryFee: string;
}

export const cafesNearMe: CaffesNearMeInterface[] = [
  {
    name: "Amrogn Chicken",
    minutes: 25,
    distance: "3.2 km",
    deliveryFee: "$3.50",
    img: require("@/assets/images/Amrogn logo.png"),
  },
  {
    name: "Ako Coffee",
    minutes: 15,
    distance: "1.5 km",
    deliveryFee: "$1.50",
    img: require("@/assets/images/Akko.png"),
  },
  {
    name: "Majet Foods",
    minutes: 30,
    distance: "4.8 km",
    deliveryFee: "$4.00",
    img: require("@/assets/images/maget.jpg"),
  },
  {
    name: "Cocun Shake",
    minutes: 20,
    distance: "2.0 km",
    deliveryFee: "$2.00",
    img: require("@/assets/images/Cocoon.jpg"),
  },
  {
    name: "Mama's Kitchen",
    minutes: 35,
    distance: "5.5 km",
    deliveryFee: "$5.00",
    img: require("@/assets/images/Mamas Kitchen.jpg"),
  },
  {
    name: "Wow Burger",
    minutes: 18,
    distance: "2.7 km",
    deliveryFee: "$2.50",
    img: require("@/assets/images/Wow burger.jpg"),
  },
];

interface Menu {
  name: string;
  ingredients: string[];
  image: string;
  price: number;
  type?: string;
}

interface RestaurantsInterface {
  name: string;
  img?: any;
  minutes: number;
  distance: string;
  deliveryFee: string;
  menu: Menu[];
}

export const Restaurants: RestaurantsInterface[] = [
  {
    name: "Majete Restaurant",
    img: require("@/assets/images/maget.jpg"),
    minutes: 25,
    distance: "3.0 km",
    deliveryFee: "$3.50",
    menu: [
      {
        name: "Doro Wat",
        ingredients: [
          "Chicken",
          "Berbere",
          "Niter Kibbeh",
          "Onions",
          "Garlic",
          "Eggs",
        ],
        image: require("@/assets/images/habeshan.jpeg"),
        price: 500.0,
        type: "Lunch",
      },
      {
        name: "Tibs",
        ingredients: ["Beef", "Onions", "Tomatoes", "Jalapeño", "Spices"],
        image: require("@/assets/images/tibs.jpg"),
        price: 450,
        type: "Lunch",
      },
      {
        name: "Kitfo",
        ingredients: ["Raw Beef", "Niter Kibbeh", "Mitmita", "Cheese"],
        image: require("@/assets/images/kitfo.jpg"),
        price: 900,
        type: "Breakfast",
      },
    ],
  },
  {
    name: "Cocun Shakes & Burgers",
    img: require("@/assets/images/Cocoon.jpg"),
    minutes: 20,
    distance: "2.5 km",
    deliveryFee: "$2.50",
    menu: [
      {
        name: "Coconut Shake",
        ingredients: ["Coconut Milk", "Ice Cream", "Sugar", "Ice"],
        image: require("@/assets/images/shakes.jpeg"),
        price: 150,
        type: "Dessert",
      },
      {
        name: "Beef Burger",
        ingredients: [
          "Beef Patty",
          "Lettuce",
          "Cheese",
          "Tomato",
          "Burger Bun",
        ],
        image: require("@/assets/images/burger.jpeg"),
        price: 7.5,
        type: "Breakfast",
      },
      {
        name: "Fries",
        ingredients: ["Potatoes", "Salt", "Vegetable Oil"],
        image: require("@/assets/images/chips.jpg"),
        price: 3.0,
        type: "Breakfast",
      },
    ],
  },
  {
    name: "Mama's Kitchen",
    img: require("@/assets/images/Mamas Kitchen.jpg"),
    minutes: 30,
    distance: "4.0 km",
    deliveryFee: "$4.00",
    menu: [
      {
        name: "Spaghetti",
        ingredients: ["Pasta", "Tomato Sauce", "Parmesan", "Ground Beef"],
        image: require("@/assets/images/pasta.jpeg"),
        price: 390,
        type: "Dinner",
      },
      {
        name: "Lasagna",
        ingredients: [
          "Lasagna Sheets",
          "Ricotta Cheese",
          "Ground Beef",
          "Tomato Sauce",
        ],
        image: require("@/assets/images/lasagna.jpg"),
        price: 600,
        type: "Dinner",
      },
      {
        name: "Garlic Bread",
        ingredients: ["Bread", "Garlic", "Butter", "Parsley"],
        image: require("@/assets/images/garlic.jpg"),
        price: 140,
        type: "Dessert",
      },
    ],
  },
  {
    name: "Wow Burger",
    img: require("@/assets/images/Wow burger.jpg"),
    minutes: 18,
    distance: "2.7 km",
    deliveryFee: "$2.50",
    menu: [
      {
        name: "Double Cheeseburger",
        ingredients: [
          "Beef Patties",
          "Cheese",
          "Lettuce",
          "Tomato",
          "Burger Bun",
        ],
        image: require("@/assets/images/burger.jpeg"),
        price: 350,
        type: "Breakfast",
      },
      {
        name: "Chicken Nuggets",
        ingredients: ["Chicken Breast", "Bread Crumbs", "Egg", "Spices"],
        image: require("@/assets/images/nuggets.jpg"),
        price: 660,
        type: "Lunch",
      },
      {
        name: "Chocolate Milkshake",
        ingredients: ["Milk", "Cocoa Powder", "Sugar", "Ice Cream"],
        image: require("@/assets/images/chokoShake.jpg"),
        price: 140,
        type: "Dessert",
      },
    ],
  },
  {
    name: "Ako Coffee & Pastries",
    img: require("@/assets/images/Akko.png"),
    minutes: 15,
    distance: "1.5 km",
    deliveryFee: "$1.50",
    menu: [
      {
        name: "Macchiato",
        ingredients: ["Espresso", "Milk", "Sugar"],
        image: require("@/assets/images/machiato.jpeg"),
        price: 35,
        type: "Hot Drinks",
      },
      {
        name: "Croissant",
        ingredients: ["Flour", "Butter", "Yeast", "Milk"],
        image: require("@/assets/images/cros.jpeg"),
        price: 120,
        type: "Breakfast",
      },
      {
        name: "Chocolate Cake",
        ingredients: ["Flour", "Cocoa", "Eggs", "Butter", "Sugar"],
        image: require("@/assets/images/chocolateCake.jpg"),
        price: 4.5,
        type: "Dessert",
      },
    ],
  },
];

interface Order {
  status: "Pending" | "In Progress" | "Delivered" | "Cancelled";
  totalPrice: number;
  foodsDelivered: string[];
  transactionId: string;
  totalEstimateTime: string;
  orderDate: string;
  deliveryAddress: string;
}

export const orders: Order[] = [
  {
    status: "Delivered",
    totalPrice: 25.99,
    foodsDelivered: ["Shiro", "Doro Wat", "Injera"],
    transactionId: "TXN123456",
    totalEstimateTime: "45 minutes",
    orderDate: "2024-11-23",
    deliveryAddress: "Addis Ababa, Ethiopia",
  },
  {
    status: "Pending",
    totalPrice: 15.5,
    foodsDelivered: ["Burger", "Fries"],
    transactionId: "TXN789101",
    totalEstimateTime: "30 minutes",
    orderDate: "2024-11-24",
    deliveryAddress: "Bole, Addis Ababa, Ethiopia",
  },
  {
    status: "In Progress",
    totalPrice: 40.0,
    foodsDelivered: ["Pizza", "Garlic Bread"],
    transactionId: "TXN111213",
    totalEstimateTime: "1 hour",
    orderDate: "2024-11-24",
    deliveryAddress: "Kazanchis, Addis Ababa, Ethiopia",
  },
];
