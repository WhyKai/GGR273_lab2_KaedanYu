ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-251580.545706, 5939475.916108, 889161.966456, 6266794.006703]);
var wms_layers = [];

var format_AlbertaExportedshp_0 = new ol.format.GeoJSON();
var features_AlbertaExportedshp_0 = format_AlbertaExportedshp_0.readFeatures(json_AlbertaExportedshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaExportedshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaExportedshp_0.addFeatures(features_AlbertaExportedshp_0);
var lyr_AlbertaExportedshp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaExportedshp_0, 
                style: style_AlbertaExportedshp_0,
                popuplayertitle: "Alberta Exported.shp",
                interactive: true,
                title: '<img src="styles/legend/AlbertaExportedshp_0.png" /> Alberta Exported.shp'
            });
var format_AlbertaWaterbodies_1 = new ol.format.GeoJSON();
var features_AlbertaWaterbodies_1 = format_AlbertaWaterbodies_1.readFeatures(json_AlbertaWaterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaWaterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterbodies_1.addFeatures(features_AlbertaWaterbodies_1);
var lyr_AlbertaWaterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterbodies_1, 
                style: style_AlbertaWaterbodies_1,
                popuplayertitle: "Alberta Waterbodies",
                interactive: true,
                title: '<img src="styles/legend/AlbertaWaterbodies_1.png" /> Alberta Waterbodies'
            });
var format_FishStocking2024_2 = new ol.format.GeoJSON();
var features_FishStocking2024_2 = format_FishStocking2024_2.readFeatures(json_FishStocking2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStocking2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStocking2024_2.addFeatures(features_FishStocking2024_2);
var lyr_FishStocking2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStocking2024_2, 
                style: style_FishStocking2024_2,
                popuplayertitle: "Fish Stocking (2024)",
                interactive: true,
    title: 'Fish Stocking (2024)<br />\
    <img src="styles/legend/FishStocking2024_2_0.png" /> 0 - 1255<br />\
    <img src="styles/legend/FishStocking2024_2_1.png" /> 1255 - 3216<br />\
    <img src="styles/legend/FishStocking2024_2_2.png" /> 3216 - 6400<br />\
    <img src="styles/legend/FishStocking2024_2_3.png" /> 6400 - 11500<br />\
    <img src="styles/legend/FishStocking2024_2_4.png" /> 11500 - 20000<br />\
    <img src="styles/legend/FishStocking2024_2_5.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStocking2024_2_6.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStocking2024_2_7.png" /> 110000 - 1613075<br />'
        });

lyr_AlbertaExportedshp_0.setVisible(true);lyr_AlbertaWaterbodies_1.setVisible(true);lyr_FishStocking2024_2.setVisible(true);
var layersList = [lyr_AlbertaExportedshp_0,lyr_AlbertaWaterbodies_1,lyr_FishStocking2024_2];
lyr_AlbertaExportedshp_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterbodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStocking2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'Map Auth_1': 'Map Auth_1', 'Map Auth_2': 'Map Auth_2', 'MA3': 'MA3', 'MA4': 'MA4', 'NumStock': 'NumStock', });
lyr_AlbertaExportedshp_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaWaterbodies_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStocking2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'Map Auth_1': 'TextEdit', 'Map Auth_2': 'TextEdit', 'MA3': 'TextEdit', 'MA4': 'TextEdit', 'NumStock': 'Range', });
lyr_AlbertaExportedshp_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaWaterbodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStocking2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'no label', 'STOCKED -': 'inline label - visible with data', 'STOCKING N': 'no label', 'PLANNED ST': 'inline label - always visible', 'Map Author': 'header label - always visible', 'Map Auth_1': 'no label', 'Map Auth_2': 'no label', 'MA3': 'no label', 'MA4': 'no label', 'NumStock': 'inline label - always visible', });
lyr_FishStocking2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});