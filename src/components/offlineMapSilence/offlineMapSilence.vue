<template>
    <!-- 动态地图 -->
    <div class="offlineMapSilence-wrapper">
        <img :src="data">
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            // console.log(document.body.clientWidth + '*' + document.body.clientHeight);
            const screen = document.body.clientWidth + '*' + document.body.clientHeight
            this.$http({
                method: 'get',
                url: 'http://go.zs-mmall.com/dream/index.php/Api/static/' + this.$route.query.loc + '/' + this.$route.query.scale + '/' + screen + '2',
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res;
                //console.log(this.data)
            });
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '../../commom/stylus/mixin'

.offlineMapSilence-wrapper
    height 17.75rem
</style>
