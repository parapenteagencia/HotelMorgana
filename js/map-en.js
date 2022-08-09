function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.637214, lng: -87.066781 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'Morgana Hotel' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'images/marcador.png';

    var contentMorgana = '<div class="info-window">' +
        '<h3 class="text-morgana">Morgana Hotel</h3>' +
        '<div class="info-content">' +
        '<p class="text-dark">You found the best hotel in Playa del Carmen!</p>' +
        '<p>10th Ave #16 & 38th St, 77710 Playa del Carmen, Q.R.</p>'+
        '</div>' +
        '</div>';

    var infowindowMorgana = new google.maps.InfoWindow({
        content: contentMorgana
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.636188, lng: -87.066708 },
        map: map,
        title: 'Hotel Morgana',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowMorgana.open(map, marker);
    });
}