const width2 = 500;
const height2 = 500;

function renderBuildings(data) {
    var svg = d3.select('.building-chart')
    .append('svg')
    .attr('width', width2)
    .attr('height', height2);

    let rects = svg
        .selectAll(".rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "rect")
        .attr("x", 220)
        .attr("y", function(d, i) {
            return (i * 35) + 10;
        })
        .attr("width", function(d) {
            return d.height_px;
        })
        .attr("height", 30)
        .on("click", function(event, d) {
            let datum = d;
            d3.select(".image")
            .attr("src", function(d) {
                return "img\\" + datum.image;
            });
            d3.select(".height")
            .text(function(d) {
                return datum.height_ft;
            });
            d3.select(".city")
            .text(function(d) {
                return datum.city;
            });
            d3.select(".country")
            .text(function(d) {
                return datum.country;
            });
            d3.select(".floors")
            .text(function(d) {
                return datum.floors;
            });
            d3.select(".completed")
            .text(function(d) {
                return datum.completed;
            });
        });

    let text = svg
        .selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "small")
        .attr("font-size", 13)
        .attr("fill", "white")
        .attr("text-anchor", "end")
        .attr("x", function(d) {
            return d.height_px + 215;
        })
        .attr("y", function(d, i){
            return (i * 35) + 30;
        })
        .text(function(d){
            return d.height_m + " m";
        });

    let text2 = svg
        .selectAll(".text")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "small")
        .attr("font-size", 15)
        .attr("text-anchor", "start")
        .attr("x", 0)
        .attr("y", function(d, i){
            return (i * 35) + 30;
        })
        .text(function(d) {
            return d.building;
        });
}