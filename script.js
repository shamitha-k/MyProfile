function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const words = ["Web Developer"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			
				deletingEffect();
	   		 return false;

		};
		timer = setTimeout(loopTyping, 130);
	};
	loopTyping();
	
};

function deletingEffect() {
	setTimeout(()=>{
		let word = words[i].split("");
		var loopDeleting = function() {
			if (word.length > 0) {
				word.pop();
				document.getElementById('word').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, 130);
		};
		loopDeleting();
	},1000)
	
};

typingEffect();