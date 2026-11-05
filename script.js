(function(){
  "use strict";
  var burger=document.getElementById("burger"),menu=document.getElementById("menu");
  burger.addEventListener("click",function(){
    var o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o);
  });
  menu.addEventListener("click",function(e){
    if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false");}
  });

  var bar=document.getElementById("bar");
  window.addEventListener("scroll",function(){
    var d=document.documentElement,m=Math.max(1,d.scrollHeight-innerHeight);
    bar.style.width=(scrollY/m*100)+"%";
  },{passive:true});

  var items=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});
    },{threshold:.15});
    items.forEach(function(i){io.observe(i);});
  }else{items.forEach(function(i){i.classList.add("in");});}

  var tabs=document.querySelectorAll(".tab"),panels=document.querySelectorAll(".panel"),fig=document.getElementById("fig");
  var caps={core:"FIG. 01 / ESTRUTURA CORE",fluidics:"FIG. 02 / COLECTOR DE FLUIDOS",sync:"FIG. 03 / PLANO DE TEMPORIZAÇÃO"};
  tabs.forEach(function(t){
    t.addEventListener("click",function(){
      var k=t.getAttribute("data-goto");
      tabs.forEach(function(x){var on=x===t;x.classList.toggle("active",on);x.setAttribute("aria-selected",on);});
      panels.forEach(function(p){p.classList.toggle("active",p.getAttribute("data-panel")===k);});
      fig.textContent=caps[k];
    });
  });
})();
