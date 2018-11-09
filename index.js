function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return newDrivers
}

function nameToAttributes(drivers) {
  const names = drivers.map(function(driver) {return Object.assign({}, driver, {firstName: driver.split(" "), lastName: driver.split(" ")[1]})})
  return console.log(names)
}