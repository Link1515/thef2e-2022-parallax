<script lang="ts">
  import { pathConverter } from '../utils'
</script>

<section class="pb-10">
  <div class="decoration-dots" />
  <div class="container">
    <div class="-mt-10 mb-10 grid gap-6">
      <div data-aos="flip-left" class="flex flex-col items-center">
        <h3 class="mb-3 grid h-10 place-items-center bg-yellow px-2">
          報名時間
        </h3>
        <p>10/13~10/30</p>
        <p>截止前可修改報名組別</p>
      </div>
      <div data-aos="flip-left" class="flex flex-col items-center">
        <h3 class="mb-3 grid h-10 place-items-center bg-yellow px-2">
          開賽時間
        </h3>
        <p>10/31(一) UI、團體組開賽</p>
        <p>11/7(一) 前端組開賽</p>
      </div>
      <div data-aos="flip-left" class="flex flex-col items-center">
        <h3 class="mb-3 grid h-10 place-items-center bg-yellow px-2">
          登錄作品
        </h3>
        <p>10/31~11/28</p>
        <p>依賽程登錄作品</p>
      </div>
    </div>
    <img
      data-aos="zoom-in"
      class="mx-auto mb-20 hidden lg:block"
      src={pathConverter('/images/schedule/timeline-desktop.png')}
      alt="timeline"
    />
    <p class="mx-auto mb-10 w-9/12 lg:w-fit">
      活動採用 UI、前端接力合作形式，前端工程師可採用 UI
      設計師的設計稿，一同產出完整作品。
    </p>
    <img
      data-aos="zoom-in"
      class="mx-auto lg:hidden"
      src={pathConverter('/images/schedule/timeline-mobile.png')}
      alt="timeline"
    />
  </div>
</section>
