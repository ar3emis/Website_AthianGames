(function () {
  buildModal();
})();

function buildModal() {
  // Get the modal
  var modal = document.getElementsByClassName("instructor-modal");
  // Get the button that opens the modal
  var btn = document.getElementsByClassName("instructor-wrapper");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-close");

  var i;
  for (i = 0; i < btn.length; i++) {
    const actualModal = modal[i];
    // When the user clicks on the button, open the modal
    btn[i].onclick = function () {
      actualModal.style.display = "block";
    };
    // When the user clicks on <span> (x), close the modal
    span[i].onclick = function () {
      actualModal.style.display = "none";
    };
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    for (i = 0; i < modal.length; i++) {
      if (event.target == modal[i]) {
        modal[i].style.display = "none";
      }
    }
  };
}
