var characters = ["Tracer", "Reaper", "Junkrat", "Hanzo", "Mercy", "Roadhog", "Zarya"];

for(i=0; i<characters.length; i++){
    var char = "<div class='character'><h1>"+characters[i]+"</h1></div>";
    $(".char").append(char);
}
