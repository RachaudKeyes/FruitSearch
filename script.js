const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// filter the fruit list based on user input
function search(str) {
	let results = [];

	// If no input, return empty array
	if(str.length === 0) return results;

	// account for case-sensitivity
	let lowerCasedStr = str.toLowerCase();

	results = fruit.filter(function(word) {
		return word.toLowerCase().includes(lowerCasedStr);
	})

	// return first 5 results
	return results.splice(0,5);
}

// connect search() with event handler
function searchHandler(e) {

	// clear previous suggestions
	suggestions.innerHTML = ''

	// search input value on keyup event
	let results = search(e.target.value);

	// connect results of searchHandler() to showSuggestions()
	showSuggestions(results);
	

function showSuggestions(results, inputVal) {
// add results array as line items to the suggestions list (ul)
	for(i=0; i < results.length; i++) {
		const newLi = document.createElement('li');
		newLi.innerText = results[i];
		suggestions.append(newLi);
		}
	}
}

// Populate the search box with a user’s selected suggestion
function useSuggestion(e) {

	// if the clicked item (target) is a li, change input.value for the search() function
	// to relfect the user's click
	if(e.target.tagName === 'LI') {
		input.value = e.target.innerText;

		// reset suggestions list
		suggestions.innerHTML = '';
	}
}

// hover effect using mouseover
function highlight(e) {
	if(e.target.tagName === 'LI') {
		e.target.classList.add("has-suggestions");
	}
}

// disable hover effect mouseout
function removeHighlight(e) {
	if(e.target.tagName === 'LI') {
		e.target.classList.remove("has-suggestions");
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlight);
suggestions.addEventListener('mouseout', removeHighlight);