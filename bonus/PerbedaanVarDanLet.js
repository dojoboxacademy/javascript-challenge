/* Perbedaannya ada pada scope, apabila var cangkupannya adalah function scope, 
bila berada diluar dari fungsi akan dinyatakan sebagai global objek. 
Berbeda halnya dengan let yang cangkupannya adalah block scope. */

function withVar(){
    var num = 1;
    if(num == 1){
      var num2 = ++num;
    }
    return num2;
  }
  function withLet(){
    let num = 1;
    if(num == 1){
      let num2 = ++num;
    }
    return num2;
  }
  
  console.log("dengan var hasilnya : "+withVar());
  console.log("dengan let hasilnya : "+withLet());