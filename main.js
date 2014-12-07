// Main app for Natlie's first words

var main = (function(){ 

    // List of different screens 
    var screens = [
        "#about",
        "#editor",
        "#slideshow",
        "#stats" ];

    var storage_name = "try"; 
    var data; // All data from the local storage

    // The data consists of a record field, which is an
    // array consisting of dates and words.

    var words = []; // The words to display
    var today = []; // Words of today
    var edit_buffer = "";
    var known = []; 

    function count() {
        var i, total;
        total = 0;
        for (i = 0; i < data.record.length; i += 1) {
            total += data.record[i].words.length;
        }
        return total;
    }

    function today() {
        var now = new Date(Date.now());
        var t = new Date(now.getFullYear(), now.getMonth(),
                         now.getDate());

        return t.dateString();
    }

    function reset() {
        var = i;
        words = [];
        today = data[today()];
        if (!today) {
            today = []; 
        }
        for (i = 0; i < data.record.length; i += 1) {
            known.push.apply(data.record[i].words);
        }
        
    }

    function goto_screen(screen) {
        var i;
        for (i = 0; i < screens.length; i += 1) {
            if (screens[i] === screen) {
                $(screen).removeClass("hidden");
            } else {
                $(screens[i]).addClass("hidden");
            }
        }

        if (screen === "#slideshow") {
            // refresh words
            $("#slideshow").empty();
            $("#slideshow").text(words.join(" "));
        }

        if (screen === "#edit") { 
            $("#edit_input").val(edit_buffer);
        }
    }

    function toggle_offcanvas() {
        $('.row-offcanvas').toggleClass('active');
    }
        
    function goto_about() {
        goto_screen("#about");
        toggle_offcanvas();
    }
    
    function goto_editor() {
        goto_screen("#editor");
        toggle_offcanvas();
        refresh_textarea(words);
    }
    
    function goto_slideshow(option) {
        if (option === "today") {
            words = today;
        }

        goto_screen("#slideshow");
        toggle_offcanvas();
    }

    function goto_stats() {
        goto_screen("#stats");
        toggle_offcanvas();
    }
    
    function refresh_textarea(l) {
        $("#edit_input").val(l.join("\n"));
    }

    function store() {
        var serialized = JSON.stringify(data);
        chrome.storage.sync.set(storage_name, serialized);
    }

    function load() {
        var serialized = chrome.storage.get(storage_name);
        data = JSON.parse(data);
    }
    
    function edit_change_callback() {
        var sep = /\s/; 
        edit_buffer = $("#edit_input").val();
        today = edit_buffer.split(sep);
    }


    $(document).ready(function() {
        $("#nav_about").click(goto_about);
        $("#nav_editor").click(goto_editor);
        $("#nav_today").click(function() { 
            goto_slideshow("today")
        });

        $("#edit_input").change(edit_change_callback);
        
        goto_about();
        $('.row-offcanvas').removeClass('active');
    });


    

    // Initialization
    function initialize() {
        var d1 = {date: Date.parse("10 01 2014");
        
    }



})

})();
