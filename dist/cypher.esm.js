function parseGoogleSheetsAPI(data) {
  var values = data.values;
  var headers = values[0];
  var parsedData = [];
  values.shift();
  values.forEach(function (data) {
    var dataSet = {};
    headers.forEach(function (key, index) {
      var value = data[index] || null;
      dataSet[key] = value;
    });
    parsedData.push(dataSet);
  });
  return parsedData;
}

export default parseGoogleSheetsAPI;
//# sourceMappingURL=cypher.esm.js.map
