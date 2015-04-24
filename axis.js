simplePlot.axis = function(config){
  
  function my(){
    // generate axis
    
  }

  my.xaxis_left = function(value){
    if(!arguments.length) return xaxis_left;
    xaxis_left = value;
    return my;
  }
  
  my.xaxis_right = function(value){
    if(!arguments.length) return xaxis_right;
    xaxis_right = value;
    return my;
  }

  my.yaxis_bottom = function(value){
    if(!arguments.length) return yaxis_bottom;
    yaxis_bottom = value;
    return my;
  }
  
  my.yaxis_top = function(value){
    if(!arguments.length) return yaxis_top;
    yaxis_top = value;
    return my;
  }

  return my;
}
