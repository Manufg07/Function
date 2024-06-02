let add=()=>
{
   let x= document.getElementById("fname").value;
   let y= document.getElementById("lname").value;
   x=Number.parseInt(x);
   y=Number.parseInt(y);
   add=(x+y)
   document.getElementById("disp").innerHTML=`Type of x=${typeof(x)}<br>Type of y=${typeof(y)} <br>Sum of ${x},${y} is:`+add;
}
