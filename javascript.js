function city() {
	amsterdam = [1500, 500, 1800, 700],
	london = [2500, 1500, 1000, 900],

	ams = amsterdam[0] + amsterdam[1] + amsterdam[2] + amsterdam[3],
	lon = london[0] + london[1] + london[2] + london[3],

	amst = ams / 4,
	lond = lon / 4;

	result = lond - amst

	document.getElementById("aprice").innerHTML = amst;

	document.getElementById("lprice").innerHTML = lond;

	document.getElementById("diff").innerHTML = result + " € ";
}city();








