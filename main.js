const faBar = document.querySelector('.fa-bars')
// console.log(faBar);
const navLinks = document.querySelector('.nav-links')
const NavBtn = document.querySelector('.buttons')
faBar.addEventListener('click',() =>{
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    NavBtn.style.display = NavBtn.style.display === 'block' ? 'none' : 'block';
    // navLinks.style.gap ="20px"

    navLinks.style.transition = '.9s'
    console.log('clicked');
    
})

// API INTEGRSTION
const url = 'https://workable.p.rapidapi.com/%7BAPIKEY%7D/jobs?phase=published';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b42e8f0a53mshc2c51fd9d9852f2p1d2977jsn72f57bd023b0',
		'X-RapidAPI-Host': 'workable.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
