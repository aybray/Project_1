import { storage } from './firebase.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

async function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0]

    if(file){
      const storageRef = ref(storage, `uploaded_images/${file.name}`);
      await uploadBytes(storageRef, file);

      const imageURL = await getDownloadURL(storageRef);
      const imagePreview = document.getElementById("imagePreview");
      imagePreview.src = imageURL; 
    }
  }

  const uploadButton = document.getElementById("uploadImage");
  uploadButton.addEventListener('click', uploadImage);

