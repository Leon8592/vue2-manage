<template>
    <div class="practice fillcontain">
       
        <el-row>

            <p class="text">Leon's first Vue page!</p>

            <img :src="test" class="image">

        </el-row>
         

    </div>
</template>

<script>

    import test from '../assets/img/test.jpeg'
    export default {

        data () {
            return {
                test
            }
        }
    	
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .practice{
        background: yellow;
    }
    .text{
		
		text-align: center;
		font-size: 100px;
		color:black;
	}
    .image{
        width: 100%;
        // height: 500pt;
    }
</style>
