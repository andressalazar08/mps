export const formatNumber = (number) => {
    if (number === "" || number === null || number === undefined || isNaN(number)) {
      return "";
    }
    if (typeof number !== 'number') {
      number = parseFloat(number);
    }
    return number.toLocaleString('en-US');
  };