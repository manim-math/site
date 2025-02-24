var vid = document.getElementById("video");
var id = URLSearchParams(document.location.search).get("v");
vid.innerHTML = `<video src=\"${id}\" controls></video>`;