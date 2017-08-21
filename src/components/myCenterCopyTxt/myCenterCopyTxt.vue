<template>
    <div class="myCenterCopyTxt-wrapper">
        <div v-html="unescape(data.content)" class="mainCont"></div>
    </div>
</template>

<script>
export default {
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
            // 版权
            this.$http({
                method: 'get',
                url: global.Domain + '/user/articleDetail?id=' + this.$route.query.id,
                emulateJSON: true
            }).then(function (response) {
                let res = response.body;
                console.log(res);
                this.data = res.data;
            });
        },
        // 转义html标签
        unescape : function (html) {
            return html
            .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#39;/g, "\'")
            .replace(/amp;/g, "");
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../commom/stylus/mixin'

.myCenterCopyTxt-wrapper
    font-size 16px !important
    margin 0.3125rem 0.1563rem 0 0.1563rem
</style>
