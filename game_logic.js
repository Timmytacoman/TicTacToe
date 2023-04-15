const cells = Array.from(document.querySelectorAll(".cell"))
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")


restartBtn.addEventListener("click", test)



for (const cell of cells){
    cell.addEventListener("click", test)
}


function test() {


    console.log("hi")

}