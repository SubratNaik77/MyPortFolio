// typing animation
var typed = new Typed(".typing",{
    strings:["Web Designer","Web Developer","Graphic Designer","Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
} )


// move-to-top

function scrollToTop() {
    const scrollStep = -window.scrollY / (500 / 2);
    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 5);
}


// nav-color
// var navColor = document.getElementsByClassName("");
// var tabcontains = document.getElementsByClassName("tab-contains");
// function opentab(tabname) {
//     for (tablink of tablinks) {
//         tablink.classList.remove("active-link");
//     }
//     for (tabcontain of tabcontains) {
//         tabcontain.classList.remove("active-tab");
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab");
// }
nav=document.querySelector(".nav").querySelectorAll("a")
console.log(nav);
 
nav.forEach(element => {
    element.addEventListener("click", function(){
        nav.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active");

    })
});
function myfunction1(){
    document.querySelector('.portfolio-img')
}


let mysBtn = document.getElementById('scrollToTopBtn'); 

window.addEventListener('scroll', function () { 
	if (document.body.scrollTop > 20 
		|| document.documentElement.scrollTop > 20) { 
		mysBtn.style.display = 'block'; 
	} else { 
		mysBtn.style.display = 'none'; 
	} 
}); 
