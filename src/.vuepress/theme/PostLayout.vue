<template>
<div class="site">
  <Header />
  <main class="page post-page">
    <div class="post-head">
      <h1 class="post-title">{{$page.title}}</h1>
      <div class="info">
        <span class="author"><svg viewBox="0 0 24 24" class="i"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0"/></svg>{{$frontmatter.author}}</span>
        <span class="sep">·</span>
        <span class="date"><svg viewBox="0 0 24 24" class="i"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M8 3.5v3.5M16 3.5v3.5"/></svg>{{$frontmatter.date}}</span>
        <span class="count" v-if="$themeConfig.pageCount">
          <svg viewBox="0 0 24 24" class="i"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.4"/></svg>
          <span id="busuanzi_value_page_pv"></span>&nbsp;次阅读
        </span>
      </div>
    </div>

    <article class="post-content">
      <Content />
    </article>

    <Vssue title="Vssue Demo" :issueId="$frontmatter.id" />
  </main>
  <Footer />
</div>
</template>

<script>
import mediumZoom from 'medium-zoom'

export default {
  mounted() {
    this.zoom = mediumZoom('p img')
  }
}
</script>

<style lang="stylus">
@import "../styles/fonts.styl"

$mainColor = var(--c-accent)

.site
  min-height 100vh
  display flex
  flex-direction column

.post-page
  flex 1
  margin-bottom 60px

.post-head
  text-align center
  margin-top 5.5rem
  margin-bottom 2.5rem

.post-title
  margin 0
  color var(--c-body)
  font-weight 700
  font-size clamp(26px, 4vw, 38px)
  line-height 1.25
  letter-spacing -0.02em

.info
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  gap 8px
  margin-top 14px
  color var(--c-body-muted)
  font-size 13px

  .author, .date, .count
    display inline-flex
    align-items center
    gap 5px

  .i
    width 14px
    height 14px
    fill none
    stroke currentColor
    stroke-width 1.6
    stroke-linecap round
    stroke-linejoin round

  .sep
    color var(--c-hairline-strong)

// ---------------- Typography ----------------
.post-content
  word-break break-word
  font-size 16px
  line-height 1.8
  color var(--c-body)

  > *:first-child
    margin-top 0

  p
    margin 1.1em 0
    font-hei()

  strong
    font-weight 700
    color var(--c-body)

  em
    color var(--c-body-muted)

  a
    color var(--c-link)
    font-weight 500
    text-decoration none
    border-bottom 1px solid var(--c-accent-soft)
    transition border-color .15s ease
    &:hover
      border-bottom-color var(--c-accent)

  h1, h2, h3, h4, h5, h6
    font-weight 700
    line-height 1.3
    font-hei()
    margin-top 2em
    margin-bottom .6em
    letter-spacing -0.01em
    color var(--c-body)
    &:hover .header-anchor
      opacity 1

  h1
    display none
  h2
    font-size 1.5rem
    padding-bottom .4rem
    border-bottom 1px solid var(--c-hairline)
  h3
    font-size 1.25rem
  h4
    font-size 1.1rem

  a.header-anchor
    font-size .8em
    float left
    margin-left -.9em
    padding-right .25em
    margin-top .15em
    opacity 0
    color var(--c-body-faint)
    &:hover
      text-decoration none
      color var(--c-accent)

  ul, ol
    padding-left 1.4em
    margin 1.1em 0
    font-hei()
    li
      margin .4em 0

  kbd
    background var(--c-bg-subtle)
    border 1px solid var(--c-hairline-strong)
    border-bottom-width 2px
    border-radius 6px
    padding 1px 6px
    font-size .85em

  blockquote
    margin 1.4em 0
    padding .8em 1.2em
    border-left 4px solid var(--c-quote-bar)
    background var(--c-quote-bg)
    border-radius 0 var(--radius) var(--radius) 0
    color var(--c-body-muted)
    & > p
      margin .4em 0
      font-fang-song()
    & strong
      color var(--c-body)

  hr
    border 0
    border-top 1px solid var(--c-hairline)
    margin 2.4em 0

  // code
  code, kbd, .line-number
    font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace

  code
    background var(--c-inline-code-bg)
    color var(--c-inline-code-text)
    padding 2px 6px
    margin 0 1px
    border-radius 6px
    font-size .88em

  pre
    border 1px solid var(--c-hairline)
    border-radius var(--radius)
    padding 16px 18px
    overflow auto
    background var(--c-code-bg)
    box-shadow var(--c-card-shadow)
    margin 1.4em 0

  pre > code
    background transparent
    padding 0
    margin 0
    color var(--c-code-text)
    font-size 13.5px
    line-height 1.6

  li.task-list-item
    list-style none
    display flex
    input[type^=checkbox]
      margin 7px 9px 0 -18px

  // tables
  table
    border-collapse collapse
    margin 1.5em 0
    display block
    overflow-x auto
    width 100%
    border 1px solid var(--c-hairline)
    border-radius var(--radius)
    font-size 14px

  th, td
    border 1px solid var(--c-hairline)
    padding .6em 1em
    text-align left

  thead th
    background var(--c-bg-subtle)
    font-weight 700

  tr:nth-child(2n) td
    background var(--c-table-stripe)

  // images — nice framed container
  img
    max-width 100%
    margin 1.6em auto
    display block
    border-radius var(--radius)
    border 1px solid var(--c-hairline)
    box-shadow var(--c-card-shadow)

.katex
  font-size 1.05em

// ---------------- Comments ----------------
.vssue
  font-hei()
  margin-top 3.5rem
  max-width 760px
  margin-left auto
  margin-right auto

  .vssue-pagination-per-page,
  .vssue-header-powered-by,
  .vssue-pagination-page
    display none
  .vssue-new-comment
    border 0
  .vssue-current-user
    line-height 2.5
  .vssue-button-submit-comment:not(:disabled):hover
    background-color var(--c-bg-subtle)
  p
    font-hei()

// ---------------- Responsive ----------------
@media screen and (max-width 576px)
  .post-head
    margin-top 3rem
  p, ul, ol
    font-hei()
  .post-title
    font-size 24px
  .katex-display
    overflow-x scroll
    overflow-y hidden

@media print
  .site
    display block
  .post-head
    margin-top 10%
    font-kai()
    font-weight bold
  .info
    font-kai()
    text-align center
    page-break-after always
  .footer, .vssue
    display none
  code
    word-break break-all
  pre
    page-break-inside avoid
</style>
