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