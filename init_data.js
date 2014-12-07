var init_data = (function() {
    function get_words(text) {
        var sep = /\s/;
        var r =text.split(sep);
        return r.filter(function isempty(s) {
            return s !== "";
        });
    }

    function date_str(month, day) {
        var d = new Date(2014, month, day);
        return d.toDateString();
    }
    
    var old = "goes does they Us your yours two some nice very what\
when where who why buy bird and is the had has have on\
as my at said he she me go you from of his to do was were\
are love\
sat pat rat hat bat cat fat mat am\
bad van fan man in mad flat sit fix can with\
yam rag ran sack yip ham jam jan big six one\
fox zigzag job mom dad ox will top hot red ear\
yellow not pet hen open boy call fun many maybe\
rest finish their again pull begin smile exciting\
group anyone read reading dear good kid play";
    var old2 = "world did little book ms pan pig ball bell run door\
dog class art every baby day happy ill pop up I";
    var words_10_26 = "twice busy really least";
    var words_10_31 = "buzz guy coach laugh fly football foot show";
    var words_11_12 = "for ahead land there"

    return [ { words: get_words(old),
              date: date_str(9, 1)},
             { words: get_words(old2),
               date: date_str(9, 2) },
             { words: get_words(words_10_26),
              date: date_str(9, 26)},
             { words: get_words(words_10_31),
              date: date_str(9, 31)},
             { words: get_words(words_11_12),
               date: date_str(10,12) }];

})();
