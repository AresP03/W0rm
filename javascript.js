//Show & Hide Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > prevScrollpos && currentScrollPos > 100) {
    document.getElementById("header").style.top = "-18rem";
  } else {
    document.getElementById("header").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

//Dropdown Usermenu
function usermenu() {
  var dropdownContent = document.getElementById("dropdownContent");
  var usermenuElement = document.getElementById("usermenu");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
  // remove previous listener if it exists (prevents stacking)
  document.removeEventListener('click', hideOnClickOutside);
  // hide on outside click
  function hideOnClickOutside(event) {
    if (!usermenuElement.contains(event.target)) { // check if clicking outside usermenu
      dropdownContent.style.display = "none";
    }
  }
  document.addEventListener('click', hideOnClickOutside);
}

document.addEventListener('DOMContentLoaded', (e) => { //
  const lectureContent = document.querySelectorAll('.lecture-content') // gather all the lecture-content
  lectureContent.forEach((lecture) => {
  lecture.addEventListener('click', (e) => {
    const current = e.target // this is at the button btn-read-more
    const isBtnReadMore = current.className.includes('btn-read-more') //check btn if it's class is btn-read-more
    if(!isBtnReadMore) {
      return;
    } else {
      const currentText = current.parentNode.parentNode.querySelector('.more') //just assign parent node
      currentText.classList.toggle('more-open')
      currentText.nextSibling.children[0].textContent = currentText.nextSibling.children[0].textContent.includes('Read more') ? 'Read less' : 'Read more'
      const dots = current.parentNode.parentNode.querySelector('.dots')
      dots.classList.toggle('dots-hide')
    }
  })
  // console.log("select here")
  document.getElementById("btn-read-more").onclick = null;
} )
})
