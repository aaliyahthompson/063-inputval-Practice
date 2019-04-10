//create a click handler for the Post button.
$("button").click(function() {
var comment = $(".comment_class").val();
console.log(comment);
});







// header toggles brands when clicked :)
var header = $(".header");
header.click(function () {
    header.toggleClass("instagram");
    var brand = header.text();
    header.text("Instagram" ? "Facebook" : "Instagram");
});