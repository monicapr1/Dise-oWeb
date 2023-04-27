function getAccessToken() {
  const clientId = "f7941367faa44f8cb4b4ed2f403f1bcc";
  const clientSecret = "7ea1d45692914c70b0d1ea7d814bcc6a";
  const url = "https://accounts.spotify.com/api/token";
  const encodedData = btoa(`${clientId}:${clientSecret}`);

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${encodedData}`,
    },
    body: "grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => data.access_token)
    .catch((error) => {
      console.error("Error obtaining access token:", error);
    });
}

const searchAlbum = async () => {
  let nombreArtista = document.getElementById("nombreArtista");
  let nombreAlbum = document.getElementById("nombreAlbum");
  let fotoArtista = document.getElementById("fotoAlbum");
  let listaCanciones = document.getElementById("listaCanciones");
  const artistName = document.getElementById("artist-name").value;

  const token = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(
        artistName
      )}`,
      { headers }
    );
    const data = await response.json();
    const artistId = data.artists.items[0].id;

    const albumsResponse = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      { headers }
    );
    const albumsData = await albumsResponse.json();
    const firstAlbumId = albumsData.items[0].id;

    const albumResponse = await fetch(
      `https://api.spotify.com/v1/albums/${firstAlbumId}`,
      { headers }
    );
    const albumData = await albumResponse.json();

    nombreArtista.innerHTML = albumData.artists[0].name;
    nombreAlbum.innerHTML = albumData.name;
    fotoArtista.src = albumData.images[0].url;

    let canciones = albumData.tracks.items;

    let todasLasCanciones = "";
    canciones.forEach((cancion, index) => {
      let nombreCancion = cancion.name;
      let cancionUrl = cancion.preview_url;
      todasLasCanciones += `
          <div class="col-12 col-md-4 text-center">
              <p>${nombreCancion}</p>
              <audio controls>
                  <source src="${cancionUrl}" type="audio/mpeg">
                  Your browser does not support the audio element.
              </audio>
          </div>`;
      console.log(nombreCancion);
      console.log(cancion.preview_url);
    });
    listaCanciones.innerHTML = todasLasCanciones;
  } catch (err) {
    console.error(err);
  }
};
