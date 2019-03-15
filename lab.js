var ballon = document.getElementById("ballon");

document.addEventListener('keyup', function (event) { 
    var currentSize = parseInt(window.getComputedStyle(ballon, null).getPropertyValue("font-size").split("px")[0]);
    if (event.keyCode == 107)
    {
        currentSize += 15;
        if (currentSize > 60)
        {
            ballon.innerHTML = "💥";
            this.removeEventListener('keyup', arguments.callee);
        }
        else 
            ballon.style.fontSize = currentSize.toString() + "px";
    }
    else if (event.keyCode == 109)
    {
        currentSize -= 15;
        if (currentSize <= 0)
        {
            ballon.innerHTML = "DONE";
            this.removeEventListener('keyup', arguments.callee);        
        }
        else
            ballon.style.fontSize = currentSize.toString() + "px";
    }
});