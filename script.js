function number(num) {
  if (num.value == "" || num.value == undefined) {
    return true;
  }
  let nomor = num.value;
  let number = /^[0-9]+$/;

  if (nomor.match(number)) {
    return true;
  } else {
    return false;
  }
}

function tes(num) {
  if (num == 1) {
    let e = document.getElementById("num1");
    let c = document.getElementById("ceklis1");
    validation(e, c);
  } else if (num == 2) {
    let e = document.getElementById("num2");
    let c = document.getElementById("ceklis2");
    validation(e, c);
  } else if (num == 3) {
    let e = document.getElementById("num3");
    let c = document.getElementById("ceklis3");
    validation(e, c);
  }
}

function validation(e, c) {
  if (e.value == "") {
    e.style.width = "100%";
    c.style.display = "none";
  } else {
    if (number(e) === true) {
      e.style.width = "calc(100% - 40px)";
      c.style.display = "block";
    } else {
      e.style.width = "100%";
      c.style.display = "none";
    }
  }
}

function count(c) {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let num3 = document.getElementById("num3");
  let htmlResult = document.getElementById("result");
  let result;
  if (num1.value == "" || num2.value == "") {
    alert("Mohon isikan angka pertama dan kedua terlebih dahulu");
  } else {
    if (
      number(num1) === false ||
      number(num2) === false ||
      number(num3) === false
    ) {
      alert("Yang diizinkan hanya angka");
    } else {
      if (num3.value == "" || num3.value == undefined) {
        if (c == 1) {
          result = parseInt(num1.value) + parseInt(num2.value);
        } else if (c == 2) {
          result = parseInt(num1.value) - parseInt(num2.value);
        } else if (c == 3) {
          result = parseInt(num1.value) * parseInt(num2.value);
        } else {
          result = parseInt(num1.value) / parseInt(num2.value);
        }
      } else {
        if (c == 1) {
          result =
            parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value);
        } else if (c == 2) {
          result =
            parseInt(num1.value) - parseInt(num2.value) - parseInt(num3.value);
        } else if (c == 3) {
          result =
            parseInt(num1.value) * parseInt(num2.value) * parseInt(num3.value);
        } else {
          result =
            parseInt(num1.value) / parseInt(num2.value) / parseInt(num3.value);
        }
      }
      htmlResult.innerText = result;
    }
  }
}
