<template>
    <!-- 动态地图 -->
    <div class="offlineInfoMap-wrapper">
        <el-amap vid="amap" :center="gaodeData.center" :zoom="gaodeData.zoom" :plugin="gaodeData.plugin">
            <!-- <el-amap-marker v-for="marker in gaodeData.markers" :position="marker.position">
                                        </el-amap-marker> -->
            <el-amap-marker v-for="marker in gaodeData.markers" :position="marker.position" :events="marker.events"></el-amap-marker>
            <el-amap-info-window v-for="windo in gaodeData.windows" :position="windo.position" :visible="windo.visible" :content="windo.content" :events="windo.events"></el-amap-info-window>
        </el-amap>
        <a :href="navigation" class="linkToNavigation">{{navigationTxt}}</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            gaodeData: this.gaode(),
            navigation: 'javascript:void(0)',
            navigationTxt: '正在加载导航信息....',
        }
    },
    mounted() {

    },
    methods: {
        // 获取高德地图定位
        gaode() {
            let self = this;
            let obj = {
                title: '爱的方式',
                center: [String(self.$route.query.loc).split(',')[0], String(self.$route.query.loc).split(',')[1]],
                zoom: parseInt(self.$route.query.scale),
                loaded: false,
                windows: [
                    {
                        position: [String(self.$route.query.loc).split(',')[0], String(self.$route.query.loc).split(',')[1]],
                        content: `<div style="background:white;width:3.125rem;font-size:0.375rem;text-align:center">${self.$route.query.name}</div>`,
                        visible: false,
                        events: {
                            close() {
                                self.gaodeData.windows.forEach(window => {
                                    window.visible = false;
                                });
                            }
                        }
                    }
                ],
                markers: [
                    {
                        position: [String(self.$route.query.loc).split(',')[0], String(self.$route.query.loc).split(',')[1]],
                        events: {
                            click() {
                                self.gaodeData.windows.forEach(window => {
                                    window.visible = true;
                                });
                            }
                        }
                    }
                ],
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
                                    const userLoc = self.lng + ',' + self.lat;
                                    const shopLoc = self.$route.query.loc;
                                    const shopName = self.$route.query.name;
                                    self.$http({
                                        method: 'get',
                                        url: 'http://dde.dgxinn.cn/dream/index.php/Api/address/' + userLoc + '/' + shopLoc + '/' + shopName + '/1',
                                        emulateJSON: true
                                    }).then(function (response) {
                                        let res = response.body;
                                        // console.log(res);
                                        self.navigation = res;
                                        self.navigationTxt = '带我到这去→';
                                        self.gaodeData.center = [String(self.$route.query.loc).split(',')[0], String(self.$route.query.loc).split(',')[1]];
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
    }
}
</script>

<style lang="stylus" scoped>
@import '../../commom/stylus/mixin'

.offlineInfoMap-wrapper
    height 17.75rem
    .el-vue-amap-container
        width 100%
        height 100%
    .linkToNavigation
        display flex
        align-items center
        justify-content center
        position fixed
        bottom 0
        left 0
        width 10rem
        height 2rem
        background-color #fff
        font-size 0.5rem
        color #333
        z-index 500
</style>
