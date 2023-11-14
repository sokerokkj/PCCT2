function inicializarMapa() {
        var coordenadas = { lat: -23.5505, lng: -46.6333 }; // Coordenadas iniciais (exemplo: São Paulo, Brasil)
        var main = new google.maps.Map(document.getElementById('main'), {
            zoom: 12,
            center: coordenadas
        });

        var marcador = new google.maps.Marker({
            position: coordenadas,
            map: main,
            title: 'Localização'
        });
    }

