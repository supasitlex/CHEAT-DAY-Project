function setTarget(){
    const value = prompt("How many days before Chest Day", 0)
    const setValue =  parseInt(value)
    document.getElementById("Value").innerHTML = setValue 
}
var count = 0
function SavePoint(){ 
    var result = parseInt(document.getElementById("Value").innerHTML)
    if(count < result){
        count = count + 1
        document.getElementById("savepoint").innerHTML += ">> สะสมแต้มวันที่ " + count + " สำเร็จ << <br>"
    }
    if(count==result){
        document.getElementById("finish").innerHTML = "Finish คุณทำสำเร็จแล้ววันนี้กิน Cheat Day กัน"
    }
}

