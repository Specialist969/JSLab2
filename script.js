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
    4000
)

//moje
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
//

// kasujemy setInterval
// clearInterval(intervalRef)

// kasujemy setTimeout
// clearTimeout(intervalRef)


// window.requestAnimationFrame