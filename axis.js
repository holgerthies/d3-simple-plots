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
      x_range = d3.scale.linear().range([MARGINS.left, width-MARGINS.right])
               .domain(xaxis);
     // range for y axis
      y_range = d3.scale.linear().range([height - MARGINS.top,MARGINS.bottom])
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
                .ticks(8)
                .tickSize(1)
                .orient('left');
      
      // draw x axis
      selection.append('svg:g')
        .attr('class', 'x-axis')
        .attr('transform', 'translate(0, '+(height - MARGINS.bottom)+')')
        .call(xAxis)
        .append("text") // draw axis label
        .attr("x", width/2)
        .attr("dy", 40)
        .text(xtitle);
      
      // draw y axis
      selection.append('svg:g')
        .attr('class', 'y-axis')
        .attr('transform', 'translate('+(MARGINS.left)+', 0)')
        .call(yAxis)
        .append("text") // draw axis label
        .attr("transform", "rotate(-90)")
        .attr("x", -height/2)
        .attr("dy", -30)
         .style("text-anchor", "end")
        .text(ytitle);
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

  // getter and setter for range of xaxis
  my.xrange = function(){
    x_range = d3.scale.linear().range([MARGINS.left, width-MARGINS.right])
               .domain(xaxis);
    return x_range;
  }
  // getter and setter for range of yaxis
  my.yrange = function(){
      y_range = d3.scale.linear().range([height - MARGINS.top,MARGINS.bottom])
               .domain(yaxis);
    return y_range;
  };
  my.xtitle = function(value){
    if(!arguments.length) return xtitle;
    xtitle = value;
    return my;
  };
  
  my.ytitle = function(value){
    if(!arguments.length) return ytitle;
    ytitle = value;
    return my;
  };
  return my;
}
