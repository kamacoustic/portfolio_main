

const chSelect = () => {
    let chA = document.getElementById("cArea")
    //Will collect character images into an HTML Collection
    const portraits= document.getElementsByClassName("character")
    //Convert HTML Collection into an array
    const porArray = [...portraits]

    let nameElement = document.createElement("h2")
    let bioElement =  document.createElement("p")
    let backElement = document.createElement("a")
       
    //Toogle/Add .fade-out as a class to all portraits in array in order to have them fade out
    porArray.forEach((portrait) => {    
        portrait.classList.toggle("fade-out", true)       
    })
    //Toggle .fade-out to h3 elements 
    const characterHeadings = document.querySelectorAll("h3")
  
    characterHeadings.forEach((heading) => {
        heading.classList.toggle("fade-out", true)
    })


    window.onclick = (e) => {
        const characterSelected = e.target
        //Ensures that only characters are clickable to trigger automatic bio
        if(characterSelected.classList.contains("character")){
        //Removes original clickable element from display area
            characterSelected.classList.remove("fade-out", "character")
        //Applies new CSS style to clicked character element
            characterSelected.classList.add("fade-in") 
        /*Essentially wires up each character image to their respective 
        bio information in cbiosdata object array*/
            const characterArrayObject = characters.find((character) => {
            return characterSelected.alt === character.cName
            })
        //Essentially wires created html dom elements to cbios data
            nameElement.innerHTML = characterArrayObject.cName
            bioElement.innerHTML = characterArrayObject.cBio
        //Sets created button text 
            backElement.innerHTML = `Back to Characters`
        //Makes sure everything renders in with set fade-in effects
            nameElement.classList.add("fade-in2")
            bioElement.classList.add("fade-in3")
            backElement.classList.add("fade-in2")
            backElement.classList.add("button") 
        //Sets created button element to actually function
            backElement.href = "cbios.html"

        //Renders elements to the actual html page
            chA.appendChild(nameElement)
            chA.appendChild(bioElement)
            chA.appendChild(backElement)

        }
    }


}































