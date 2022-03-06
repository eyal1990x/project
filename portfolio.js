const GITHUB_URL = "https://github.com/eyal1990x";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

function changeImage() {
    const image = document.getElementById("profile-image");image.src='https://avatars.githubusercontent.com/u/91849978?v=4';}

  const prevBtn = document.querySelector('.prev'); 
  const nextBtn = document.querySelector('.next');
  const galleryMap = document.querySelectorAll('.map');
  let currentlySelected = 0;
 
 prevBtn.addEventListener('click',function(){
     galleryMap[currentlySelected].classList.remove('active')
     currentlySelected--;
     galleryMap[currentlySelected].classList.add('active');
     nextBtn.disabled = false;
     if(currentlySelected === 0){
         prevBtn.disabled = true
     }
 }); 
 
 nextBtn.addEventListener('click',function(){
     galleryMap[currentlySelected].classList.remove('active'); 
     currentlySelected++; 
     galleryMap[currentlySelected].classList.add('active');
     prevBtn.disabled = false;
 
     if(galleryMap.length === currentlySelected + 1){
         nextBtn.disabled = true;
     }
 });