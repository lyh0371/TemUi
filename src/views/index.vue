<template>
  <nav>
    <div class="inner">
      <router-link to="/">
        <div class="navLogo">
          <img src="../assets/logo.png" class="logo" alt="" />
          <h3 class="title">TemUi</h3>
        </div>
      </router-link>
    </div>
  </nav>
  <div class="wapperIndex">
    <div class="sideba">
      <div class="navListWrap">
        <div
          class="navList"
          :class="active === v.routePath ? 'active' : ''"
          @click="navHandle(v)"
          v-for="(v, index) in routerList"
          :key="index"
        >
          {{ v.title }}
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { data } from '@/router/data.json'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      active: 'index',
      routerList: data
    })

    const navHandle = item => {
      state.active = item.routePath
      router.push(item.routePath)
    }
    return {
      ...toRefs(state),
      navHandle
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  height: 80px;
  width: 100%;
  background: #fff;
  z-index: 999;
  top: 0;
  .inner {
    margin: 0 auto;
    height: 100%;
    width: 1200px;
    display: flex;
    align-items: center;
    .navLogo {
      display: flex;
      align-items: baseline;
      .logo {
        width: 50px;
      }
      .title {
        font-weight: 700;
      }
    }
  }
}
.wapperIndex {
  display: flex;
  padding-top: 80px;
  height: calc(100% - 80px);
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
  .sideba {
    width: 200px;
    background: #fff;
    height: 100%;
    overflow-y: auto;
    padding-top: 10px;

    .navListWrap {
      padding-top: 50px;
      padding-left: 50px;
      .navList {
        cursor: pointer;
        padding: 20px 0;
        color: #444;
      }
      .active {
        color: #409eff;
      }
    }
  }
  .content {
    height: 100%;
    padding-top: 50px;
    flex: 1;
    padding: 50px;
    overflow-y: auto;
  }
}
</style>
