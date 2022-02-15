onmessage = function coordonnees(e) {
    var x =  Math.floor(Math.random()*1100);
    var y =  Math.floor(Math.random()*1100);
    postMessage([x,y,e[0]]);
    setTimeout("coordonnees(e)",1000);
  }

  