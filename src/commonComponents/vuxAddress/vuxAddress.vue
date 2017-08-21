<template>
    <x-address title="所在地区：" v-model="value" :list="addressData" :placeholder="locArr ? locArr.join(' ') : '请选择所在地区'">
    </x-address>
</template>

<script type="text/ecmascript-6">
import { Group, XAddress, ChinaAddressV3Data, XButton, Cell, Value2nameFilter as value2name } from 'vux';

export default {
    components: {
        Group,
        XAddress,
        XButton,
        Cell
    },
    data() {
        return {
            value: [],
            addressData: ChinaAddressV3Data,
        }
    },
    computed: {

    },
    mounted() {
        
    },
    methods: {

    },
    watch: {
        value: {
            handler: function (val, oldVal) {
                // console.log(value2name(val, ChinaAddressV3Data))
                this.$emit('listenToChildEvent', value2name(val, ChinaAddressV3Data));
            },
        }
    },
    props: ['locArr'],
}

</script>

<style lang="less" rel="stylesheet/less">
.vux-cell-box {
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    height: 1.3438rem !important;
    color: #525252;
    width: 100%;
    line-height: 0.94rem;
    overflow: hidden;
    .weui-cell {
        display: flex;
        width: 100%;
        height: 100%;
        .weui-cell__hd {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 2.8125rem;
            margin: 0 0.75rem 0 0.1875rem;
            .weui-label {
                width: 2.3438rem;
                text-align: right;
            }
        }
        .vux-cell-primary {
            display: flex;
            align-items: center;
            width: 100%;
            .vux-popup-picker-select {
                display: flex;
            }
        }
        .weui-cell__ft {
            display: none;
        }
        .vux-popup-picker-value {
            font-size: 0.375rem !important;
        }
    }
    &:before {
        border: 0;
    }
}

.scroller-component {
    height: 5.76rem !important;
}

.scroller-mask {
    background-size: 100% 2.55rem !important;
}

.scroller-content {
    top: -0.12rem !important;
}

.scroller-item {
    font-size: 0.3125rem !important;
    height: 0.66rem !important;
    line-height: 0.66rem !important;
}

.scroller-indicator {
    height: 0.66rem !important;
    top: 2.54rem !important;
    font-size: 0.375rem !important;
}

.vux-popup-picker-header {
    height: 0.96rem!important;
    line-height: 0.96rem!important;
}

.vux-popup-picker-header-menu {
    line-height: 0.96rem!important;
    text-align: center!important;
    color: #333;
    font-size: 0.3125rem;
    background: #f6f6f6;
}

.vux-popup-picker-header-menu-right {
    background: #ea68a2;
    color: #fff;
    font-size: 0.3125rem;
}

.vux-popup-dialog {
    overflow-y: auto !important;
}
</style>
