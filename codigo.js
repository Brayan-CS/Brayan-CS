
require([
    "esri/Map", 
    "esri/views/MapView",  
    "esri/widgets/BasemapGallery",
    "esri/layers/KMLLayer",
    "esri/layers/GeoJSONLayer",
    "esri/layers/Layer",
    "esri/widgets/Editor",
    "esri/views/SceneView"

], function (Map, MapView, BasemapGallery,Layer) {

  
      var map = new Map({
        basemap: "topo-vector",
      
        });

      var control = -1;  
      var control2 = -2;
      const layer_ben = document.getElementById("layerben")
      layer_ben.addEventListener("click", ben)
  
      const layer_mdc = document.getElementById("layermdc")
      layer_mdc.addEventListener("click", mdc)


      function ben(){

        control = control * -1;

        if (control == 1){

            // Creates a layer from a Portal layer item id
       var beneficiarios = Layer.fromPortalItem({
        portalItem: {
          id: "b049dfc78a414d13abf33e7f4b8ea971"
        }
      }).then(function(layer) {
        // Adds layer to the map
        map.add(layer);
        
      });

        }

        if (control ==-1){

        
          map.removeAll()

        }

      

      }
        


      function mdc(){

        control2 = control2 * -1;

        if (control2 == 2){

         // Creates a layer from a Portal layer item id
      var mapa_calor = Layer.fromPortalItem({
        portalItem: {
          id: "2584e2d05a8b499bb6c01ac830c33bc1"
        }
      }).then(function(layer2) {
        // Adds layer to the map
        map.add(layer2);
      });
    }

    if (control2 ==-2){

        
      map.removeAll()

    }




    }
  


  
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [ -74.1117500, 4.6397100], // longitude, latitude
        zoom: 13.5
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



      });
        
       
        

   

        




