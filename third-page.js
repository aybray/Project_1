// Insert javascript code for upload page
let map;
async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    map = new Map(document.getElementById("map"), {
        center: { lat: 28.602323785256257, lng: -81.2004139516097 },
        zoom: 15.5,
        mapId: "63c1d2f46e1cf76b",
    });
    const infoWindow = new InfoWindow();
    
    const draggableMarker = new AdvancedMarkerElement({
      map,
      position: { lat: 28.602323785256257, lng: -81.2004139516097 },
      gmpDraggable: true,
      title: "This marker is draggable.",
    });
  
    draggableMarker.addListener("dragend", (event) => {
      const position = draggableMarker.position;
  
      infoWindow.close();
      infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
      infoWindow.open(draggableMarker.map, draggableMarker);
    });
  }
  
initMap();