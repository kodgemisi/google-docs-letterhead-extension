chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    var content = "@font-face {  font-family: 'BloggerSans';  src: url('{BASEURL}BloggerSans.eot');  src: url('{BASEURL}BloggerSans.eot?#iefix') format('embedded-opentype'),    url('{BASEURL}BloggerSans.woff') format('woff'),    url('{BASEURL}BloggerSans.ttf') format('truetype');  font-weight: normal;  font-style: normal;}"
    content = content.replace(/\{BASEURL\}/g, chrome.extension.getURL('font/'))
    styleElement.innerHTML = content

    document.querySelector('head').appendChild(styleElement);

    function update(){
      var nodes = document.querySelectorAll('.kix-wordhtmlgenerator-word-node')
      for(var i = 0; i < nodes.length; i++) {
      var node = nodes[i]
      node.style.fontFamily = 'BloggerSans'
      }
    }

    function antet() {
      (function drawAntet() {
        var antetUrl = chrome.extension.getURL('bg.png');

        $('.kix-page-content-wrapper').css('background', 'transparent');

        $('.kix-page-paginated').css('background', 'transparent')
          .css('background', 'url(' + antetUrl + ')')
          .css('backgroundRepeat', 'no-repeat')
          .css('backgroundSize', 'contain')
          .css('backgroundColor', 'white')
          .css('backgroundPosition', 'center center')
      }())
    }


    $('#docs-help-menu').after('<div class="goog-control menu-button goog-inline-block" role="button" style="-webkit-user-select: none;" aria-expanded="false" aria-haspopup="true" id="kgantet">Antet Ekle</div>')

    $('#docs-help-menu').after('<div class="goog-control menu-button goog-inline-block" role="button" style="-webkit-user-select: none;" aria-expanded="false" aria-haspopup="true" id="kgfont">Font Değiştir</div>')

    $('#kgfont').click(update)
    $('#kgantet').click(antet)


  }
  }, 10);
});
