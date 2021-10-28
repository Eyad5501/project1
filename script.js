const button = document.querySelector(".add-btn")
const input = document.querySelector(".input")
const list = document.querySelector(".list")
const textE = document.querySelector(".textE")

button.addEventListener("click", function () {
  const text = input.value
  if (text == "") {
   
    alert("The value is not entered")
  }
  else {

    textE.style.display = 'none'

    const element = document.createElement("div")
    const item = document.createElement("span")

    element.style.border = '1px solid black'
   
    


    element.classList.add("el")
    item.setAttribute("contenteditable", true)
    
    item.innerHTML = text
    

    const removebtn = document.createElement("button")
    removebtn.innerHTML = "Remove"
    removebtn.classList.add("btn")
    removebtn.addEventListener("click", function () {
      element.remove()
    })
    element.append(item)
    element.append(removebtn)
 
   
    item.addEventListener("dblclick", function () {
  
      item.style.color = "wheat"
      item.style.textDecoration = "line-through"  

    })
    list.append(element)

    input.value = "";

  }
})
