window.hfp = {
    end: new Date(2018, 11, 31)
};
// (<any>window).addEventListener("load", function() {
// setInterval(function() {
//     let dif = (window as any).hfp.end.getTime() - new Date().getTime();
//     let days = Math.floor(dif / (1000 * 60 * 60 * 24));
//     dif -= days * (1000 * 60 * 60 * 24);
//     let hours = Math.floor(dif / (1000 * 60 * 60));
//     dif -= hours * (1000 * 60 * 60);
//     let mins = Math.floor(dif / (1000 * 60));
//     dif -= mins * (1000 * 60);
//     let seconds = Math.floor(dif / 1000);
//     dif -= seconds * 1000;
//     let output = "";
//     if (days > 0) {        
//         output += days + "d ";
//     }
//     if (hours > 0) {
//         output += hours + "h ";
//     }
//     if (mins > 0) {
//         output += mins + "m ";
//     }
//     if (seconds > 0) {
//         output += seconds + "s ";
//     }
//     document.getElementById("countdown").innerHTML = output;
//   }, 1000);
// }); 
