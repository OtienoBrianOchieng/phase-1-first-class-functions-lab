// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(number) {
    return function fareMultiplier () {
        return 5*5;
    }
}
function fareDoubler(number ="10") {
    return number*2
}

function fareTripler (number = "12") {
    return number*3
}

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }