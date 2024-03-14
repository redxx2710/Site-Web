
const scrollYDownTarget = 522; 
const scrollYUpTarget = 0; 


window.addEventListener('wheel', handleScroll);




function handleScroll(event) {
   
    const scrollDirection = Math.sign(event.deltaY);

 
    const currentScrollY = window.scrollY;


    const targetScrollY = (scrollDirection === 1) ? scrollYDownTarget : scrollYUpTarget;

  
    if (scrollY < 620 ){
    window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
     });
    
}

    event.preventDefault();
}
