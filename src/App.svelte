<script>
  import { screenWidth } from './store'

  // plugins
  import 'aos/dist/aos.css'
  import AOS from 'aos'

  // components
  import Navbar from './lib/Navbar.svelte'
  import Banner from './lib/Banner.svelte'
  import Questions from './lib/Questions.svelte'
  import TopicInfo from './lib/TopicInfo.svelte'
  import Schedule from './lib/Schedule.svelte'
  import Rules from './lib/Rules.svelte'
  import Sponsers from './lib/Sponsers.svelte'
  import GoTop from './lib/GoTop.svelte'

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
<TopicInfo />
<Schedule />
<Rules />
<Sponsers />
<GoTop />
