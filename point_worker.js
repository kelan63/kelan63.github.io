
function coordonnees() {
    var x =  Math.floor(Math.random()*1100);
    var y =  Math.floor(Math.random()*1100);
    //console.log("x= "+x);
    //console.log("y= "+y);
    postMessage([x,y]);
    setTimeout("coordonnees()",1000);
}

coordonnees();