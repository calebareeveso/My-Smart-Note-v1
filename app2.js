var add = [];
     
function myFunction() {
   
  
   
   var tittle= document.getElementById("tittle").value;
  var addtext= document.getElementById("addtext").value;
 //if input is not Empty
 if(addtext !=="" && tittle !=""){
 //create check box
 
   
   add.push("1");
 document.getElementById("numbers").innerHTML = add.length;
 

 var x = document.createElement("H2");
  var y =document.createTextNode(tittle);
  x.appendChild(y);
  x.className="checkbox";
  
  //input value
  var addtext= document.getElementById("addtext").value;
  
  var list = document.createElement("P")
  var listname =document.createTextNode(addtext);
  listname.className="classname";
  list.appendChild(x);
  list.appendChild(listname);
  list.className="listclass";
   
 var btn = document.createElement("DIV");
 btn.className="btn";
   //create delete button
   var deletebtn = document.createElement("INPUT");
   deletebtn.setAttribute("type","submit");
   deletebtn.value="☒";
   deletebtn.className="deletebtn";
   
   btn.appendChild(deletebtn);
    
  var editbtn = document.createElement("INPUT");
   editbtn.setAttribute("type","submit");
   editbtn.value="✎";
   editbtn.className="editbtn";
   
   btn.appendChild(editbtn);
   
   var exitbtn = document.createElement("INPUT");
   exitbtn.setAttribute("type","submit");
   exitbtn.value="➔";
   exitbtn.className="exitbtn";
   
   btn.appendChild(exitbtn);
   
   
  var savebtn = document.createElement("INPUT");
   savebtn.setAttribute("type","submit");
   savebtn.value="✓";
   savebtn.className="savebtn";
   
 
 btn.appendChild(savebtn);
 
 
 list.appendChild(btn);
 document.getElementById("list").appendChild(list);
 //After sending input value,input becomes empty
  document.getElementById("addtext").value="";
  document.getElementById("tittle").value="";
  
 

 
 
//exit button
exitbtn.onclick=function () {
if(list.contains(editbtn)){
 
 list.contentEditable = false; 
 list.focus();
 list.style.position="relative";
 list.style.width="40%";
 list.style.height="200px";
 list.style.padding="1%";
 list.style.borderRadius="15px";
 x.style.borderTop="none";
  savebtn.style.display="none";
  editbtn.style.display="none";
  exitbtn.style.display="none";
  deletebtn.style.display="none";
  list.style.zIndex="0";
  list.style.margin="3.5%";
  
  list.style.background="rgba(0, 0, 0, 0.096)";

 }
}
 


//save
savebtn.onclick=function () {
if(list.contains(savebtn)){
  deletebtn.style.display="none";
  savebtn.style.display="none";
  editbtn.style.display="block";
  exitbtn.style.display="block";
 list.contentEditable = false;
 }
}
//edit button
editbtn.onclick=function () {
if(list.contains(editbtn)){
 deletebtn.style.display="block";
  savebtn.style.display="block";
  editbtn.style.display="none";
  exitbtn.style.display="none";
 list.contentEditable = true;
 savebtn.contentEditable = false;
 exitbtn.contentEditable = false;
 deletebtn.contentEditable = false;
 list.focus();
 
 }
}
//Delete operation
deletebtn.onclick=function () {
if(list.contains(deletebtn)){
  
  
  add.shift();
 document.getElementById("numbers").innerHTML = add.length;
  
 list.style.display = "none";
 }
}
//checkbox operation
 x.onclick=function () {
 if(list.contains(x)){
 
//  list.classList.toggle("");
 
 }
 }
 
  savebtn.style.display="none";
  editbtn.style.display="none";
  exitbtn.style.display="none";
  deletebtn.style.display="none";
 
 list.addEventListener('dblclick',()=>{
   list.style.width="100%";
   list.style.height="100%";
   list.style.background="#fff";
   list.style.position="absolute";
   list.style.overflowX="hidden";
   list.style.top="0";
   list.style.bottom="0";
   list.style.left="0";
   list.style.right="0";
   list.style.margin="0";
   list.style.padding="0";
   list.style.borderRadius="0";
   list.style.paddingTop="7vh";
   editbtn.style.display="block";
   exitbtn.style.display="block";
   list.style.zIndex="999";
   x.style.borderTop="thin dashed #000";
   
   

 
 
  })
  
  
  const addnote = document.getElementById("addnote");
  addnote.style.display ="none";
}
}
  const notepen = document.getElementById("notepen");
  notepen.addEventListener("click",()=>{
    const dark = document.getElementById("dark");
        dark.classList.remove("darkbg")
    const addnote = document.getElementById("addnote");
    addnote.style.display ="block";
    const down1 = document.getElementById("down1");
    const down = document.getElementById("down");
    down1.classList.toggle("opacity");
    down.classList.toggle("opacity");
    const todoadd1 = document.getElementById("todoadd");
  todoadd1.classList.toggle("notranslate");
  notepen.classList.toggle("notranslate");
 const input2 = document.getElementById("tittle");
 input2.focus();
  })




 const input = document.getElementById("addtext");
 
 input.addEventListener("keyup", function(event) {
 if (event.keyCode === 13) {
 event.preventDefault();
 input.blur();
  myFunction();
 
 }
 });

 const close = document.getElementById("close");
 close.addEventListener("click",()=>{
  const addnote = document.getElementById("addnote");
  addnote.style.display ="none";
 })

 const input2 = document.getElementById("tittle");
 
 input2.addEventListener("keyup", function(event) {
 if (event.keyCode === 13) {
 event.preventDefault();
 input.focus();
 
 }
 });
  
  const dark = document.getElementById("dark");
  dark.addEventListener("click",()=>{
    const todoadd1 = document.getElementById("todoadd");
    const notepen1 = document.getElementById("notepen");
    const down1 = document.getElementById("down1");
    const down = document.getElementById("down");
    down1.classList.toggle("opacity");
    down.classList.toggle("opacity");
    todoadd1.classList.toggle("notranslate");
    notepen1.classList.toggle("notranslate");
    noteplus1.classList.toggle("rotate");
    dark.classList.toggle("darkbg")
  })


  const noteplus1 = document.getElementById("noteplus");
 noteplus1.addEventListener("click",()=>{
  const todoadd1 = document.getElementById("todoadd");
  const notepen1 = document.getElementById("notepen");
  const down1 = document.getElementById("down1");
  const down = document.getElementById("down");
  const dark = document.getElementById("dark");
  down1.classList.toggle("opacity");
  down.classList.toggle("opacity");
  todoadd1.classList.toggle("notranslate");
  notepen1.classList.toggle("notranslate");
  noteplus1.classList.toggle("rotate");
  dark.classList.toggle("darkbg")
 })



 var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value
        

        
        const bold = document.getElementById("Bold");
        bold.addEventListener("click",()=>{

         document.getElementById("post1").style.display="block";

          const addtext = document.getElementById("addtext");
         
        })
        

        const spacing = document.getElementById("space");
        spacing.addEventListener("click",()=>{
        


         document.getElementById("post2").style.display="block";

         

          var slider3 = document.getElementById("myRange3");
          var output2 = document.getElementById("demo2");
          output2.innerHTML = slider3.value +"px"; 
          
          slider3.oninput = function() {
          
          const lspacing = this.value ;
          output2.innerHTML = lspacing +"px";
         
          list.style.letterSpacing = lspacing + "px";
          addtext.style.letterSpacing = lspacing + "px";
          addtext.blur();
          
          }


         document.getElementById("post2").style.display="block";
       
         

          var slider4 = document.getElementById("myRange4");
          var output3 = document.getElementById("demo3");
          output3.innerHTML = slider4.value +"px"; 
          
          slider4.oninput = function() {
          
          const lspacing = this.value ;
          output3.innerHTML = lspacing +"px";
         
          list.style.wordSpacing = lspacing + "px";
          addtext.style.wordSpacing = lspacing + "px";
         
           }
          
         

        })

        const size = document.getElementById("size");
        size.addEventListener("click",()=>{
         document.getElementById("post4").style.display="block";
        
         var slider2 = document.getElementById("myRange2");
         var output1 = document.getElementById("demo1");
         output1.innerHTML = slider2.value; 
         
         slider2.oninput = function() {
         
         const sizes = this.value ;
         output1.innerHTML = sizes +"px";
        
         list.style.fontSize= sizes + "px";
         addtext.style.fontSize= sizes + "px";
         }
        
        })
        


       
        const italic = document.getElementById("ita1");
        italic.addEventListener("click",()=>{
         const list = document.getElementById("list");


        const addtext = document.getElementById("addtext");
        list.classList.toggle("italic1");
        addtext.classList.toggle("italic1");
       })
        
       

        

        
         const color = document.getElementById("color");
         color.addEventListener("click",()=>{
         
          document.getElementById("post3").style.display="block";
          
          

          
          
          const check = document.getElementById("check");
         
         
           
         
         
          const body=document.getElementById("body");
          // body.style.backgroundColor = nav.style.backgroundColor;
           
           const color1 = document.getElementById("c1");
           const color2 = document.getElementById("c2");
           const color3 = document.getElementById("c3");
           const color4 = document.getElementById("c4");
           const color5 = document.getElementById("c5");
           const color6 = document.getElementById("c6");
           const color7 = document.getElementById("c7");
           const color8 = document.getElementById("c8");
           const color9 = document.getElementById("c9");
           const col10 = document.getElementById("c10");
           const col11= document.getElementById("c11");
           const col12 = document.getElementById("c12");
           const col13 = document.getElementById("c13");
           const col14 = document.getElementById("c14");
         
           const nav =document.getElementById("setting"); 

           color1.addEventListener("click",()=>{

            
            
            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");      
           nav.classList.remove("cc2");

           body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc1");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
          
           body.classList.remove("cc2");
           })
          color2.onclick = function (){
         
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc1");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
          
           body.classList.add("cc2");

           nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc2");
          }
          color3.addEventListener("click",()=>{
            body.classList.remove("cc4");
            body.classList.remove("cc2");
            body.classList.remove("cc1");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
         
            body.classList.add("cc3");

            nav.classList.remove("cc4");
           nav.classList.remove("cc2");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc3");
          })
          color4.addEventListener("click",()=>{
            body.classList.remove("cc1");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
         
            body.classList.add("cc4");

            nav.classList.remove("cc2");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc4");
          })
          color5.addEventListener("click",()=>{
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc1");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
         
            body.classList.add("cc5");


            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc2");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc5");
          })
          color6.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc1");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
       
            body.classList.add("cc6");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc2");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc6");
          })
          color7.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc1");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
        
            body.classList.add("cc7");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc2");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc7");
          })
          color8.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc1");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
         
            body.classList.add("cc8");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc2");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc8");
          })
          color9.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc1");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
         
            body.classList.add("cc9");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc2");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc9");
          })
          col10.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc1");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
          
            body.classList.add("cc10");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc2");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc10");
          })
          col11.onclick = function (){
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc1");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
          
            body.classList.add("cc11");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc2");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc11");
          }
          col12.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc1");
            body.classList.remove("cc13");
            body.classList.remove("cc14");
         
          body.classList.add("cc12");

          nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc2");
           nav.classList.remove("cc13");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc12");
          })
          col13.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc1");
            body.classList.remove("cc14");
       
            body.classList.add("cc13");

            nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc2");
           nav.classList.remove("cc14");
         
           nav.classList.add("cc13");
          })
          col14.addEventListener("click",()=>{
          
            body.classList.remove("cc4");
            body.classList.remove("cc3");
            body.classList.remove("cc2");
            body.classList.remove("cc5");
            body.classList.remove("cc6");
            body.classList.remove("cc7");
            body.classList.remove("cc8");
            body.classList.remove("cc9");
            body.classList.remove("cc10");
            body.classList.remove("cc11");
            body.classList.remove("cc12");
            body.classList.remove("cc13");
            body.classList.remove("cc1");
         
          body.classList.add("cc14");

          nav.classList.remove("cc4");
           nav.classList.remove("cc3");
           nav.classList.remove("cc1");
           nav.classList.remove("cc5");
           nav.classList.remove("cc6");
           nav.classList.remove("cc7");
           nav.classList.remove("cc8");
           nav.classList.remove("cc9");
           nav.classList.remove("cc10");
           nav.classList.remove("cc11");
           nav.classList.remove("cc12");
           nav.classList.remove("cc13");
           nav.classList.remove("cc2");
         
           nav.classList.add("cc14");
          })
         
        
          
          
          
          
         })
        
         
         
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
        const addtext = document.getElementById("addtext");
        const list = document.getElementById("list");
        addtext.focus();
        
        const weight= this.value ;
        output.innerHTML = weight;
        
        list.style.fontWeight= weight;
        addtext.style.fontWeight= weight;
        }
        const burger = document.getElementById("burger");
        burger.addEventListener("click",()=>{
          const sideNav = document.getElementById("side-nav");
          sideNav.style.left="0";
          document.body.style.backgroundColor="rgba(0,0,0,0.6)";

        })


        const closeNav = document.getElementById("close-nav");
        closeNav.addEventListener("click",()=>{
          const sideNav = document.getElementById("side-nav");
          sideNav.style.left="-70%";
          document.body.style.backgroundColor="#fff";
        })


        const openSetting = document.getElementById("open-setting");
        openSetting.addEventListener("click",()=>{
          const setting = document.getElementById("setting");
          setting.style.display="block";

          const help = document.getElementById("helpbody");
          help.style.display="none";
                    const sideNav = document.getElementById("side-nav");
          sideNav.style.left="-70%";
       
        })


        const openhelp = document.querySelector(".help");
        openhelp.addEventListener("click",()=>{
          const help = document.getElementById("helpbody");
         help.style.display="block";

         const setting = document.getElementById("setting");
         setting.style.display="none";
                    const sideNav = document.getElementById("side-nav");
          sideNav.style.left="-70%";
       
        })

        
        const openhelps = document.querySelector(".helps");
        openhelps.addEventListener("click",()=>{
          const help = document.getElementById("helpbody");
         help.style.display="block";

         const setting = document.getElementById("setting");
         setting.style.display="none";
                    const sideNav = document.getElementById("side-nav");
          sideNav.style.left="-70%";
       
        })

        const note = document.getElementById("note");
        note.addEventListener("click",()=>{
          const setting = document.getElementById("setting");
          setting.style.display="none";

          const help = document.getElementById("helpbody");
          help.style.display="none";
                    const sideNav = document.getElementById("side-nav");
          sideNav.style.left="-70%";
          document.body.style.backgroundColor="#fff";

        })
        txt="";
        txt+= "<p> Browser  Version : " + navigator.appVersion + "</p>"
        txt+= "<p> Browser Language : " + navigator.language + "</p>"
        txt+= "<p> Browser Code Name : " + navigator.appCodeName + "</p>"
        txt+="<p> Web App Version : 1.0.0 Official"
        document.getElementById("txt").innerHTML=txt;

       
         setTimeout(function myload(){ document.getElementById("load").style.display="none";
        },3000);