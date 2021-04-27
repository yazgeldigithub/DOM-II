// Your code goes here

let nav1 = document.querySelectorAll('a')
nav1[0].addEventListener('click', (event) => {
    alert('You Clicked on Home Button!')
  })

nav1[1].addEventListener('dblclick', (event) => {
    nav1[1].style.color = 'orange'
})

nav1[2].addEventListener('mouseover', (event) => {
    nav1[2].style.color = 'red'

    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.color = "";
      }, 1000);
    }, false);

   window.addEventListener('keydown', (event) => {
       if(event.key === 's' && event.ctrlKey) {
           event.preventDefault();
           alert('Save complete')
       }
   })