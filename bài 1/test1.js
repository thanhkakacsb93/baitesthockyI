function NgTo(x) {
  // if (x < 2) return false;
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

var c= document.getElementById(`button_add`);
c.addEventListener(`click`,baitap);
function baitap(){
    var a= document.getElementById(`number-a`).value;
    var SoA = parseInt(a);
    var b= document.getElementById(`number-b`).value;
    var SoB = parseInt(b);
    var d= document.getElementById(`tong`);
    var e= document.getElementById(`list`);
    var f=[];
    var s= 0;
        // var h=0;
    if(a==`` || b==``){
        alert(`chưa nhập a và b`);
    }
    else if (SoA<=1 ||SoB<=1){
        alert(`a và b phải là số nguyên dương lớn hơn 1`);
    }
    else if( SoA==SoB){
        alert(`a và b phải là số nguyên dương khác nhau`);
    }
    else if(SoA>SoB){
        alert(`a phải nhỏ hơn b`);
    }
    else{
      for (let j=SoA; j<=SoB; j++){
        if(NgTo(j)){
          s=s+j;
          f=[...f,j];
        }
      }
      e.innerHTML=`các số nguyên tố giữa ${a} và ${b} là: ${f}`;
      d.innerHTML=`tổng bằng: ${s}`;
    }
  }
