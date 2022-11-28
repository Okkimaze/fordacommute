let ul = document.querySelector("#ul");
let bars = document.querySelector("#bars");
let close = document.querySelector("#close");
/* Scroll effect for header*/
var up = document.querySelector('#up');
window.addEventListener('scroll', () =>{
	up.classList.toggle('sticky', window.scrollY > 0);
	});

bars.addEventListener('click', ()=>{
	ul.style.top="5.7rem";
	bars.style.display="none";
	close.style.display="block";
});
close.addEventListener('click', ()=>{
	ul.style.top="-11.5rem";
	bars.style.display="block";
	close.style.display="none";
});
var ulChild = document.getElementById("ul").children;
for (var i = 0; i < ulChild.length; i++) {
		ulChild[i].addEventListener('click', ()=>{
			if (window.matchMedia("(max-width: 990px)").matches){
				ul.style.top="-11.5rem";
				bars.style.display="block";
				close.style.display="none";
			}
		});
	}