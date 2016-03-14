var elems = {
	nav: {
		root: document.querySelector('nav ul'),
		items: document.querySelectorAll('nav li')
	},
	brand: document.getElementById('brand'),
	section: {
		home: document.getElementById('home'),
		weddingDay: document.getElementById('wedding-day'),
		travel: document.getElementById('travel'),
		activities: document.getElementById('activities'),
		photos: document.getElementById('photos'),
		registry: document.getElementById('registry')
	}
};

var state = {
	currentActiveNode: null
};

function removeClass(node, cssClass) {
	if (node.classList.contains(cssClass)) {
		node.classList.remove(cssClass);
	}
}

function addClass(node, cssClass) {
	if (!node.classList.contains(cssClass)) {
		node.classList.add(cssClass);
	}
}

function activate(node) {
	if (node !== state.currentActiveNode) {
		var navElems = [].slice.call(elems.nav.items);
		navElems.push(elems.brand);

		navElems.forEach(function(navNode) {
			removeClass(navNode, 'active');
		});
		node.classList.add('active');
		state.currentActiveNode = node;

		transitionTo(node.dataset.target);
	}
}

function findClosest(node, selector) {
	if (!node) {
		return null;
	} else if (node.tagName.toLowerCase() === selector.toLowerCase()) {
		return node;
	} else {
		return findClosest(node.parentNode, selector);
	}
}

function transitionTo(id) {
	var targetNode = document.getElementById(id);
	Object.keys(elems.section).forEach(function(elemKey) {
		var sectionNode = elems.section[elemKey];
		return sectionNode === targetNode ? addClass(targetNode, 'visible') : removeClass(sectionNode, 'visible');
	});
	window.scrollTo(0,0);
}

// set up events
elems.nav.root.addEventListener('click', function(e) {
	var li = findClosest(e.target, 'li');
	activate(li);
});

elems.brand.addEventListener('click', function() {
	activate(this);
	transitionTo('home');
});

// escallucci animation
var letters = 'Escallon Castellucci'.split(''),
	lettersToDelete = [4,5,6,7,8,9,10,11,12,13],
	llucci = [14,15,16,17,18,19];

addLetters();

function addLetters() {
	var letter = letters.splice(0,1)[0];
	if (letter === undefined) {
		setTimeout(hideLetters, 2000);
		return;
	}

	var span = document.createElement('SPAN');
	span.textContent = letter;
	setTimeout(function() {
		elems.brand.appendChild(span);
		addLetters();
	}, 100);
}

function hideLetters() {
	var whole = document.querySelectorAll('#brand > span');
	var random = Math.floor(Math.random() * lettersToDelete.length);
	var indexToDelete = lettersToDelete.splice(random, 1)[0];
	if (indexToDelete === undefined) {
		// here we could start the next set
		setTimeout(function() {

			moveLlucci();
		}, 1000)

		return;
	}

	var span = whole[indexToDelete];
	setTimeout(function() {
		// span.style.display = 'none';
		span.style.opacity = 0;
		hideLetters();
	}, 150);
}

function moveLlucci() {
	var whole = document.querySelectorAll('#brand > span');
	var random = Math.floor(Math.random() * lettersToDelete.length);
	var startIndex = llucci.splice(random, 1)[0];
	if (startIndex === undefined) {
		// elems.brand.style.color = 'tomato';
		return;
	}

	var endIndex = startIndex - 10;
	var startSpan = whole[startIndex];
	var endSpan = whole[endIndex]
	endSpan.textContent = startSpan.textContent;
	startSpan.style.opacity = 0;
	endSpan.style.opacity = 1;

	moveLlucci();
}
// end escallucci
