const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(item => item === name || item === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    const letters = drivers.filter(driver => driver.slice(0,name.length) === name)
    return letters
}

function matchName(driver, name) {
    return driver.filter(driver => driver.name === name);
}