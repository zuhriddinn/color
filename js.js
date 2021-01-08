let rang = document.querySelector('.child')
let color = document.querySelectorAll('.child')


let knopka = document.querySelector('.colours')
let knopkalar = document.querySelector('.puton')
let el = document.querySelector('.change')

let element = document.querySelector('.element')
let colours = ['red', 'blue', 'green', 'yellow', 'black']

for (let i = 0; i < color.length; i++) {
    color[i].style.background = colours[i]
    color[i].addEventListener('click', function () {
        element.style.background = colours[i]
    })
}

knopkalar.addEventListener('click', function () {
    console.log(knopka.style.left);
    knopka.style.transform = 'translateX(0)'
})
