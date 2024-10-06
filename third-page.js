// Insert javascript code for upload page

import { storage, firestore } from './firebase.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

async function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0]
    const tags = getSelectedTags();

    if(file){
      const storageRef = ref(storage, `uploaded_images/${file.name}`);
      await uploadBytes(storageRef, file);

      const imageURL = await getDownloadURL(storageRef);
      const imagePreview = document.getElementById("imagePreview");
      imagePreview.src = imageURL; 

      //get marker position

      await addDoc(collection(firestore, 'images'), {
        url: imageURL,
        tags: tags,
        //location: markerPosition,
        timestamp: new Date()
      })
    }
  }

function getSelectedTags() {
    const selectedTags = [];
    const checkboxes = document.querySelectorAll('input[name="tags"]:checked');
    checkboxes.forEach((checkbox) => {
        selectedTags.push(checkbox.value);
    });
    return selectedTags;
}


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

const uploadButton = document.getElementById("uploadImage");
uploadButton.addEventListener('click', uploadImage);
  
initMap();