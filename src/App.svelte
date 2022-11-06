<script>
  import { screenWidth } from './store'
  import Navbar from './lib/Navbar.svelte'
  import Banner from './lib/Banner.svelte'

  screenWidth.set(window.innerWidth)
</script>

<Navbar />
<Banner />
