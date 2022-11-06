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
      bannerEls.forEach(el => {
        el.classList.add('animate__animated')
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
      import('aos/dist/aos.css')

      AOS.init({
        offset: 250,
        easing: 'ease-out-back',
        duration: 800
      })
    }
  })
</script>

<section class="container relative overflow-hidden">
  <div class="mb-2 grid gap-2 lg:mb-0 lg:grid-cols-2 lg:gap-0">
    <img
      bind:this={bannerBlueEl}
      data-aos="fade-right"
      src="/images/banner/blue.png"
      alt="banner-blue"
    />
    <img
      bind:this={bannerYellowEl}
      id="banner-yellow"
      data-aos="fade-left"
      class="ml-auto"
      src="/images/banner/yellow.png"
      alt="banner-yellow"
    />
  </div>
  <div class="mb-2 grid gap-2 lg:mb-0 lg:grid-cols-2 lg:items-end lg:gap-0">
    <img
      bind:this={bannerRedEl}
      id="banner-red"
      data-aos="fade-right"
      src="/images/banner/red.png"
      alt="banner-red"
    />
    <img
      bind:this={bannerGreenEl}
      id="banner-green"
      data-aos="fade-left"
      class="ml-auto"
      src="/images/banner/green.png"
      alt="banner-green"
    />
  </div>
  <div class="top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:absolute">
    <img
      bind:this={bannerLogoEl}
      id="banner-logo"
      data-aos="fade-down"
      class="m-auto"
      src="/images/banner/logo.png"
      alt="banner-logo"
    />
  </div>
</section>
