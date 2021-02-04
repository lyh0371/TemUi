<template>
  <div class="home">
    <div class="title">
      <h2>TemUi</h2>
    </div>

    <div class="hero">
      <div class="innerLeft">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="innerRight">
        <h2>TemUi</h2>
        <h2>Vue3.x前端组件集</h2>

        <div class="useNow" @click="useNow">立即使用</div>
      </div>
    </div>
    <div class="highlights">
      <div class="inner">
        <div class="point">
          <h2>易用</h2>
          <p>已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！</p>
        </div>

        <div class="point">
          <h2>灵活</h2>
          <p>不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。</p>
        </div>

        <div class="point">
          <h2>高效</h2>
          <p>
            20kB min+gzip 运行大小<br />
            超快虚拟 DOM <br />
            最省心的优化
          </p>
        </div>
      </div>
    </div>

    <div class="animation1">
      <div class="inner"></div>
    </div>
    <div class="animation2">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const useNow = () => {
      router.push('/index/index')
    }
    return {
      useNow
    }
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  height: 100vh;
  .title {
    h2 {
      padding: 10px 40px;
    }
  }
  .hero {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    h2 {
      font-size: 52px;
      letter-spacing: 5px;
    }
    .innerLeft {
      position: relative;
      top: 20px;
    }
    .innerRight {
      margin-left: 50px;
      .useNow {
        margin-top: 50px;
        width: 180px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #4fc08d;
        font-size: 18px;
        color: #fff;
        border-radius: 2em;
        cursor: pointer;
        user-select: none;
      }
    }
  }
  .highlights {
    .inner {
      display: flex;
      width: 900px;
      margin: 0 auto;
      justify-content: center;
      .point {
        width: 33%;
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        padding: 100px 2em 0;
        text-align: center;

        h2 {
          color: #42b983;
          font-size: 1.5em;
          font-weight: 400;
          font-size: 26px;
          margin: 0;
          padding: 0.5em 0;

          font-weight: 700;
        }
        p {
          color: #4f5959;
        }
      }
    }
  }
  .animation1 {
    position: absolute;
    right: 20%;
    top: -15%;
    .inner {
      width: 200px;
      height: 200px;
      filter: blur(0.6px);
      animation: animation1 ease-in 10s infinite;
      &::after {
        content: '';
        height: inherit;
        width: inherit;
        border-radius: 100%;
        border: 30px solid #66cd9e;
        display: block;
      }
    }
  }
  .animation2 {
    position: absolute;
    right: -15em;
    bottom: 8%;
    .inner {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      background: #f9bc0b;
      animation: animation2 linear 35s infinite;
    }
  }

  @keyframes animation1 {
    0% {
      transform: translateY(30%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(30%);
    }
  }
  @keyframes animation2 {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
}
</style>
