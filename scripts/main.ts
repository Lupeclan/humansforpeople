(window as any).hfp = {
    end: new Date(2018, 11, 31)
};

(<any>window).addEventListener("load", function() {
    setTimeout(function() {
        setInterval(function() {
            let dif = (window as any).hfp.end.getTime() - new Date().getTime();
            let days = Math.floor(dif / (1000 * 60 * 60 * 24));
            dif -= days * (1000 * 60 * 60 * 24);
            let hours = Math.floor(dif / (1000 * 60 * 60));
            dif -= hours * (1000 * 60 * 60);
            let mins = Math.floor(dif / (1000 * 60));
            dif -= mins * (1000 * 60);
            let seconds = Math.floor(dif / 1000);
            dif -= seconds * 1000;
    
            let output = "";
            if (days > 0) {        
                output += days + "d ";
            }
    
            if (hours > 0) {
                output += hours + "h ";
            }
    
            if (mins > 0) {
                output += mins + "m ";
            }
    
            if (seconds > 0) {
                output += seconds + "s ";
            }
    
            document.getElementById("countdown").innerHTML = output;
        }, 1000);
    }, 30000);

    let visitCount = getCookie("vc");
    let newCount = 0; 
    if (visitCount !== "") {
        newCount = parseInt(visitCount);
    } 

    newCount++;
    setCookie("vc", newCount);


    let countText= newCount + " time";
    if (newCount > 1) {
        countText += "s";
    }

    countText += ".";

    document.getElementById("visit-count").innerHTML = countText;

    let userName = "You";
    if (newCount >= 10 && newCount < 25) {
        userName += " - Student";
    } else if (newCount >= 25) {
        userName += " - Disciple";
    }

    document.getElementById("user-name").innerHTML = userName;
});

function setCookie(cname, cvalue) {
    let d = new Date();
    d.setTime(d.getTime() + (20*365));
    let expires = "expires=" + d.toISOString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}