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

   window.addEventListener('load', (event) => {
       alert('Page is fully loaded')
   } )

 const selectElement = document.querySelector('.destination1')

 selectElement.addEventListener('change',(event) => {
const result = document.querySelector('.result')
result.textContent = `You like ${event.target.value}`
 })

 let wheelEvent =  document.getElementById('wheel').addEventListener('wheel', myFunction)

 function myFunction() {
    this.style.fontSize = "35px";
  }