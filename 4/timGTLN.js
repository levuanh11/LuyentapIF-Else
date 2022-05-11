function Check(){
    let a= document.getElementById("numa")
    let b= document.getElementById("numb")
    let c= document.getElementById("numc")
    if (a>b && a>c) {
        alert("a là số lớn nhất")
    }
        else if (b>c) {
            alert("b là số lớn nhất")
        } else {
            alert("c là số lớn nhất")
    }
}