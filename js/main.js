var categoryCont = [];

var views = [document.querySelector('#whisker-favourites'), document.querySelector('#whisker-all-apps'), document.querySelector('#whisker-category'), document.querySelector('#whisker-search')];
var viewButtons = [document.querySelector('#w-btn-fav'), document.querySelector('#w-btn-lst'), document.querySelector('#w-btn-cat'), document.querySelector('#w-btn-src')];
var currView = 0


function changeCatView(i){
	var btns = document.getElementsByClassName('wc-catbtn');
	var vws = document.getElementsByClassName('wc-catcont');

	if(i >= vws.length)
		return false;

	if(!btns[i].classList.contains('selected'))
		btns[i].classList.add('selected');
	if(vws[i].classList.contains('hidden'))
		vws[i].classList.remove('hidden');

	for(var j = 0; j < vws.length; ++j) {
		if(j != i) {
			if(btns[j].classList.contains('selected'))
				btns[j].classList.remove('selected');
			if(!vws[j].classList.contains('hidden'))
				vws[j].classList.add('hidden');
		}
	}
}

function changeView(i){
	if(i != 3)
		currView = i;
	for(var j = 0; j < views.length; ++j) {
		if(j == i) {
			if(!viewButtons[j].classList.contains('selected'))
				viewButtons[j].classList.add('selected');
			if(views[j].classList.contains('hidden'))
				views[j].classList.remove('hidden');
		} else {
			if(viewButtons[j].classList.contains('selected'))
				viewButtons[j].classList.remove('selected');
			if(!views[j].classList.contains('hidden'))
				views[j].classList.add('hidden');
		}
	}
}

document.querySelector('#whisker-icon').onclick = function(e){
	document.querySelector('#whisker-icon').classList.toggle('selected');
	if(document.querySelector('#whisker-menu').classList.contains('modal-closed'))
		setTimeout(function(){ document.querySelector('#searchText').focus();}, 200);
	document.querySelector('#whisker-menu').classList.toggle('modal-closed');
};

function populateFavourites() {
	for(var item = 0; item < favourites.length; ++item) {
		var span = document.createElement('span');
		var img = document.createElement('img');
		var label = document.createElement('span');

		img.setAttribute('src', 'img/icons/' + applications[favourites[item]].icon + '.png');
		label.textContent = applications[favourites[item]].name;
		span.classList.add('app');

		span.appendChild(img);
		span.appendChild(label);

		document.querySelector('#whisker-favourites').appendChild(span);
	}
}

function populateAllApps(){
	for(var item = 0; item < applications.length; ++item) {
		var span = document.createElement('span');
		var img = document.createElement('img');
		var label = document.createElement('span');

		img.setAttribute('src', 'img/icons/' + applications[item].icon + '.png');
		label.textContent = applications[item].name;
		span.classList.add('app');

		span.appendChild(img);
		span.appendChild(label);

		document.querySelector('#whisker-all-apps').appendChild(span);
	}
}

function populateCategories(){
	var sidebar = document.querySelector('#wc-sidebar');
	var parent = document.querySelector('#whisker-category');
	for(var i = 0; i < categories.length; ++i) {
		var span = document.createElement('span');
		span.textContent = categories[i].name;

		if(i == 0){
			span.classList.add('selected');
		}

		span.classList.add('wc-catbtn');

		(function() {
			var k = i;
			span.addEventListener('click', function(e){
				changeCatView(k);
			});
		}());

		sidebar.appendChild(span);

	}
	for(var i = 0; i < categories.length; ++i) {
		div = document.createElement('div');
		div.id = 'wc-' + categories[i].name;
		div.classList.add('wc-catcont');
		if(i != 0)
			div.classList.add('hidden');
		parent.appendChild(div); 
		categoryCont.push(div);
	}

	for(var i = 0; i < categories.length; ++i) {
		div = document.querySelector('#wc-'+categories[i].name);
		for(var j = 0; j < categories[i].items.length; ++j){
			var span = document.createElement('span');
			var img = document.createElement('img');
			var label = document.createElement('span');

			img.setAttribute('src', 'img/icons/' + applications[categories[i].items[j]].icon + '.png');
			label.textContent = applications[categories[i].items[j]].name;
			span.classList.add('app');

			span.appendChild(img);
			span.appendChild(label);

			div.appendChild(span);
		}
	}
}


