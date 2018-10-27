


for(var i=8; i>0; i--)
{
    document.getElementById("top").innerHTML+="<div class='tiv1'>"+ i +"</div>";
    if(i%2==0)
    {
        for(var j=1; j<5; j++)
        {
            document.getElementById("top").innerHTML+="<div class='du1'></div>" + "<div class='du2'></div>";
        }
    }
    else
    {
        for(var j=1; j<5; j++)
        {
            document.getElementById("top").innerHTML+="<div class='du2'></div>" + "<div class='du1'></div>" ;
        }
    }
}
for(i=0; i<8; i++){
    let z='HGFEDCBA';
    document.getElementById("top").innerHTML+="<div class='tar2' style='text-align: center'>"+ z[i] +"</div>"
}
