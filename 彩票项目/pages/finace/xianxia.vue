<template>
	<view>
		<bar-title bgColor="bg-white" isBack>
			<block slot="content">线下充值</block>
			
		</bar-title>
		<view style="width: 100%;display: flex;justify-content: center;margin-top: 200rpx;">
			<image style="width: 500rpx;height: 500rpx;" :src="getSrc()"></image>
		</view>
	</view>
</template>

<script>
	import config from '@/api/interface.js'
	import barTitle from '@/components/zaiui-common/basics/bar-title';
	export default{
		name: "recharge",
		components: {
			barTitle
		},
		methods:{
			getSrc(){
				return config.config.imgUrl+"/zfb.jpg"
			}
		}
	}
</script>

<style>
</style>