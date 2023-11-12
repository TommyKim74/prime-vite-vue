export default {
  alert(msg) {
    alert(msg);
  },
  lpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        //console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str;
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
  },
  rpad(str, padLen, padStr) {
    if (padStr.length > padLen) {
        //console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
        return str + "";
    }
    str += ""; // 문자로
    padStr += ""; // 문자로
    while (str.length < padLen)
        str += padStr;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
  },  
  today() {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    return  year + '/' + this.lpad(month, 2, '0') + '/' + date;
  },
  dateToString(pDate) {
    let year = pDate.getFullYear(); // 년도
    let month = pDate.getMonth() + 1;  // 월
    let date = pDate.getDate();  // 날짜
    return year + '-' + this.lpad(month, 2, '0') + '-' + this.lpad(date, 2, '0');
  },
  //월의 시작일과 종료일 조회
  startAndEndDate(addMonth = 1){
    const today = new Date();
    const calMonth = new Date(today.getFullYear(), today.getMonth() + addMonth, 0);
    const monthStart = new Date(calMonth.getFullYear(), calMonth.getMonth(), 1);
    const monthEnd = new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 0);

    return {start : monthStart, end : monthEnd};
  },
  //월의 일자 생성
  getDaysInMonth(year, month) {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      daysInMonth[1]++;
    }
    return daysInMonth[month - 1];
  },
  //랜덤 숫자 생성
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  //단어 첫글자 대문자 변환
  capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
  }, removeDuplicates(array) {
    const unique = new Set(array);
    return [...unique];
  }
}