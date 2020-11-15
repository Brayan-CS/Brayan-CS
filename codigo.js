
require([
    "esri/Map", 
    "esri/views/MapView",  
    "esri/widgets/BasemapGallery",
    "esri/layers/KMLLayer",
    "esri/layers/GeoJSONLayer",
    "esri/layers/Layer"

], function (Map, MapView, BasemapGallery, Layer) {

    var map = new Map({
    basemap: "topo-vector"
  
    });

 
    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [ -74.0817500, 4.6097100], // longitude, latitude
      zoom: 15
      });
  
      function addLayer(layerItemPromise, index) {
        return layerItemPromise.then(function (layer) {
          map.add(layer, index);
        });
      }
      
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

        var trailheadsPortalItem = Layer.fromPortalItem({
          portalItem: {
            id: "b049dfc78a414d13abf33e7f4b8ea971"
          }
        });
        addLayer(trailheadsPortalItem, 0);


});



