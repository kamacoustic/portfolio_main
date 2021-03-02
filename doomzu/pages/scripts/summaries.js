const chapterSelect = () => {
    let displayElement = document.getElementById("textDisplay")
    let nodelistElement = document.querySelectorAll("li")
    let basePre = document.getElementById("baseDisplay")
    let chapterArray = [...nodelistElement]
    let textElement = document.createElement("p")
    let selectedChapter = document.createElement("h2")
    
    
    basePre.remove()
    

     window.onclick = (e) => {
        const chapterSelect = e.target 

        if(chapterSelect.hasAttribute("onclick")){
            
        const summaryObjectSearch = chapters.find((chapter) => {
        return chapterArray.indexOf(chapterSelect) === chapter.chapterNum
        })

        selectedChapter.innerHTML = e.target.innerHTML
        textElement.innerHTML = summaryObjectSearch.chapterSummary
    
        textElement.classList.add("fade-in")
        selectedChapter.classList.add("fade-in")

        displayElement.appendChild(selectedChapter)
        displayElement.appendChild(textElement)
        }
    }

    

    
    
    
    
}




