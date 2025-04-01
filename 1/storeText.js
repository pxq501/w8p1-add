document.getElementById("textInput").addEventListener("input", function (event) {
    sessionStorage.setItem("text", document.getElementById("textInput").value)
})