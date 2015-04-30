simplePlot.BarPlot = function(options){
  function my(selection){
    selection.selectAll("*").remove(); // clear container
    var axis=simplePlot.axis()
              .yaxis([0, 100])
              .xaxis([0,100])
              .width(width)
              .height(height);
    selection.call(axis);
  };

  my.width = function(value){
    if(!arguments.length) return width;
    width = value;
    return my;
  };

  my.height = function(value){
    if(!arguments.length) return height;
    height = value;
    return my;
  };
  return my;


}
