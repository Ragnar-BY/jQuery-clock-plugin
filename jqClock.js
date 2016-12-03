/**
 * Created by RomanBuzuk on 03-12-2016.
 *
 * clock plugin
 */
(function ( $ ) {
    clockArray = new Map();
    setInterval(function(){
        clockArray.forEach(function(value, key){
            if (value.action == "start") {
                value.date = new Date(value.date.getTime() + 1000);
                showClock(value);
                clockArray.set(key, value);
            }
        });
    }, 1000);

    $.fn.jqClock = function(options) {

        id = $(this).attr("id");
        switch (options){
            case "stop":
                val = clockArray.get(id);
                if (val != null) {
                    val.action = "stop";
                    clockArray.set(id, val);
                }
                break;
            case "destroy":
                clockArray.delete(id);
                $("#" + id + "_date").remove();
                $("#" + id + "_time").remove();
                if($(this).hasClass("jqclock")) {
                    $(this).removeClass("jqclock");
                }
                break;
            case "start":
                val = clockArray.get(id);
                if (val != null) {
                    val.action = "start";
                    clockArray.set(id, val);
                }
                break;
            default:
                var settings = $.extend({
                    // These are the defaults.
                    id: id,
                    date: new Date(),
                    locale: "en-Us",
                    mFormat: "numeric",
                    hour12: false,
                    showdate: true,
                    action: "start"
                }, options);
                clockArray.set(id, settings);

                if(!$(this).hasClass("jqclock")){
                    $(this).addClass("jqclock");
                }
        }

        function formatDate(date, locale, mFormat){

            options = {
                year: "numeric",
                month: mFormat,
                day: "numeric"
            };
            return date.toLocaleString(locale, options);
        }
        function formatTime(date, locale, h12){

            options = {
                hour12 : h12,
                hour : "numeric",
                minute : "numeric",
                second : "numeric"
            };
            return date.toLocaleString(locale, options);
        }

        showClock = function(el){
            html = "";
            if (el.showdate == true){
                html += "<span id='" + el.id + "_date' class='jqclockdate'>" + formatDate(el.date, el.locale, el.mFormat) + "</span>";
            }
            html += "<span id='" + el.id + "_time' class='jqclocktime'>" + formatTime(el.date, el.locale, el.hour12) + "</span>";
            $("#" + el.id).html(html);
        };
        showClock(settings);
        return this;
    };
}( jQuery ));