function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0];
}

function nestedTarget(){
  return document.getElementById("nested").querySelectorAll(".target")[0];
}

function deepestChild(){
  const lis= document.getElementById("grand-node");
  
}