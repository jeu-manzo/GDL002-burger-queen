import menu from '../data/menu'

function getMealClassName(time, bothTimes, types) {
  const mealTime = menu.filter(timeMeal => timeMeal.hour === time || timeMeal.hour === bothTimes)
  const mealType = mealTime.filter(typeMeal => typeMeal.type === types)
  const mealsName = mealType.map((meal) => meal.class)
  const mealsNameUnique = mealsName.filter((item, index) => mealsName.indexOf(item) >= index )
  return mealsNameUnique
}


function getMealsName(meal) {
  const mealClass = menu.filter(classMeal => classMeal.class === meal)
  const mealName = mealClass.map(nameMeal => nameMeal.name)
  return mealName
}


const breakFastFood = getMealClassName("Desayuno", "Ambos", "Alimento");
const breakFastDrinks = getMealClassName("Desayuno", "Ambos", "Bebidas");
const breakFastDesserts = getMealClassName("Desayuno", "Ambos", "Postres");
const lunchFood = getMealClassName("Comida", "Ambos", "Alimento");
const lunchDrinks = getMealClassName("Comida", "Ambos", "Bebidas");
const lunchDesserts = getMealClassName("Comida", "Ambos", "Postres");




export default {
  getMealsName,
  breakFastFood,
  breakFastDrinks,
  breakFastDesserts,
  lunchFood,
  lunchDrinks,
  lunchDesserts
}
