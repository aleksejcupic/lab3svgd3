d3.csv('cities.csv', d3.autoType).then(data => {
	var cities = data.filter(datum => datum.eu == true);
	d3.select('.city-count').text(`Number of European Cities: ${cities.length}`);
	renderChart(cities);
});

d3.csv('buildings.csv', d3.autoType).then(data => {
	var buildings = data.sort((a, b) => (a.height_m > b.height_m) ? -1 : 1);
	renderBuildings(buildings);
});