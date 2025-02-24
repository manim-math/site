var vid = document.getElementById("video");
var id = URLSearchParams(document.location.search).get("v");
var lnk = "none";
fetch(`https://api.github.com/repos/${gitVideoRepo}/contents/`)
  .then(response => response.json())
  .then(data => {
    data.forEach(file => {
        if (file.name.endsWith('.mp4') && file.name.includes(id)){
            lnk = file.download_url;
        }
    });
});
vid.innerHTML = `
<video width=\"800px\" height=\"450px\" controls>
<source src=\"${lnk}\" type="video/mp4">
</video>`;