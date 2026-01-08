fetch("https://rickandmortyapi.com/api/character")
	.then((response) => {
		console.log("Informacion de la respuesta:");
		console.log("Estado:", response.status); // 200, 404, 500, etc.
		console.log("OK:", response.ok); // true si status 200-299
		console.log("URL:", response.url);
		console.log("Headers:", response.headers);
		if (response.ok) {
			return response.json();
		} else {
      throw new Error('Error HTTP: ', responde.status)
    }
	})
	.then((data) => {
		console.log("📄 Datos obtenidos:");
		console.log("Título:", data.info);
		console.log("Contenido:", data.results);
		return data;
	})
	.catch((error) => console.error("Error: ", error));

console.log(data);
