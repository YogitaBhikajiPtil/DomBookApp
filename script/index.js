let adminform =document.getElementById("admin-form");
adminform.addEventListener("submit",function(){
    event.preventDefault();
    let email=Document.getElementById("email")
    let password=Document.getElementById("password")

    if(email=="admin@empher.com"&&Password=="empher@123"){
        alert("Logged in as Admin.")
        localStorage.setItem(`loggedIn`,email)
    }
    else{
        alert("credintials are incorret")
    }
    window.location.href = "admin.html"
})


let userform = document.getElementById("user-form");
userform.addEventListener("submit",function(){
    event.preventDefault();
    let email=Document.getElementById("email")
    let password=Document.getElementById("password")

    if(email=="user@empher.com"&& Password=="user@123"){
        alert("Logged in as user")
        localStorage.setItem(`loggedIn`,email)
    }
    else{
        alert("credintials are incorret")
    }
    window.location.href = "book.html"
})