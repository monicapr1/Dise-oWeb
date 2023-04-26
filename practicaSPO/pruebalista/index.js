var token =
  "BQA5bFLTsg2X9Tx-FJpHXrWgfle272mCqWyG1Oj448_-WafG7HhD6sRT2aBrCWU-rG4NgbDyUpHAt8ow1ZrL2KylyaoqJEB-NWHFUU16tG7FbiCATCjv7y1GY6QygYwyCPEutCR13_aXevwYKmC_JXxq-uv0xcxON0R29NKy9Z99pPTXkQToGce-zHrRnhGWbh4KueRTefQPSiINoQn4xJCUSCNvGNkWIbhCBy3Dp02ig8C0h3Q7feXLkJt1g7rLnoRS-vZSZdTeh3PP0RJavhaKozJ7cLfXR9N5wU5ApG8mNsJHetUEhrmiriPkwFJ_yU4_qa3CWiz1ovMi2AqAgVkBwGQ6EeqLm1MRWIVQWTRFfpk";
function buscar() {
    var artista = document.getElementById("artista").value;
    var url = "https://api.spotify.com/v1/search?q=" + artista + "&type=artist";
  
    fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token,
      }
    })
    .then(response => response.json())
    .then(data => {
      var id_artista = data.artists.items[0].id;
      var url_albums = "https://api.spotify.com/v1/artists/" + id_artista + "/albums";
      
      return fetch(url_albums, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + token,
        }
      });
    })
    .then(response => response.json())
    .then(data => {
      var albums = data.items;
      var resultados = document.getElementById("resultado");
      resultados.innerHTML = "";
  
      for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        var nombre = album.name;
        var imagen = album.images[0].url;
        var fecha_lanzamiento = album.release_date;
  
        var album_html = "<div>";
        album_html += "<h2>" + nombre + "</h2>";
        album_html += '<img src="' + imagen + '">';
        album_html += "<p>Fecha de lanzamiento: " + fecha_lanzamiento + "</p>";
        album_html += "<button onclick=\"mostrarCanciones('" + album.id + "')\">Ver canciones</button>";
        album_html += "</div>";
  
        resultados.innerHTML += album_html;
      }
    })
    .catch(error => {
      console.log("Ha ocurrido un error: ", error);
      alert("Ha ocurrido un error al buscar el artista o al obtener los álbumes del artista.");
    });
  }

function mostrarCanciones(id_album) {
    var url_canciones = "https://api.spotify.com/v1/albums/" + id_album + "/tracks";
    fetch(url_canciones, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token
      }
    })
    .then(response => response.json())
    .then(datos => {
      var canciones = datos.items;
      var canciones_html = "<ul>";
      
      for (var i = 0; i < canciones.length; i++) {
        var cancion = canciones[i];
        var nombre = cancion.name;
        var duracion = cancion.preview_url;
        
        canciones_html += `
        <div class="col-12 col-md-4 text-center">
            <p>${nombre}</p>
            <audio controls>
                <source src="${duracion}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>`;
      }
      
      canciones_html += "</ul>";
      
      var canciones_div = document.getElementById("canciones");
      canciones_div.innerHTML = canciones_html;
    })
    .catch(error => {
      alert("Ha ocurrido un error al obtener las canciones del álbum.");
    });
  }
  