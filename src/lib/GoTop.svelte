<script lang="ts">
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={goTop}
  class="fixed right-6 bottom-6 z-50 h-10 w-10 cursor-pointer opacity-50 hover:opacity-100 lg:h-auto lg:w-auto"
>
  <img src="/images/arrow-up.png" alt="arrow-up" />
</div>
