//Isiah Abad
//Last Updated: 9/12/21

//Description: Opening and close the hamburger menu script
//let open = false;
let navListener = document.getElementById('nav-links');
let bodyListener = document.getElementById('main-body-container');
let lineListener = document.querySelectorAll(".line");
document.getElementById('hamburger-menu-container').addEventListener('click', ()=>{
    
    //add open or close class
    if(navListener.classList[0] === 'close'){//opening the nav
        console.log("it is closed");
        navListener.classList.remove('close');
        navListener.classList.add('open');
        bodyListener.classList.add('open');
        lineListener.forEach(el => el.classList.add('open-line'));
    }
    else{
        console.log("it is open");
        navListener.classList.remove('open');
        navListener.classList.add('close');
        bodyListener.classList.remove('open');

        lineListener.forEach(el => el.classList.remove('open-line'));
        
    }
});

window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 768 ){
        console.log("Width is at 768px");
        navListener.classList.remove('open');
        navListener.classList.add('close');
        bodyListener.classList.remove('open');

        lineListener.forEach(el => el.classList.remove('open-line'));
    }
});