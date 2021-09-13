//Isiah Abad
//Last Updated: 9/12/21

//Description: Opening and close the hamburger menu script
//let open = false;
let navListener = document.getElementById('nav-links');
let lineListener = document.querySelectorAll(".line");
document.getElementById('hamburger-menu-container').addEventListener('click', ()=>{
    
    //add open or close class
    if(navListener.classList[0] === 'close'){//opening the nav
        console.log("it is closed");
        navListener.classList.remove('close');
        navListener.classList.add('open');
        lineListener.forEach(el => el.classList.add('open-line'));
    }
    else{
        console.log("it is open");
        navListener.classList.remove('open');
        navListener.classList.add('close');
        lineListener.forEach(el => el.classList.remove('open-line'));
        
    }
});