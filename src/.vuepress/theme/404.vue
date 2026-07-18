<template>
  <div>
    <Header />
    <div class="page">
      <div class="text">404</div>
      <div class="button-wrap">
        <a class="button" v-bind:href="home">Take Me Home</a>
      </div>
      <div class="colors" :style="`transform: translateX(${x}px) translateY(${y}px);`">
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      x: 0,
      y: 0,
      home: '/'
    }
  },

  mounted () {
    const changeCB = e => {
      const isTouch = !!e.touches
      const { screenX, screenY } = isTouch ? e.touches[0] : e
      const { clientWidth, clientHeight } = document.body
      const offsetX = screenX / clientWidth - 0.5
      const offsetY = screenY / clientHeight - 0.5
      this.x = offsetX * 200 / (1 + isTouch)
      this.y = offsetY * 100 / (1 + isTouch)
    }

    document.body.onmousemove = changeCB
    document.body.ontouchmove = changeCB

    this.home = this.$themeConfig.base
  }
}
</script>

<style lang="stylus" scoped>
.page
  position relative
  padding 25vh 0
  overflow hidden
  width 100%
  box-sizing border-box
  user-select none

  .text
    font-size 20vh
    color rgba(125, 125, 125, 0.18)
    font-weight bolder
    width auto
    text-align center

  .button-wrap
    width 100%
    display flex
    justify-content center
    .button
      border 1px solid var(--c-accent)
      padding 10px 22px
      cursor pointer
      color var(--c-accent)
      border-radius 999px
      font-hei()
      font-weight 600
      transition all ease .25s

      &:hover
        background-color var(--c-accent)
        border-color transparent
        color #fff
        padding 10px 32px

.colors
  width 240px
  top 40%
  left 40%
  position absolute
  transition transform .3s ease
  z-index -1

  .color
    position absolute
    height 70px
    width 140px
    filter blur(60px)

  colors = (#60a5fa #c084fc #f472b6 #c084fc #f472b6)
  n = 5
  h_n = (n + n % 2) / 2
  for i in (1..n)
    .color:nth-child({i})
      background colors[i - 1]
      left (i - h_n) * 40px
      top (i - h_n) * 20px
      animation fly 5s + i * 3s ease infinite alternate-reverse

@keyframes fly
  0%
    transform translate(0px, 0px) rotateZ(0deg)
  50%
    transform translate(100px, -100px) rotateZ(360deg)
  100%
    transform translate(-100px, 100px) rotateZ(0deg)
</style>