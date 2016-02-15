$(document).ready(function() {

    function customSelect($nativeSelect) {
        $nativeSelect.hide();

        var wrap = $('<div/>', {
            class: 'select-wrap'
        });
        var btn = $('<div/>', {
            class: 'button'
        }).appendTo(wrap);
        var ul = $('<ul/>').appendTo(wrap);
        ul.css('display', 'none');
        var nativeOptions = $nativeSelect.find('option');
        nativeOptions.each(function(ind, option) {
            $('<li/>', {
                text: $(option).text()
                //attr: $(option).val()
            }).appendTo(ul);
            if ( $(option).val() == $nativeSelect.val() ) {
                btn.text( $(option).text() );
            }
            $(this).attr('value',$(option).val());
        });

        /* вставляем wrap перед нативным селектом*/
        $nativeSelect.parent().append(wrap);

        /* клик по кнопке открывает или закрывает меню */
        btn.on('click', function() {
// ul.toggle();
            if ( ul.css('display') == 'none' ) {
// ul.css('display', 'none')
                ul.slideDown();
            } else {
                ul.slideUp();
                // ul.css('display', '')
            }
        });
        /* выбор лишек*/
        $('ul li').click(function(){
            chooseVal = $(this).attr('value');
            $(".select-wrap .button").text($(this).text());
            option = nativeOptions.find("[value='" + chooseVal + "']");
            option.attr('selected', 'selected');
            ul.slideUp();
        });

        $(document).on('click', function(e) {
            var $target = $(e.target);
            if (!$target.closest('.select-wrap').length) {
                ul.slideUp();
            }
        });
    }
    customSelect( $('#sel') );
});