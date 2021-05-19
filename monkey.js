const openface = document.querySelector('.open');
const closedface = document.querySelector('.closed');


closedface.addEventListener('click',() => {


    openface.classList.add('active');
    closedface.classList.remove('active');




});
openface.addEventListener('click',()=>{
  if(openface.classList.contains('active')){
    openface.classList.remove('active');
    closedface.classList.add('active');
  }
})
