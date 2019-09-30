var input = d3.select("input");
var newNote = d3.select(".newNote");
input.on("input", function() {
	var note = d3.event.target.value;
	newNote.text(note).classed("hide", note === "");
});
// .on('click', function(){
// 	d3.select(".newNote")
//          .classed('hide', false);
// })
// .on('keydown', function(){
// 	d3.select(".newNote")
// 	.text(input.property('value'));
// });
d3.select("#new-note").on("submit", function() {
	d3.event.preventDefault();
	d3.select("#notes")
		.append("p")
		.classed("note", true)
		.text(input.property("value"));
	newNote.classed("hide", true);
	input.property("value", "");
});

d3.select("#removeBtn").on("click", function() {
	d3.selectAll("#notes p").remove();
});
d3.select("#luckyBtn").on("click", function() {
	var fontSize = Math.floor(Math.random() * 40) + "px";
	var elements = d3.selectAll("#notes p").nodes();
	elements.forEach(function(elem) {
		// console.log(elem);
		d3.select(elem).style(
			"Font-Size",
			Math.floor(Math.random() * 40) + "px"
		);
	});
	// .style("Font-Size", fontSize)
});
