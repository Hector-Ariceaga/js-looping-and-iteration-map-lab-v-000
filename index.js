function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {return driver.toLowerCase()})
  return newDrivers
}

function nameToAttributes(drivers) {
  const names = drivers.map(function(driver) {
    const splitFirstName = driver.split(" ")[0]
    const splitLastName = driver.split(" ")[1]
    return Object.assign(driver, {firstName: splitFirstName, lastName: splitLastName})})
  return names
}