function processSearch(){
	var searchBar = document.querySelector('#searchText');
	var text = document.querySelector('#searchText').value;

	text = text.toLowerCase();

	var div = document.querySelector('.seperator');

	if(text == '') {
		div.classList.add('hidden');
		viewButtons[3].classList.add('hidden');
		changeView(currView);
	} else {
		div.classList.remove('hidden');
		viewButtons[3].classList.remove('hidden');
		changeView(3);

		var matchedApps = [], matchedFiles = [], matchedSongs = [];

		for(var i = 0; i < applications.length; ++i)
			if(applications[i].name.toLowerCase().indexOf(text) != -1)
				matchedApps.push(applications[i]);

		for(var i = 0; i < files.length; ++i)
			if(files[i].toLowerCase().indexOf(text) != -1)
				matchedFiles.push(files[i]);

		for(var i = 0; i < songs.length; ++i)
			if(songs[i].toLowerCase().indexOf(text) != -1)
				matchedSongs.push(songs[i]);

		if(matchedApps.length > 0){
			document.querySelector('#ws-A').classList.remove('hidden');
			document.querySelector('#ws-c-A').classList.remove('hidden');
		} else {
			document.querySelector('#ws-A').classList.add('hidden');
			document.querySelector('#ws-c-A').classList.add('hidden');
		}
		document.querySelector('#ws-c-A').innerHTML = "";  
		for(var i = 0; i < matchedApps.length  && i < 4; ++i) {
			var span = document.createElement('span');
			var img = document.createElement('img');
			var label = document.createElement('span');

			img.setAttribute('src', 'img/icons/' + matchedApps[i].icon + '.png');
			label.textContent = matchedApps[i].name;
			span.classList.add('app');

			span.appendChild(img);
			span.appendChild(label);

			document.querySelector('#ws-c-A').appendChild(span);
		}

		if(matchedFiles.length > 0){
			document.querySelector('#ws-F').classList.remove('hidden');
			document.querySelector('#ws-c-F').classList.remove('hidden');
		} else {
			document.querySelector('#ws-F').classList.add('hidden');
			document.querySelector('#ws-c-F').classList.add('hidden');
		}
		document.querySelector('#ws-c-F').innerHTML = "";
		for(var i = 0; i < matchedFiles.length && i < 3; ++i) {
			var span = document.createElement('span');
			var icon = document.createElement('i');
			var label = document.createElement('span');

			icon.classList.add('material-icons');
			icon.classList.add('md-18');
			icon.textContent = 'insert_drive_file';

			label.classList.add('ws-label');
			label.textContent = matchedFiles[i];

			span.appendChild(icon);
			span.appendChild(label);

			document.querySelector('#ws-c-F').appendChild(span);
		}

		if(matchedSongs.length > 0){
			document.querySelector('#ws-S').classList.remove('hidden');
			document.querySelector('#ws-c-S').classList.remove('hidden');
		} else {
			document.querySelector('#ws-S').classList.add('hidden');
			document.querySelector('#ws-c-S').classList.add('hidden');
		}
		document.querySelector('#ws-c-S').innerHTML = "";
		for(var i = 0; i < matchedSongs.length && i < 3; ++i) {
			var span = document.createElement('span');
			var icon = document.createElement('i');
			var label = document.createElement('span');

			icon.classList.add('material-icons');
			icon.classList.add('md-18');
			icon.textContent = 'music_note';

			label.classList.add('ws-label');
			label.textContent = matchedSongs[i];

			span.appendChild(icon);
			span.appendChild(label);

			document.querySelector('#ws-c-S').appendChild(span);
		}

		console.log("\n\n");
	}
}


window.onload = function(e) {
	populateFavourites();
	populateAllApps();
	populateCategories();

	console.log(document.getElementById('w-btn-fav'));
	document.getElementById('w-btn-fav').onclick = function(e) {
		console.log('a');
	}

	for(var i = 0; i < views.length; ++i) {
		(function(){
			var k = i
			viewButtons[k].addEventListener('click', function(e){
				changeView(k);
			});
		}());
	}

	document.querySelector('#searchText').addEventListener('input', e => processSearch());

	setTimeout(function(){ document.querySelector('#searchText').focus();}, 200);

	changeView(0);
}