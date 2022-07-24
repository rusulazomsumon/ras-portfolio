//********************* */ Back to Top Button ****************
// Selection the button by class name
const backToTop = document.querySelector(".back-to-top");
// Adding conditon and propertics using arrow function 
window.addEventListener("scroll", () => {
    if(window.pageYOffset>100){
        backToTop.classList.add("active");
    }else{
        backToTop.classList.remove("active");
    }
});

//geting the copyright elements 
// var currentYear = document.write(new Date().getFullYear());
var copyElmts = document.querySelector(".copyright");
copyElmts.innerHTML = '<p> Copyright &copy; <script> currentYear </script> <a href="https://www.rusulazom.xyz" target="_blank">Rusul Azom Sumon</a> All Rights Reserved </p>';

// Copyright &copy; <script>document.write(new Date().getFullYear())</script> <a href="https://www.rusulazom.xyz" target="_blank">Rusul Azom Sumon</a> All Rights Reserved