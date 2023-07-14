const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navlist');
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});
document.querySelectorAll(".navlinks").forEach(n =>
 n.addEventListener("click", () =>{
  hamburger.classList.remove("active");
  navList.classList.remove("active");
 }));
 ///////nav background event listener
let nav = document.querySelector('nav');
window.addEventListener("scroll", function(e){
  e.preventDefault();
  if(window.scrollY <= 100){
    nav.style.background = "transparent";
  }else {
    nav.style.background = "whitesmoke";
  }
});

////////to top scroll */
const toTopLink = document.querySelector('.to_top_link');
window.addEventListener('scroll', function(e){
  e.preventDefault;
    if(window.scrollY <= 400){
      toTopLink.style.display = 'none';
    }
    else{
      toTopLink.style.display = 'block';
    }
});
////////////////////data fetcher
//call the button and the containers
const flitterButton = document.querySelectorAll(".our_gallery_list_btn")
const flitterCon = document.querySelectorAll(".gallery_grid_con");
//add event listner to each button
flitterButton.forEach((button) =>{
  button.addEventListener("click", () =>{
    //remove active from each btn
    flitterButton.forEach((btn) => btn.classList.remove("activeBtn"));
    //add active to each btn
    button.classList.add("activeBtn");
//call all the button data-filter
    const flitterCategory = button.getAttribute("data-filter");
//
    flitterCon.forEach((wrapper) =>{ 
      if (flitterCategory === "All" || wrapper.classList.contains(flitterCategory)) {
        wrapper.style.display = "block";
      } else {
        wrapper.style.display = "none";
      }
    });
  });
});
//// counter
const parallexCon = document.querySelector(".parallex_2");
function countUpAnimation(targetNumber,countElement) {
  let count = 0;
  
  const timer = setInterval(() => {
    count++;
    countElement.textContent = count;
    if (count === targetNumber) {
      clearInterval(timer);
    }
  }, 1);
}

window.addEventListener("load", () =>{
    countUpAnimation(100,
    document.getElementById('counter1'));
    countUpAnimation(240,
    document.getElementById('counter2'));
    countUpAnimation(152,
    document.getElementById('counter3'));
    countUpAnimation(350,
    document.getElementById('counter4'));
});

////parallex background changer





