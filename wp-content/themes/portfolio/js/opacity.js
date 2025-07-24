$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('header').css('opacity', 0.8);
        } else {
            $('header').css('opacity', 1);
        }
    });
});

// $(".openbtn").click(function () {//ボタンがクリックされたら

    
//         $('header').css('opacity', 1);
   
// });

$(document).ready(function () {
    // ウィンドウのリサイズイベントを監視
    $(window).resize(function () {
        // ウィンドウの幅が844px以下かどうかをチェック
        if ($(window).width() <= 844) {
            // 幅が844px以下なら、スクロールイベントの処理を無効化
            $(window).off('scroll');
        } else {
            // 幅が844pxより大きい場合は、スクロールイベントの処理を再度有効化
            $(window).scroll(function () {
                if ($(this).scrollTop() > 20) {
                    $('header').css('opacity', 0.8);
                } else {
                    $('header').css('opacity', 1);
                }
            });
        }
    });

    // 初回の実行
    $(window).resize();
});