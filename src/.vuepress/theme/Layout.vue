<template>
<div class="site">
  <Header />
  <main class="page home">
    <!-- Hero / banner -->
    <section class="hero">
      <div class="hero-blobs" aria-hidden="true">
        <span class="blob b1"></span>
        <span class="blob b2"></span>
        <span class="blob b3"></span>
      </div>
      <div class="hero-text">
        <h1 class="slogan">
          <span class="slogan-line">{{ $frontmatter.slogan.main }}</span>
          <span class="slogan-line">{{ $frontmatter.slogan.sub }}</span>
        </h1>
        <div class="hero-stats">
          <span class="stat"><strong>{{ totalPosts }}</strong>文章</span>
          <span class="dot-sep"></span>
          <span class="stat"><strong>{{ categoryCount }}</strong>个分类</span>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="content">
      <div class="posts">
        <LoadingCard />
        <PostCard v-for="(post, index) in posts" v-bind:key="index"
          v-bind:title="post.title" v-bind:desc="post.desc"
          v-bind:tag="post.tag" v-bind:date="post.date"
          v-bind:number="post.number" v-bind:link="post.link"/>
      </div>
      <aside class="side">
        <div class="side-block">
          <div class="side-title">分类</div>
          <div class="side-category">
            <LoadingCategory />
            <Category v-for="(category, index) in categories" v-bind:key="index"
              v-bind:name="category.name" v-bind:count="category.count"
              v-bind:desc="category.desc" v-bind:link="category.link"/>
          </div>
        </div>
        <div class="side-block side-about">
          <div class="side-title">关于</div>
          <div class="about-card">
            <p class="about-text">{{ aboutText }}</p>
          </div>
        </div>
      </aside>
    </section>
  </main>
  <Footer />
</div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      categories: []
    }
  },

  computed: {
    totalPosts () {
      const sum = (this.$frontmatter.categories || []).reduce((acc, c) => acc + (c.count || 0), 0)
      return sum
    },
    categoryCount () {
      return (this.$frontmatter.categories || []).length
    },
    aboutText () {
      return this.$site.description || ''
    }
  },

  beforeUpdate () {
    ['.loading-cards', '.loading-categories'].forEach(v => {
      const node = document.querySelector(v)
      if (!node) return
      node.style.display = 'none'
    })
  },

  mounted () {
    this.posts = this.$frontmatter.posts

    const count = this.posts.length
    this.categories = [{
      name: '总览',
      count,
      desc: `共发布了 ${count} 篇文章。`,
      link: `/`
    }].concat(this.$frontmatter.categories)
  }
}
</script>

<style lang="stylus">
@import "../styles/fonts.styl"

.site
  min-height 100vh
  display flex
  flex-direction column

.home
  flex 1

// ---------------- Hero ----------------
.hero
  position relative
  margin-top 6rem
  margin-bottom 4rem
  padding 3rem 0 2.5rem
  overflow hidden
  z-index 1

.hero-text
  position relative
  z-index 2
  max-width 720px

.slogan
  margin 0 0 1.4rem 0
  font-hei()
  font-weight 700
  font-size clamp(28px, 5vw, 52px)
  line-height 1.18
  letter-spacing -0.02em
  color var(--c-body)
  .slogan-line
    display block
    background linear-gradient(120deg, var(--c-body) 0%, var(--c-accent) 90%)
    -webkit-background-clip text
    background-clip text
    -webkit-text-fill-color transparent

// dark theme gradient override for slogan
[data-theme="dark"] .slogan .slogan-line
  background linear-gradient(120deg, var(--c-body) 0%, #93c5fd 90%)
  -webkit-background-clip text
  -webkit-text-fill-color transparent

.hero-stats
  display flex
  align-items center
  gap 12px
  margin-top 1.2rem
  color var(--c-body-muted)
  font-size 13px

  .stat strong
    color var(--c-body)
    font-weight 700
    margin-right 4px

  .dot-sep
    width 3px
    height 3px
    border-radius 50%
    background var(--c-hairline-strong)

/* animated gradient blobs in background */
.hero-blobs
  position absolute
  inset 0
  z-index 1
  pointer-events none
  filter blur(60px)
  opacity .9

  .blob
    position absolute
    border-radius 50%
    will-change transform

  .b1
    width 360px
    height 360px
    right 4%
    top -30px
    background radial-gradient(circle at 30% 30%, #60a5fa, transparent 65%)
    animation floatA 14s ease-in-out infinite alternate
  .b2
    width 320px
    height 320px
    right 22%
    top 70px
    background radial-gradient(circle at 30% 30%, #c084fc, transparent 65%)
    animation floatB 18s ease-in-out infinite alternate
  .b3
    width 300px
    height 300px
    right -6%
    top 80px
    background radial-gradient(circle at 30% 30%, #f472b6, transparent 65%)
    animation floatA 22s ease-in-out infinite alternate-reverse

[data-theme="dark"] .hero-blobs
  opacity .55

@keyframes floatA
  from
    transform translate(0, 0) scale(1)
  to
    transform translate(-60px, 50px) scale(1.1)

@keyframes floatB
  from
    transform translate(0, 0) scale(1)
  to
    transform translate(40px, -40px) scale(0.9)

// ---------------- Layout grid ----------------
.content
  display grid
  grid-template-columns minmax(0, 1fr) 280px
  align-items flex-start
  gap 32px
  margin-bottom 4rem

  .posts
    min-width 0
    min-height 400px

  .side
    position sticky
    top calc(var(--navbar-height) + 20px)
    display flex
    flex-direction column
    gap 24px

  .side-block
    .side-title
      font-size 11px
      font-weight 700
      letter-spacing .14em
      text-transform uppercase
      color var(--c-body-faint)
      margin 0 4px 12px

.about-card
  border 1px solid var(--c-hairline)
  border-radius var(--radius)
  background var(--c-card)
  padding 16px

  .about-text
    margin 0
    font-size 14px
    line-height 1.7
    color var(--c-body-muted)
    font-hei()

@keyframes fade-up
  from
    opacity 0
    transform translateY(8px)
  to
    opacity 1
    transform translateY(0)

.posts .card
  animation fade-up .5s ease backwards

// ---------------- Responsive ----------------
@media screen and (max-width 959px)
  .content
    grid-template-columns 1fr
    .side
      position static

@media screen and (max-width 576px)
  .hero
    margin-top 3rem
    padding 2rem 0 1.5rem
  .hero-stats
    font-size 12px
</style>
