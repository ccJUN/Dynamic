;(function() {

    // require('./motion');

    document.getElementById('audio').play();
    
    $('.tab li').on('click', function() {
        $('.tab li').removeClass('cur');
        $(this).addClass('cur');
        var index = $(this).index();
        console.log(index);
        if (index == 0) {
            $('.tab1-content').show();
            $('.tab2-content').hide();
        }
        if (index == 1) {
            $('.tab1-content').hide();
            $('.tab2-content').show();
        }
        if (index == 2) {
            window.location.href = 'http://m.join.qq.com/position'
        }
    })
    $('.play').on('click', function() {
        $('audio')[0].pause();
        $('.play').hide();
        $('.stop').show();
    })

    $('.stop').on('click', function() {
        $('audio')[0].play();
        $('.play').show();
        $('.stop').hide();
    })

    // 
    wx.onMenuShareTimeline({
        title: '寻鹅启事》今日火爆开启！--腾讯互娱', // 分享标题
        link: '', // 分享链接
        imgUrl: '', // 分享图标
        success: function() {
            // 用户确认分享后执行的回调函数
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });
    wx.onMenuShareAppMessage({
        title: '互娱校招', // 分享标题
        desc: '寻鹅启事》今日火爆开启！--腾讯互娱', // 分享描述
        link: '', // 分享链接
        imgUrl: '', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function() {
            // 用户确认分享后执行的回调函数
        },
        cancel: function() {
            // 用户取消分享后执行的回调函数
        }
    });

     function autoPlayAudio1() {
        wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
            document.getElementById('audio').play();
        });
    }
    autoPlayAudio1();
})(window,undefined)