const loggedIn = localStorage.getItem('loggedIn');
if(loggedIn !== "user@Masai.com") {
    window.location.href = "index.html";
}

const baseURL = "https://lyrical-honeysuckle-mandrill.glitch.me";
const bookList = document.getElementById("bookList");

async function fetchBooks(){
    const res = await fetch (baseURL);
    const books = await res.json()
    bookList.innerHTML = "";
    books.forEach(book =>{
    bookList.innerHTML += bookList.innerHTML += `<p>${book.title} by ${book.author} - ${book.category}
    ,<button onclick="borrowBook(${book.id})">Borrow<button><p>`;
});

async function borrowBook(id) {
    const res = await fetch(`${baseURL}/${id}`,{
        method:"PATCH",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({borrowed:true})
    });
    if(res.ok){
        alert("Book Borrowed Successfully");
        fetchBooks();
    }
}
}
fetchBooks();