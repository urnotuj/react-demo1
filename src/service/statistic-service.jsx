import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Statistic{
	//从后台接口获取数据
	getHomeCount(){
		return _mm.request({
            url: '/manage/statistic/base_count.do'
        });
	}
}

export default Statistic;