const myValue = sessionStorage.getItem("text");
if (myValue != null) {
    document.getElementById("para1").innerHTML = myValue;
}