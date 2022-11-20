function valu(val) {
    document.getElementById("input-value").value =
      document.getElementById("input-value").value + val;
  }
  function clr(clr) {
    document.getElementById("input-value").value = "";
  }
  
  function ans() {
    var calc = document.getElementById("input-value").value;
    var result = eval(calc);
    document.getElementById("input-value").value = result;
  }
  