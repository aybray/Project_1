// Javascript code to be inserted
let map;


async function initMap(markers) {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  
    map = new Map(document.getElementById("map"), {
        center: { lat: 28.602323785256257, lng: -81.2004139516097 },
        zoom: 15.5,
        mapId: "63c1d2f46e1cf76b",
    });
    const infoWindow = new InfoWindow();
    for(let i=0; i<markers.length; i++){
        const cur=markers[i];
        // A marker with a with a URL pointing to a PNG.

    
        const markerImg = document.createElement("img");

        markerImg.src =cur[3];
        markerImg.style.width = "40px"; // Set width to 40 pixels
        markerImg.style.height = "40px";
        markerImg.onload = function() {
            console.log("Image loaded successfully.");
            const marker = new AdvancedMarkerElement({
                map,
                position: { lat: cur[1], lng: cur[2] },
                content: markerImg,
                title: cur[0],
                gmpClickable: true,
            });
            event.stopPropagation;
            marker.addEventListener("mouseover", function() {
            
                infoWindow.close();
                infoWindow.setContent(marker.title);
                infoWindow.open(marker.map, marker);
            });
             marker.addEventListener("mouseout", function() {
            
                infoWindow.close();
            });
            //pass lat and long in this function
            marker.addEventListener("click", myFunction);
        };
        
        markerImg.onerror = function() {
            console.error("Error loading image:", markerImg.src);
        };
    }
}


// pass latitude and longitude here?
function myFunction() {
		event.stopPropagation;
	window.location.href='second.html';
}

function markerfunction() {
    for(let i=0; i<markers.length; i++){
        const cur=markers[i];
        // A marker with a with a URL pointing to a PNG.

    
        const beachFlagImg = document.createElement("img");

        beachFlagImg.src ="https://static.vecteezy.com/system/resources/previews/027/249/118/original/squirrel-natural-with-a-kawaii-face-cute-cartoon-ai-generate-png.png";
        beachFlagImg.onload = function() {
            console.log("Image loaded successfully.");
        };
        
        beachFlagImg.onerror = function() {
            console.error("Error loading image:", beachFlagImg.src);
        };
        const beachFlagMarkerView = new AdvancedMarkerElement({
        map,
        position: { lat: cur[1], lng: cur[2] },
        content: beachFlagImg,
        title: "A marker using a custom PNG Image",
        });
        //
        /*const image ={
            url: cur[3],
            scaledSize: new google.maps.Size(50, 50)
        }
        const marker = new google.maps.Marker({
            map,
            position: { lat: cur[1], lng: cur[2] },
            icon:image,
            title: cur[0],
            animation:google.maps.Animation.DROP
        });
        const infowindow=new google.maps.InfoWindow({
            content: cur[0]
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });*/
    }
}
markers=[
    ["Squirrel 1",
        28.60232378525625,
        -81.2004139516097,
        "https://static.vecteezy.com/system/resources/previews/027/249/118/original/squirrel-natural-with-a-kawaii-face-cute-cartoon-ai-generate-png.png",
    ]
]
//initMap();
initMap(markers);/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('imageInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            // Use FileReader to read the image
            const reader = new FileReader();
            reader.onload = function(e) {
                // Use EXIF to get data
                Exif.getData(file, function() {
                    const allMetaData = Exif.getAllTags(this); // Get all EXIF tags
                    console.log(allMetaData);
                    // Check if the data is retrieved
                    if (Object.keys(allMetaData).length === 0) {
                        document.getElementById('metadata').innerText = "No EXIF data found.";
                    } else {
                        // Print all metadata in the metadata div
                        document.getElementById('metadata').innerText = JSON.stringify(allMetaData, null, 2);
                        
                        // If you want to extract and display only the GPS data
                        const gpsData = allMetaData.GPSLatitude && allMetaData.GPSLongitude;

                        if (gpsData) {
                            const latitude = allMetaData.GPSLatitude[0] + (allMetaData.GPSLatitude[1] / 60) + (allMetaData.GPSLatitude[2] / 3600);
                            const longitude = allMetaData.GPSLongitude[0] + (allMetaData.GPSLongitude[1] / 60) + (allMetaData.GPSLongitude[2] / 3600);

                            // Adjust for the latitude and longitude direction
                            if (allMetaData.GPSLatitudeRef === "S") latitude *= -1;
                            if (allMetaData.GPSLongitudeRef === "W") longitude *= -1;

                            const coordinates = {
                                Latitude: latitude,
                                Longitude: longitude
                            };

                            // Display the coordinates
                            document.getElementById('metadata').innerText += '\n\nCoordinates:\n' + JSON.stringify(coordinates, null, 2);
                        } else {
                            document.getElementById('metadata').innerText += "\n\nNo GPS data found.";
                        }
                    }
                });
            };
            // Read the file as Data URL
            reader.readAsDataURL(file);
        } else {
            document.getElementById('metadata').innerText = "No file selected.";
        }
    });
});*/