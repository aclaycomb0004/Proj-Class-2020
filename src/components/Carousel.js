import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <img src={require("./images/slide-1")} style={{height:50, width:50}} />
      </div>
    )
  }
}

export default Carousel;





// console.log('working')
// let currentSlide = 1;

// function showSlide() {
//     const slides = document.querySelectorAll(".slide");
//     const dots = document.querySelectorAll(".dot");
//     if (currentSlide > slides.length) {
//         currentSlide = 1;
//     }

//     if (currentSlide < 1) {
//         currentSlide = slides.length;
//     }

//     for (let i = 0; i < slides.length; i++) {
//         const element = slides[i];
//         element.style.display = "none";
//     }

//     for (let i = 0; i < slides.length; i++) {
//         const el = dots[i];
//         el.classList.remove("active");
//     }

//     slides[currentSlide - 1].style.display = "block";

//     dots[currentSlide - 1].classList.add("active");
// }

// function increaseSlide() {
//     currentSlide ++;
//     showSlide(currentSlide);
// }

// function decreaseSlide() {
//     currentSlide --;
//     showSlide(currentSlide);
// }

// function specificSlide(slideNumber) {
//     currentSlide = slideNumber;
//     showSlide();
// }

// document.querySelector(".prev").addEventListener("click", decreaseSlide);
// document.querySelector(".next").addEventListener("click", increaseSlide);

// showSlide();




// <div class="slideshow-wrapper">
//       <div class="slides-container">
//         <div class="slide fade">
//           <!-- slide 1 -->
//           <img src="images/slide-1.png" alt="" />
//         </div>
//         <div class="slide fade">
//           <!-- slide 2 -->
//           <img src="images/slide-2.png" alt="" />
//         </div>
//         <div class="slide fade">
//           <!-- slide 3 -->
//           <img src="images/slide-3.png" alt="" />
//         </div>
//         <div class="slide fade">
//           <!-- slide 4 -->
//           <img src="images/slide-4.png" alt="" />
//         </div>
//         <button class="prev">&#10094;</button>
//         <button class="next">&#10095;</button>
//       </div>

//       <div class="dots">
//         <span class="dot active" onclick="specificSlide(1)"></span>
//         <span class="dot" onclick="specificSlide(2)"></span>
//         <span class="dot" onclick="specificSlide(3)"></span>
//         <span class="dot" onclick="specificSlide(4)"></span>
//       </div>
//     </div>