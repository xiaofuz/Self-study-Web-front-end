/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
/*
  一 歌曲搜索的知识点
    1. 按下回车（v-on:enter）
    2. 查询数据（axios 接口 v-model）
    3. 渲染数据（v-for 数组 that）

  二 歌曲播放
    1. 点击播放（v-on 自定义参数）
    2. 歌曲的播放地址（接口 歌曲id）
    3. 歌曲的地址设置(v-bind)
*/
var app = new Vue({
  // el:"player",
  el:"#player",
  data:{
    // 查询关键字
    query: "",
    //歌曲数组
    musicList: []


  },
  methods:{
    // 搜索音乐方法
    searchMusic:function() {
      var that = this;
      // 为什么是get呢，以为上面的第一个的接口文档是get
      // keywords 关键词的问题不是太了解
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
        function(response){
        console.log(response.data.result.songs);
        that.musicList = response.data.result.songs;
        // console.log(response.data.result.songs);
      },function(err){}
      );
    },
    // 歌曲播放
    // 当下面的方法的定义名出现波浪线的时候就是上面方法最后没有添加逗号 ,
    // 这个function中的（参数）  就是传参的作用
    playMusic:function(musicId) {
      console.log(musicId);
    }

  }
});
