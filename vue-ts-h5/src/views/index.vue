<template>
  <div class="wraper-chat">
    <topNav :list="List" @changeTabar="changeNav"></topNav>
    <div class="words-list">
      <div class="item">
        <div class="content">哈哈哈哈哈哈哈哈哈哈</div>
        <div class="btn" @click="goToChat">点击复制内容</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { throttle } from '@/js/util.ts'

declare var wx:any;

const List = [
  '销量最多',
  '浏览最多',
  '分享最多'
]

export default Vue.extend({
  data () {
    return {
      List
    }
  },
  components: {
    topNav: () => import('../components/nav.vue')
  },
  mounted() {
    // vconsole(true)
  },
  methods: {
    changeNav(e: any) {
      console.log(e)
    },
    goToChat: throttle(function() {
    })
  },
})


</script>

<style lang="scss">
.wraper-chat {
  position: relative;
  width: 100%;
  height: 100%;
  .words-list {
    position: relative;
    padding: 10px 20px;
    height: 100%;
    overflow-y: scroll;
    .item {
      padding: 0 20px;
      background: #fff;
      margin-bottom: 10px;
      border-radius: 10px;
      .content {
        font-size: 28px;
        color: #282829;
        line-height: 40px;
        padding: 40px 0;
        border-bottom: 1px solid #F2F2F2
      }
      .btn {
        font-size: 28px;
        text-align: center;
        color: #4F76AD;
        padding: 20px 0;
        &:active {
          background: #eee
        }
      }
      &:last-child {
        margin-bottom: 200px
      }
    }
  }
}
</style>
