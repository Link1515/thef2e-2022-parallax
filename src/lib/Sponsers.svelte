<script lang="ts">
  import { pathConverter } from '../utils'
</script>

<section>
  <div class="flex flex-col items-center">
    <p class="mb-4">鑽石級贊助商</p>
    <p class="mb-8">SPONSORS</p>
    <div class="grid gap-6 lg:grid-cols-3 lg:gap-16">
      <a
        data-aos="zoom-out-up"
        class="btn-primary h-32 w-32 hover:bg-white"
        href="https://blockstudio.tw/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={pathConverter('/images/sponsers/01.png')} alt="01" />
      </a>
      <a
        data-aos="zoom-out-up"
        class="btn-primary h-32 w-32 hover:bg-white"
        href="https://titansoft.com/tw"
        target="_blank"
        rel="noreferrer"
      >
        <img src={pathConverter('/images/sponsers/02.png')} alt="02" />
      </a>
      <a
        data-aos="zoom-out-up"
        class="btn-primary h-32 w-32 hover:bg-white"
        href="https://www.kdanmobile.com/zh-tw"
        target="_blank"
        rel="noreferrer"
      >
        <img src={pathConverter('/images/sponsers/03.png')} alt="03" />
      </a>
    </div>
  </div>
  <div class="decoration-dots -mt-10" />
</section>
