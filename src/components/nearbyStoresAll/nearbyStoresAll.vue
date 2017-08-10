<template>
    <div class="store-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="store-message">
            <div href="javascript:void(0)" class="store-computed border-bottom-1px">
                <span class="computed">所有项目实体店</span>
            </div>
            <router-link :to="{ path: '/offlineInfo', query: { nid: val.id } }" class="store-item" v-for="(val, key) in data">
                <div>
                    <img :src="val.mainmap">
                </div>
                <div>
                    <p class="title">{{val.name}}</p>
                    <p>{{val.trade_time}}，{{val.day_time}}</p>
                    <p>{{val.distance}}公里 | {{val.minute}}分钟</p>
                </div>
                <div>
                    <img class="more" width="32" height="32" src="./more.png">
                </div>
            </router-link>
            <div class="line"></div>
        </div>     
        <!-- footer -->
        <v-view class="route-item"></v-view>
    </div>
</template>
<script type="ecmascript-6">
import view from '../../components/view/view';
// import header from '../../components/header/header';
export default {
    components :{
        'v-view': view,
        // 'v-header': header
    },
    data() {
        return {
            data: []
        }
    },
    created () {
        this.getDataFromBackend()
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/Nearby/nelist',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res.nearbyitem
                // console.log(this.data)
            });
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
    .store-wrapper
        position: absolute
        left: 0
        width: 100%
        height: 100%
        font-size: 0
        overflow-x: hidden
        background: #f0f0f0
        .route-item
            footerCss()
        .header
            headerCss()
    .store-computed
        display: block
        width: 100%
        height: 1.1563rem
        background: #fff
        border-bottom 1px solid #e0e0e0
        .computed
            display: inline-block
            margin: 0.375rem 0 0 0.5625rem
            height: 0.4375rem
            border-left: 0.0938rem solid #909090
            font-size: 0.4063rem
            font-weight: bold
            text-indent: 0.1875rem
            color: #909090 
    .store-message
        width: 100%
        background: #fff         
        .store-item
                display: flex
                position: relative
                margin-left: 0.5rem
                width: 100%
                height: 2.8125rem
                align-items: center
                justify-content: center
                background: #fff
                font-size: 0
                border-bottom 1px solid #e0e0e0
                div:first-child
                    width: 1.9375rem
                    img
                        margin: 0.5313rem 0.3125rem 0.5313rem 0
                        width: 1.625rem
                        height: 1.625rem
                div:nth-child(2)
                    flex: 1
                    p:first-child    
                        color: #333 
                        font-size: 0.375rem
                    p
                        font-size: 0.3438rem
                        line-height: 0.5625rem
                        color: #909090
                div:last-child
                    width: 1.375rem
                    img
                        width: 0.5rem
                        height: 0.5rem           
        .line
            width: 100%
            height: 0.1563rem
            background: #f0f0f0
</style>

