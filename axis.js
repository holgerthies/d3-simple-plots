simplePlot.axis = function(){
  var MARGINS = {
		      top: 20,
		      right: 20,
		      bottom: 20,
		      left: 50
  };

  function my(selection){
      // generate axis
      // range for x axis
      var x_range = d3.scale.linear().range([MARGINS.left, width-MARGINS.right])
               .domain(xaxis);
     // range for y axis
      var y_range = d3.scale.linear().range([MARGINS.bottom, height - MARGINS.top])
               .domain(yaxis);
      // define x axis
      xAxis = d3.svg.axis()
                .scale(x_range)
                .tickSize(1)
                .ticks(xaxis[1]-xaxis[0])
                .orient('bottom');

      // define y axis
      yAxis = d3.svg.axis()
                .scale(y_range)
                .tickSize(1)
                .ticks(8)
                .orient('left');
      
      // draw x axis
      selection.append('svg:g')
        .attr('class', 'x-axis')
        .attr('transform', 'translate(0, '+(height - MARGINS.bottom)+')')
        .call(xAxis);
      // draw y axis
      selection.append('svg:g')
        .attr('class', 'y-axis')
        .attr('transform', 'translate('+(MARGINS.left)+', 0)')
        .call(yAxis);
  };
  
  // set xaxis range, value is array [left,right]
  my.xaxis = function(value){
    if(!arguments.length) return xaxis;
    xaxis = value;
    return my;
  };
  
  
  // set yaxis range, value is array [bottom,top]
  my.yaxis = function(value){
    if(!arguments.length) return yaxis;
    yaxis = value;
    return my;
  };
  
  // width in px
  my.width = function(value){
    if(!arguments.length) return width;
    width = value;
    return my;
  };
  
  // height in px
  my.height = function(value){
    if(!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}
