<template>
    <header class="searchHead">
        <div class="outElem">
                <div class="imgBox" @click="toDoSearch()">
                    <img src="./images/search_grey.png">
                </div>
                <div class="inputBox">
                    <input type="text" placeholder="请输入商品关键字" v-model="$route.path=='/searchResult'?$route.query.data:resultMsg" @keyup.enter="$route.path != '/searchResult'?toDoSearch():getSearchData2()" @keyup.delete ="clearInputNodes();open()" ref="val">
                </div>
                <div class="imgBox cancel" @click="clearMsg();open();">
                    <img src="./images/cancel.png">
                </div>
        </div>
    </header>
</template>
<script type="ecmascript-6">
export default {
    props:['static'],//存储搜索结果传递过来的排序参数
    data() {
        return {
            resultMsg: "",//第一次输入
            resultDataList: [],//接收搜索结果，最终会通过$emit传给父组件
            searchData: '',
            showKey: false,
            static: this.static//存储搜索结果传递过来的排序参数
        }
    },
    methods: {
        //获取搜索结果
        toDoSearch: function(){
                this.$router.push('searchResult?data='+this.resultMsg)
                // console.log(this.$route.path)
                // console.log(this.$route.query.data)
                this.resultMsg = this.$route.query.data
                this.getSearchData()
        },
        getSearchData2: function(){
            // this.resultMsg = this.$refs.val.value
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
                        //1:)得到结果
                        //2:)是把 resultDataList 赋值给带传到父级的参数 getSearchResult
                        //3:)再调用open函数的时候带过去的参数就不是空的了
                        this.open()
                })

            
        },
        getSearchData: function(){
            // this.resultMsg = this.$refs.val.value
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
            this.$route.query.data = ''
            this.resultDataList = '';
            this.$refs.val.value = '';
            this.resultMsg = '';
            this.showKey = false
        },
        open: function() {
            this.$emit('getSearchResult',[this.resultDataList,this.$refs.val.value,this.static]); //触发showbox方法，'the msg'为向父组件传递的数据
        },
        upDateKey: function(){
            this.$emit('key',this.$refs.val.value);
        },
        clearInputNodes: function(){
 
                 if(this.$refs.val.value == ''){
                     this.showKey = false
                     this.$route.query.data = ''
                     this.resultDataList = '';
                     this.$refs.val.value = '';
                     this.resultMsg = '';
                     
                 }
            },
        cancelVal: function(){
            if(this.$route.query.data != ''){
                this.showKey = true
            }
        },
        onInputKey: function(){
           console.log(this.resultMsg)
        }
    },
    mounted(){
        this.onInputKey()
        this.$nextTick(function () {
            this.getSearchData()
            this.cancelVal()
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
        .cancel
            img
                width 0.55rem
                height 0.55rem
        .inputBox
            display flex
            align-items center
            height 100%
            width 8.4375rem
            input
                width 100%
                font-size fs
                outline 0
        .cancelBox
            display flex
            justify-content center
            align-items center
            width 0.375rem
            height 0.375rem
            margin 0.25rem
            border-radius 50%
            background-color #e0e0e0
    .searchBtn
        display flex
        justify-content center
        align-items center
        width 1.75rem
        height 100%
        font-size fs + 0.0469rem
        color #ea68a2
</style>
