 const tabs = document.querySelectorAll('[data-tab-target]');
 const tabContents = document.querySelectorAll('[data-tab-content]')

 tabs.forEach(tab => {
 	tab.addEventListener('click', () => {
 		const target = document.querySelector(tab.dataset.tabTarget);
 		tabContents.forEach(tabContent => {
 			tabContent.classList.remove('active');
 		})
 		tabs.forEach(tab => {
 			tab.classList.remove('active');
 		})
 		tab.classList.add('active')
 		target.classList.add('active');
 	})
 })

 // btn 
 const backToTopButton = document.getElementById('back-to-top-btn');

window.addEventListener("scroll", scrollFunction);

 function scrollFunction() {
 	if(window.pageYOffset > 250){
 		 backToTopButton.style.transform = "translateY(0)";
 	} else {
 		  backToTopButton.style.transform = "translateY(1000px)";
 	}
 }

 backToTopButton.addEventListener('click', () => {
 	window.scrollTo({
 		top: 0,
 		left: 0,
 		behavior: 'smooth'
 	})
 })