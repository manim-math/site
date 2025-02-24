var vid = document.getElementById("video");
const gitVideoRepo = "manim-math/video-repo";
var id = new URLSearchParams(document.location.search).get("v");
console.log(id);
var lnk;
fetch(`https://api.github.com/repos/${gitVideoRepo}/contents/`)
  .then(response => response.json())
  .then(data => {
    
    data.forEach(file => {
        if (file.name.endsWith('.mp4')){
            console.log("at least im here");
            console.log((file.name == id + ".mp4") ? file.download_url : "");
            lnk = file.download_url;
        }
    });
});
vid.innerHTML = `
<video width=\"800px\" height=\"450px\" controls>
<source src=\"${lnk}\" type="video/mp4">
</video>`;