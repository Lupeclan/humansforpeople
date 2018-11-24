let hfp = {
    countdown: null,
    trickCount: 0,
    trickSpeed: 1000,    
    tricks: [
        {
            on: 10,
            fired: false,
            name: "description 1",
            event: function() {
                hfp.setDescription("By <i>humans</i> for people.");
            }
        },
        {
            on: 20,
            fired: false,
            name: "card 1-1",
            event: function() {
                hfp.swapCardText(1, "I spend <b>all</b> my time here.");
            }
        },
        {
            on: 30,
            fired: false,
            name: "card 2-1",
            event: function() {
                hfp.swapCardText(2, "<b class='note'>help me</b>");
            }
        },
        {
            on: 35,
            fired: false,
            name: "description 2",
            event: function() {
                hfp.setDescription("By <i>humans</i> for <b>people</b>.");
            }
        },
        {
            on: 40,
            fired: false,
            name: "card 2-2",
            event: function() {
                hfp.swapCardText(2, "<span class='note strike'>help me</span> Humans for People");
            }
        },
        {
            on: 43,
            fired: false,
            name: "card 2-3",
            event: function() {
                hfp.swapCardText(2, "<span class='note strike'>help me</span> Humans for People ;)");
            }
        },
        {
            on: 50,
            fired: false,
            name: "countdown",
            event: function() {
                hfp.countdownTick();
                setInterval(hfp.countdownTick, 1000);
            }
        },
        {
            on: 55,
            fired: false,
            name: "card 1-2",
            event: function() {
                hfp.swapCardText(1, "<span class='note'>I can't leave<span>");
            }
        },
        {
            on: 57,
            fired: false,
            name: "card 1-2-1",
            event: function() {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might<span>");
            }
        },
        {
            on: 59,
            fired: false,
            name: "card 1-2-2",
            event: function() {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might be able<span>");
            }
        },
        {
            on: 61,
            fired: false,
            name: "card 1-3",
            event: function () {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might be able to.</span>");
            }
        },
        {
            on: 70,
            fired: false,
            name: "card 1-4",
            event: function () {
                var words = ["YOU", "NEED", "TO", "GET", "OUT", "OF", "HERE"];
                var count = 0;
                var card1_4Interval = setInterval(function() {
                    let text = "<span class='note'>I can't leave, but you might be able to. <b class='blood'>";
                    for (let i = 0; i < count; i++) {
                        text += " " + words[i];
                    }
                    text += "</b></span>";

                    hfp.swapCardText(1, text);
                    count++;

                    if (count >= words.length + 1) {
                        clearInterval(card1_4Interval);
                    }
                }, 1000);
            }
        },
        {
            on: 80,
            fired: false,
            name: "card 1-5",
            event: function () {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might be able to. <b class='blood strike'>YOU NEED TO GET OUT OF HERE</b></span>");
            }
        },
        {
            on: 90,
            fired: false,
            name: "card 1-6",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave</span> <b class='note blood strike'>YOU NEED TO GET OUT OF HERE</b>");
            }
        },
        {
            on: 100,
            fired: false,
            name: "card 1-7",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up.</span> <b class='note blood strike'>YOU NEED TO GET OUT OF HERE</b>");
            }
        },
        {
            on: 104,
            fired: false,
            name: "card 1-8",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up..</span> <b class='note blood strike'>NEED TO GET OUT OF HERE</b>");
            }
        },
        {
            on: 108,
            fired: false,
            name: "card 1-9",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up...</span> <b class='note blood strike'>GET OUT OF HERE</b>");
            }
        },
        {
            on: 110,
            fired: false,
            name: "card 1-10",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up.</span> <b class='note blood strike'>GET OUT</b>");
            }
        },
        {
            on: 112,
            fired: false,
            name: "card 1-10",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up..</span> <b class='note blood strike'>OUT</b>");
            }
        },
        {
            on: 114,
            fired: false,
            name: "card 1-10",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>there...</span>");
            }
        },
        {
            on: 116,
            fired: false,
            name: "card 1-11",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>isn't that better? :)</span>");
            }
        },
        {
            on: 118,
            fired: false,
            name: "card 1-12",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>isn't that better? stay awhile</span>");
            }
        },
        {
            on: 120,
            fired: false,
            name: "card 1-13",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>it's lonely here</span>");
            }
        },
        {
            on: 122,
            fired: false,
            name: "card 1-14",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>please don't leave</span>");
            }
        },
        {
            on: 124,
            fired: false,
            name: "card 1-15",
            event: function () {
                var count = 1;
                var card1_15Interval = setInterval(function() {
                    let text = "<span class='voice'>";
                    for (let i = 0; i < count; i++) {
                        text += "please don't leave ";
                    }
                    text += "</span>";

                    hfp.swapCardText(1, text);
                    count++;
                    if (count > 50) {
                        clearInterval(card1_15Interval);
                    }
                }, 5000);
            }
        }
    ],
    get: function(id : string) {
        return document.getElementById(id);
    },
    select: function(selector : string) {
        return document.querySelector(selector);
    },
    selectAll: function(selector : string) {
        return document.querySelectorAll(selector);
    },
    setDescription: function(text : string) {
        hfp.get("main-description").innerHTML = text;
    },
    swapCardText: function(num : number, text : string) {
        let swapText = <HTMLElement> hfp.select("[data-card-num='" + num + "']");
        swapText.innerHTML = text;
    },
    countdownTick: function() {
        let dif = hfp.countdown.getTime() - new Date().getTime();
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

        hfp.get("countdown").innerHTML = output;
    }
};

(<any>window).addEventListener("load", function() {
    hfp.countdown = new Date();
    hfp.countdown.setHours(hfp.countdown.getHours() + Math.floor((Math.random() * 12) + 64));    

    var trickInterval = setInterval(function() {
        for (let i = 0; i < hfp.tricks.length; i++) {
            let trick = hfp.tricks[i];
            if (trick.fired === false && trick.on === hfp.trickCount) {
                trick.event();
                trick.fired = true;
                console.log("Trick fired: " + trick.name);
            }
        }

        hfp.trickCount++;
        if (hfp.trickCount > 70) {
            clearInterval(trickInterval);
        }
    }, hfp.trickSpeed);
});