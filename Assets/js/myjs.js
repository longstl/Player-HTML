function load() {
    var MUSIC_API = " https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsObject = JSON.parse(http.responseText);
            var content = '';
            for (var i = 0; i < jsObject.length; i++) {
                var videoItem = '<tr>';
                videoItem += '<td>'+ jsObject[i].id +'</td>';
                videoItem += '<td> <img width="100" height="100" src="' + jsObject[i].thumbnail+ '"> </td>';
                videoItem += '<td>'+ jsObject[i].name +'</td>';
                videoItem += '<td>'+ jsObject[i].author +'</td>';
                videoItem += '<td>'+ jsObject[i].singer +'</td>';
                videoItem += '<td> <button type="button" onclick="doSomeThing(\''+ jsObject[i].link +'\')" '+
                    'src="' + jsObject[i].thumbnail + '">Click Me!</button> </td>';
                videoItem += '</tr>';
                content += videoItem;
            }
            document.getElementById('dataGet').innerHTML = content;
        }
    };
    http.open("GET", MUSIC_API, true);
    http.send();
}

function doSomeThing(musicLink1) {
    var musicLink = document.getElementById('player');
    alert(musicLink1);
    musicLink.src = musicLink1;
}
