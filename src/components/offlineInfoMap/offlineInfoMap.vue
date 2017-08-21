<template>
    <div class="myCenterCopyTxt-wrapper">
        <el-amap vid="amap" :center="gaodeData.center" :zoom="gaodeData.zoom">
            <!-- <el-amap-marker v-for="marker in gaodeData.markers" :position="marker.position">
                                        </el-amap-marker> -->
            <el-amap-marker v-for="marker in gaodeData.markers" :position="marker.position" :events="marker.events"></el-amap-marker>
            <el-amap-info-window v-for="windo in gaodeData.windows" :position="windo.position" :visible="windo.visible" :content="windo.content" :events="windo.events"></el-amap-info-window>
        </el-amap>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            gaodeData: this.gaode(),
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
                ]
            };
            // console.log(obj);
            return obj
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../commom/stylus/mixin'

.myCenterCopyTxt-wrapper
    height 17.75rem
    .el-vue-amap-container
        width 100%
        height 100%
</style>
