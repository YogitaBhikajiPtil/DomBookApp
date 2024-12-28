const loggedIn = localStorage.getItem('loggedIn');
if(loggedIn !== "admin@Masai.com") {
    window.location.href = "index.html";
}

const baseURL = "http://localhost:3000/books";
const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

form.onsubmit =async function(e) {
    e.preventDefault();
    const book ={
        title:document.getElementById("title").value,
        title:document.getElementById("author").value,
        title:document.getElementById("category").value,
    };

    const res = await fetch(baseURL,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON,stringify(book),
    });

    if(res.ok){
        alert("Book added succesfully");
        fetchBooks();
    }
};
async function fetchBooks(){
    const res = await fetch(baseURL);
    const books = res.json();
    bookList.innerHTML = "";
    books.forEach(book =>{
        bookList.innerHTML += `<p>${book.title} by ${book.author} - ${book.category}<p>`;
    }); 
}
fetchBooks();
