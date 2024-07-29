const numbersToWords = [
    'zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen', 'twenty'
  ];
  
  const tensToWords = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty'
  ];
  
  function timeWord(time) {
    const [hour, minute] = time.split(':').map(Number);
  
    let hourWord = '';
    let minuteWord = '';
  
    // convert hour
    if (hour === 0) {
      hourWord = 'midnight';
    } else if (hour === 12) {
      hourWord = 'noon';
    } else if (hour > 12) {
      hourWord = numbersToWords[hour - 12];
    } else {
      hourWord = numbersToWords[hour];
    }
  
    // convert minutes
    if (minute === 0) {
      minuteWord = hour === 0 || hour === 12 ? '' : 'o\'clock';
    } else if (minute < 20) {
      minuteWord = numbersToWords[minute];
    } else {
      const tenPart = Math.floor(minute / 10);
      const unitPart = minute % 10;
      minuteWord = tensToWords[tenPart] + (unitPart ? ' ' + numbersToWords[unitPart] : '');
    }
  
    //add the word "oh"
    if (minute > 0 && minute < 10) {
        minuteWord = 'oh ' + numbersToWords[minute];
      }
      
    // add AM and PM
    const period = hour >= 12 ? 'pm' : 'am';
  
    return (hourWord === 'midnight' || hourWord === 'noon' ? hourWord : hourWord + (minute === 0 ? '' : ' ' + minuteWord)) + ' ' + period;
  }
  
  module.exports = timeWord;