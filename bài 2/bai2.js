var btn=document.getElementById(`btn`);
btn.addEventListener(`click`, tamgiac);
function tamgiac(){
    var a=document.getElementById(`number`).value;
    var num=parseInt(a);
    var table=document.getElementById(`tabale`);
    var arr = [];
    if(a==``){
        alert(`điền số liệu`);
    }
    else if(num<=0){
        alert(`sổ điền vào phải lớn hơn 0`);
    }
    else{
        for (let i = 0; i < num; i++) {
            var row = document.createElement(`tr`);
            arr.push([]);
            for (let j = 0; j <= i; j++) {
                var colm = document.createElement(`td`);
                arr[i].push(`*`);
                var texcell=document.createTextNode(arr[i][j])
                colm.appendChild( texcell);
                row.appendChild(colm);
            }
            table.appendChild(row);
        }
    }   
}




