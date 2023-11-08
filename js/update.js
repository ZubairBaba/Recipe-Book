var ul = document.getElementById("links");

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "A") {
        var selectedLink = event.target.innerHTML;
        if (selectedLink === "* Coffee Cake") {
            window.location.href = "CoffeeCake.html";
        } else if (selectedLink === "* Oreo Brownie") {
          window.location.href = "OreoBrownie.html";
        } else if (selectedLink === "* Coffee Frosting") {
          window.location.href = "CoffeeFrosting.html";
        } else if (selectedLink === "* ChocolateMousse") {
          window.location.href = "ChocolateMousse.html";
        }
        event.preventDefault(); // Prevent the default link behavior (navigating to the URL)
    }
});
