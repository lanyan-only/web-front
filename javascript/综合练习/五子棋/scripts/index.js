window.onload = function(){
  var ROW = 15,NUM = ROW*ROW,
      sence = document.getElementById('sence'),
      blockOffset =(parseInt(getComputedStyle(sence).width)-ROW)/ROW +'px',
      el,s = true,dict1 = {},dict2 = {};

  for ( var i = 0;  i < ROW;  i++){
    for ( var j = 0;  j < ROW;  j++){
      el = document.createElement('div');
      el.style.width =  blockOffset; el.style.height = blockOffset;
      el.setAttribute('class','block');
      el.setAttribute('data',i+ '_' + j);
      sence.appendChild(el);
    }
  }
  sence.onclick = function(e){
    var el = e.target;
    if( el == this) return;
    if( el.hasAttribute('has-one') ) return;
    var id = el.getAttribute('data');
    if(s){
      el.style.background = '#a4d321';
      if(isHasWinner(id,dict1)){alert('绿赢了!');}
      dict1[id] = true;
      s = false;
      
    }else{
      el.style.background = '#c32';
      if(isHasWinner(id,dict2)){alert('绿赢了!');}
      dict2[id] = true;
      s = true;
    }
    el.setAttribute('has-one','true');
  };
  function isHasWinner(id,dict1){

    var x = Number(id.split('_')[0]);
    var y = Number(id.split('_')[1]);
    var hang = 1,shu = 1, zuoxiexian = 1, youxiexian = 1;
    var tx,ty;
    tx = x; ty = y;
    while(dict1[ tx + '_'+ (ty+1) ]){hang++;ty++;}
    tx = x; ty = y;
    while(dict1[ tx + '_'+ (ty-1) ]){hang++;ty--;}

    tx = x; ty = y;
    while(dict1[ (tx+1) + '_'+ ty ]){shu++;tx++;}
    tx = x; ty = y;
    while(dict1[ (tx-1) + '_'+ ty ]){shu++;tx--;}
    tx = x; ty = y;

    while(dict1[ (tx-1) + '_'+ (ty-1) ]){zuoxiexian++;tx--;ty--;}
    tx = x; ty = y;
    while(dict1[ (tx+1) + '_'+ (ty+1) ]){zuoxiexian++;tx++;ty++;}

    tx = x; ty = y;
    while(dict1[ (tx-1) + '_'+ (ty+1) ]){youxiexian++;tx--;ty++;}
    tx = x; ty = y;
    while(dict1[ (tx+1) + '_'+ (ty-1) ]){youxiexian++;tx++;ty--;}

    console.log(hang,shu,youxiexian,zuoxiexian);
    if(hang == 5 || shu == 5 || youxiexian == 5 || zuoxiexian==5) return true;
    return false;
  }
};
