<template>
  <footer class="site-footer">
    <div class="footer-content page">
      <div class="footer-left">
        <a :href="'/'" class="footer-brand">{{ brandName }}</a>
        <p class="footer-tagline">{{ tagline }}</p>
      </div>

      <div class="footer-right">
        <div class="links" v-if="friendLinks && friendLinks.length">
          <a class="link" v-for="(l, i) in friendLinks" :key="i" :href="l.link" target="_blank" rel="noopener">{{ l.name }}</a>
        </div>
        <div class="extra-text" v-if="extraFooters && extraFooters.length">
          <a class="extra-link" v-for="(e, i) in extraFooters" :key="i" :href="e.link || 'javascript:;'" v-if="e.link" target="_blank" rel="noopener">{{ e.text }}</a>
          <span class="extra-link" v-for="(e, i) in (extraFooters || []).filter(x => !x.link)" :key="'t'+i">{{ e.text }}</span>
        </div>
        <div class="copyright">
          © {{ year }} {{ brandName }}
          <span class="pv" v-if="showPv"> · {{ pvText }} views</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      friendLinks: [],
      extraFooters: [],
      brandName: (this.$site && this.$site.title) || 'Blog',
      tagline: (this.$site && this.$site.description) || '',
      pvText: '0',
      showPv: false
    }
  },

  mounted() {
    this.friendLinks = this.$themeConfig.friendLinks || []
    this.extraFooters = this.$themeConfig.extraFooters || []
    this.brandName = this.$site.title || 'Blog'
    this.tagline = this.$site.description || ''

    const vueThis = this
    const pvDom = document.querySelector('#busuanzi_container_site_pv')
    if (pvDom) {
      vueThis.showPv = true
      const observer = new MutationObserver(function () {
        const txt = (pvDom.textContent || '').replace(/[^0-9]/g, '')
        vueThis.pvText = txt || '0'
      })
      observer.observe(pvDom, { childList: true, subtree: true, characterData: true })
    }
  }
}
</script>

<style lang="stylus" scoped>
.site-footer
  margin-top auto
  border-top 1px solid var(--c-hairline)
  background-color var(--c-bg-subtle)
  color var(--c-body-muted)

.footer-content
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items flex-start
  gap 24px
  padding 36px 0 40px

.footer-left
  .footer-brand
    font-size 16px
    font-weight 700
    color var(--c-body)
    letter-spacing .01em
  .footer-tagline
    margin 8px 0 0
    font-size 13px
    color var(--c-body-faint)
    max-width 320px
    line-height 1.6

.footer-right
  text-align right
  display flex
  flex-direction column
  gap 10px

  .links
    display flex
    flex-wrap wrap
    gap 4px 16px
    justify-content flex-end
    .link
      font-size 13px
      color var(--c-body-muted)
      text-decoration none
      transition color .15s ease
      &:hover
        color var(--c-accent)

  .extra-text
    .extra-link
      font-size 12px
      color var(--c-body-faint)
      text-decoration none
      margin-left 12px
      &:first-child
        margin-left 0
      &:hover
        color var(--c-accent)

  .copyright
    font-size 12px
    color var(--c-body-faint)
    .pv
      opacity .8

@media screen and (max-width $MQMobile)
  .footer-content
    flex-direction column
    gap 18px
  .footer-right
    text-align left
    .links
      justify-content flex-start
      .link
        margin 0 16px 0 0
</style>
