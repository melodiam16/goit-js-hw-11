export function getPicturesByQuery(q, parameters) {
  const { API_KEY, image_type, orientation, safesearch } = parameters;

  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`
  ).then(res => {
    console.log(res);

    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}
