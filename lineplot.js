// draws a simple interactive line plot
// data has the form
simplePlot.linePlot = function(){
  var selection;
  var hidden=[];
  my.redraw = function(){
    selection.selectAll("*").remove(); // clear container
    // draw axis
    var axis=simplePlot.axis()
              .yaxis([0, 100])
              .xaxis([start,end])
              .width(width)
              .height(height)
              .xtitle(xtitle)
              .ytitle(ytitle);
    var xRange = axis.xrange();
    var yRange = axis.yrange();
    selection.call(axis);
    // draw line for each element in data
    var data = selection.datum();
    // function to compute position of data-point
		var lineFunc = d3.svg.line()
		  .x(function(d) {
		    return xRange(d.x);
		  })
		  .y(function(d) {
		    return yRange(d.y);
		  })
		  .interpolate('linear');
    // used to fill the area below the curve
		var	area = d3.svg.area()
	    .x(function(d) { return xRange(d.x); })
	    .y0(height-20)
	    .y1(function(d) { return yRange(d.y); });
    // function to filter only those values that are in the xrange
    var filter = function(arr){
      var result=[];
      for(k=0; k < arr.length; k++){
        if(arr[k].x >= start && arr[k].x <= end)
          result.push(arr[k]);
      }
      return result;
    }
    for(i = 0; i < data.length; i++){
      if(hidden.indexOf(i+1) == -1)
      {
        var linedata = filter(data[i]);
        // draw line
        selection.append('svg:path')
          .attr('d', lineFunc(linedata))
          .attr('stroke', 'black')
          .attr('class', 'line-'+(i+1))
          .attr('stroke-width', 2)
          .attr("fill", "none");
        // area below the curve
        selection.append('svg:path')
          .attr('d', area(linedata))
          .attr('class', 'area-'+(i+1));
        // draw data points
        for(j = 0; j <linedata.length; j++){
          selection.append('circle')
            .attr('r', 3)
            .attr('cx', xRange(linedata[j].x))
            .attr('cy', yRange(linedata[j].y))
            .attr('class', 'dot-'+(i+1))
            .append('title')
            .text(linedata[j].y);
        }
      }
    }
  }
  function my(sel){
    selection = sel;
    my.redraw();
  };
  // get and set width of graph in px
  my.width = function(value){
    if(!arguments.length) return width;
    width = value;
    return my;
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
  
  // get and set height of graph in px
  my.height = function(value){
    if(!arguments.length) return height;
    height = value;
    return my;
  };
  // get and set index where the line starts
  my.start = function(value){
    if(!arguments.length) return start;
    start = value;
    return my;
  };
  // get and set index where the line end
  my.end = function(value){
    if(!arguments.length) return end;
    end = value;
    return my;
  };
  // shows/hides the line with given index
  my.toggleHidden = function(i){
    var index = hidden.indexOf(i);
    if(index == -1){
      hidden.push(i);
    }
    else {
      hidden.splice(index, 1);
    }
    my.redraw();
  }
  return my;
}
