const testObject = {
    title: 'title',
    author: 'author',
    pages: 69,
    read: true,
}

const myLibrary = [testObject];

function Book(title, author, pages, read) {
    //code
}

function addBookToLibrary() {

}

function displayLibrary() {
    //foreach
    const bookContainer = document.createElement("div");
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('div');

    title.textContent = `Title: ${testObject.title}`;
    author.textContent = `Author: ${testObject.author}`;
    pages.textContent = `Pages: ${testObject.pages}`;
    read.textContent = `Read: ${testObject.read}`;


    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);

    bookContainer.classList.add('bookCard');

    const grid = document.querySelector('.library-grid');



    grid.appendChild(bookContainer);
}

displayLibrary();