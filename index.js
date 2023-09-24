// Code your solution in this file!
// Declare returnFirstTwoDrivers with const and assign an anonymous function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Declare returnLastTwoDrivers with const and assign an anonymous function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define selectingDrivers as an array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define createFareMultiplier that returns a function to multiply fares
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Declare fareDoubler with const and assign a function returned by createFareMultiplier(2)
  const fareDoubler = createFareMultiplier(2);
  
  // Declare fareTripler with const and assign a function returned by createFareMultiplier(3)
  const fareTripler = createFareMultiplier(3);
  
  // Define selectDifferentDrivers function
  function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers);
  }
  
  // Example usage:
  const drivers = ["Alice", "Bob", "Charlie", "David", "Eve"];
  console.log(returnFirstTwoDrivers(drivers)); // Output: ["Alice", "Bob"]
  console.log(returnLastTwoDrivers(drivers));  // Output: ["David", "Eve"]
  console.log(selectingDrivers[0](drivers));    // Output: ["Alice", "Bob"]
  console.log(selectingDrivers[1](drivers));    // Output: ["David", "Eve"]
  console.log(fareDoubler(10));                // Output: 20
  console.log(fareTripler(10));                // Output: 30
  
