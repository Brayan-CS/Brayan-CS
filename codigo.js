
require([
    "esri/Map", 
    "esri/views/MapView", 
    "esri/widgets/BasemapToggle", 
    "esri/widgets/BasemapGallery",
    "esri/layers/FeatureLayer"
], function (Map, MapView, BasemapGallery, FeatureLayer) {
 
    var map = new Map({
    basemap: "topo-vector"
    });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [ -74.0817500, 4.6097100], // longitude, latitude
    zoom: 15
    });

 


    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
          portal: {
            url: "https://www.arcgis.com",
            useVectorBasemaps: true // Load vector tile basemaps
          },
        }
         
      });
      view.ui.remove(basemapGallery, "top-right");

        const closeMapGallery = document.getElementById("openMenu")
        closeMapGallery.addEventListener("click", openMapg)

        const closeMapGallery2 = document.getElementById("closeMenu")
        closeMapGallery2.addEventListener("click", closeMapg)
        
        function closeMapg(){

            view.ui.remove(basemapGallery, "top-right");
            
           
        }
        function openMapg(){

            view.ui.add(basemapGallery, "top-right");
            
        }
   



        var geojsonLayer = new GeoJSONLayer({
          url: "https://drive.google.com/drive/u/1/my-drive/data.json",
          popupTemplate: template
        });

        map.add(geojsonLayer)
        
});

