<script lang="ts">
  import { pathConverter } from '../utils'

  let goTopBtn: HTMLElement

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let windowScrollY: number
  $: if (goTopBtn) {
    if (windowScrollY > 400) {
      goTopBtn.style.right = ''
    } else {
      goTopBtn.style.right = '-80px'
    }
  }
</script>

<svelte:window bind:scrollY={windowScrollY} />
<div
  on:click={goTop}
  bind:this={goTopBtn}
  class="fixed right-6 bottom-6 z-50 h-10 w-10 cursor-pointer opacity-50 transition-[right] hover:opacity-100 lg:h-auto lg:w-auto"
>
  <img src={pathConverter('/images/arrow-up.png')} alt="arrow-up" />
</div>
