const email = document.getElementById("email");
const button = document.getElementById("btn");const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error");
const timoutFunc = setInterval(() => {
    errorMsg.style.visibility="hidden";
    errorIcon.style.visibility="hidden";
    email.classList.remove("active");
},2000)
button.addEventListener("click", function(){
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,8})$/;
    
    if(regex.test(email.value)){
        alert("Thank you for subscribing to our news letter!")
        email.value = "";
        return timoutFunc;
    }else{
        email.value = "";
        errorMsg.style.visibility = "visible";
        email.classList.add("active");
        errorIcon.style.visibility = "visible";
        return timoutFunc;
    }
})

