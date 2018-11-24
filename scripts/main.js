var hfp = {
    end: null,
    trickCount: 0,
    trickSpeed: 5000,
    tricks: [
        {
            on: 1,
            fired: false,
            name: "description 1",
            event: function () {
                hfp.setDescription("By <i>humans</i> for people.");
            }
        },
        {
            on: 2,
            fired: false,
            name: "card 1-1",
            event: function () {
                hfp.swapCardText(1, "I spend <b>all</b> my time here.");
            }
        },
        {
            on: 3,
            fired: false,
            name: "card 2-1",
            event: function () {
                hfp.swapCardText(2, "<b class='note'>send help</b>");
            }
        },
        {
            on: 3,
            fired: false,
            name: "description 2",
            event: function () {
                hfp.setDescription("By <i>humans</i> for <b>people</b>.");
            }
        },
        {
            on: 4,
            fired: false,
            name: "card 2-2",
            event: function () {
                hfp.swapCardText(2, "<span class='note strike'>send help</span> Humans for People");
            }
        },
        {
            on: 5,
            fired: false,
            name: "card 2-3",
            event: function () {
                hfp.swapCardText(2, "<span class='note strike'>send help</span> Humans for People :)");
            }
        },
        {
            on: 5,
            fired: false,
            name: "card 1-2",
            event: function () {
                hfp.swapCardText(1, "<span class='note'>I can't leave<span>");
            }
        },
        {
            on: 6,
            fired: false,
            name: "countdown",
            event: function () {
                hfp.countdownTick();
                setInterval(hfp.countdownTick, 1000);
            }
        },
        {
            on: 6,
            fired: false,
            name: "card 1-3",
            event: function () {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might be able to.</span>");
            }
        },
        {
            on: 7,
            fired: false,
            name: "card 1-4",
            event: function () {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might be able too. <b class='blood'>YOU NEED TO GET OUT OF HERE</b></span>");
            }
        },
        {
            on: 8,
            fired: false,
            name: "card 1-5",
            event: function () {
                hfp.swapCardText(1, "<span class='note'>I can't leave, but you might be able too. <b class='blood strike'>YOU NEED TO GET OUT OF HERE</b></span>");
            }
        },
        {
            on: 9,
            fired: false,
            name: "card 1-6",
            event: function () {
                hfp.swapCardText(1, "<span class='note'><b class='blood strike'>YOU NEED TO GET OUT OF HERE</b></span>");
            }
        },
        {
            on: 10,
            fired: false,
            name: "card 1-6",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave</span> <b class='blood strike'>YOU NEED TO GET OUT OF HERE</b>");
            }
        },
        {
            on: 11,
            fired: false,
            name: "card 1-7",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up.</span> <b class='blood strike'>YOU NEED TO GET OUT OF</b>");
            }
        },
        {
            on: 12,
            fired: false,
            name: "card 1-8",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up..</span> <b class='blood strike'>NEED TO GET OUT OF</b>");
            }
        },
        {
            on: 13,
            fired: false,
            name: "card 1-9",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>don't leave, I'll clean up...</span> <b class='blood strike'>GET OUT</b>");
            }
        },
        {
            on: 14,
            fired: false,
            name: "card 1-10",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>there!</span>");
            }
        },
        {
            on: 15,
            fired: false,
            name: "card 1-11",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>isn't that better? :)</span>");
            }
        },
        {
            on: 16,
            fired: false,
            name: "card 1-12",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>isn't that better? stay awhile</span>");
            }
        },
        {
            on: 17,
            fired: false,
            name: "card 1-13",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>it's lonely here</span>");
            }
        },
        {
            on: 18,
            fired: false,
            name: "card 1-14",
            event: function () {
                hfp.swapCardText(1, "<span class='voice'>please don't leave</span>");
            }
        },
        {
            on: 19,
            fired: false,
            name: "card 1-15",
            event: function () {
                var count = 1;
                setInterval(function () {
                    var text = "<span class='voice'>";
                    for (var i = 0; i < count; i++) {
                        text += "please don't leave ";
                    }
                    text += "</span>";
                    hfp.swapCardText(1, text);
                    count++;
                }, 5000);
            }
        }
    ],
    get: function (id) {
        return document.getElementById(id);
    },
    select: function (selector) {
        return document.querySelector(selector);
    },
    selectAll: function (selector) {
        return document.querySelectorAll(selector);
    },
    setDescription: function (text) {
        hfp.get("main-description").innerHTML = text;
    },
    swapCardText: function (num, text) {
        var swapText = hfp.select("[data-card-num='" + num + "']");
        swapText.innerHTML = text;
    },
    countdownTick: function () {
        var dif = hfp.end.getTime() - new Date().getTime();
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
        hfp.get("countdown").innerHTML = output;
    }
};
window.addEventListener("load", function () {
    hfp.end = new Date();
    hfp.end.setDate(hfp.end.getDate() + Math.floor((Math.random() * 30) + 5));
    setInterval(function () {
        for (var i = 0; i < hfp.tricks.length; i++) {
            var trick = hfp.tricks[i];
            if (trick.fired === false && trick.on === hfp.trickCount) {
                trick.event();
                trick.fired = true;
                console.log("Trick fired: " + trick.name);
            }
        }
        hfp.trickCount++;
    }, hfp.trickSpeed);
});
