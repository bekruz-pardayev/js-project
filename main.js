var son = prompt("To'plagan balingizni kiriting:");

if (son >= 80 && son <= 100) {
  alert("O'qishga grant asosida qabul qilingiz");
}
else if(son >=31 && son <= 79){
    alert("O'qishga kantrakt asosida qabul qilingiz");
}
else if(son >=0 && son <= 30 ){
    alert(" super-kantraktda uqishni hohlaysizmi");
}


else {
  alert("bizda bunday bal sestemasi mavjud emas");
}
