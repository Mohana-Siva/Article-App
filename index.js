    console.log("Hii");
    const btns = document.querySelectorAll(".myBtn");
        btns.forEach(btn => {
            const card = btn.closest(".card-content");
            const mr = card.querySelector(".more");
            const dots = card.querySelector(".dots");
            btn.addEventListener("click",()=>{
            if(dots.style.display==="none"){
            dots.style.display = "inline";
            mr.style.display = "none";
        }
        else{
            dots.style.display="none"
            btn.innerHTML = "Read Less";
            mr.style.display = "inline";
        }
            })
        });
       
    