function check() {
	var c=0;
	var q1 = document.quiz.pays.value;
	var q2 = document.quiz.bob.value;
	var q3 = document.quiz.Bombardier.value;
	var q4 = document.quiz.Bill.value;
	var q5 = document.quiz.Youssou.value;
	if(q1=="African") {c=c+20}
	if(q2=="Musicien") {c=c+20}

	if(q3=="Lutteur") {c=c+20}

	if(q4=="USA") {c=c+20}

	if(q5=="chanteur") {c=c+20}

		document.write(c);
}