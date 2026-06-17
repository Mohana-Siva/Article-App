const myFunction = () =>{
    // if(document.getElementById(myBtn).innerHTML.valueOf=== "Read More"){
        var dots = document.getElementById("dots");
        var btn = document.getElementById("myBtn");
        var mr = document.getElementById("more");
       

        if(dots.style.display==="none"){
            dots.style.display = "inline";
            mr.style.display = "none";
        }
        else{
            dots.style.display="none"
            btn.innerHTML = "Read Less";
            mr.style.display = "inline";
        }

       
    
}
const mmyFunction = () =>{
    
        var ddots = document.getElementById("ddots");
        var bbtn = document.getElementById("myyBtn");
        var mrr = document.getElementById("mmore");

      
        
        if(ddots.style.display==="none"){
            ddots.style.display = "inline";
            mrr.style.display = "none";
        }
        else{
            ddots.style.display="none"
            bbtn.innerHTML = "Read Less";
            mrr.style.display = "inline";
        }
    
}