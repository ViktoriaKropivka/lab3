function hide(object,trigger) {
    const Btn = document.querySelector(trigger);
    const Block = document.querySelector(object);
    Btn.addEventListener("click", function() {Block.classList.toggle("hide");})
    }
hide(".content",".dropbtn")
hide("#c2","#d2")
