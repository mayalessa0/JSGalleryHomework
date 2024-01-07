/*Name this external file gallery.js*/

function upDate(previewPic){
  
  
  var image_src="url(" + previewPic.src + ")";
  
  document.getElementById ("image").style.backgroundImage = image_src;

  document.getElementById ("image").innerHTML = previewPic.alt;
  
}
///////////////////////////////////////

function unDo(){
    
    document.getElementById ("image").style.backgroundImage = "url('')";
  
    document.getElementById ("image").innerHTML = "Hover over an image below to display here.";
		
}
////////////////////////////////
function set_tabfocus(){
  
  console.log("set_tabfocus fuction is running now");
  
  var images= document.querySelectorAll(".preview");
  
  for(var i = 0; i<images.length; i++)   {
    console.log("image index is " + i);
    images[i].setAttribute("tabindex","0");
  }
}