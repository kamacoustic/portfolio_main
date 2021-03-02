const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []
let initialLoad = true



//Unsplash API
let count = 5
const apiKey = '7efvAH8DWZCG7fBt6lgOqxShuvE4HX-qXY5fPtTP1Ws'
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Check if all images were loaded
function imageLoaded() {
    imagesLoaded++
    if(imagesLoaded === totalImages){
        ready = true
        loader.hidden = true
        initialLoad = false
        count = 30
    }
}


//Helper function to set attributes on dom elements
function setAttributes(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}



//Create elements for links and photos, add to dom
function displayphotos(){
    totalImages = photosArray.length
    imagesLoaded = 0
    //Run function for each object in photosArray
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a')
        
        setAttributes(item, {
            href: photo.links.html, 
            target: '_blank',
        })
        //Create <img> for photo
        const img = document.createElement('img')
        /*img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)*/

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        //Event listener, check when each is finshed loading
        img.addEventListener('load', imageLoaded)
        //Put <img> inside <a> then put both inside imageContainer
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

//Get Photos from Unsplash API
async function getPhotos() {
    try{
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayphotos()
        
    }catch(error){

    }
}

//Check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false
        getPhotos()
    }
})



//On load
getPhotos()