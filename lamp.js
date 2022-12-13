function changeImage() {
    if (
        document.getElementById("myImage").src ===
        "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
        ) 
         {
          document.getElementById("myImage").src =
          "https://i.postimg.cc/6QyTynzr/bulb-on.png";
          document.geElementById("switch").innerHTML = "Desligar";
          document.getElementById("main").classList.remove("bulb-off");
          document.getElementById("main").classList.add("bulb-on");
         } 
    
      else if (
         document.getElementById("myImage").src ===
         "https://i.postimg.cc/6QyTynzr/bulb-on.png"
         )
          {
           document.getElementById("myImage").src =
           "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
           document.getElementById("switch").innerHTML = "Ligar";
           document.getElementById("main").classList.add("bulb-off");
           document.getElementById("main").classList.remove("bulb-on");
          }


}

    
document.getElementById("switch").addEventListener("click", changeImage);