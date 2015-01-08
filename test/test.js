$(function() {
    // --tabs---------------------------------------------------------------------------
    $("#example").tabs({event:'mouseover'})
    $('#example').bind('tabsselect', function(event, ui) {
        $('#show_now').html(ui.index)
    })

    // $("#example").tabs({ fx: { opacity: 'toggle'},selected:0}).tabs('rotate', 3000)
    // $("div[id=^content_] img").mouseenter(function() {
    //     $("#example").tabs('rotate', 0)
    // }).mouseleave(function() {
    //     $("#example").tabs('rotate', 3000)
    // })
    // --progressbar-----------------------------------------------------------------
    function set_progress(w) {
        setInterval(function() {
            w ++
            if (w > 100) {
                w = 0
            }
            $("#progressbar .progress_pre").find('span').html(w)
            $("#progressbar").progressbar({ value: w });
        }, 100)
    }
    set_progress(10)
    // --slider------------------------------------------------------------------------
    $("#slider").slider();
    // --button------------------------------------------------------------------------
    $("#test_button").button();
    // $("#test_button").button( "option", "label", "custom label" );
    // $("#test_button").button( "option", "icons", {primary:'ui-icon-gear',secondary:'ui-icon-triangle-1-s'} );
    // ---------------------------------
    $("#radio").buttonset();
    // ----------------------------------
    var $AUTO_TEXT = []
    $('#add_auto_text').click(function() {
        var text = $("#autocomplete").val()
        if (text != '' && $AUTO_TEXT.indexOf(text) == -1) {
            $AUTO_TEXT.push(text)
            // console.log($AUTO_TEXT)
            $("input#autocomplete").autocomplete({
                source: $AUTO_TEXT
            });
        }
    })
    // ----------------------------------
    $("#accordion").accordion()
    $("#accordion").accordion({ animated: 'bounceslide' });
    $("#accordion").accordion({ collapsible: true });
    // $("#accordion").accordion({ event: 'mouseover' });

})