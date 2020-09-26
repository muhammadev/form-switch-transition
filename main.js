let openSignupBtn = document.getElementById("open-signup"),
    openSigninBtn = document.getElementById("open-signin"),
    signupForm = document.querySelector(".signup");

openSignupBtn.onclick = function() {
  signupForm.classList.remove("close-signup")
  signupForm.classList.add("open-signup")
}

openSigninBtn.onclick = function() {
  signupForm.classList.add("close-signup")
  signupForm.addEventListener("webkitAnimationEnd", function(e) {
    if (e.animationName === "close-signup") {
      signupForm.classList.remove("open-signup")
    }
  })
}