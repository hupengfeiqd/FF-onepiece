
(function($){
    function Slider(ele,opt){
        var def = {
            // 当前展示第几张图片
            curDisplay:0,
            // 是否自动轮播
            autoPlay:false,
            // 轮播速度
            interval:2000
        };
        // 把默认的属性和传进来的属性进行中和
        this.opts = $.extend({},def,opt);
        // 记录DOM
        this.wrap = ele;
        // 记录轮播第几张图片
        this.curDisplay = this.opts.curDisplay;
        // 存放所有图片的DOM
        this.$img = this.wrap.find("img");
        // 存放图片的数量
        this.imgLength = this.$img.length;
        // 记录第几张图片要轮播
        this.nowIndex = 0;
        // 记录是否自动轮播
        this.autoPlay = this.opts.autoPlay;
        // 计时器
        this.timer = null;
        // 存放计时器
        this.interval = this.opts.interval;
        this.init();
    }
    Slider.prototype.init = function(){
        // 初始化运动
        this.initMove();
        // 绑定事件
        this.bindEvent();
    }
    Slider.prototype.initMove = function(){
        var _this = this;
        // 记录左右各有几张图片
        var hLen = Math.floor(_this.imgLength / 2);
        // 记录左右的图片
        var leftNum,rightNum;
        for(var i = 0; i < hLen; i ++){
            // 左边的图片3D转换
            leftNum = _this.curDisplay - i - 1;
            _this.$img.eq(leftNum).css({
                transform:'translateX(' + (-130 * (i + 1) + 'px) translateZ(' + (300 - i * 100) + 'px) rotateY(25deg)')
            });
            // 右边的图片3D转换
            rightNum = _this.curDisplay + i + 1;
            if (rightNum > this.imgLength - 1) {
                rightNum -= this.imgLength;
            }
            _this.$img.eq(rightNum).css({
                transform:'translateX(' + (130 * (i + 1) + 'px) translateZ(' + (300 - i * 100) + 'px) rotateY(-25deg)')
            });
        }
        // 要展示的图片只改变Z轴
        _this.$img.eq(_this.curDisplay).css({
            transform:'translateZ(450px)'
        });
    }
    // 绑定事件
    Slider.prototype.bindEvent = function(){
        var _this = this;
        // 图片点击事件
        _this.$img.on('click',function(){
            // 每次点击改变所有图片的位置
            _this.nowIndex = $(this).index();
            _this.moving(_this.nowIndex);
        // 鼠标移入图片停止轮播
        }).hover(function(){
            clearInterval(_this.timer);
        // 离开重新轮播
        },function(){
            _this.timer = setInterval(function(){
                _this.play();
            },_this.interval);
        })
        this.timer = setInterval(function(){
            _this.play();
        },this.interval);

    }
    // 图片运动
    Slider.prototype.moving = function(index){
        this.curDisplay = index;
        this.initMove();
    }
    // 如果轮播到最后一张，重置为0，继续轮播
    Slider.prototype.play = function(){
        if(this.autoPlay){
            if(this.nowIndex == this.imgLength - 1){
                this.nowIndex = 0;
            } else {
                this.nowIndex ++;
            }
            this.moving(this.nowIndex);
        }
    }
    $.fn.extend({
        // 封装轮播图插件
        slider:function(options){
            // new一个新的轮播图对象
            new Slider(this,options);
        }
    })
})(jQuery)