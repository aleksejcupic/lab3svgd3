const width = 700;
const height = 550;
var svg = d3.select('.population-plot')
	.append('svg')
    .attr('width', width)
    .attr('height', height);

function renderChart(data) {
    let circles = svg
        .selectAll(".circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "circle")
        .attr('cx', function (d) {
		    return d.x;
	    })
        .attr("cy", function (d) {
		    return d.y;
        })
        .attr("r", function(d) {
		    return d.population > 1_000_000 ? 8 : 4;
        });
    
    let text = svg.
        selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "small")
        .attr("font-size", 11)
        .attr("text-anchor", "middle")
        .attr("x", function(d){
            return d.x;
        })
        .attr("y", function(d){
            return d.y - 10;
        })
        .text(function(d) {
            return d.population > 1_000_000 ? d.city : "";
        });
}