let menuBtn = document.querySelector('.menu');

let menuLinks = document.querySelector('.links');

let closeMenu = document.querySelector('.close-flyout');

let header = document.querySelector('.header-container');

let nav = document.querySelector('header');

let logo = document.querySelector('.logo');

let links = document.querySelectorAll('.links li a');

let testSlider = document.querySelectorAll('.testimonials-slider > div');

let prevSlideBtn = document.querySelector('.slick-prev');

let nextSlideBtn = document.querySelector('.slick-next');

let currentDiv = 0;


prevSlideBtn.addEventListener('click',function(e){
	e.preventDefault();
	
	currentDiv--;
	if(currentDiv < 0){
		currentDiv = 2;
	}
	slider();
});

nextSlideBtn.addEventListener('click',function(e){
	e.preventDefault();
	
	currentDiv++;
	if(currentDiv > 2){
		currentDiv = 0;
	}
	slider();
});

function slider(){
	
	testSlider.forEach(function(item){
		item.classList.remove('active');
	});
	
	for( var i=0 ; i< testSlider.length ; i++){
		testSlider[currentDiv].classList.add('active');
	}

} 
slider();








menuBtn.addEventListener('click',function(e){
	menuLinks.classList.add('open');
});

closeMenu.addEventListener('click',function(e){
	menuLinks.classList.remove('open');
});
menuLinks.addEventListener('click',function(e){
	
	e.stopPropagation();
	
});
document.addEventListener('click',function(e){
	if(e.target !== menuLinks && e.target !== menuBtn){
		
		if(menuLinks.classList.contains('open')){
			menuLinks.classList.remove('open');
		}
		
	}
});


window.onscroll = function(){
	
	if( this.pageYOffset > header.offsetHeight ){
		nav.style.backgroundColor = '#fff';
		nav.style.borderBottomColor = 'rgba(0, 0, 0, 0.1)';
		logo.style.color = '#000';
		links.forEach(function(link){
			
			link.onmouseover = function(){
				this.style.color = '#000';
			};
			link.onmouseout = function(){
				this.style.color = '#777';
			};
			
		});
		
	}else{
		nav.style.backgroundColor = 'transparent';
		nav.style.borderBottomColor = 'rgba(255 ,255 ,255 , 0.1)';
		logo.style.color = '#FFF';
		links.forEach(function(link){
			
			link.onmouseover = function(){
				this.style.color = '#FFF';
			};
			link.onmouseout = function(){
				this.style.color = '#999';
			};
		});
	}
	
};
