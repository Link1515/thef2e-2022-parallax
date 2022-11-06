<script>
  import { onMount } from 'svelte'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  gsap.registerPlugin(ScrollTrigger)

  onMount(() => {
    const mm = gsap.matchMedia()
    const tlMobile = gsap.timeline({
      scrollTrigger: {
        trigger: '#topics',
        start: 'top 30%',
        end: 'bottom 30%',
        scrub: true
      }
    })
    const tlDesktop = gsap.timeline({
      scrollTrigger: {
        trigger: '#topics',
        start: 'top 70%',
        end: 'bottom 70%',
        scrub: true
      }
    })

    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)'
      },
      context => {
        const { isDesktop, isMobile } = context.conditions

        if (isMobile) {
          tlMobile
            .to('#week1-decoration', {
              y: -80
            })
            .to('#week2-decoration', {
              y: -80
            })
            .to('#week3-decoration', {
              y: -80
            })
        } else if (isDesktop) {
          tlDesktop
            .to('#week1-decoration', {
              y: -200
            })
            .to('#week2-decoration', {
              y: -200
            })
            .to('#week3-decoration', {
              y: -200
            })
        }
      }
    )
  })
</script>

<section>
  <div data-aos="fade-down">
    <div class="relative mb-10 grid grid-cols-2 lg:mb-20">
      <div class="overflow-hidden">
        <img
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="500"
          src="/images/topicInfo/block-red.png"
          alt="block-red"
        />
      </div>
      <div class="overflow-hidden">
        <img
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="1000"
          src="/images/topicInfo/block-yellow.png"
          alt="block-yellow"
        />
      </div>
      <img
        class="absolute-center -mt-2 w-1/3"
        src="/images/topicInfo/block-pink.png"
        alt="block-pink"
      />
    </div>
    <div>
      <img
        class="w-full"
        src="/images/topicInfo/block-black.png"
        alt="block-black"
      />
    </div>
  </div>
  <div id="topics" class="lg:pb-24">
    <div class="decoration-dots" />
    <div class="container">
      <div class="relative mb-4 pb-36 lg:pb-40">
        <img
          class="relative z-10 opacity-90"
          src="/images/topicInfo/week1.png"
          alt="week1"
        />
        <img
          id="week1-decoration"
          class="absolute right-0 bottom-0 w-7/12 lg:-bottom-24 lg:w-5/12"
          src="/images/topicInfo/week1-decoration.png"
          alt="week1-decoration"
        />
      </div>
      <div class="relative mb-4 pb-36">
        <img
          class="relative z-10 ml-auto opacity-90"
          src="/images/topicInfo/week2.png"
          alt="week2"
        />
        <img
          id="week2-decoration"
          class="absolute left-0 bottom-0 w-7/12 lg:-bottom-24 lg:w-5/12"
          src="/images/topicInfo/week2-decoration.png"
          alt="week2-decoration"
        />
      </div>
      <div class="relative mb-4 pb-36">
        <img
          class="relative z-10 opacity-90"
          src="/images/topicInfo/week3.png"
          alt="week3"
        />
        <img
          id="week3-decoration"
          class="absolute right-0 bottom-0 w-7/12 lg:-bottom-24 lg:w-5/12"
          src="/images/topicInfo/week3-decoration.png"
          alt="week3-decoration"
        />
      </div>
    </div>
  </div>
</section>
