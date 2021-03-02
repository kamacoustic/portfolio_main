// const anime = require("anime.min.js")


// // Wrap every letter in a span
// var textWrapper = document.querySelector(".ml12");
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: ".ml12 .letter",
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i
//   }).add({
//     targets: ".ml12 .letter",
//     translateX: [0,-30],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: (el, i) => 100 + 30 * i
//   });



// function loaded () {    
//     const galleryVids = document.getElementsByTagName("video")


//     for(i=0; i <= galleryVids.length; i++){
    
//         galleryVids[i].addEventListener("mouseover", (e) => {
//             console.log(e.target)
//             const vid = e.target
//             vid.setAttribute("autoplay", "true")
//             vid.setAttribute("loop", "true")
//             // console.log(e.target)
//         })

//     }
    
// }


// const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')
const submit = document.getElementById('modal-submit')
const modalBox = document.getElementById('modal-box')
const submitConfirm = document.createElement('p')



// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'))

// // Hide modal
// close.addEventListener('click', () => modal.classList.remove('show-modal'))

// Hide modal on outside click
window.addEventListener('click', (e) => e.target == modal ? modal.classList.remove('show-modal') : false)

submit.addEventListener('click', () => {
  submit.remove()

  submitConfirm.innerHTML = "Email Sent!"
  modalBox.appendChild(submitConfirm)



  // document.appendChild()

})
