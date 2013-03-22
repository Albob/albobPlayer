var bot,
canUseSay = (window.location.href == "http://abauchu.net/les2minutes/bot.html");

bot = bot || {
    apiData : {
        type : "post",
        url : "http://abauchu.net/les2minutes/api.php",
        dataType : "json",
        contentType : "application/x-www-form-urlencoded"
    },
    loginData : {
        format : "json",
        action : "login",
        lgname : "Albob"
    },
    queryInfoData : {
        action : "query",
        prop : "info",
        intoken : "edit",
        format : "json"
    },
    queryContentData : {
        action : "query",
        prop : "revision",
        rvprop : "content",
        format : "json"
    },
    editData : {
        action : "edit",
        createonly : true,
        bot : true,
        summary : "Remplissage initial"
    },
    queryInfo : function($page_name, $on_complete) {
        bot.apiData.data = bot.queryInfoData;
        bot.queryInfoData.titles = $page_name;
        say("Querying info for" + $page_name);
        $.ajax(bot.apiData).error(function () {
            alert("Error during query info call.");
        }).success($on_complete);
    }
};

function say($value) {
    var p;
    
    if (canUseSay) {
        p = document.createElement("p");
        p.appendChild(document.createTextNode($value));
        $("#content").append(p);
    }
    
    console.log($value);
}

function getOnEditCompleteClosure($page_name) {
    return function ($data) {
        say("Edited the page " + $page_name + "Result = " + JSON.stringify($data));
    }
}

function onPageLoaded() {
    say("Hi! The Bot is ready.");
    say("Logging in...");
    bot.loginData.lgpassword = prompt("Password please?");
    bot.apiData.data = bot.loginData;
    $.ajax(bot.apiData).error(function () {
        alert("Error during the 1st call");
    }).success(on1stLoginComplete);
}

function on1stLoginComplete($data) {
    console.log("1st Login success. Result = " + JSON.stringify($data));
    
    if ($data && $data.login && $data.login.result == "NeedToken") {
        bot.loginData.lgtoken = $data.login.token;
        bot.apiData.data = bot.loginData;
        $.ajax(bot.apiData).error(function () {
            alert("Error during the 2nd call");
        }).success(on2ndLoginComplete);
    } else {
        alert("The call to the API is completely broken.");
    }
}
function on2ndLoginComplete($data) {
    console.log("2nd Login success. Result = " + JSON.stringify($data));
    
    if ($data && $data.login && $data.login.result == "Success") {
        say("You're logged in! Token = " + $data.login.lgtoken);
        bot.editData.token = $data.login.lgtoken;
        bot.editData.sessionid = $data.login.sessionid;
        bot.queryInfo("");
    } else {
        alert("The call to the API is completely broken.");
    }
}

function onAPIQueryComplete($result) {
    say("Query complete. Result = " + JSON.stringify($result));
    return;
    /*
    bot.editData.title = "essai_du_bot";
    bot.editData.text = "blablabal";
    bot.editData.token = encodeURIComponent(prompt("Edit token please?"));
    
    say("Creating page " + bot.editData.title);
    bot.apiData.data = bot.editData;
    $.ajax(bot.apiData).success(getOnEditCompleteClosure(bot.editData.title))
    .error(function ($error) {
        say("Editting the page didn't work. Error = " + JSON.stringify($error));
    });
    */
}
