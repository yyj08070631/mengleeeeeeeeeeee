<template>
    <header class="searchHead">
        <div class="outElem">
                <div class="inputBox">
                    <input type="text" placeholder="请输入商品关键字" v-model="$route.path=='/searchResult'?$route.query.data:resultMsg" @keyup.enter="$route.path != '/searchResult'?toDoSearch():getSearchData2()" @keyup.delete ="clearInputNodes();open()" ref="val">
                </div>
                <div class="cancelBox" v-show="resultMsg !=''" @click="clearMsg();open();">
                    <span>×</span>
                </div>
                <div class="cancelBox" v-show="showKey" @click="clearMsg();open();">
                    <span>×</span>
                </div>
                <div class="imgBox" @click="toDoSearch()">
                    <img src="./images/search_grey.png">
                </div>
        </div>
        <!-- <a href="javascript:void(0)" class="searchBtn">搜索</a> -->
    </header>
</template>
<script type="ecmascript-6">
export default {
    props:['static'],
    data() {
        return {
            resultMsg: "",
            resultDataList: [],
            searchData: '',
            showKey: false,
            static: this.static
        }
    },
    methods: {
        //获取搜索结果
        toDoSearch: function(){
                this.$router.push('searchResult?data='+this.resultMsg)
                // console.log(this.$route.path)
                // console.log(this.$route.query.data)
                this.getSearchData()
        },
        getSearchData2: function(){

                this.$http.post(
                    global.Domain + '/index/search',
                    {
                        content: this.$refs.val.value,
                    },
                    {
                        emulateJSON:true
                    }).then(response=>{
                        this.showKey = true
                        let data = response.body;
                        this.resultDataList = data
                        //1:)得到结果
                        //2:)是把 resultDataList 赋值给带传到父级的参数 getSearchResult
                        //3:)再调用open函数的时候带过去的参数就不是空的了
                        this.open()
                })

            
        },
        getSearchData: function(){
            console.log(this.static)
            this.showKey = true
            this.searchData = this.$refs.val.value
            if(this.$route.path == '/searchResult'){
                this.$http.post(
                    global.Domain + '/index/search',
                    {
                        content: this.$refs.val.value,
                        static: this.static
                    },
                    {
                        emulateJSON:true
                    }).then(response=>{
                        let data = response.body;
                        this.resultDataList = data
                        // console.log("返回的结果：")
                        // console.log(this.resultDataList)
                        //1:)得到结果
                        //2:)是把 resultDataList 赋值给带传到父级的参数 getSearchResult
                        //3:)再调用open函数的时候带过去的参数就不是空的了
                        this.open()
                })
            }
        },
        clearMsg: function(){
            this.resultDataList = '';
            this.$refs.val.value = ''

        },
        open: function() {
            this.$emit('getSearchResult',[this.resultDataList,this.$refs.val.value,this.static]); //触发showbox方法，'the msg'为向父组件传递的数据
        },
        upDateKey: function(){
            this.$emit('key',this.$refs.val.value);
        },
        clearInputNodes: function(){
                 this.resultDataList = '';
            },
        cal: function(){
            if(this.$refs.val.value != ''){
                this.showKey = true
            }
        }
    },
    mounted(){
        this.$nextTick(function () {
            this.getSearchData()
            this.autoSearch()
            this.cal()
            this.getSearchData()
        })
    }
     
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../commom/stylus/mixin'
// 头部
.searchHead
    display flex
    align-items center
    position fixed
    left 0
    top 0
    height 1.25rem
    width 100%
    background-color #f0f0f0
    z-index 100
    .outElem
        display flex
        align-items center
        width 9.375rem
        height 0.9375rem
        margin-left 0.3125rem
        border-radius 0.0938rem
        background-color #fff
        .imgBox
            display flex
            align-items center
            width 0.6rem
            height 0.6rem
            padding 0.25rem
            img
                width 0.6rem
                height 0.6rem
        .inputBox
            display flex
            align-items center
            height 100%
            width 8.4375rem
            input
                width 100%
                font-size fs
                outline 0
                text-indent 0.4375rem
        .cancelBox
            display flex
            justify-content center
            align-items center
            width 0.375rem
            height 0.375rem
            margin 0.25rem
            border-radius 50%
            background-color #e0e0e0
            span
                margin-top -0.0781rem
                font-size fs
                color #fff
    .searchBtn
        display flex
        justify-content center
        align-items center
        width 1.75rem
        height 100%
        font-size fs + 0.0469rem
        color #ea68a2
</style>
