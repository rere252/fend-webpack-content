import {fetchUser} from './jsonPlaceholder.service';

export function listenUserSearch() {
  const searchBox = document.getElementById('userId');
  searchBox.addEventListener('blur', onUserSearch);
}

function onUserSearch(e) {
  const userId = e.target.value;
  fetchUser(userId)
    .then(json => {
      const resultsEl = document.getElementById('results');
      const nameEl = document.createElement('div');
      nameEl.textContent = json.name;
      resultsEl.appendChild(nameEl);
    });
}
