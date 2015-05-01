// draws a simple interactive bar plot
// data has the form
simplePlot.BarPlot = function(options){
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
    // draw bar for each element in data
    var data = selection.datum();
    var nbars = end-start+1;
    var barwidth = 0.9*width/(data.length * nbars); 
    for(i = 0; i < data.length; i++){
      var bardata=data[i]; // data for the current set of bars
      for(j = 0; j < bardata.length; j++)
      {
        var d = bardata[j];
        if(d.x >= start && d.x <= end)
        {
          curr_height = 0;
          for(k = 0; k < d.y.length; k++)// stacked data
          {
            if( hidden.indexOf((i+1)+"-"+(k+1)) == -1)
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
  // shows/hides the bars with given index
  // first index is the group of bars
  // second index is the position in the stack
  my.toggleHidden = function(i, j){
    var index = hidden.indexOf(i+"-"+j);
    if(index == -1){
      hidden.push(i+"-"+j);
    }
    else {
      hidden.splice(index, 1);
    }
    my.redraw();
  }
  return my;


}
