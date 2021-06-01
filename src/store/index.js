import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'


//据了解，Vuex是针对复杂单页应用存在的。
//这个文件是干什么用的，几个意思？


Vue.use(Vuex)

// 这似乎是在定义常量
const state = {
	adminInfo: {
		avatar: 'default.jpg'
	},
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	}
}

const actions = {
	async getAdminData({commit}){
		try{
			const res = await getAdminInfo()
			if (res.status == 1) {
				commit('saveAdminInfo', res.data);
			}else{
				throw new Error(res.type)
			}
		}catch(err){
			// console.log(err.message)
		}
	}
}

//为了别的地方import
export default new Vuex.Store({
	state,
	actions,
	mutations,
})
