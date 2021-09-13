//Isiah Abad
//Last Updated: 9/12/21

//Description: Opening and close the hamburger menu script
//let open = false;
let navListener = document.getElementById("nav-links");
document.getElementById("hamburger-menu-container").addEventListener("click", ()=>{
    
    //add open or close class
    if(navListener.classList[0] === "close"){//opening the nav
        console.log("it is closed");
        navListener.classList.remove('close');
        navListener.classList.add('open');
    }
    else{
        console.log("it is open");
        navListener.classList.remove('open');
        navListener.classList.add('close');
    }
});