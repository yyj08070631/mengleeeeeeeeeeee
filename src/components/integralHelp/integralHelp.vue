<template>
    <div class="integralHelp-wrapper">
        <div v-html="data" v-show="data != ''"></div>
    </div>
</template>
<script type="ecmascript-6">
export default {
    components: {
        
    },
    data() {
        return {
            data: []
        }
    },
    mounted() {
        this.getDataFromBackend()
    },
    methods: {
        // 获取数据方法
        getDataFromBackend() {
            this.$http({
                method: 'get',
                url: 'http://go.zs-mmall.com/dream/index.php/Api/aid/1'
                // emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                // console.log(res);
                this.data = res;
            })
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
// 主体
.integralHelp-wrapper
    font-size 16px !important
    font-weight inherit !important
    margin 0.3125rem 0.1563rem 0 0.1563rem
    .noGoods
        display flex
        justify-content center
        align-items center
        width 100%
        height 100%
        font-size fs + 0.0313rem
        color #333
</style>

