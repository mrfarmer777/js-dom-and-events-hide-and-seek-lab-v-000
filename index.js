function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
}

function nestedTarget(){
  return document.getElementById("nested").querySelectorAll(".target")[0];
}

function increaseRankBy(n){
  const lis=document.getElementsByClass("ranked-list");
  
  for(let i=0; i<lis.length; i++){
    lis[i].innerHTML=(parseInt(lis[i].innerHTML)+n);
  }
}

function deepestChild(){
  const lis= document.getElementById("grand-node");
  
}