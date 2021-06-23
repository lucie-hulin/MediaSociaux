loadInsta();
loadInstaCaption();
loadInstaUsername();
loadInstaMedia();
loadInstatemps();

function loadInsta() {
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
            console.log(caption);
            document.getElementById("caption").value=caption ;
            document.getElementById("caption1").value=caption[0] ;
            console.log(url);
            console.log(tps);
        }
    };
    xhr.send();

}

function loadInstaCaption() {
    localStorage.clear();
    var caption = [];
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=caption&access_token=IGQVJVbVFsYnF1cDZA3VG5Yc3N6R2pZATnVHNk9WM00wUGY0YlNESUVsVXZAjamI4R05VY0pxdWY2eWN6bElNR0liVGxHcTdsWGI3ZAWxUOUZA5alc2ZAjh3T25lN3Y4NFBwVTljVUQ0RFZAR'
    );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);
            for (var i=0; i< reponse.data.length; i++)
            {
                caption.push(reponse.data[i].caption);
            }
            console.log(caption);
            document.getElementById("caption").value=caption ;
            document.getElementById("caption1").value=caption[0] ;
            document.getElementById("caption2").value=caption[1] ;
            document.getElementById("caption3").value=caption[2] ;
            document.getElementById("caption4").value=caption[3] ;
            document.getElementById("caption5").value=caption[4] ;
            document.getElementById("caption6").value=caption[5] ;
        }
    };
    xhr.send();
}

function loadInstaUsername() {
    localStorage.clear();
    var username ;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=username&access_token=IGQVJVbVFsYnF1cDZA3VG5Yc3N6R2pZATnVHNk9WM00wUGY0YlNESUVsVXZAjamI4R05VY0pxdWY2eWN6bElNR0liVGxHcTdsWGI3ZAWxUOUZA5alc2ZAjh3T25lN3Y4NFBwVTljVUQ0RFZAR'
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


function loadInstaMedia() {
    localStorage.clear();
    var mediaurl = [] ;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJVbVFsYnF1cDZA3VG5Yc3N6R2pZATnVHNk9WM00wUGY0YlNESUVsVXZAjamI4R05VY0pxdWY2eWN6bElNR0liVGxHcTdsWGI3ZAWxUOUZA5alc2ZAjh3T25lN3Y4NFBwVTljVUQ0RFZAR'
    );
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            let reponse = JSON.parse(xhr.responseText);
            for (var i=0; i< reponse.data.length; i++)
            {
                mediaurl.push(reponse.data[i].media_url);
            }
            console.log(mediaurl);
        }
    };
    xhr.send();
}

function loadInstatemps() {
    localStorage.clear();
    var temps = [] ;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://graph.instagram.com/me/media?fields=timestamp&access_token=IGQVJVbVFsYnF1cDZA3VG5Yc3N6R2pZATnVHNk9WM00wUGY0YlNESUVsVXZAjamI4R05VY0pxdWY2eWN6bElNR0liVGxHcTdsWGI3ZAWxUOUZA5alc2ZAjh3T25lN3Y4NFBwVTljVUQ0RFZAR'
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
        }
    };
    xhr.send();
}

var properties = [
    'name',
    'wins',
    'draws',
    'losses',
    'total',
];

$.each( properties, function( i, val ) {

    var orderClass = '';

    $("#" + val).click(function(e){
        e.preventDefault();
        $('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
        $(this).toggleClass('filter__link--active');
        $('.filter__link').removeClass('asc desc');

        if(orderClass == 'desc' || orderClass == '') {
            $(this).addClass('asc');
            orderClass = 'asc';
        } else {
            $(this).addClass('desc');
            orderClass = 'desc';
        }

        var parent = $(this).closest('.header__item');
        var index = $(".header__item").index(parent);
        var $table = $('.table-content');
        var rows = $table.find('.table-row').get();
        var isSelected = $(this).hasClass('filter__link--active');
        var isNumber = $(this).hasClass('filter__link--number');

        rows.sort(function(a, b){

            var x = $(a).find('.table-data').eq(index).text();
            var y = $(b).find('.table-data').eq(index).text();

            if(isNumber == true) {

                if(isSelected) {
                    return x - y;
                } else {
                    return y - x;
                }

            } else {

                if(isSelected) {
                    if(x < y) return -1;
                    if(x > y) return 1;
                    return 0;
                } else {
                    if(x > y) return -1;
                    if(x < y) return 1;
                    return 0;
                }
            }
        });

        $.each(rows, function(index,row) {
            $table.append(row);
        });

        return false;
    });

});

