import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// hooks
import { useResponsive } from './hooks/use-responsive';

// ----------------------------------------------------------------------

const carouselImages = [
  { id: '1', src: '/assets/image-placeholder.png' },
  { id: '2', src: '/assets/image-placeholder.png' },
  { id: '3', src: '/assets/image-placeholder.png' },
];

const App: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const { mdUp } = useResponsive();

  return (
    <main className="min-h-screen 2xl:container">
      <section
        style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("/assets/placeholder-banner.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}
        className="relative h-screen"
      >
        <div className="absolute top-[50%] flex max-w-[700px] translate-y-[-50%] flex-col items-center gap-4 px-5 md:items-start md:pl-16 md:pr-0">
          <p className="text-center text-4xl font-medium leading-snug text-white md:text-left md:text-5xl">We help your garden and plants grow.</p>

          <p className="text-center leading-relaxed text-white/80 md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque quia dolores, labore perspiciatis temporibus eos consequatur assumenda sit debitis! Blanditiis pariatur
          </p>

          <div className="mt-5">
            <button className="w-fit rounded-full bg-primary-1 px-6 py-2 font-semibold">Explore how we work</button>
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-900 px-5 pb-5 pt-10 md:pb-10 md:pl-16 md:pr-0 md:pt-20">
        <div className="flex max-w-[400px] flex-1 flex-col gap-5 lg:max-w-[600px]">
          <p className="text-center text-2xl font-medium leading-normal text-primary-1 md:text-left">By combining technology and science, every small part is within your control.</p>

          <p className="text-center text-sm text-white/60 md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, consequuntur.
          </p>
        </div>

        <div className="absolute bottom-[40px] right-[50%] z-10 w-[200px] translate-x-[50%] md:right-0 md:top-0 md:z-0 md:h-[300px] md:translate-x-0 md:bg-primary-2 lg:h-[240px]">
          <div className="absolute bottom-5 left-[50%] flex translate-x-[-50%] flex-row items-center justify-center gap-5">
            <button onClick={() => swiperRef.current?.slidePrev()} className="w-fit rounded-full bg-white p-1.5 drop-shadow-xl">
              <Icon icon="ic:round-navigate-before" width={24} color="#000" />
            </button>

            <button onClick={() => swiperRef.current?.slideNext()} className="w-fit rounded-full bg-white p-1.5 drop-shadow-xl">
              <Icon icon="ic:round-navigate-next" width={24} color="#000" />
            </button>
          </div>
        </div>

        <div className="mt-7 md:z-10">
          <Swiper
            slidesPerView={mdUp ? 1.8 : 1}
            spaceBetween={30}
            loop={true}
            onBeforeInit={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {carouselImages?.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.src} alt="spreadship" className="h-[400px] w-[700px] object-cover object-center" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-3 bg-zinc-900 px-5 pb-10 pt-5 md:px-16 md:pb-20 md:pt-10">
        <div>
          <img src="/assets/logo-placeholder.png" alt="spreadsip" className="h-[70px] w-[70px] md:h-[100px] md:w-[100px]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <p className="max-w-[600px] text-center text-3xl font-medium leading-normal text-primary-1">Revolutionizing Planting: Effortless Gardening Made Possible</p>

          <p className="max-w-[800px] text-center text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas quibusdam consequatur sunt minima deserunt, iste, repellendus, dicta provident voluptatem doloribus! Quaerat distinctio
            nihil suscipit doloribus quos! Facilis ut sit saepe impedit et doloremque fuga corporis molestias quod! Laboriosam animi sapiente recusandae omnis, magni enim! Tempora enim similique
            nesciunt eius unde deserunt odio aperiam delectus distinctio fugiat quas dicta quidem nulla, voluptatibus.
          </p>
        </div>
      </section>

      <section
        style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("/assets/placeholder-banner.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}
        className="relative h-[90vh]"
      >
        <div className="absolute bottom-10 flex w-full flex-col justify-between gap-5 px-5 md:flex-row md:gap-10 md:px-16">
          <div className="flex max-w-[500px] flex-col gap-3">
            <p className="text-2xl font-medium leading-normal text-primary-1">Start with smile and love</p>

            <p className="text-sm text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, voluptatem? Lorem ipsum dolor sit amet</p>
          </div>

          <div className="mt-1">
            <button className="w-fit rounded-full bg-primary-1 px-6 py-2 font-semibold">Collaboreate with us</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-end gap-10 bg-zinc-900 px-5 pb-5 pt-10 md:gap-16 md:px-16 md:pb-10 md:pt-20 lg:flex-row">
        <div className="flex flex-col gap-3 lg:w-[630px]">
          <p className="text-center text-2xl font-medium leading-normal text-primary-1 md:text-left">Dive into our currated collection of successfully completed agricultural projects</p>

          <p className="text-center text-sm text-white/60 md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sequi!</p>

          <div className="mt-10 flex w-full flex-col justify-between gap-5 md:flex-row md:gap-0">
            <img src="/assets/image-placeholder.png" alt="spreadship" className="h-[450px] w-full object-cover object-center md:w-[300px]" />

            <img src="/assets/image-placeholder.png" alt="spreadship" className="h-[450px] w-full object-cover object-center md:w-[300px]" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center gap-5 md:items-start lg:max-w-[450px]">
          <p className="text-center text-2xl font-medium leading-normal text-white md:text-left">Bekebon Vertical Pots</p>

          <p className="text-center text-sm text-white/60 md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ullam perferendis optio nihil ab quos eius commodi quia, vitae, magni quaerat corporis illo aspernatur totam sequi rerum odit
            laborum voluptates.
          </p>

          <div className="mt-1">
            <button className="w-fit rounded-full bg-primary-1 px-6 py-2 font-semibold">View Project</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 bg-zinc-900 px-5 pt-5 md:px-16 md:pt-10">
        <div className="">
          <img src="/assets/image-placeholder.png" alt="spreadship" className="h-[500px] w-full object-cover object-center" />
        </div>

        <div className="flex flex-col items-center gap-6 md:items-start">
          <p className="text-center text-2xl font-medium leading-normal text-white md:text-left">Bekebon RoboSpay</p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:gap-10">
            <p className="text-justify text-sm text-white/60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem itaque consequuntur, amet explicabo in magni temporibus autem ratione minus nulla sapiente asperiores et incidunt
              iure tempore ipsa culpa repellat distinctio? Accusamus voluptatum explicabo, fuga veritatis quod nihil magnam. Praesentium adipisci, sequi natus autem aliquam porro? Quos molestias
              voluptatibus nemo, facere perspiciatis error dolores. Aliquid distinctio aut, reiciendis fuga, minus doloribus ex a dolorem asperiores fugiat deleniti ullam dolor pariatur quam.
            </p>

            <p className="text-justify text-sm text-white/60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem itaque consequuntur, amet explicabo in magni temporibus autem ratione minus nulla sapiente asperiores et incidunt
              iure tempore ipsa culpa repellat distinctio? Accusamus voluptatum explicabo, fuga veritatis quod nihil magnam. Praesentium adipisci, sequi natus autem aliquam porro? Quos molestias
              voluptatibus nemo, facere perspiciatis error dolores. Aliquid distinctio aut, reiciendis fuga, minus doloribus ex a dolorem asperiores fugiat deleniti ullam dolor pariatur quam.
            </p>
          </div>

          <div className="mt-1">
            <button className="w-fit rounded-full bg-primary-1 px-6 py-2 font-semibold">View Project</button>
          </div>

          <div className="mt-5 h-[2px] w-full bg-white/10" />
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-5 bg-zinc-900 px-5 py-5 md:flex-row md:items-start md:px-16 md:py-10">
        <div className="flex flex-col justify-start gap-8">
          <div className="flex flex-row items-center gap-3">
            <img src="/assets/logo-placeholder.png" alt="spreadsip" className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]" />
            <p className="text-xl font-medium leading-normal text-primary-1 lg:text-2xl">Bekebon</p>
          </div>

          <div className="hidden flex-row gap-2 md:flex">
            <p className="text-xs text-white/60">Privacy Police</p>
            <p className="text-xs text-white/60">|</p>
            <p className="text-xs text-white/60">Threm of Use</p>
            <p className="text-xs text-white/60">|</p>
            <p className="text-xs text-white/60">Seles</p>
            <p className="text-xs text-white/60">|</p>
            <p className="text-xs text-white/60">Legal</p>
            <p className="text-xs text-white/60">|</p>
            <p className="text-xs text-white/60">Site Map</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 md:items-end">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="">
              <p className="text-center text-xs text-white md:text-left lg:text-sm">Email</p>
              <p className="text-center text-xs text-white/60 md:text-left lg:text-sm">cobaja8589@gmail.com</p>
            </div>

            <div className="">
              <p className="text-center text-xs text-white md:text-left lg:text-sm">Phone</p>
              <p className="text-center text-xs text-white/60 md:text-left lg:text-sm">081234567890</p>
            </div>
          </div>

          <div className="">
            <p className="text-xs text-white/60">Copyright &copy; Bekebon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
