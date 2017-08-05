define(function(require, exports) {
    require('../lib/touch');

    function pageslider(dom) {
        $('body').on('touchmove', function() {
            event.preventDefault();
        });
        var _ = this;
        _.dom = dom;
        _.isFirstTime = false,
            _.curPage = 0,
            _.isMoving = false,
            _.timeoutid = 0,
            _.isPlayAll = 0,
            _.screenWidth = document.documentElement.clientWidth,
            _.screenHeight = document.documentElement.clientHeight,
            _.listLength = _.dom.find('li').length;
        // 函数节流
        _.throttle = function(fn, delay) {
            var timer = null;
            return function() {
                var context = this,
                    args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay); 
            }
        }
        // 向下滑
        _.swipeUp = function() {
            console.log( _.isMoving);
            if (_.curPage >= _.listLength-1  || _.isMoving) {
                return;
            }
            _.isMoving = true;
            console.log(1);
            _.dom.find('ul').css({
                '-webkit-transform': 'translateY(-' + _.screenHeight * (++_.curPage) + 'px) translateZ(0)'
            });
        }
        // 往上滑
        _.swipeDown = function() {
            if (_.curPage <= 0 || _.isMoving) {
                return;
            }
            _.isMoving = true;
            _.dom.find('ul').css({
                '-webkit-transform': 'translateY(-' + _.screenHeight * (--_.curPage) + 'px) translateZ(0)'
            })
        }

        _.dom.on('webkitTransformEnd, webkitTransitionEnd', function() {
            _.isMoving = false;
        })
        //上滑 
        _.dom.on('swipeUp', _.throttle(function() {
                _.swipeUp();
            }), 50)

            //下滑 
            .on('swipeDown', _.throttle(function() {
                _.swipeDown();
            }), 50);

    }
    // alert('test');

    //实例子 
    var swiper  = new pageslider($('.tab1-content'));
    var swiper2 = new pageslider($('.tab2-content')); 

});