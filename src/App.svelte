<script>
  import { screenWidth } from './store'

  // plugins
  import 'aos/dist/aos.css'
  import AOS from 'aos'

  // components
  import Navbar from './lib/Navbar.svelte'
  import Banner from './lib/Banner.svelte'
  import Questions from './lib/Questions.svelte'

  // store screen width
  screenWidth.set(window.innerWidth)

  // aos init
  AOS.init({
    offset: 250,
    easing: 'ease-out-back',
    duration: 800,
    startEvent: 'load'
  })
</script>

<Navbar />
<Banner />
<Questions />
