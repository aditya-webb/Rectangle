var rect=document.querySelector("#box");
rect.addeventListener("click",function(details){
      
     var loc=bx.getBoundingClientRect();
     var inside=details.clientX-loc.left;
      if(inside<loc.width/2){
        var red1=gsap.utils.mapRange(0,loc.width/2,255,0,details.clientX);
        gsap.to(rect,{
backgroundColor:'rgb(${redcolor},0,0)',
ease: Power4,});  
 }
       else{
        var blue1=gsap.utils.mapRange(loc.width/2,loc.width,0,255,inside);
        gsap.to(rect,{
backgroundColor:'rgb(0,0,${bluecolor})',
ease: Power4,});


      }
});