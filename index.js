function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return newDrivers
}

function nameToAttributes(drivers) {
  const names = drivers.map(function(driver) {
    return debugger;
    Object.assign({}, driver, {firstName: driver, lastName: driver})})
  return names
}