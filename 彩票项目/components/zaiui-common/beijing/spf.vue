<template>
	<view>
		<view class="game_time"  >
			<text :style="{'width':box_width+'rpx','height':box_height+'rpx'}" @click="checked('1-1',pl.split(',')[0])" :class="['item',{'checked':this.check_item['1-1']['checked'] == true}]">
			  <span v-if="goal != 0">
				  <span v-if="goal>0" style="color: red;">(+{{goal}})</span>
				  <span v-if="goal<0" style="color: green;">({{goal}})</span>
			  </span>
			  胜{{pl.split(",")[0]}}
			</text>
			<text :style="{'width':box_width+'rpx','height':box_height+'rpx'}" @click="checked('1-2',pl.split(',')[1])" :class="['item',{'checked':this.check_item['1-2']['checked'] == true}]">平{{pl.split(",")[1]}}</text>
		    <text :style="{'width':box_width+'rpx','height':box_height+'rpx'}" @click="checked('1-3',pl.split(',')[2])" :class="['item',{'checked':this.check_item['1-3']['checked'] == true}]">负{{pl.split(",")[2]}}</text>
		</view>
		
		<!-- <view v-else :style="{'background-color':'#cccccc','border-bottom':'1px solid #EEEEEE','height':box_height+'rpx','line-height':box_height+'rpx','text-align':'center','width':'100%'}">
			未开售
		</view> -->
		
	</view>
</template>

<script>
	
	export default{
		name:"gameTime",
		data(){
			
			return {
		
		
			}
		},
		props:{
			pl:{
				type:String,
				default:'1.7'
			},
			goal:{
				type:String,
				default:'0'
			},
			gameId:{
				type:String,
				default:'1'
			},
			state:{
				type:String,
				default:"1,1,1,1,1"
			},
			p_single:{
				type:String,
				default:"0,0,0,0,0"
			},
			dire_sub:{
				type:Boolean,
				default:true
			},
			box_width:null,
			box_height:null,
			check_item:null
		},
		mounted() {
			
		},
		methods:{
			checkSingle(){
			return	this.p_single.split(",")[0] == 1;
			},
			checkIf(){
				var arr = this.state.split(",")
				
				if(arr[0] == 1){
					return true;
				}
				return false;
				
			},
			checked(v,pl){
		
			    this.check_item[v]["checked"] = !this.check_item[v]["checked"]
				this.check_item[v]["pl"] = pl
				var data = {}
				data['game_id'] = this.gameId
				data["checkItem"] = this.check_item
				this.$forceUpdate();
				if(this.dire_sub){
					this.$emit("updateCheckItem",data)
					
				}
				
			},
			cancel(){
				// console.log(this.check_item)
				// for(let item in this.check_item){
					
				// 	this.check_item[item]["checked"] = false;
					
				// }
				
			},
			confirm(){
				var data = {}
				data['game_id'] = this.gameId
				data["checkItem"] = this.check_item
			    data["flag"] = 'spfmain'
				this.$forceUpdate();
		       this.$emit("updateCheckItem",data)
				this.$emit("updateCheckItem1",data)
			},
			updateCheckItem(data){
				this.check_item = data
				this.$forceUpdate();
			}
		}
		
	}
</script>

<style>
	.game_time{
		display: flex;
	}
	.item{
		position: relative;
		font-weight: bold;
	
		border-bottom: 1px solid #EEEEEE;
		border-right: 1px solid #EEEEEE;
		font-size: 25rpx;
		display: flex;justify-content: center;align-items: center;
	}
	.checked{
		color: white;
		background-color: red;
		
	}
</style>
