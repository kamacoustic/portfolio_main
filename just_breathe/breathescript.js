const container = document.getElementById('container')
const text = document.getElementById('text')

console.log(text)

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5



const breathAnimation = () => {
    text.innerText = 'Deep Breath In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold it. . .  '

       setTimeout(() => {
        text.innerText = 'Let it Out!'
        container.className = 'container shrink'
       }, holdTime) 
    }, breatheTime)
}

breathAnimation()

setInterval(breathAnimation, totalTime)