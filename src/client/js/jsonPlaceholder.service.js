export function fetchUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return fetch(url)
    .then(resp => resp.json())
    .catch(e => console.error(e));
}
