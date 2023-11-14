function obterLocalizacao() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(mostrarPosicao, mostrarErro);
            } else {
                alert("Geolocalização não é suportada neste navegador.");
            }
        }

        function mostrarPosicao(posicao) {
            var latitude = posicao.coords.latitude;
            var longitude = posicao.coords.longitude;

            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        }

        function mostrarErro(erro) {
            switch(erro.code) {
                case erro.PERMISSION_DENIED:
                    alert("Usuário negou a solicitação de geolocalização.");
                    break;
                case erro.POSITION_UNAVAILABLE:
                    alert("Informações de localização indisponíveis.");
                    break;
                case erro.TIMEOUT:
                    alert("A solicitação de geolocalização expirou.");
                    break;
                case erro.UNKNOWN_ERROR:
                    alert("Ocorreu um erro desconhecido ao obter a geolocalização.");
                    break;
            }
        }
