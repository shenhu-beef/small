<template>
    <div id="my">
        <nav-bar class="home-nav"><div slot="center">我的档案</div></nav-bar>
        <div class="topBanner">
            <div class="userImg">
                <img src="~assets/img/user.png" alt="">
            </div>
            <div class="login">
                <div class="lr">登录/注册</div>
                <div class="phone">
                    <img src="~assets/img/num.png" alt="">
                    暂无绑定手机号
                    </div>
            </div>
            <div class="arrow">
                <img src="~assets/img/rarrow.png" alt="">
            </div>
        </div>
        <div class="myInfo">
            <div class="money">
                <div class="much">
                    <span class="zero">0.00</span>
                    <span class="yuan">元</span>
                </div>
                <div class="line2">我的余额</div>
            </div>
            <div class="preferential">
                <div class="much">
                    <span class="zero">0</span>
                    <span class="yuan">个</span>
                </div>
                <div class="line2">我的优惠</div>
            </div>
            <div class="integral">
                <div class="much">
                    <span class="zero">0</span>
                    <span class="yuan">分</span>
                </div>
                <div class="line2">我的积分</div>
            </div>
        </div>
        <div class="main">
            <div class="mainItem"><img src="~assets/img/message.png" alt="">我的消息</div>
            <div class="mainItem"><img src="~assets/img/jifen.png" alt="">积分商城</div>
            <div class="mainItem"><img src="~assets/img/vip.png" alt="">会员卡</div>
        </div>
        <div class="main1">
            <div class="mainItem" @click="car"><img src="~assets/img/carrrr.png" alt="">我的购物车</div>
            <div class="mainItem"><img src="~assets/img/shopppp.png" alt="">下载购物APP</div>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "My",
        data() {
            return {}
        },
        components: {
            NavBar
        },
        methods: {
            car() {
                this.$router.replace('/shop')
                // console.log(123);
            }
        }
    }
</script>

<style scoped>
body {
    background-color: #ccc;
}
.home-nav {
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
    .topBanner {
        width: 100%;
        height: 90px;
        background-color: var(--color-tint); 
        display: flex;
        align-items: center;
    }
    .userImg {
        width: 65px;
        height: 65px;
        margin-left: 20px;
    }
    .userImg img {
        width: 100%;
    }
    .login {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 46px;
        margin-left: 20px;
        color: #fff;
        font-size: 16px;
    }
    .login .lr {
        margin-left: 6px;
    }
    .login .phone {
        width: 110px;
        font-size: 12px;
        display: flex;
        align-items: center;
    }
    .login .phone img {
        width: 20px;
        height:20px;
    }
    .arrow {
        margin-left: 118px;
        width: 25px;
        height: 25px;
    }
    .arrow img {
        width: 100%;
    }
    .myInfo {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 10px solid #eee;
    }
    .money {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .preferential {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .integral {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .much {
        padding-bottom: 5px;
    }
    .much .zero {
        color: red;
        font-size: 20px;
        font-weight: 600;
    }
    .main {
        
        border-bottom: 10px solid #eee;
    }
    .mainItem {
        height: 60px;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .mainItem img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
</style>