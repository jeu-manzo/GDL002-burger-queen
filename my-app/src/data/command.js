const command = [
  {
    created_at: new Date(),
    table: 'Mesa 1',
    emplooye: "name emplooye",
    customerName: '',
    customersCount: 1,
    orders: [
      {
        foodName: "my food name",
        count: 1
      }
    ]
  },
  {
    created_at: new Date(),
    table: 'Mesa 1',
    emplooye: "name emplooye 2",
    customerName: '',
    customersCount: 1,
    orders: [
      {
        foodName: "my food name",
        count: 1
      }
    ]
  }
]

export function getEmplooyeCommand (emplooyeName) {
  const emplooyeCommand = command.filter(command => command.emplooye === emplooyeName)
  return emplooyeCommand
}

export function addCommand (command) {
  return command.push(command)
}


export default command
