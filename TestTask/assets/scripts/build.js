window.onscroll = function() {
  let scrolled = window.pageYOffset;
  let header = document.getElementById('header');
  let sticky = header.offsetTop;
  if (scrolled > sticky) {
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
}
