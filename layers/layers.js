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
var format_ttblisstair_1 = new ol.format.GeoJSON();
var features_ttblisstair_1 = format_ttblisstair_1.readFeatures(json_ttblisstair_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ttblisstair_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ttblisstair_1.addFeatures(features_ttblisstair_1);
var lyr_ttblisstair_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ttblisstair_1, 
                style: style_ttblisstair_1,
                popuplayertitle: 'Þéttbýlisstaðir',
                interactive: true,
                title: '<img src="styles/legend/ttblisstair_1.png" /> Þéttbýlisstaðir'
            });
var format_vk_2 = new ol.format.GeoJSON();
var features_vk_2 = format_vk_2.readFeatures(json_vk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vk_2.addFeatures(features_vk_2);
var lyr_vk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vk_2, 
                style: style_vk_2,
                popuplayertitle: 'vík',
                interactive: false,
                title: '<img src="styles/legend/vk_2.png" /> vík'
            });
var format_linur__ea__vk_3 = new ol.format.GeoJSON();
var features_linur__ea__vk_3 = format_linur__ea__vk_3.readFeatures(json_linur__ea__vk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linur__ea__vk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linur__ea__vk_3.addFeatures(features_linur__ea__vk_3);
var lyr_linur__ea__vk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linur__ea__vk_3, 
                style: style_linur__ea__vk_3,
                popuplayertitle: 'linur_í_eða_á_vík',
                interactive: false,
                title: '<img src="styles/legend/linur__ea__vk_3.png" /> linur_í_eða_á_vík'
            });
var format__ea__vk_4 = new ol.format.GeoJSON();
var features__ea__vk_4 = format__ea__vk_4.readFeatures(json__ea__vk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__ea__vk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__ea__vk_4.addFeatures(features__ea__vk_4);
var lyr__ea__vk_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__ea__vk_4, 
                style: style__ea__vk_4,
                popuplayertitle: 'í_eða_á_vík',
                interactive: false,
                title: '<img src="styles/legend/_ea__vk_4.png" /> í_eða_á_vík'
            });
var group__vk = new ol.layer.Group({
                                layers: [lyr_vk_2,lyr_linur__ea__vk_3,lyr__ea__vk_4,],
                                fold: 'close',
                                title: '_vík'});

lyr_LightGray_0.setVisible(true);lyr_ttblisstair_1.setVisible(true);lyr_vk_2.setVisible(false);lyr_linur__ea__vk_3.setVisible(false);lyr__ea__vk_4.setVisible(false);
var layersList = [lyr_LightGray_0,lyr_ttblisstair_1,group__vk];
lyr_ttblisstair_1.set('fieldAliases', {'fid': 'fid', 'heiti': 'heiti', 'heimildir1': 'heimildir1', 'label_comb': 'label_comb', 'heimildir2': 'heimildir2', 'heimildir3': 'heimildir3', });
lyr_vk_2.set('fieldAliases', {'fid': 'fid', 'heiti': 'heiti', 'stadarfors': 'stadarfors', 'stadfest': 'stadfest', 'heimildir': 'heimildir', 'stad_beygd': 'stad_beygd', 'label_comb': 'label_comb', 'x_coord': 'x_coord', 'y_coord': 'y_coord', });
lyr_linur__ea__vk_3.set('fieldAliases', {'id': 'id', });
lyr__ea__vk_4.set('fieldAliases', {'id': 'id', 'Text': 'Text', });
lyr_ttblisstair_1.set('fieldImages', {'fid': 'TextEdit', 'heiti': 'TextEdit', 'heimildir1': 'TextEdit', 'label_comb': 'TextEdit', 'heimildir2': 'TextEdit', 'heimildir3': 'TextEdit', });
lyr_vk_2.set('fieldImages', {'fid': '', 'heiti': '', 'stadarfors': '', 'stadfest': '', 'heimildir': '', 'stad_beygd': '', 'label_comb': '', 'x_coord': '', 'y_coord': '', });
lyr_linur__ea__vk_3.set('fieldImages', {'id': 'TextEdit', });
lyr__ea__vk_4.set('fieldImages', {'id': 'TextEdit', 'Text': 'TextEdit', });
lyr_ttblisstair_1.set('fieldLabels', {'fid': 'no label', 'heiti': 'no label', 'heimildir1': 'header label - visible with data', 'label_comb': 'no label', 'heimildir2': 'header label - visible with data', 'heimildir3': 'header label - visible with data', });
lyr_vk_2.set('fieldLabels', {'fid': 'no label', 'heiti': 'no label', 'stadarfors': 'no label', 'stadfest': 'no label', 'heimildir': 'no label', 'stad_beygd': 'no label', 'label_comb': 'no label', 'x_coord': 'no label', 'y_coord': 'no label', });
lyr_linur__ea__vk_3.set('fieldLabels', {'id': 'no label', });
lyr__ea__vk_4.set('fieldLabels', {'id': 'no label', 'Text': 'no label', });
lyr__ea__vk_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});