simplePlot.BarPlot = function(options){
  function my(selection){
    selection.each(function(data, i){
      this.empty(); // clear container
      // range for x axis
      var x_range = d3.scale.ordinal()
                .rangeRoundBands([options.margin_left, width-options.margin_right],0.1)
                .domain(data.map(function(d) {return d.x}));
     // range for y axis
      var y_range = d3.scale.linear().range([height - options.margin_top, options.margin_bottom])
               .domain([0, axis.y_limit]);
    });
  }
  my.width = function(value){
    if(!arguments.length) return width;
    width = value;
    return my;
  }

  my.height = function(value){
    if(!arguments.length) return height;
    height = value;
    return my;
  }



}
