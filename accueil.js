
/*var search = require('./search.js');
var tokenpartage =search.tokenpartage;

console.log(tokenpartage);
    loadInstaCaption(tokenpartage);
    loadInstaUsername(tokenpartage);
    loadInstaMedia(tokenpartage);
    loadInstatemps(tokenpartage);*/


/*function loadInsta() {
    localStorage.clear()
    var xhr = new XMLHttpRequest();
    let caption = [];
    let url = [];
    let tps = [];
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=media_url, caption, timestamp&access_token=IGQVJVbVFsYnF1cDZA3VG5Yc3N6R2pZATnVHNk9WM00wUGY0YlNESUVsVXZAjamI4R05VY0pxdWY2eWN6bElNR0liVGxHcTdsWGI3ZAWxUOUZA5alc2ZAjh3T25lN3Y4NFBwVTljVUQ0RFZAR'
        );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);for (var i=0; i< reponse.data.length; i++)
            {
                caption.push(reponse.data[i].caption);
                url.push(reponse.data[i].media_url);
                tps.push(reponse.data[i].timestamp);
            }
            document.getElementById("caption").value=caption ;
            document.getElementById("caption1").value=caption[0] ;
        }
    };
    xhr.send();

}*/

function loadInstaCaption(token) {
    localStorage.clear();
    var caption = [];
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=caption&access_token='+token
    );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);
            for (var i=0; i< reponse.data.length; i++)
            {
                caption.push(reponse.data[i].caption);
                document.getElementById("caption"+i).value=caption[i] ;
            }
            console.log(caption);
            /*document.getElementById("caption").value=caption ;
            document.getElementById("caption1").value=caption[0] ;
            document.getElementById("caption2").value=caption[1] ;
            document.getElementById("caption3").value=caption[2] ;
            document.getElementById("caption4").value=caption[3] ;
            document.getElementById("caption5").value=caption[4] ;
            document.getElementById("caption6").value=caption[5] ;
            document.getElementById("caption7").value=caption[6] ;
            document.getElementById("caption8").value=caption[7] ;
            document.getElementById("caption9").value=caption[8] ;
            document.getElementById("caption10").value=caption[9] ;*/
        }
    };
    xhr.send();
}

function loadInstaUsername(token) {
    localStorage.clear();
    var username ;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=username&access_token='+token
    );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);
            username = reponse.data[0].username;
            console.log(username);
            document.getElementById("user").value=username ;
        }
    };
    xhr.send();
}


function loadInstaMedia(token) {
    localStorage.clear();
    var mediaurl = [] ;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=media_url&access_token='+token
    );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);
            for (var i=0; i< reponse.data.length; i++)
            {
                mediaurl.push(reponse.data[i].media_url);
            }
            console.log(mediaurl);
            let image1 = document.getElementById("url1") ;
            let source1 = image1.getAttribute('src');
            image1.setAttribute('src', mediaurl[0]);
            let image2 = document.getElementById("url2") ;
            let source2 = image2.getAttribute('src');
            image2.setAttribute('src', mediaurl[1]);
            let image3 = document.getElementById("url3") ;
            let source3 = image3.getAttribute('src');
            image3.setAttribute('src', mediaurl[2]);
            let image4 = document.getElementById("url4") ;
            let source4 = image4.getAttribute('src');
            image4.setAttribute('src', mediaurl[3]);
            let image5 = document.getElementById("url5") ;
            let source5 = image5.getAttribute('src');
            image5.setAttribute('src', mediaurl[4]);
            let image6 = document.getElementById("url6") ;
            let source6 = image6.getAttribute('src');
            image6.setAttribute('src', mediaurl[5]);
            let image7 = document.getElementById("url7") ;
            let source7 = image7.getAttribute('src');
            image7.setAttribute('src', mediaurl[6]);
            let image8 = document.getElementById("url8") ;
            let source8 = image8.getAttribute('src');
            image8.setAttribute('src', mediaurl[7]);
            let image9 = document.getElementById("url9") ;
            let source9 = image9.getAttribute('src');
            image9.setAttribute('src', mediaurl[8]);
            let image10 = document.getElementById("url10") ;
            let source10 = image10.getAttribute('src');
            image10.setAttribute('src', mediaurl[9]);
        }
    };
    xhr.send();
}

function loadInstatemps(token) {
    localStorage.clear();
    var temps = [] ;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=timestamp&access_token='+token
    );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);
            for (var i=0; i< reponse.data.length; i++)
            {
                temps.push(reponse.data[i].timestamp);
            }
            console.log(temps);
            var lastpost = temps[0];
            console.log(lastpost);
            var date = new Date(lastpost);
            var datestring = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("last").value=datestring ;
            document.getElementById("lastagain").value=datestring ;
            var post2 = temps[1];
            var date = new Date(post2);
            var post2date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post2").value=post2date ;
            var post3 = temps[2];
            var date = new Date(post3);
            var post3date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post3").value=post3date ;
            var post4 = temps[3];
            var date = new Date(post4);
            var post4date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post4").value=post4date ;
            var post5 = temps[4];
            var date = new Date(post5);
            var post5date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post5").value=post5date ;
            var post6 = temps[5];
            var date = new Date(post6);
            var post6date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post6").value=post6date ;
            var post7 = temps[6];
            var date = new Date(post7);
            var post7date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post6").value=post7date ;
            var post8 = temps[7];
            var date = new Date(post8);
            var post8date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post8").value=post8date ;
            var post9 = temps[8];
            var date = new Date(post9);
            var post4date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post9").value=post9date ;
            var post10 = temps[9];
            var date = new Date(post10);
            var post10date = `le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            document.getElementById("post10").value=post10date ;
        }
    };
    xhr.send();
}
