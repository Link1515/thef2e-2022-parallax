<script lang="ts">
  import { slide } from 'svelte/transition'
  import { screenWidth } from '../store'

  let collapse = $screenWidth >= 1024

  const toggleMenu = () => {
    collapse = !collapse
  }

  const closeMenu = () => {
    if ($screenWidth < 1024) {
      collapse = false
    }
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white lg:relative">
  <div class="container flex h-12 items-center lg:h-24">
    <a class="logo mr-auto hidden lg:inline-block" href="#hello!">
      <img src="/images/logo.png" alt="logo" />
    </a>
    <div on:click={toggleMenu} class="mr-auto lg:hidden">
      <img src="/images/burger.png" alt="burger" />
    </div>
    {#if collapse}
      <div
        transition:slide
        on:click={closeMenu}
        class="absolute top-[99%] left-0 mr-4 w-full gap-4 bg-white lg:static lg:flex lg:w-auto"
      >
        <a class="grid h-12 w-full place-items-center lg:w-24" href="#topics"
          >關卡資訊</a
        >
        <a
          class="grid h-12 w-full place-items-center lg:w-24"
          href="https://2022.thef2e.com/works"
          target="_blank"
          rel="noreferrer">作品列表</a
        >
        <a
          class="grid h-12 w-full place-items-center lg:w-24"
          href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w"
          target="_blank"
          rel="noreferrer">攻略資源</a
        >
        <a
          class="grid h-12 w-full place-items-center lg:w-24"
          href="https://2022.thef2e.com/jobs"
          target="_blank"
          rel="noreferrer">求職專區</a
        >
        <a
          class="grid h-12 w-full place-items-center lg:w-24"
          href="https://2022.thef2e.com/login"
          target="_blank"
          rel="noreferrer">登入</a
        >
      </div>
    {/if}
    <a
      class="btn-primary h-10 w-16 shadow-none lg:h-12 lg:w-24 lg:shadow-solid"
      href="https://2022.thef2e.com/signup"
      target="_blank"
      rel="noreferrer">立即報名</a
    >
  </div>
</nav>
