<template>
  <div :class="`hero float--${float} ${classes}`" >
    <div class="hero_content">
      <div class="content content--text">
        <img class="content--logo" src="../../public/images/logo_white.svg">
        <h1 class="title" v-if="hero.title" v-html="hero.title"></h1>
        <div class="text subtitle" v-if="hero.text" v-html="hero.text"></div>
      </div>
      <div class="content content--image" v-if="hero.image">
        <img :src="hero.image" alt="">
      </div>
      <div class="content content--slot">
        <FormNewsletter/>
        <slot></slot>
      </div>
    </div>
    <div class="hero_background"></div>
  </div>
</template>

<script>
import FormNewsletter from '@/components/FormNewsletter'

export default {
  name: 'Hero',
  data () {
    return {
    }
  },
  components: {
    FormNewsletter
  },
  props: {
    hero: {
      type: Object
    },
    float: {
      type: String
    },
    classes: {
      type: String
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  min-height: 50vw;
}

.hero.colapsed {
  max-height: 15vw;
  min-height: auto;
}

.hero:after,
.hero:before {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
}

.hero:before {
  background-image: url('../assets/images/Pattern.svg');
  background-size: 15%;
  opacity: .5;
}

.hero:after {
  z-index: -1;
  background: rgb(2, 55, 140);
  background: -moz-linear-gradient(left, rgba(2,55,140,1) 0%, rgba(7,29,73,1) 74%, rgba(7,29,73,1) 100%);
  background: -webkit-linear-gradient(left, rgba(2,55,140,1) 0%, rgba(7,29,73,1) 74%, rgba(7,29,73,1) 100%);
  background: -o-linear-gradient(left, rgba(2,55,140,1) 0%, rgba(7,29,73,1) 74%, rgba(7,29,73,1) 100%);
  background: -ms-linear-gradient(left, rgba(2,55,140,1) 0%, rgba(7,29,73,1) 74%, rgba(7,29,73,1) 100%);
  background: linear-gradient(to right, rgba(2,55,140,1) 0%, rgba(7,29,73,1) 74%, rgba(7,29,73,1) 100%);
}

.hero_content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  padding: 8% 0;
  position: relative;
  z-index: 1;
}

.hero.colapsed .hero_content {
  padding: 30px 0;
}

.hero .content--text {
  color: white;
  text-align: left;
  width: 50%;
}

.hero .content--text .title {
  color: white;
  margin-top: 0;
}

.hero .content--logo {
  margin: 20px auto 80px;
}

.hero .content--text .text {
  color: var(--color-white);
}

.hero .content--image,
.hero .content--text {
  vertical-align: middle;
}

.hero .content--image {
  width: 40vw;
  max-width: 800px;
}

.hero .content--image img {
  width: 100%;
}

.hero.full-content .hero_content {
  flex-direction: column;
}

.hero.full-content .content--text {
  width: 80%;
  margin: auto;
  text-align: center;
}

.hero.full-content .content--slot {
  width: 100%;
  margin: auto;
  text-align: center;
}

@media (max-width: 768px) {
  .hero {
    max-height: 100%;
    height: auto;
  }
  .hero .hero_background {
    -webkit-transform: skew(0deg, -3deg) translateY(-20px);
    transform: skew(0deg, -3deg) translateY(-20px);
  }
  .hero_content {
    padding: 40px 0 80px;
    display: block;
  }
  .hero.full-content .content--text {
    width: 90%;
    min-width: 304px;
  }
  .hero .content--image {
    margin: auto;
    width: 80%;
  }
}
@media (min-width: 1920px) {
  .hero .content--text .title {
    font-size: 2vw;
  }
  .hero .content--text {
    font-size: 1.2vw;
  }
  .hero_content {
    padding: 6vw 0;
  }
}
</style>
