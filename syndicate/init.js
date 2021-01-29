
(function() {

  var pageElement = document.getElementById("rad-syndicate");
  var pageElementHref = pageElement.children[0];
  var pageError = "<p>We're sorry, the content you are looking for can't be displayed right now. However, you can <a href='" + pageElementHref + "'>access it directly</a>.</p>";
  var request = new XMLHttpRequest();

  request.open('GET', pageElementHref, true);

  request.onload = function() {

    if (request.status >= 200 && request.status < 400) {

      // Success!

      var response = request.responseText;

      pageElement.innerHTML = response;

    } else {

      // We reached our target server, but it returned an error

      pageElement.innerHTML = pageError;

    }

  };

  request.onerror = function() {

    // There was a connection error of some sort

    pageElement.innerHTML = pageError;

  };

  request.send();

})();

// Example Usage

/* @model PublishedContentModel

@{
    ViewBag.Title = Model.PageTitle;
    ViewBag.MetaDescription = Model.PageDescription;
    ViewBag.BodyId = "support";
    ViewBag.PrimaryHeading = ViewBag.Title;
    ViewBag.TertiaryLayout = "true";
}

<div id="rad-syndicate">

    <a href="https://radancy.dev/support/">View Support Guidelines</a>

</div>

<script id="rad-syndicate-init" src="https://tmpworldwide.dev/syndicate/init.js"></script>

*/
