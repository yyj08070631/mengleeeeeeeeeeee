<template>
    <div class="store-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header> -->
        <div class="loadStore" v-if="data.length == 0">{{loadMessage}}</div>
        <!-- 一条信息 -->
        <div class="store-message" v-else v-infinite-scroll="loadMore">
            <div href="javascript:void(0)" class="store-computed border-bottom-1px">
                <span class="computed">所有项目实体店</span>
            </div>
            <div class="load"></div>
            <router-link :to="{ path: '/offlineInfo', query: { nid: val.id, dis: val.distance, tim: val.duration } }" class="store-item" v-for="(val, key) in data">
                <div>
                    <img :src="val.mainmap">
                </div>
                <div>
                    <p class="title">{{val.name}}</p>
                    <p>{{val.trade_time}}，{{val.day_time}}</p>
                    <p v-show="isStartLoc">{{val.distance}}&nbsp;|&nbsp;{{val.duration}}</p>
                </div>
                <div>
                    <img class="more" src="./more.png">
                </div>
            </router-link>
            <div class="loadMore">{{loadMoreMessage}}</div>
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
            // 整体的位置加载
            loadMessage: '正在加载位置信息....',
            // 加载更多信息
            loadMoreMessage: '下拉加载更多',
            // 加载的页数
            page: 2,
            // 判断是否加载了定位
            isStartLoc: false,
            // 是否可以滚动加载
            canScroll: true
        }
    },
    created () {
        // this.getDataFromBackend()
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            // this.$http({
            //     method: 'get',
            //     url: global.Domain + '/Nearby/nelist',
            //     emulateJSON: true
            // }).then(function (response) {
            //     let res = response.body;
            //     // console.log(res);
            //     this.data = res.nearbyitem
            //     // console.log(this.data)
            // });
            this.$http({
                method: 'get',
                url: global.Domain + '/nearby/catenear?local=' + '113.37271,23.04703' + '&all=3&p=1' + '&rand=' + Math.random(),
                emulateJSON: true
            }).then(function(response) {
                let res = response.body;
                // console.log(res);
                if(res == 'err'){
                    this.loadMessage = '附近3公里内没有线下门店';
                } else {
                    this.data = res.nearbyitem;
                    this.isStartLoc = true;
                }
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
                            let locSession = sessionStorage.getItem('locSession');
                            if(locSession){
                                locSession = JSON.parse(locSession);
                            }
                            let stamp = new Date().getTime(); // 当前时间戳
                            if(locSession && (stamp - locSession.stamp < 180000)){
                                // 传坐标到后台
                                self.$http({
                                    method: 'get',
                                    url: global.Domain + '/nearby/catenear?local=' + locSession.local + '&all=3&p=1' + '&rand=' + Math.random(),
                                    emulateJSON: true
                                }).then(function(response) {
                                    let res = response.body;
                                    // console.log(res);
                                    if(res == 'err'){
                                        self.loadMessage = '附近3公里内没有线下门店';
                                    } else {
                                        self.data = res.nearbyitem;
                                        this.isStartLoc = true;
                                    }
                                });
                            } else {
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
                                            url: global.Domain + '/nearby/catenear?local=' + self.lng + ',' + self.lat + '&all=3&p=1' + '&rand=' + Math.random(),
                                            emulateJSON: true
                                        }).then(function (response) {
                                            let res = response.body;
                                            // console.log(res);
                                            if(res == 'err'){
                                                self.loadMessage = '附近3公里内没有线下门店'
                                            } else {
                                                self.data = res.nearbyitem;
                                                sessionStorage.setItem('locSession', JSON.stringify({
                                                    local: self.lng + ',' + self.lat,
                                                    stamp: new Date().getTime()
                                                }));
                                                this.isStartLoc = true;
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    }
                }]
            };
            // console.log(obj);
            return obj
        },
        // 分页相关
        loadMore: function(){
            // console.log(1);
            if(this.canScroll){
                let self = this;
                self.loadMoreMessage = '努力加载中....';
                let locSession = sessionStorage.getItem('locSession');
                if(locSession){ // true
                    // console.log(1.1)
                    locSession = JSON.parse(locSession);
                    self.$http({
                        method: 'get',
                        // '113.37271,23.04703'
                        url: global.Domain + '/nearby/catenear?local=' + locSession.local + '&all=3&p=' + self.page + '&rand=' + Math.random(),
                        emulateJSON: true
                    }).then(function(response) {
                        // console.log(2);
                        let res = response.body;
                        console.log(res);
                        if(res.nearbyitem.length == 0){
                            // console.log(2.1);
                            self.loadMoreMessage = '没有线下门店';
                        } else {
                            // console.log(3);
                            res.nearbyitem.map(function(val, key){
                                self.data.push(val);
                            });
                            if(res.status == 0){
                                // console.log(3.1);
                                self.loadMoreMessage = '没有更多线下门店';
                                self.canScroll = false;
                            } else {
                                // console.log(3.2);
                                self.page ++;
                                self.loadMoreMessage = '下拉加载更多';
                            }
                        }
                    });
                } else {
                    self.loadMoreMessage = '尚未开启定位';
                }
            } else {
                return
            }
            
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
        background: #f0f0f0
        .route-item
            footerCss()
        .header
            headerCss()
        .loadStore
            display flex
            justify-content center
            align-items center
            width 10rem
            height 100%
            background-color #fff
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
                width: 100%
                height: 2.8125rem
                align-items: center
                justify-content: center
                background: #fff
                font-size: 0
                border-bottom 1px solid #e0e0e0
                div:first-child
                    width: 1.9375rem
                    margin-left .5rem
                    margin-right 0.3125rem
                    img
                        margin: 0.5313rem 0 0.5313rem 0
                        width: 1.875rem
                        height: 1.875rem
                div:nth-child(2)
                    width 6.375rem
                    height 1.875rem
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
            .loadMore
                display flex
                justify-content center
                align-items center
                width 100%
                height 1.25rem
                margin-bottom 1.3594rem
                font-size fs + 0.0313rem
</style>

