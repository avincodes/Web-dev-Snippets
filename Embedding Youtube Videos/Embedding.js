// Here is the code to embedding Youtube Videos directly to your website with custom parameters


function embedYoutube(link, ops) {
  var o = $.extend(
    {
      width: 480,
      height: 320,
      params: "",
    },
    ops
  );
  var id = /\?v\=(\w+)/.exec(link)[1];
  return (
    '< iframe style = "display: block;"' +
    'type = "text / html"' +
    'width ="' +
    o.width +
    '"height ="' +
    o.height +
    '"src = "http: //www.youtube.com/embed/' +
    id +
    "?" +
    o.params +
    '&amp;wmode = transparent"frameborder ="0″/>'
  );
}
