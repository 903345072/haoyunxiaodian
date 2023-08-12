<template>
	<view>
		<view class="game_time" >
			<text v-if="checkSingle()" style="color: white;background-color: #e00611;width: 80rpx;text-align: center;border-radius: 10rpx;">单关</text>
			<text >{{weekno}}</text>
			<text :style="{'background-color':getColor(),'color':'white','padding':'0 12rpx','font-size':'20rpx'}">{{lsname}}</text>
			<text style="color: grey;">截止 {{stoptime}}</text>
			<text @click="gofenxi()" style="color: #0081FF;">分析</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:"gameTime",
		props:{
			game_id:null,
			weekno:{
				type:String,
				default:'周三301'
			},
			lsname:{
				type:String,
				default:'英超'
			},
			stoptime:{
				type:String,
				default:'截止21:50'
			},
			g_type:{
				type:String,
				default:'4'
			},
			p_single:{
				type:String,
				default:'0,0,0,0,0'
			}
		},
		methods:{
			getColor(){
				var r = Math.floor(Math.random()*256);
				  var g = Math.floor(Math.random()*256);
				  var b = Math.floor(Math.random()*256);
				  return `rgb(${r},${g},${b})`;
			
			},
			gofenxi(){
				uni.navigateTo({
					url:"/pages/football/fenxi?game_id="+this.game_id
				})
			},
			checkSingle(){
				if(this.g_type == '4' || this.g_type == '0'){
					return false;
				}
				var arr = this.p_single.split(",")
				if(this.g_type == '1'){
					return arr[2] == 1;
				}
				if(this.g_type == '2'){
					return arr[3] == 1;
				}
				if(this.g_type == '3'){
					return arr[4] == 1;
				}
			}
		}
	}
</script>

<style>
	.game_time > text{
		font-size: 25rpx;
		
	}
	.game_time{
	
		display: flex;flex-direction: column;justify-content: center;align-items: center;line-height: 40rpx;
	}
</style>
