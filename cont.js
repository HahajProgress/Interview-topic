function enter()
        {
            var showtotal=document.getElementById("showtotal");
            var showadd=document.getElementById("showadd");
            var showexp=document.getElementById("showexp");
            var typetitle=document.getElementsByClassName("typetitle");
            var typenum=document.getElementsByClassName("typenum");
            var enterbtn=document.getElementsByClassName("enter");
            var arith=document.getElementById("arith");
            var uladd = document.getElementById("addList");
            var ulexp = document.getElementById("expList");

            var li = document.createElement("li");
           
            
         if((typenum[0].value!="")&(typenum[1].value!=""))
         {
            if(arith.value=="add")
            {
                showtotal.innerHTML=(parseInt(typenum[1].value)+parseInt(showtotal.innerHTML));
                showadd.innerHTML=parseInt(typenum[1].value)+parseInt(showadd.innerHTML);
                li.innerHTML = typenum[0].value+"&nbsp;&nbsp; $ &nbsp;&nbsp;"+typenum[1].value+"元";
                li.className="listyle";
　　　　         uladd.appendChild(li);
                console.log("add");
            }
            else if(arith.value=="exs")
            {
                showtotal.innerHTML=parseInt(showtotal.innerHTML)-(parseInt(typenum[1].value));
                showexp.innerHTML=parseInt(typenum[1].value)+parseInt(showexp.innerHTML);
                li.innerHTML = typenum[0].value+"&nbsp;&nbsp; $ &nbsp;&nbsp;"+typenum[1].value+"元";
                li.className="listyle";
                ulexp.appendChild(li);
                console.log("exs");
            }
            console.log("總共:"+parseInt(showtotal.innerHTML)+",輸入的數字:"+parseInt(typenum[0].value));
        }
        else{
            alert("輸入值不能為空值");
        }
            typenum[0].value="";
            typenum[1].value="";
        }