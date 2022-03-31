
$(document).ready(()=>{
    var target = document.getElementById("drop");
    console.log("its working");

    for (let index = 0; index < 20; index++) {

        target.innerHTML += "<section>  <article></article>  <article></article>  <article></article>  <article></article> </section> ";
        
    }
    // (()=>{
    
    //     let b = document.querySelector("#btn");
    //     b.addEventListener("click",()=>{
    //         document.querySelectorAll("article")for.style.backgroundColor = "blue";
    //     })
    // })();
    
});

