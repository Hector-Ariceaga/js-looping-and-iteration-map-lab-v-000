function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return newDrivers
}

function nameToAttributes(drivers) {
  const names = drivers.map(function(driver) {
    return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]})})
  return names
}

function attributesToPhrase(drivers) {
  const phrases = drivers.map(function(driver) { 
    return `${driver.name} is from ${driver.hometown}`
  })
  return phrases
}