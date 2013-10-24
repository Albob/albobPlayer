/* THIS IS LOS 2 MINUTES DU PEUPLE, THE PLAYER */
/*global playerData, $, console*/
/*jshint browser: true, devel: true, jquery: true */

var Les2Minutes = Les2Minutes || {};
Les2Minutes.mustPrintStack = false;

function say($input, $use_alert) {
	if (console && console.log) {
		console.log($input);

		if (Les2Minutes.mustPrintStack) {
			console.log(new Error().stack);
		}
	} else if ($use_alert) {
		alert($input);
	}
}

function onResize() {
	$("#content").height(window.innerHeight - ($("#header").height() + $("#footer").height() + 10));
}

function clearSources(player) {
	while (player.children.length > 0) {
		player.removeChild(player.children[0]);
	}
}

function loadSources(player, path, filename) {
	var source;

	source = document.createElement('source');
	source.setAttribute('src', path + filename + '.mp3');
	player.appendChild(source);
	source = document.createElement('source');
	source.setAttribute('src', path + filename + '.ogg');
	player.appendChild(source);

	player.load();
}

function listenTo($episode_index) {
	window.location = "#!episode=" + ($episode_index + 1).toString();
}

function playEpisode($episode_index) {
	var player,
	sound_title,
	episode_info;

	player = document.getElementById("audioPlayer");
	clearSources(player);
	loadSources(player, playerData.base_url, playerData.episodes[$episode_index].filename);
	player.play();
	sound_title = document.getElementById("soundTitle");
	sound_title.innerHTML = playerData.episodes[$episode_index].title;

	$('.played').removeClass('played');
	episode_info = playerData.episodes[$episode_index];
	$('#' + episode_info.filename).addClass('played');

	$('#pauseSound').css('display', 'inline');

	$('#playSound').css('display', 'none').off('click').on('click', function () {
		$('#audioPlayer')[0].play();
		$('#playSound').css('display', 'none');
		$('#pauseSound').css('display', 'inline');
	});

	$("#nextSound").off("click").on("click", function () {
		var next_episode_index;

		next_episode_index = (playerData.episodes.length + $episode_index + 1) % playerData.episodes.length;
		listenTo(next_episode_index);
	});

	$("#previousSound").off("click").on("click", function () {
		var prev_episode_index;

		prev_episode_index = (playerData.episodes.length + $episode_index - 1) % playerData.episodes.length;
		listenTo(prev_episode_index);
	});

	$(player).one("ended", function() {
		var next_episode_index;

		if (Les2Minutes.isRandom) {
			next_episode_index = Math.floor(Math.random() * Les2Minutes.data.episodes.length)
		}
		else {
			next_episode_index = $episode_index + 1;
		}

		listenTo(next_episode_index);
	});
}

function onHashChange() {
	var fragment,
	fragment_split,
	hash_fragments,
	episode_index,
	episode_list,
	i,
	episode_box_height,
	top_alignment,
	bottom_alignment,
	first_visible_episode_index,
	last_visible_episode_index;

	hash_fragments = window.location.hash.replace("#!", "").replace("#", "").split("&");

	for (i = 0; i < hash_fragments.length; i += 1) {
		fragment = hash_fragments[i];
		fragment_split = fragment.split("=");

		if (fragment_split[0] === "episode") {
			episode_index = Math.max(0, Math.min(parseInt(fragment_split[1], 10) - 1, 524));
			playEpisode(episode_index);
			episode_list = $('#episodeBoxList').get(0);
			content_height = $('#content').get(0).scrollHeight;
			episode_box_height = episode_list.scrollHeight / episode_list.childElementCount;
			top_alignment = Math.round(episode_index * episode_box_height);
			bottom_alignment
				= Math.round((episode_index + 1 - (content_height / episode_box_height))
					* episode_box_height) + 10;

			first_visible_episode_index = Math.ceil(episode_list.scrollTop / episode_box_height);
			last_visible_episode_index
				= Math.floor((episode_list.scrollTop + content_height) / episode_box_height) - 1;

			if (episode_index < first_visible_episode_index) {
				episode_list.scrollTop = top_alignment;
			}
			else if (episode_index > last_visible_episode_index) {
				episode_list.scrollTop = bottom_alignment;
			}
		}
	}
}

function getEpisodeBoxClosure($episode_index) {
	return function () {
		playEpisode($episode_index);

		$(window).off('hashchange').on('hashchange', onHashChange);
		window.location = "#!episode=" + ($episode_index + 1).toString();
		window.setTimeout(function () {
			$(window).off('hashchange').on("hashchange", {
				callback : playEpisode
			}, onHashChange);
		}, 100);

		$('#audioPlayer').get(0).play(); // hack to enable sound on iOS
	};
}

function pauseEpisode() {
	$('#audioPlayer')[0].pause();
	$('#playSound').css('display', 'inline');
	$('#pauseSound').css('display', 'none');
}

function onRandomButtonClicked() {
	var rand;

	Les2Minutes.isRandom = true;
	rand = Math.floor(Math.random() * Les2Minutes.data.episodes.length);
	listenTo(rand);
}

function onPageLoaded() {
	var i,
	episode_info,
	episode_box,
	box_list,
	play_button,
	span;

	for (i = 0; i < playerData.episodes.length; i += 1) {
		episode_info = playerData.episodes[i];

		episode_box = document.createElement("div");
		episode_box.setAttribute('class', "episode");
		episode_box.setAttribute('id', episode_info.filename);

		play_button = document.createElement("button");
		play_button.appendChild(document.createTextNode("PLAY"));
		play_button.addEventListener("click", getEpisodeBoxClosure(i), false, 0, false);
		$(play_button).addClass("playButton");
		episode_box.appendChild(play_button);

		span = document.createElement("span");
		span.appendChild(document.createTextNode(playerData.episodes[i].series));
		$(span).addClass("seriesLabel");
		$(span).css("color", "0xFF0000");
		episode_box.appendChild(span);

		span = document.createElement("span");
		span.appendChild(document.createTextNode("-"));
		episode_box.appendChild(span);

		span = document.createElement("span");
		span.appendChild(document.createTextNode(playerData.episodes[i].title));
		episode_box.appendChild(span);

		box_list = document.getElementById("episodeBoxList");
		box_list.appendChild(episode_box);
	}

	onHashChange(playEpisode);
	onResize(null);
	$(window).on("hashchange", {
		callback : playEpisode
	}, onHashChange);
	$("#playSound").on("click", getEpisodeBoxClosure(0));
	window.addEventListener("resize", onResize, false, 0, false);

	$("#randomButton").on("click", onRandomButtonClicked);
}

function onFilterTimeout() {
	var i,
	text_input,
	episode_info,
	episode_box;

	text_input = document.getElementById("filterText");

	say('Filtering episodes with "' + text_input.value + '"');

	for (i = 0; i < playerData.episodes.length; i += 1) {
		episode_info = playerData.episodes[i];
		episode_box = document.getElementById(episode_info.filename);

		if (text_input.value !== "" &&
			episode_info.title.toLowerCase().indexOf(text_input.value.toLowerCase()) === -1) {
			episode_box.style.display = "none";
		} else {
			episode_box.style.display = "block";
		}
	}
}

function onFilterChange() {
    if (Les2Minutes.filterTimeoutId !== undefined) {
        window.clearTimeout(Les2Minutes.filterTimeoutId);
    }
    
    Les2Minutes.filterTimeoutId = window.setTimeout(onFilterTimeout, 500);
}
