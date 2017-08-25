<template>
    <header class="searchHead">
        <div class="outElem">
                <div class="inputBox">
                    <input type="text" placeholder="请输入商品关键字" v-model="resultMsg" @keyup.enter="toDoSearch" @keyup.delete ="clearInputNodes();open()">
                </div>
                <div class="cancelBox" v-show="resultMsg != ''" @click="clearMsg();open()">
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
    data() {
        return {
            resultMsg: "",
            resultDataList: [],
            searchData: '',
        }
    },
    methods: {
        //获取搜索结果
        toDoSearch: function(){
             this.$http.post(
                            global.Domain + '/index/search',
                            {
                                content: this.resultMsg,
                            },
                            {
                                emulateJSON:true
                            }).then(response=>{
                                let data = response.body;
                                this.resultDataList = data
                                console.log("返回的结果：")
                                console.log(this.resultDataList)
                                //1:)得到结果
                                //2:)是把 resultDataList 赋值给带传到父级的参数 getSearchResult
                                //3:)再调用open函数的时候带过去的参数就不是空的了
                                this.open()
                        })
            if(this.$route.path != '/searchResult'){
                 
                   
                this.$router.push('searchResult?'+this.resultMsg)
                console.log(this.$route.path)
                this.$http.post(
                    global.Domain + '/index/search',
                    {
                        content: this.resultMsg,
                    },
                    {
                        emulateJSON:true
                    }).then(response=>{
                        let data = response.body;
                        this.resultDataList = data
                        console.log("返回的结果：")
                        console.log(this.resultDataList)
                        //1:)得到结果
                        //2:)是把 resultDataList 赋值给带传到父级的参数 getSearchResult
                        //3:)再调用open函数的时候带过去的参数就不是空的了
                        this.open()
                })
                   
            }
           
        },
        clearMsg: function(){
            this.resultMsg = '';
            this.resultDataList = '';
        },
        open: function() {
        this.$emit('getSearchResult',this.resultDataList); //触发showbox方法，'the msg'为向父组件传递的数据
        },
        clearInputNodes: function(){
        if(this.resultMsg == '')
            this.resultDataList = '';
        }
    },
     
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
            width 0.5rem
            height 0.5rem
            padding 0.25rem
            img
                width 0.5rem
                height 0.5rem
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
            padding 0.25rem 0.01rem
            span
                display flex
                justify-content center
                width 0.375rem
                height 0.375rem
                border-radius 50%
                background-color #e0e0e0
                font-size fs
                line-height 0.3125rem
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
