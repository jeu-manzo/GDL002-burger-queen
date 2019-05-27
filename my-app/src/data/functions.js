import menu from '../data/menu'

function getMealClassName(time, bothTimes, types) {
  const mealTime = menu.filter(meal => meal.mealTime === time || meal.mealTime === bothTimes)
  const mealType = mealTime.filter(type => type.type === types)
  const mealClass = mealType.map(meal => meal.class)
  const classIndex = mealClass[0];
  const classType = classIndex.map(index => index.className)
  return classType
}



function compareMeals(time, both, types, classMeal) {
  const mealTime = menu.filter(meal => meal.mealTime === time || meal.mealTime === both)
  const mealType = mealTime.filter(type => type.type === types)
  const mealClass = mealType.map(meal => meal.class)
  const classIndex = mealClass[0];
  const className = classIndex.filter(name => name.className === classMeal)
  const classType = className.map(type => type.classType)
  const classTypeIndex = classType[0]
  return classTypeIndex
}

const prueba = getMealClassName("Desayuno", "Ambos", "Alimento")

function getMealsName(time, both, types, classMeal){
  const arrayMeals = classMeal.map((meals) => compareMeals(time, both, types, meals))
  const arrayNameMeals = arrayMeals.map((x) => x.map((y) => y.name))
  return arrayNameMeals;
}


console.log(getMealsName("Desayuno", "Ambos", "Alimento", prueba));



export default { getMealClassName, getMealsName }
