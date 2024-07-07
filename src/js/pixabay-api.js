const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44774351-929c2aa0766411c652402d8c1';

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&perPage=${perPage}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}
