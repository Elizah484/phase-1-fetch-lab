function fetchBooks() {
  // Fetch the books from the API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Convert the response to JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Call renderBooks with the JSON data
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}g
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
