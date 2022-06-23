
// Google Maps //
function initMap ()
{
    const map = new google.maps.Map( document.getElementById( "map" ), {
        zoom: 6,
        center: { lat: 51.92824554956347, lng: 4.524163786173565 }
    } );
    const infoWindow = new google.maps.InfoWindow( {
        content: "",
        disableAutoPan: true,
    } );
    // An array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
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

    // Add a marker clusterer to manage the markers.
    new markerClusterer( { map, markers } );
}

const locations = [
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: 52.12119841758262, lng: 4.279310900297896 },
    { lat: 52.07799717535008, lng: 4.294741738657255 },
];

window.initMap = initMap;
const markerCluster = new markerClusterer.MarkerClusterer( { map, markers } );