
function Func1()
{
    var Electronics= ["television","Laptop","Phone"];
    var Grocery=["Soap","Powder"];

    var update="";
    var option_item =document.getElementById("cate").value;
    if(option_item=="Electronics")
    {
        for(var i=0;i<Electronics.length;i++)
        {
            update = update +"<option>"+Electronics[i]+"</option>";
        }
        document.getElementById("mydiv").innerHTML=update;
    }
    else if(option_item=="Grocery")
    {
        for(var j=0;j<Grocery.length ;j++)
        {
            update = update +"<option>"+Grocery[j]+"</option>";
        }
        document.getElementById("mydiv").innerHTML = update;
    }
}


        

       function Func2()
       {
           var Quan = document.getElementById("quan").value;

       var res = document.getElementById("mydiv").value;

       if(res=="television")
       {
           var price = Quan*20000;
            document.getElementById("pric").value = price;
       }
      
       
       if(res=="laptop")
       {
           var price = Quan*30000;
           document.getElementById("pric").value = price;
       }
       

       if(res=="Phone")
       {
           var price = Quan*10000;
           document.getElementById("pric").value = price;

       }
       
       if(res=="Soap")
       {
           var price = Quan*40;
           document.getElementById("pric").value = price;
       }
       

       if(res=="Powder")
       {
           var price = Quan*90;
            document.getElementById("pric").value = price;
       }
}


function onReset()
{
    document.getElementById("mydiv").innerHTML="";
}