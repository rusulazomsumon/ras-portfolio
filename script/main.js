//********************* */ Back to Top Button ****************
// Selection the button by class name
const backToTop = document.querySelector(".back-to-top");
// Adding conditon and propertics using arrow function by the help of even listener 
window.addEventListener("scroll", () => {
    if(window.pageYOffset>100){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
});

//geting the copyright elements 
//showing current year 
var currentYear = new Date().getFullYear();
var copyElmts = document.querySelector(".year");
copyElmts.innerHTML = currentYear;
