// draws a simple interactive bar plot
// data has the form
simplePlot.BarPlot = function(options){
  function my(selection){
    selection.selectAll("*").remove(); // clear container
    // draw axis
    var axis=simplePlot.axis()
              .yaxis([0, 100])
              .xaxis([0,10])
              .width(width)
              .height(height);
    var xRange = axis.xrange();
    var yRange = axis.yrange();
    selection.call(axis);
    // draw bar for each element in data
    var data = selection.datum();
    for(i = 0; i < data.length; i++){
      var d=data[i];
      selection.append('rect')
      .attr('class', 'bar-1')
		  .attr('x', xRange(d.x))
		  .attr('y', yRange(d.y))
		   .attr('width', 10) // sets the width of bar
		  .attr('height', (height - 20) - yRange(d.y))
    }
  };
  // get and set width of graph in px
  my.width = function(value){
    if(!arguments.length) return width;
    width = value;
    return my;
  };
  // get and set height of graph in px
  my.height = function(value){
    if(!arguments.length) return height;
    height = value;
    return my;
  };
  return my;


}
