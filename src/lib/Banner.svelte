<script lang="ts">
  import { onMount } from 'svelte'
  import { screenWidth } from '../store'
  import 'animate.css'
  import AOS from 'aos'

  let bannerBlueEl: HTMLElement,
    bannerYellowEl: HTMLElement,
    bannerRedEl: HTMLElement,
    bannerGreenEl: HTMLElement,
    bannerLogoEl: HTMLElement

  onMount(() => {
    const bannerEls = [
      bannerBlueEl,
      bannerYellowEl,
      bannerRedEl,
      bannerGreenEl,
      bannerLogoEl
    ]

    if ($screenWidth >= 1024) {
      /**
       * use animate.css at desktop size
       */
      bannerEls.forEach(el => {
        el.classList.add('animate__animated', 'animate__delay-1s')
      })
      bannerBlueEl.classList.add('animate__bounceInLeft')
      bannerYellowEl.classList.add(
        'animate__bounceInRight',
        'animate__delay-2s'
      )
      bannerRedEl.classList.add('animate__bounceInLeft', 'animate__delay-3s')
      bannerGreenEl.classList.add('animate__bounceInRight', 'animate__delay-4s')
      bannerLogoEl.classList.add('animate__bounceInDown', 'animate__delay-5s')
    } else {
      /**
       * use aos at mobile size
       */
      bannerBlueEl.dataset.aos = 'fade-right'
      bannerYellowEl.dataset.aos = 'fade-left'
      bannerRedEl.dataset.aos = 'fade-right'
      bannerGreenEl.dataset.aos = 'fade-left'
      bannerLogoEl.dataset.aos = 'fade-down'
    }
  })
</script>

<section class="container relative overflow-hidden">
  <div class="mb-2 grid gap-2 lg:mb-0 lg:grid-cols-2 lg:gap-0">
    <img
      bind:this={bannerBlueEl}
      src="/images/banner/blue.png"
      alt="banner-blue"
    />
    <img
      bind:this={bannerYellowEl}
      id="banner-yellow"
      class="ml-auto"
      src="/images/banner/yellow.png"
      alt="banner-yellow"
    />
  </div>
  <div class="mb-2 grid gap-2 lg:mb-0 lg:grid-cols-2 lg:items-end lg:gap-0">
    <img
      bind:this={bannerRedEl}
      id="banner-red"
      src="/images/banner/red.png"
      alt="banner-red"
    />
    <img
      bind:this={bannerGreenEl}
      id="banner-green"
      class="ml-auto"
      src="/images/banner/green.png"
      alt="banner-green"
    />
  </div>
  <div
    class="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2"
  >
    <img
      bind:this={bannerLogoEl}
      id="banner-logo"
      class="m-auto"
      src="/images/banner/logo.png"
      alt="banner-logo"
    />
  </div>
</section>
