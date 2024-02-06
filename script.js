// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".image");
var modalImg = document.getElementById("modalImage");
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the close icon
var closeIcon = document.querySelector(".close");

// When the user clicks on the close icon, close the modal
closeIcon.onclick = function() {
    modal.style.display = "none";
}