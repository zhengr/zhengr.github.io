<template>
  <button
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? '切换为浅色' : '切换为深色'"
    @click="toggle"
  >
    <svg class="icon-sun" viewBox="0 0 24 24" v-if="isDark">
      <circle cx="12" cy="12" r="4.5" />
      <g class="sun-rays">
        <line x1="12" y1="2.5" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="21.5" />
        <line x1="2.5" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="21.5" y2="12" />
        <line x1="4.8" y1="4.8" x2="6.6" y2="6.6" />
        <line x1="17.4" y1="17.4" x2="19.2" y2="19.2" />
        <line x1="4.8" y1="19.2" x2="6.6" y2="17.4" />
        <line x1="17.4" y1="6.6" x2="19.2" y2="4.8" />
      </g>
    </svg>
    <svg class="icon-moon" viewBox="0 0 24 24" v-else>
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a.6.6 0 0 0-.85-.7A9 9 0 1 0 21.2 15.05a.6.6 0 0 0-.7-.85z" />
    </svg>
  </button>
</template>

<script>
const STORAGE_KEY = 'blog-theme'

export default {
  data() {
    return {
      isDark: false
    }
  },
  methods: {
    apply(isDark) {
      this.isDark = isDark
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
      try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light') } catch (e) {}
    },
    toggle() {
      this.apply(!this.isDark)
    }
  },
  mounted() {
    let initial = null
    try { initial = localStorage.getItem(STORAGE_KEY) } catch (e) {}
    if (!initial) {
      initial = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    this.apply(initial === 'dark')
  }
}
</script>

<style lang="stylus" scoped>
.theme-toggle
  display inline-flex
  align-items center
  justify-content center
  width 36px
  height 36px
  padding 0
  border 1px solid var(--c-hairline)
  background var(--c-bg-elev)
  border-radius 999px
  cursor pointer
  color var(--c-body-muted)
  transition background .2s ease, border-color .2s ease, color .2s ease, transform .15s ease
  outline none
  &:hover
    color var(--c-accent)
    border-color var(--c-accent)
    transform translateY(-1px)
  &:active
    transform translateY(0) scale(0.96)

  svg
    width 18px
    height 18px
    fill none
    stroke currentColor
    stroke-width 1.6
    stroke-linecap round
    stroke-linejoin round

  .icon-sun circle
    fill none
    stroke currentColor
  .icon-sun .sun-rays line
    stroke currentColor
  .icon-moon path
    fill currentColor
    stroke none
</style>
