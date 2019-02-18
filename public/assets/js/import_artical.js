function importArtical(dist,from){
  var path='link[href="'+from+'"]';
  console.log(path);
  var link = document.querySelector(path);
  var content = link.import;
  document.getElementById(dist).appendChild(content.cloneNode(true));
}
