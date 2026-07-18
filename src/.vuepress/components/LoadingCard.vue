<template>
  <div class="loading-cards">
    <div class="loading-card loading-light" v-for="(i, idx) in new Array(8)" :key="idx">
      <div class="loading-meta">
        <div class="loading-chip"></div>
        <div class="loading-chip small"></div>
      </div>
      <div class="loading-title"></div>
      <div class="loading-content"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
$light = var(--c-bg-subtle)

.loading-card
  padding 22px 24px 18px
  margin-bottom 16px
  border 1px solid var(--c-hairline)
  border-radius var(--radius-lg)
  background var(--c-card)
  overflow hidden

.loading-meta
  display flex
  gap 8px
  margin-bottom 12px

.loading-chip
  height 22px
  width 96px
  background $light
  border-radius 999px
  &.small
    width 60px

.loading-title
  height 22px
  width 60%
  background $light
  margin 8px 0

.loading-content
  height 54px
  background $light
  margin-top 8px
  border-radius 4px
</style>
