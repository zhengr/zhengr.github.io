<template>
  <article class="card">
    <a class="card-link" v-bind:href="link">
      <div class="card-meta">
        <span class="chip-date">
          <svg viewBox="0 0 24 24" class="chip-icon"><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3.5v3.5M16 3.5v3.5" /></svg>
          {{ date }}
        </span>
        <span class="chip-tag" v-if="tag">
          <svg viewBox="0 0 24 24" class="chip-icon"><path d="M3 11.5l8-8a3 3 0 0 1 4.2 0l4.3 4.3a3 3 0 0 1 0 4.2l-8 8a3 3 0 0 1-4.2 0l-4.3-4.3a3 3 0 0 1 0-4.2z" /><circle cx="7.6" cy="14" r="1.4" /></svg>
          {{ tag }}
        </span>
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-content">{{ desc }}…</p>
      <div class="card-footer">
        <span class="read-more">
          继续阅读
          <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: String,
    desc: String,
    tag: String,
    date: String,
    number: Number,
    link: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

.card
  margin-bottom 16px
  border 1px solid var(--c-hairline)
  border-radius var(--radius-lg)
  background var(--c-card)
  box-shadow var(--c-card-shadow)
  transition transform .22s ease, box-shadow .22s ease, border-color .22s ease
  overflow hidden
  position relative

.card:hover
  transform translateY(-3px)
  box-shadow var(--c-card-shadow-hover)
  border-color var(--c-accent)

.card-link
  display block
  padding 22px 24px 18px
  color var(--c-body)

.card-meta
  display flex
  align-items center
  flex-wrap wrap
  gap 8px
  margin-bottom 12px

.chip-date, .chip-tag
  display inline-flex
  align-items center
  gap 6px
  font-size 12px
  font-weight 500
  line-height 1
  padding 6px 10px
  border-radius 999px
  border 1px solid transparent
  white-space nowrap

.chip-date
  color var(--c-body-muted)
  background var(--c-bg-subtle)

.chip-tag
  color var(--c-accent)
  background var(--c-accent-soft)

.chip-icon
  width 13px
  height 13px
  fill none
  stroke currentColor
  stroke-width 1.6
  stroke-linecap round
  stroke-linejoin round

.card-title
  margin 6px 0 8px 0
  font-size 20px
  font-weight 600
  line-height 1.35
  color var(--c-body)
  font-hei()
  letter-spacing -0.005em
  transition color .15s ease

.card:hover .card-title
  color var(--c-accent)

.card-content
  margin 0
  font-size 14px
  line-height 1.7
  color var(--c-body-muted)
  font-hei()
  display -webkit-box
  -webkit-line-clamp 3
  -webkit-box-orient vertical
  overflow hidden

.card-footer
  margin-top 14px
  display flex
  justify-content flex-end

.read-more
  display inline-flex
  align-items center
  gap 4px
  font-size 12px
  font-weight 500
  color var(--c-accent)
  opacity 0
  transform translateX(-4px)
  transition opacity .2s ease, transform .2s ease

  svg
    width 14px
    height 14px
    fill none
    stroke currentColor
    stroke-width 1.8
    stroke-linecap round
    stroke-linejoin round

.card:hover .read-more
  opacity 1
  transform translateX(0)
</style>
