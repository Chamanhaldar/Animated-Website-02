const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemC = document.querySelector(".elem-container");
let fixed = document.querySelector(".fixed-img");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})

let elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",()=>{
        let img = e.getAttribute("data-img");
        fixed.style.backgroundImage = `url(${img})`
    })
})