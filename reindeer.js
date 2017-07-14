/**
 * Created by beelarr on 7/14/17.
 */
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("reindeer");

for (let i = 0; i < reindeer.length; i++) {
    let deer = reindeer[i];
    let color = colors[i];
    let match = color + ' ' + deer + ', '
    console.log(deer);
    console.log(color);

    hohohoElement.innerHTML += match;
}

