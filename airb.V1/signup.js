"use strict";


function passValid()
{   
    var firstPass=document.getElementById("pass").value;
    var name=document.getElementById("eID").value;  
    var cPass=document.getElementById("cPass").value;  
     
    console.log(name)

    if (firstPass.length<6  && cPass.length<6)
      {  
        alert("Password must be at least 6 characters long.");  
        return false;  
      }      
            
    if (firstPass===cPass)
      {  
          return true;  
      }  
    else
      {  
          alert("password must be same!");  
          return false;  
      }  
    
     
}  
