// Some functions

var getCSV = function (fn) {
    var df = File(docPath + '/' + fn + '.csv')
    df.open()
    data = df.read()
    alert(doc["graphicStyles"].typename)
    alert(docLayers)
}


// settings
var doc = app.activeDocument;
var docPath = doc.path;
var docLayers = doc.layers;
var layerForText = {};

var data = getCSV("data")
