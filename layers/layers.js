var wms_layers = [];


        var lyr_LightGray_0 = new ol.layer.Tile({
            'title': 'Light Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Thettbylisstadir_1 = new ol.format.GeoJSON();
var features_Thettbylisstadir_1 = format_Thettbylisstadir_1.readFeatures(json_Thettbylisstadir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thettbylisstadir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thettbylisstadir_1.addFeatures(features_Thettbylisstadir_1);
var lyr_Thettbylisstadir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thettbylisstadir_1,
maxResolution:1820.2902998970274,
 
                style: style_Thettbylisstadir_1,
                popuplayertitle: 'Thettbylisstadir',
                interactive: false,
                title: '<img src="styles/legend/Thettbylisstadir_1.png" /> Thettbylisstadir'
            });

lyr_LightGray_0.setVisible(true);lyr_Thettbylisstadir_1.setVisible(true);
var layersList = [lyr_LightGray_0,lyr_Thettbylisstadir_1];
lyr_Thettbylisstadir_1.set('fieldAliases', {'fid': 'fid', 'heiti': 'heiti', 'stadarfors': 'stadarfors', 'stadfest': 'stadfest', 'heimildir': 'heimildir', 'stad_beygd': 'stad_beygd', 'label_comb': 'label_comb', });
lyr_Thettbylisstadir_1.set('fieldImages', {'fid': 'TextEdit', 'heiti': 'TextEdit', 'stadarfors': 'TextEdit', 'stadfest': 'TextEdit', 'heimildir': 'TextEdit', 'stad_beygd': 'TextEdit', 'label_comb': 'TextEdit', });
lyr_Thettbylisstadir_1.set('fieldLabels', {'fid': 'no label', 'heiti': 'inline label - always visible', 'stadarfors': 'no label', 'stadfest': 'no label', 'heimildir': 'no label', 'stad_beygd': 'no label', 'label_comb': 'no label', });
lyr_Thettbylisstadir_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});