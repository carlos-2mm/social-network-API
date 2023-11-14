// Function to format the date. Date: dd-mm-yyyy
const addZero = number => number < 10 ? `0${number}` : number;

const dateFormat = timestamp => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
  
    return `${day}-${month}-${year}`;
  };
  
  module.exports = dateFormat;