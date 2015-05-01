// draws a simple interactive bar plot
// data has the form
simplePlot.BarPlot = function(options){
  function my(selection){
    selection.selectAll("*").remove(); // clear container
    // draw axis
    var axis=simplePlot.axis()
              .yaxis([0, 100])
              .xaxis([start,end])
              .width(width)
              .height(height);
    var xRange = axis.xrange();
    var yRange = axis.yrange();
    selection.call(axis);
    // draw bar for each element in data
    var data = selection.datum();
    var nbars = end-start;
    var barwidth = width/(data.length * nbars)-5; 
    for(i = 0; i < data.length; i++){
      var bardata=data[i]; // data for the current set of bars
      for(j = 0; j < bardata.length; j++)
      {
        var d = bardata[j];
        curr_height = 0;
        for(k = 0; k < d.y.length; k++)// stacked data
        {
          selection.append('rect')
            .attr('class', 'bar-'+(i+1)+'-'+(k+1))
            .attr('x', xRange(d.x)+i*barwidth)
            .attr('y',  yRange(d.y[k]))
            .attr('width', barwidth) // sets the width of bar
            .attr('height', (height - 20) - yRange(d.y[k]))
            .attr('transform', 'translate('+0+', '+-curr_height+')')
            .append('title')
            .text(d.y[k]);
          curr_height += (height - 20) - yRange(d.y[k]);
        }
      }
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
  // get and set index of first bar
  my.start = function(value){
    if(!arguments.length) return start;
    start = value;
    return my;
  };
  // get and set index of last bar
  my.end = function(value){
    if(!arguments.length) return end;
    end = value;
    return my;
  };
  return my;


}
