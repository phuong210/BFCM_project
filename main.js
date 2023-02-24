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
    let countdownText = document.querySelector('.countdown__timer');
    let x = setInterval(()=> {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
       
        countdownText.innerHTML = `<p>${days}<span class="pl-25 pr-25">:</span>${hours}<span class="pl-25 pr-25">:</span>${minutes}<span class="pl-25 pr-25">:</span>${seconds}</p>`;
       
        if (distance < 0) {
            clearInterval(x);
            countdownText.innerHTML = "EXPIRED";
        }
    }, 1000)
}
countdown();

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
