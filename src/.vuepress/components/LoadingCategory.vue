<template>
  <div class="loading-categories">
    <div class="skel-card loading-light" v-for="i in new Array(5)" :key="i">
      <div class="skel-head">
        <div class="skel-name"></div>
        <div class="skel-count"></div>
      </div>
      <div class="skel-desc"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.skel-card
  padding 14px 16px
  margin-bottom 10px
  border 1px solid var(--c-hairline)
  border-radius var(--radius)
  background var(--c-card)

.skel-head
  display flex
  align-items center
  justify-content space-between

.skel-name
  width 50%
  height 16px
  background var(--c-bg-subtle)

.skel-count
  width 26px
  height 18px
  background var(--c-bg-subtle)
  border-radius 999px

.skel-desc
  margin-top 8px
  height 14px
  width 80%
  background var(--c-bg-subtle)
</style>
