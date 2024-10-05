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

      await addDoc(collection(firestore, 'images'), {
        url: imageURL,
        tags: tags,
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


  const uploadButton = document.getElementById("uploadImage");
  uploadButton.addEventListener('click', uploadImage);

