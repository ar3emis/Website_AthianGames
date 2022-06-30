// this will handle all single product related code
//Handling image preview for video
//On image click, the video will be played
(function () {
  getVideos();
})();

/**
 * For each video player, create custom thumbnail or
 * use Youtube max resolution default thumbnail and create
 * iframe video.
 */
function getVideos() {
  const existing = document.getElementById("youtube-player").hasChildNodes();
  if (existing) return;

  let v = document.getElementsByClassName("youtube-player");
  for (let n = 0; n < v.length; n++) {
    let p = document.createElement("div");
    let id = v[n].getAttribute("data-id");

    let placeholder = v[n].hasAttribute("data-thumbnail")
      ? v[n].getAttribute("data-thumbnail")
      : "";

    if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
    else p.innerHTML = createThumbail(id);

    v[n].appendChild(p);
    p.addEventListener("click", function () {
      let parent = this.parentNode;
      createIframe(parent, parent.getAttribute("data-id"));
    });
  }
}

/**
 * Create custom thumbnail from data-attribute provided url
 * @param {string} url
 * @return {string} The HTML containing the <img> tag
 */
function createCustomThumbail(url) {
  return (
    '<img class="youtube-thumbnail" id="youtube-thumbnail" src="' +
    url +
    '" alt="Youtube Preview"><div class="youtube-play-btn"></img>'
  );
}

/**
 * Get Youtube default max resolution thumbnail
 * @param {string} id The Youtube video id
 * @return {string} The HTML containing the <img> tag
 */
function createThumbail(id) {
  return (
    '<img class="youtube-thumbnail" id="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
    id +
    '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></img>'
  );
}
/**
 * Create and load iframe in Youtube container
 **/
function createIframe(v, id) {
  let iframe = document.createElement("iframe");
  iframe.setAttribute("src", "//www.youtube.com/embed/" + id + "?autoplay=1&mute=1");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("class", "youtube-iframe");
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; controls"
  );
  v.firstChild.replaceWith(iframe);

  document.getElementById("youtube-thumbnail").remove();
}

/** Pause video on modal close **/
$("#video-modal").on("hidden.bs.modal", function (e) {
  $(this).find("iframe").remove();
});

/** Pause video on modal close **/
$("#video-modal").on("show.bs.modal", function (e) {
  getVideos();
});
