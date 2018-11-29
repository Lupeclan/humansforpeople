window.hfp = {
    end: new Date(2018, 11, 31)
};
window.addEventListener("load", function () {
    setTimeout(function () {
        setInterval(function () {
            var dif = window.hfp.end.getTime() - new Date().getTime();
            var days = Math.floor(dif / (1000 * 60 * 60 * 24));
            dif -= days * (1000 * 60 * 60 * 24);
            var hours = Math.floor(dif / (1000 * 60 * 60));
            dif -= hours * (1000 * 60 * 60);
            var mins = Math.floor(dif / (1000 * 60));
            dif -= mins * (1000 * 60);
            var seconds = Math.floor(dif / 1000);
            dif -= seconds * 1000;
            var output = "";
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
});
