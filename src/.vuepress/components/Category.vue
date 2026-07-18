<template>
  <a :href="link" class="category-card">
    <div class="cat-head">
      <span class="cat-name">{{ name }}</span>
      <span class="cat-count">{{ count }}</span>
    </div>
    <div class="cat-desc">{{ desc }}</div>
  </a>
</template>

<script>
export default {
  name: 'Category',
  props: {
    name: String,
    count: Number,
    desc: String,
    link: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/fonts.styl"

.category-card
  display block
  padding 14px 16px
  margin-bottom 10px
  border 1px solid var(--c-hairline)
  border-radius var(--radius)
  background var(--c-card)
  color var(--c-body)
  transition transform .18s ease, border-color .18s ease, box-shadow .18s ease

.category-card:hover
  transform translateY(-2px)
  border-color var(--c-accent)
  box-shadow var(--c-card-shadow)

.cat-head
  display flex
  align-items center
  justify-content space-between
  gap 8px

.cat-name
  font-size 14px
  font-weight 600
  color var(--c-body)
  letter-spacing .01em

.cat-count
  font-size 11px
  font-weight 700
  color var(--c-accent)
  background var(--c-accent-soft)
  padding 3px 8px
  border-radius 999px
  min-width 22px
  text-align center

.cat-desc
  margin-top 6px
  font-size 12px
  color var(--c-body-muted)
  line-height 1.55
  font-hei()
</style>
