//var

const form = {
    bookTitle: document.querySelector("#book-title"),
    bookAuthor: document.querySelector("#book-author"),
    bookPages: document.querySelector("#book-pages"),
    addBtn: document.querySelector("#addBtn"),
};

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

const testObject = {
    title: 'title',
    author: 'author',
    pages: 69,
    read: true,
};

let myLibrary = [];

form.addBtn.addEventListener('click', addBookToLibrary);
const grid = document.querySelector('.library-grid');
//method


function addBookToLibrary() {
    let book = new Book(form.bookTitle.value, form.bookAuthor.value, form.bookPages.value);
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary() {
    //clear grid
    grid.innerHTML = "";
    myLibrary.forEach((book) => {
        let bookContainer = document.createElement("div");
        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');

        title.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.pages}`;

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);

        bookContainer.classList.add('bookCard');

        grid.appendChild(bookContainer);
    });

    console.log('display');
}

displayLibrary();