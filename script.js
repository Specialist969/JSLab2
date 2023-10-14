// notatnik z zajęć

const main = document.querySelector('main')

main.style.transform ="translateX(-10px)"

// jednorazowe wykonanie kodu po określonym czasie
const timeoutRef = setTimeout(
    () => {
        main.innerHTML = 'Msg from setTimeout'
    },
    2000
)

// wykonywanie kodu co określony czas
let licznik = 0
const intervalRef = setInterval(
    () => {
        main.innerHTML = `Msg from setInterval: ${licznik++}`
    },
    1000
)

