var vids = document.getElementById('videos');
const gitVideoRepo = "manim-math/video-repo";

var f = "-1";
fetch(`https://api.github.com/repos/${gitVideoRepo}/contents/`)
  .then(response => response.json())
  .then(data => {
    data.forEach(file => {
        if (file.name.endsWith('.png')){
            addVideo(file.name.replace('.png', ''), file.download_url); 
            f = file.download_url.replace('.png', '');
        }
    });
});
function addVideo(vidId, prefile){
    vids.innerHTML += 
    `<div id=\"${vidId}\" class=\"vid\">
    <a href=\"./player?v=${vidId}\"><img src=\"${prefile}\" width=\"320px\" height=\"180\"> 
    <p>${vidId}</p></a>
    </div>`;
}
