const triggers = document.querySelectorAll(".mainList > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector('.top');
const topOfNav = nav.offsetTop;
console.log(topOfNav);

function handleEnter(){
    this.classList.add("trigger-enter");
    
    setTimeout(() =>{
        if(this.classList.contains("trigger-enter")){
            this.classList.add("trigger-enter-active");
        }
    }, 100);
    background.classList.add("open");
    
    const dropdown = this.querySelector(".dropdown");
    const dropdowncoords = dropdown.getBoundingClientRect();
    const main = document.querySelector(".mainContent");
    const navCoords = nav.getBoundingClientRect();
    
    const coords = {
        height: dropdowncoords.height,
        width: dropdowncoords.width,
        top: dropdowncoords.top - navCoords.top,
        left: dropdowncoords.left - navCoords.left
    }

    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
    main.style.setProperty("margin-top", "200px");
}

function handleLeave(){
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

function fixNav(){
    if (window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
        // main.style.setProperty("paddingTop", "64px");
    } else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}



triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave));
window.addEventListener("scroll", fixNav);