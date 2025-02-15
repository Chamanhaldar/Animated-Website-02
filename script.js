const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemC = document.querySelector(".elem");
let fixedI = document.querySelector(".fixed-img");
elemC.addEventListener("mouseenter",function(){
    fixedI.style.display = "block";
})
elemC.addEventListener("mouseleave",function(){
    fixedI.style.display = "none";
})