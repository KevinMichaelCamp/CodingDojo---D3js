var bars = d3.select("body")
            .selectAll("div")
            .data([24,16,18,12,22,16]);

bars.enter().append("div")
  .style("background-color", "blue")
  .style("height", function(d) { return d*20+"px"; });
bars.exit().remove();
