<template>
    <div class="store-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="loadStore" v-if="data.length == 0">{{loadMessage}}</div>
        <!-- 一条信息 -->
        <div class="store-message" v-else>
            <div href="javascript:void(0)" class="store-computed border-bottom-1px">
                <span class="computed">所有项目实体店</span>
            </div>
            <div class="load"></div>
            <router-link :to="{ path: '/offlineInfo', query: { nid: val.id } }" class="store-item" v-for="(val, key) in data.nearbyitem">
                <div>
                    <img :src="val.mainmap">
                </div>
                <div>
                    <p class="title">{{val.name}}</p>
                    <p>{{val.trade_time}}，{{val.day_time}}</p>
                    <p>{{val.distance}}公里 | {{val.minute}}分钟</p>
                </div>
                <div>
                    <img class="more" src="./more.png">
                </div>
            </router-link>
            <div class="line"></div>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>
        <!-- 高德地图定位 -->
        <el-amap vid="amap" :plugin="gaodeData.plugin" :center="gaodeData.center">
        </el-amap>
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
            data: [],
            gaodeData: this.gaode(),
            loadMessage: '正在加载位置信息....'
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
        },
        // 获取高德地图定位
        gaode() {
            let self = this;
            let obj = {
                center: [121.59996, 31.197646],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            let arr = [];
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    self.$nextTick();
                                    // 传坐标到后台
                                    self.$http({
                                        method: 'get',
                                        url: global.Domain + '/nearby/nelist?local=' + self.lng + ',' + self.lat,
                                        emulateJSON: true
                                    }).then(function (response) {
                                        let res = response.body;
                                        console.log(res);
                                        this.data = res;
                                    });
                                }
                                // console.log(self.lng, self.lat);
                            });
                        }
                    }
                }]
            };
            // console.log(obj);
            return obj
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../commom/stylus/mixin'
    .el-vue-amap-container
        display none
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
        .loadStore
            display flex
            justify-content center
            width 10rem
            height 100%
            margin-top 80%
            font-size 0.5rem
            color #333
        .store-computed
            display flex
            align-items center
            width: 100%
            height: 1.1563rem
            background: #fff
            border-bottom 1px solid #e0e0e0
            .computed
                display flex
                align-items center
                margin: 0 0 0 0.5625rem
                height: 0.4375rem
                border-left: 0.0938rem solid #909090
                font-size: fs + 0.0313rem
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
                    margin-right 0.3125rem
                    img
                        margin: 0.5313rem 0 0.5313rem 0
                        width: 1.875rem
                        height: 1.875rem
                div:nth-child(2)
                    width 6.375rem
                    p:first-child    
                        color: #333 
                        font-size: fs
                    p
                        font-size: fs - 0.0313rem
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

