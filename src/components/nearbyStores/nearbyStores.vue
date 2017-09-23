<template>
    <div class="store-wrapper">
        <!-- 头部 -->
        <!-- <v-header></v-header>  -->
        <div class="loadStore" v-if="data.length == 0 && errMsg == ''">{{loadMessage}}</div>
        <div class="store-message" v-else>
            <div href="javascript:void(0)" class="store-computed">
                <span class="computed">附近的项目实体店</span>
            </div>
            <router-link :to="{ path: '/offlineInfo', query: { nid: val.id, dis: val.distance, tim: val.duration } }" class="store-item" v-for="(val, key) in data">
                <div>
                    <img :src="val.mainmap">
                </div>
                <div>
                    <p class="title">{{val.name}}</p>
                    <p>{{val.trade_time}}，{{val.day_time}}</p>
                    <p>{{val.distance}}&nbsp;|&nbsp;{{val.duration}}</p>
                </div>
                <div>
                    <img class="more" src="./more.png">
                </div>
            </router-link>
            <div class="line"></div>
            <router-link to="/nearbyStoresAll" class="all-stores" style="margin-bottom:1.3594rem" v-show="errMsg == 'err'">
                <p>浏览所有线下项目实体店</p>
                <img class="more" src="./more.png">
            </router-link>
        </div>
        <!-- footer -->
        <v-view class="route-item"></v-view>
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
            errMsg: '',
            gaodeData: this.gaode(),
            loadMessage: '正在加载位置信息....'
        }
    },
    mounted () {
        // this.getDataFromBackend()
        // 8 秒后还没定位成功则改显示
        // setTimeout(function(){
        //     this.loadMessage = '定位加载失败，请刷新页面重新加载:-D';
        // }, 1000);
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: global.Domain + '/nearby/nearby',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.nearbyitem
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
                            let locSession = sessionStorage.getItem('locSession');
                            if(locSession){
                                locSession = JSON.parse(locSession);
                            }
                            let stamp = new Date().getTime(); // 当前时间戳
                            if(locSession && (stamp - locSession.stamp < 180000)){
                                // 传坐标到后台
                                self.$http({
                                    method: 'get',
                                    url: global.Domain + '/nearby/catenear?local=' + locSession.local + '&all=2&rand=' + Math.random(),
                                    emulateJSON: true
                                }).then(function(response) {
                                    let res = response.body;
                                    // console.log(res);
                                    if(res == 'err'){
                                        self.loadMessage = '附近3公里内没有线下门店';
                                        self.errMsg = res;
                                    } else {
                                        self.data = res.nearbyitem;
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
                                            url: global.Domain + '/nearby/catenear?local=' + self.lng + ',' + self.lat + '&all=2&rand=' + Math.random(),
                                            emulateJSON: true
                                        }).then(function (response) {
                                            let res = response.body;
                                            // console.log(res);
                                            if(res == 'err'){
                                                self.loadMessage = '附近3公里内没有线下门店'
                                                self.errMsg = res;
                                            } else {
                                                self.data = res.nearbyitem;
                                                sessionStorage.setItem('locSession', JSON.stringify({
                                                    local: self.lng + ',' + self.lat,
                                                    stamp: new Date().getTime()
                                                }));
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
        font-size 0.5rem
        background-color #fff
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
            align-items center
            background: #fff
            font-size: 0
            border-bottom 1px solid #e0e0e0
            div:first-child
                // margin-left 0.5rem
                img
                    margin: .5313rem 0 .5313rem .5rem
                    width: 1.625rem
                    height: 1.625rem
            div:nth-child(2)
                margin-left 0.3125rem
                p:first-child
                    color: #333
                    font-size: fs
                p
                    font-size fs + 0.0313rem
                    line-height: 0.5625rem
                    color: #909090
            div:last-child
                margin-left 1.2031rem
                img
                    width: 0.5rem
                    height: 0.5rem
        .line
            width: 100%
            height: 0.1563rem
            background: #f0f0f0
        .all-stores
            display flex
            justify-content space-between
            align-items center
            height: 1.3438rem
            color: #333
            p
                font-size: fs
                margin-left: 0.5rem
            .more
                width: 0.5rem
                height: 0.5rem
                margin-right 0.5rem
</style>

