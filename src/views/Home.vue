<template>
  <div class="home">
    <div class="container container--home">
      <div class="row row--full">
        <v-hero v-if="content.list_hero" :hero="content.list_hero" float="right" classes="full-content">
          <ul class="social-links">
            <li class="preview-icon">
              <a target="_blank" href="https://twitter.com/4cadia">
              <svg class="niftybutton-twitter" style="display:block;fill:currentColor" data-tag="twi" data-name="Twitter" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z">
                </path>
              </svg>
              </a>
            </li>
            <li class="preview-icon">
              <a target="_blank" href="https://github.com/4cadia">
              <svg class="niftybutton-github" style="display:block;fill:currentColor" data-donate="true" data-tag="git" data-name="Github" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z">
                </path>
              </svg>
              </a>
            </li>
            <li class="preview-icon">
              <a target="_blank" href="https://medium.com/@4cadia">
              <svg class="niftybutton-medium" style="display:block;fill:currentColor" data-donate="true" data-tag="med" data-name="Medium" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <path fill-rule="evenodd" d="M119.74 172.58c.45-4.39-1.24-8.72-4.51-11.67l-33.34-40.19v-6h103.57l80.05 175.57 70.38-175.57h98.73v6l-28.52 27.34a8.348 8.348 0 0 0-3.17 8.01V357c-.51 3.04.71 6.12 3.17 7.99l27.85 27.34v6h-140.1v-6l28.86-28.01c2.83-2.83 2.83-3.66 2.83-7.99v-162.4l-80.22 203.75h-10.84l-93.41-203.75v136.56a18.845 18.845 0 0 0 5.17 15.66l37.53 45.52v6.01H77.38v-6.01l37.53-45.52c4.02-4.15 5.81-9.97 4.84-15.66-.01-.01-.01-157.91-.01-157.91z" clip-rule="evenodd">
                </path>
              </svg>
              </a>
            </li>
          </ul>
        </v-hero>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import contentService from '../api/contentService'
import Hero from '@/components/Hero'
import HomeContent from '../../public/content/home.json'

export default {
  name: 'Home',
  data () {
    return {
      content: HomeContent,
      title: '4cadia'
    }
  },
  components: {
    'v-hero': Hero
  },
  methods: {
  },
  beforeMount: function () {
    // contentService('home').then((response) => {
    //   this.content = response.data
    // })
  },
  created: function () {
  }
}
</script>

<style>
.social-links {
  width: 100%;
}
.social-links .preview-icon {
  display: inline-block;
  background: white;
  border-radius: 50%;
  margin: 0 15px;
}
.social-links .preview-icon svg {
  width: 50px;
  color: var(--color-navy);
  /* height: 30px; */
}
</style>
