importArtical("common","common_rule_artical");
function importArtical(dist,from){
  var temp = document.getElementById(from);
  var clon = temp.content.cloneNode(true);
  document.getElementById(dist).appendChild(clon);
  console.log(from+" add");
}
