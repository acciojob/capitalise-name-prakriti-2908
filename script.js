//your JS code here. If required.
let inp = document.querySelector("#fname");
		inp.addEventListener("blur",upper);
		function upper(){
			let ans = inp.value.toUpperCase();

		inp.value = ans;
		}