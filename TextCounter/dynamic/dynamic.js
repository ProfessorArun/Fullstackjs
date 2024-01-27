let inputText=document.getElementById("textarea")
let characterCount=document.getElementById("characterCount")
inputText.addEventListener("input",()=>{
    characterCount.textContent=inputText.value.trim("").length
})