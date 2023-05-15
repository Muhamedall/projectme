function Calcule(){
    var numReg=parseFloat(document.querySelector("#numRegional").value );
    var numNat=parseFloat(document.querySelector("#numNational").value );
    var numClas=parseFloat(document.querySelector("#numClass").value);
    var myParagraph=document.createElement("p");
     var res;
    res=numReg*0.25+numNat*0.50+numClas*0.25;
    document.getElementById("result").innerHTML=res.toFixed(2);
    
     
            if(res<10){
            document.getElementById("result").appendChild(myParagraph)
            myParagraph.textContent="NOT ADMIS !!";
            document.getElementById("result").style.color="red";
           
        }
        
        else{
            document.getElementById("result").appendChild(myParagraph)
            myParagraph.textContent="CONGARATION ADMIS";
            document.getElementById("result").style.color="green";
        }
    }