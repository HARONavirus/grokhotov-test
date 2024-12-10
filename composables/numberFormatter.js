export function formatNumberWithSpaces(number) {
    if (isNaN(number) || number === null || number === undefined) {
      return '';
    }
  
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }