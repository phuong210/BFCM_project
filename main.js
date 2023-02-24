// slider product
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("slider-img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.opacity = "0.5";
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.opacity = "1";
}

// countdown
const countdown = () => {
    let countDownDate = new Date(" Feb 28, 2023 15:47:25").getTime();
    let countdownText = document.querySelector('.countdown');
    let x = setInterval(()=> {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownText.innerHTML = `
        <div class="d-flex justify-center countdown__timer fw-500">
            <p>${days}<span class="d-block h5">Days</span></p>
            <p class="pl-18 pr-18">:</p>
            <p>${hours}<span class="d-block h5">Hours</span></p>
            <p class="pl-18 pr-18">:</p>
            <p>${minutes}<span class="d-block h5">Mins</span></p>
            <p class="pl-18 pr-18">:</p>
            <p>${seconds}<span class="d-block h5">Secs</span></p>
        </div>
        `
       
        if (distance < 0) {
            clearInterval(x);
            countdownText.innerHTML = "EXPIRED";
        }
    }, 1000)
}
window.onload = function () {
  what();
  function what() {
    countdown();
  }
}
// countdown();

// faq
const faq = () => {
    let answers = document.querySelectorAll(".faq__accordion-item");
        answers.forEach((event)=>{
            event.addEventListener('click',()=>{
                console.log(1);
                if(event.classList.contains("active")){
                    event.classList.remove("active");
                }
                else{
                    event.classList.add("active");
                }
            })
        })

}
faq();
