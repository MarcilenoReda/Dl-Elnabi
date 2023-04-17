let span = document.getElementById("up");
window.onscroll = function() {
    console.log(this.scrollY);
    if (this.scrollY >= 750) {
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
};
span.onclick = function () {
   window.scrollTo({
       top: 0,
       behavior:"smooth",
   });
};
