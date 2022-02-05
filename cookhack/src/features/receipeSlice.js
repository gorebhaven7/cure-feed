import { createSlice } from "@reduxjs/toolkit";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/celery_juice.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/chickenpizza.jpg";
import image6 from "../assets/garlic_bread.jpg";
import data from "../App";
import dishModal from "../components/dishModal";
const initialState = {
  receipeDb: [
    {
      name: "Celery Juice",
      image: image3,
      description: "Best Celery Juice Ever!!!!",
    },
    {
      name: "Spinach Pasta",
      image: image4,
      description: "Spniach Pasta",
    },
    {
      name: "Chicken Pizza",
      image: image5,
      description: "Chicken Pizza",
    },
    {
      name: "Garlic Bread",
      image: image6,
      description: "Garlic Bread",
    },
    {
      name: "Spicy Tomato Soup",
      image: image2,
      description: "Spicy Tomato",
    },
    {
      name: "Greek Salad",
      image: image1,
      description: "Greek Salad",
    },
    {
      name: "Spicy Roasted Tomato Sauce",
      image: image4,
      description: "Spicy Roasted Tomato Sauce",
    },
    {
      name: "Arepas",
      image: image4,
      description: "Arepas",
    },
    {
      name: "Spiced Eggplant Indian Style",
      image: image4,
      description: "Spiced Eggplant Indian Style",
    },
    {
      name: "Indian Style Macoroni",
      image: image4,
      description: "Indian Style Macoroni",
    },
  ],
  menu: [
    {
      name: "Celery Juice",
      image: image3,
    },
    {
      name: "Spinach Pasta",
      image: image4,
    },
    {
      name: "Chicken Pizza",
      image: image5,
    },
    {
      name: "Blueberry Smoothies",
      image: image6,
    },
  ],
  cookingReceipe: {
    name: "Celery Juice",
    image: image3,
    instructions: "1. Wash the celeries with tap water 2. Blend/Grind it in the blender or mixer 3. Strain it 4. Drink it without adding any water",
  },
  inventory: ["Celery", "Water","Strawberries"],
  ingredients: ["Celery","Water","Blueberries","Banana","Milk","Coffee","Sugar","Wheat","Pasta","Spinach"],
  cookingReceipe: { ingredients: ["Celery","Water"], steps: ["1. Wash the celeries with tap water", "2. Blend/Grind it in the blender or mixer", "3. Strain it", "4. Drink it without adding any water"] },
};

const receipeSlice = createSlice({
  name: "receipe",
  initialState,

  reducers: {
    setReceipeDb: (state, action) => {
      state.receipeDb = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setCookingReceipe: (state, action) => {
      console.log(action.payload);
      state.cookingReceipe = action.payload;
    },
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setCookingReceipe: (state, action) => {
      state.cookingReceipe = action.payload;
    },
  },
});

export const { setReceipeDb, setMenu, setCookingReceipe, setInventory, setIngredients } =
  receipeSlice.actions;

export const selectReceipeDb = (state) => state.receipe.receipeDb;
export const selectMenu = (state) => state.receipe.menu;
export const selectCookingReceipe = (state) => state.receipe.cookingReceipe;
export const selectInventory = (state) => state.receipe.inventory;
export const selectIngredients = (state) => state.receipe.ingredients;
export default receipeSlice.reducer;
