// *********Set Date *********///
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
//******* Scroll to a specific place */
const Links = document.querySelectorAll('.scroll-link');
//Iterate through the links
for (const link of Links) {
  link.addEventListener("click", clickHandler);
}
 // ********** smooth scroll ************
  function clickHandler(e){
   //Prevent default behavior
    e.preventDefault();
    //Get the href attribute
    const href = this.getAttribute('href');

    //Select the href and set the smooth scroll behavior
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  }
 
  // ********** scroll to top ************
  //Get button
  const scrollTop = document.querySelector('.top');
  
  //Add an event listener to the button
  scrollTop.addEventListener('click', function(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
