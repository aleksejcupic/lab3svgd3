const width2 = 500;
const height2 = 500;
const svg2 = d3.select('.building-chart')
    .append('svg')
    .attr('width', width2)
    .attr('height', height2);

function renderBuildings(data) {
    let rects = svg2
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("y", 10)
        .attr("y", function(d, i) {
            return (i * 20) + 20;
        })
        .attr("width", function(d) {
            return d.heigh_px;
        })
        .attr("height", 20)
        .attr('stroke', 'black')
        .on("click", function(event, d) {
            //do something
        });

        // let text = svg.
        // selectAll(".text")
        // .data(data)
        // .enter()
        // .append("text")
        // .attr("class", "small")
        // .attr("font-size", 11)
        // .attr("text-anchor", "end")
        // .attr("x", function(d){
        //     return 10;
        // })
        // .attr("y", function(d){
        //     return 10;
        // });
}