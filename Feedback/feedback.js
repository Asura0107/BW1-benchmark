// Star Input
const section = document.querySelectorAll("section")[0]
const starForLoop = () => {
    for (let i = 0; i < 10; i++) {
        let starContainer = document.createElement("div")
        starContainer.classList.add("stella-container")
      
        
      
        starContainer.addEventListener('click', () => {
            starContainer.classList.add(starContainerClicked)
        })
        
        section.appendChild(starContainer)
}

}
starForLoop();



