/* THIS IS LOS 2 MINUTES DU PEUPLE, THE PLAYER */
/*global playerData, $, console*/
/*jshint browser: true, devel: true, jquery: true */

var Les2Minutes = Les2Minutes || {};
Les2Minutes.mustPrintStack = false;

// Util ///////////////////////////////////////////////////////////////////////////////////////////

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

function normalizeText($text)
{
    var result;

    result = $text.toLowerCase();
    result = result.replace(/[àäâ]/g, "a");
    result = result.replace(/[éèëê]/g, "e");
    result = result.replace(/[ïîì]/g, "i");
    result = result.replace(/[òôö]/g, "o");
    result = result.replace(/[ùûü]/g, "u");
    return result;
}

// !Util //////////////////////////////////////////////////////////////////////////////////////////

function onResize() {
    $("#content").height(window.innerHeight - ($("#header").height() + $("#footer").height() + 10));
}

function clearSources($player) {
    while ($player.children.length > 0) {
        $player.removeChild($player.children[0]);
    }
}

function loadSources($player, $path, $id) {
    var source;

    source = document.createElement('source');
    source.setAttribute('src', $path + $id + '.mp3');
    $player.appendChild(source);
    source = document.createElement('source');
    source.setAttribute('src', $path + $id + '.ogg');
    $player.appendChild(source);

    $player.load();
}

function listenTo($episode_index) {
    window.location = "#!episode=" + ($episode_index + 1).toString();
}

function playEpisode($episode_index) {
    var player,
        title_span,
        group_span,
        episode_info;

    say('Playing episode...');
    episode_info = playerData.episodes[$episode_index];
    player = document.getElementById('audioPlayer');
    clearSources(player);
    loadSources(player, playerData.base_url, episode_info.id);
    player.play();
    title_span = document.getElementById('titleInfo');
    title_span.innerHTML = episode_info.title;
    group_span = document.getElementById('groupInfo');
    group_span.innerHTML = episode_info.group;
    $('#infoBox').css('display', 'inline');
    onResize(null);

    $('.played').removeClass('played');
    $('#' + episode_info.id).addClass('played');

    $('#pauseButton').css('display', 'inline');
    $('#randomButton').animate({opacity: 1});

    $('#playButton').css('display', 'none').off('click').on('click', function () {
        say('Clicked on play button');
        $('#audioPlayer')[0].play();
        $('#playButton').css('display', 'none');
        $('#pauseButton').css('display', 'inline');
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

            if (!Les2Minutes.isMobile) {
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
}

function getEpisodeBoxClosure($episode_index) {
    return function () {
        say('Clicked on play...');
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

function getGroupLabelClosure(i) {
    return function() {
        say('Clicked on group label (index:'+i+')');
        $('#filterText')[0].value = playerData.episodes[i].group;
        $('#filterText')[0].focus();
        onFilterTimeout(); // force filter refresh
    };
}

function pauseEpisode() {
    say('Pausing episode...');
    $('#audioPlayer')[0].pause();
    $('#playButton').css('display', 'inline');
    $('#pauseButton').css('display', 'none');
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

    say('Welcome to the player!'); 

    if (!Les2Minutes.isMobile) {
        for (i = 0; i < playerData.episodes.length; i += 1) {
            episode_info = playerData.episodes[i];

            episode_box = document.createElement("div");
            episode_box.setAttribute('class', "episode");
            episode_box.setAttribute('id', episode_info.id);

            play_button = document.createElement("button");
            play_button.appendChild(document.createTextNode("PLAY"));
            play_button.addEventListener("click", getEpisodeBoxClosure(i), false, 0, false);
            $(play_button).addClass("playButton");
            episode_box.appendChild(play_button);

            span = document.createElement("span");
            span.appendChild(document.createTextNode(playerData.episodes[i].group));
            $(span).addClass("groupLabel");
            $(span).on('click', getGroupLabelClosure(i));
            episode_box.appendChild(span);

            span = document.createElement("span");
            span.appendChild(document.createTextNode("-"));
            episode_box.appendChild(span);

            span = document.createElement("span");
            $(span).addClass('titleLabel');
            span.appendChild(document.createTextNode(playerData.episodes[i].title));
            episode_box.appendChild(span);

            box_list = document.getElementById("episodeBoxList");
            box_list.appendChild(episode_box);
        }
    }

    onHashChange(playEpisode);
    onResize(null);
    $(window).on("hashchange", { callback : playEpisode }, onHashChange);

    $('#filterText').on('focus', function() {
        $('#defaultSearchText').animate({opacity: 0}, "fast");
    });

    $('#filterText').on('blur', function() {
        if (document.getElementById("filterText").value == "")
            $('#defaultSearchText').animate({opacity: 1}, "fast");
        else
            $('#defaultSearchText').animate({opacity: 0}, "fast");
    });

    $('#playButton').on('click', getEpisodeBoxClosure(0));
    $('#pauseButton').on('click', pauseEpisode);
    $("#randomButton").on("click", onRandomButtonClicked);
    window.addEventListener("resize", onResize, false, 0, false);

    // parse transcript
    var color_map = {};
    var color_index = 1;
    var last_prefix = "";
    var chara_div = null;
    var chara_ul = null;

    for (var line_index in Les2Minutes.transcript.lines) {
        var line = Les2Minutes.transcript.lines[line_index];
        var sep_index = line.indexOf(" ");

        if (sep_index == -1) {
            console.log("[Error] Wrong format on line: " + line);
            break;
        }

        var prefix = line.slice(0, sep_index);
        var rest = line.slice(sep_index + 1);
        var chara = Les2Minutes.transcript.characters[prefix];
        var color = color_map[prefix];
        if (color === undefined) {
            color = color_map[prefix] = color_index;
            color_index += 1;
        }

        if (prefix != last_prefix) {
            chara_div = $('<div class="char' + color + '"><strong>' + chara + ':</strong></div>');
            $("#transcript").append(chara_div);
            chara_ul = $('<ul></ul>');
            chara_div.append(chara_ul);
        }

        chara_ul.append('<li>' + rest + '</li>');
        last_prefix = prefix;
    }
}

function onFilterTimeout() {
    var i,
        episode_info,
        episode_box,
        query,
        title,
        group;

    query = normalizeText(document.getElementById("filterText").value);
    say('Filtering episodes with "' + query + '"');

    for (i = 0; i < playerData.episodes.length; i += 1) {
        episode_info = playerData.episodes[i];
        title = normalizeText(episode_info.title);
        group = normalizeText(episode_info.group);
        episode_box = document.getElementById(episode_info.id);

        if (query !== "" && title.indexOf(query) === -1 && group.indexOf(query) === -1) {
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
