<template>
  <div class="nav-wraper">
    <div class="list" @click="changeTab">
      <div v-for="(item, index) in list" :key="index" :class="['item', activeIndex == index ? 'active':'']" :data-index="index">{{item}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
@Component({
  props: {
    list: Array,
    default() {
      return []
    }
  }
})

export default class TopNav extends Vue {
  // data
  activeIndex: any = 0
  @Emit('changeTabar')
  changeTab(e: any) {
    const index = e.target.dataset.index
    if (!index && index !== 0) {
       return
    }
    this.activeIndex = index
    return index
  }
}

</script>

<style lang="scss" scoped>
  .nav-wraper {
    position: relative;
    .list {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      background: #fff;
      .item {
        position: relative;
        flex: 1;
        text-align: center;
        height: 100%;
        line-height: 90px;
        font-size: 28px;
        color: #858585;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
        &:active {
          -webkit-tap-highlight-color: transparent;
        }
      }
      .active {
        color: #282829;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          margin-left: -50px;
          top: auto;
          bottom: 0;
          right: auto;
          height: 2px;
          width: 100px;
          background-color: #4F76AD;
        }
      }
    }
  }
</style>