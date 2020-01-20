function checkPhone(phone){ 
    if(!(/^1[3456789]\d{9}$/.test(phone))){   
        return false; 
    }else{
        return true; 
    }
}
//获取渠道
function getQueryString(param) { //param为要获取的参数名 注:获取不到是为null  
    var currentUrl = window.location.href; //获取当前链接  
    var arr = currentUrl.split("?"); //分割域名和参数界限  
    if (arr.length > 1) {
      arr = arr[1].split("&"); //分割参数 
      for (var i = 0; i < arr.length; i++) {
        var tem = arr[i].split("="); //分割参数名和参数内容  
        // console.log(tem)
        if (tem[0] == param) {
          return tem[1];
        }
      }
      return '';
    } else {
      return '';
    }
  }
  function reqUrl(){
      return "http://192.168.50.163:8800"
  }
  function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}


