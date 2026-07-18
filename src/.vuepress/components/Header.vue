<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="header page header-inner">
      <div class="brand">
        <a :href="'/'" class="brand-link">
          <span class="brand-mark">R</span>
          <span class="brand-name">{{ brandName }}</span>
        </a>
        <div class="motto" v-for="(line, index) in headTitle" v-bind:key="index">{{ line }}</div>
      </div>

      <nav class="nav" v-if="nav.length">
        <a :href="link.link" class="nav-item" v-for="(link, index) in nav" v-bind:key="index">{{ link.name }}</a>
      </nav>

      <div class="actions">
        <SearchBox />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script>
import ThemeToggle from './ThemeToggle.vue'

export default {
  components: { ThemeToggle },
  data() {
    return {
      nav: [],
      headTitle: [],
      scrolled: false,
      brandName: (this.$site && this.$site.title) || 'Blog'
    }
  },
  mounted() {
    this.nav = (this.$themeConfig.nav || [])
    this.headTitle = (this.$themeConfig.headTitle || [])
    this.brandName = (this.$site.title || 'Blog')
    const onScroll = () => { this.scrolled = window.scrollY > 4 }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    this._onScroll = onScroll
  },
  beforeDestroy() {
    if (this._onScroll) window.removeEventListener('scroll', this._onScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '../styles/fonts.styl'

.site-header
  position sticky
  top 0
  z-index 100
  background-color var(--c-bg)
  border-bottom 1px solid transparent
  backdrop-filter saturate(180%) blur(10px)
  -webkit-backdrop-filter saturate(180%) blur(10px)
  transition background-color .25s ease, border-color .25s ease

.site-header.is-scrolled
  background-color rgba(255, 255, 255, 0.72)
  border-bottom 1px solid var(--c-hairline)

[data-theme="dark"] .site-header
  background-color rgba(11, 15, 23, 0.6)
[data-theme="dark"] .site-header.is-scrolled
  background-color rgba(11, 15, 23, 0.78)
  border-bottom 1px solid var(--c-hairline)

.header
  display flex
  align-items center
  justify-content space-between
  gap 24px
  height var(--navbar-height)
  padding-top 0
  padding-bottom 0

.brand
  display flex
  align-items baseline
  gap 14px
  min-width 0

  .brand-link
    display inline-flex
    align-items center
    gap 10px
    color var(--c-body)
    font-weight 600
    letter-spacing .01em

  .brand-mark
    width 28px
    height 28px
    border-radius 8px
    display inline-flex
    align-items center
    justify-content center
    font-weight 700
    font-size 15px
    color #fff
    background linear-gradient(135deg, #3b82f6, #6366f1 55%, #8b5cf6)
    box-shadow 0 4px 10px rgba(99, 102, 241, 0.25)

  .brand-name
    font-size 16px
    color var(--c-body)
    white-space nowrap

  .motto
    font-kai()
    font-size 13px
    color var(--c-body-faint)
    line-height 1.5
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    max-width 60vw

.nav
  display flex
  align-items center
  gap 8px
  font-size 14px

  a.nav-item
    color var(--c-body-muted)
    padding 6px 12px
    border-radius 8px
    transition color .15s ease, background-color .15s ease
    &:hover
      color var(--c-body)
      background-color var(--c-bg-subtle)

.actions
  display flex
  align-items center
  gap 12px

@media print
  .site-header
    display none

@media screen and (max-width $MQMobile)
  .header
    flex-wrap wrap
    height auto
    padding 10px 0
    gap 10px

  .brand
    flex 1 1 100%
    width 100%
    justify-content space-between

  .nav
    order 3
    flex 1 1 100%
    justify-content flex-start
    overflow-x auto

  .actions
    order 2

  .brand .motto
    max-width 50vw
    flex 1 1 auto

@media screen and (max-width $MQMobileNarrow)
  .brand .motto
    display none
</style>
