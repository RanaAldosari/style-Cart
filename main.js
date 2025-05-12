
async function products(){
    const res=await fetch("https://fakestoreapi.com/products");
    const data=await res.json()

data.forEach(element => {
    const card=document.createElement("div")
    card.className="card"

    let img=document.createElement("img")
    img.src=element.image

let title=document.createElement("h4")
title.textContent=element.title

let price=document.createElement("p")
price.textContent=`${element.price} $`

card.appendChild(img)
card.appendChild(title)
card.appendChild(price)

if (element.category === "men's clothing") {
  let men = document.getElementById("men-clothes");
    men.appendChild(card);
    } else if (element.category === "women's clothing") {
   let women = document.getElementById("women-clothes");
   women.appendChild(card);
    } else if (element.category === "jewelery") {
let jewelery = document.getElementById("jewelery");
jewelery.appendChild(card);
    } else if (element.category === "electronics") {
let ele = document.getElementById("electronic");
    ele.appendChild(card);
    }
  });
}

products()



document.getElementById("signup-form").addEventListener("submit",function(e){
e.preventDefault();
let valid=true;
let username=document.getElementById("regester-name").value
if(username.length<4){
    document.getElementById("regester-name-err").textContent="username must be at least 4 characters"
valid=false
}
let email=document.getElementById("regester-email").value
if (!email.includes("@") || !email.includes(".") || !email.includes("com")){
    document.getElementById("regester-email-err").textContent="email must be includes@|.|com"
valid=false
}
let phoneNumber=document.getElementById("regester-phone").value
if(phoneNumber.length<9){
document.getElementById("regester-phone-err").textContent="phone number must be at least 9 numbers"
 valid=false
}
let pass=document.getElementById("regester-pass").value
if(pass.length<=3){
document.getElementById("regester-pass-err").textContent="passowrd must be more than 3 characters"
valid=false
}
if(valid){
    let user={username,email,phoneNumber,pass}
    localStorage.setItem("user_key",JSON.stringify(user))
    alert("Create Account Successfully")
    const signUpModal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    signUpModal.hide();
    const loginModal = new bootstrap.Modal(document.getElementById('loginModel'));
    loginModal.show();
    // window.location.href="loginUser.html"
}
})

// login
   document.getElementById("login-form").addEventListener("submit",function(e){
    e.preventDefault()
    let username=document.getElementById("login-name").value
let pass=document.getElementById("login-pass").value
let user=JSON.parse(localStorage.getItem("user_key"))
if(user && user.username === username && user.pass === pass){
        alert("login successfully")
        window.location.href="loginUser.html"
    }else{
        alert("username or passowrd is invalid")
    }
   })