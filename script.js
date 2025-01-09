document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="search"]');
  const suggestions = document.createElement('div');
  suggestions.classList.add('dropdown-menu');
  searchInput.parentNode.appendChild(suggestions);

  const data = {
      temple: ['Temple 1', 'Temple 2'],
      beach: ['Beach 1', 'Beach 2'],
      country: ['Country 1', 'Country 2']
  };

  searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      suggestions.innerHTML = '';
      if (data[query]) {
          data[query].forEach(item => {
              const suggestionItem = document.createElement('span');
              suggestionItem.classList.add('dropdown-item');
              suggestionItem.textContent = item;
              suggestions.appendChild(suggestionItem);
          });
          suggestions.classList.add('show');
      } else {
          suggestions.classList.remove('show');
      }
  });

  document.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target)) {
          suggestions.classList.remove('show');
      }
  });
});
