
// Google Maps Javascript directly from documentation

function initMap ()
{
    const map = new google.maps.Map( document.getElementById( "map" ), {
        zoom: 9,
        center: { lat: 52.14165267826279, lng: 4.717556685250915 },
    } );
    const infoWindow = new google.maps.InfoWindow( {
        content: "",
        disableAutoPan: true,
    } );
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = locations.map( ( position, i ) =>
    {
        const label = labels[ i % labels.length ];
        const marker = new google.maps.Marker( {
            position,
            label,
        } );

        marker.addListener( "click", () =>
        {
            infoWindow.setContent( label );
            infoWindow.open( map, marker );
        } );
        return marker;
    } );

    const markerCluster = new markerClusterer.MarkerClusterer( { map, markers } );
}

const locations = [
    { lat: 52.14165267826279, lng: 4.717556685250915 }, // Esports Game Arena
    { lat: 52.1273227, lng: 4.361874317914339 }, // Gammax Gaming & Esports Center
];

window.initMap = initMap;
