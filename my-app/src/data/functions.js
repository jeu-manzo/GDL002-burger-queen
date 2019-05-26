import menu from '../data/menu'

function getMealClassName(time, bothTimes, types) {
  const mealTime = menu.filter(meal => meal.mealTime === time || meal.mealTime === bothTimes)
  const mealType = mealTime.filter(type => type.type === types)
  const mealClass = mealType.map(meal => meal.class)
  const classIndex = mealClass[0];
  const classType = classIndex.map(index => index.className)
  return classType
}


function testing(time, both, types) {
  const mealTime = menu.filter(meal => meal.mealTime === time || meal.mealTime === both)
  const mealType = mealTime.filter(type => type.type === types)
  const mealClass = mealType.map(meal => meal.class)
  const classIndex = mealClass[0];
  const className = classIndex.filter(name => name.className === "Chilaquiles")
  const classType = className.map(type => type.classType)
  const classTypeIndex = classType[0]
  return classTypeIndex
}





console.log(testing("Desayuno", "Ambos", "Alimento"));




export default getMealClassName
