<template>
    <!-- 轮播图 -->
    <div class="rotationChart">
        <img src="../assets/images/chart1.jpg" alt="">
        <img src="../assets/images/chart2.jpg" alt="">
        <img src="../assets/images/chart3.jpg" alt="">
        <img src="../assets/images/chart4.jpg" alt="">
        <img src="../assets/images/chart5.jpg" alt="">
        <img src="../assets/images/chart6.jpg" alt="">
        <img src="../assets/images/chart7.jpg" alt="">
    </div>
</template>

<script>
export default {
    mounted () {
        let _this = this;
        $(function(){
            $(".rotationChart").slider({
                curDisplay:0,
                autoPlay:true,
                interval:2000
            })
        });
    }
}
</script>

<style lang="less" scoped>
    .rotationChart {
        position: relative;
        transform-style: preserve-3d;
        perspective: 800px;
        height:200px;
        img {
            position: absolute;
            left:50%;
            top:50%;
            width:360px;
            height: 200px;
            margin-left: -180px;
            margin-top: -100px;
            // transform: translateY(-50%);
            border-radius:8px;
            transition: transform 0.5s ease-in-out;
            box-shadow: 0px 0px 15px #000;
            cursor: pointer;
        }
    }
</style>
