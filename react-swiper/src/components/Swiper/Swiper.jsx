// import Swiper core and required modules
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./Swiper.module.css";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      className={style.slideBody}
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      autoplay={{
        delay: 3000,
        stopOnLastSlide: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat fuga
          voluptate debitis non omnis provident nobis nostrum magni harum at.
          Mollitia quas sapiente asperiores distinctio animi ratione ad, nihil
          quo? Praesentium expedita dolores quaerat necessitatibus porro,
          eveniet, incidunt consequatur ipsum natus libero laboriosam veniam
          sint architecto. Iure voluptates praesentium maiores autem quae culpa,
          dolor tenetur, sapiente totam alias aliquam aspernatur. Incidunt
          nostrum, consectetur quos molestias deserunt a animi, veniam
          blanditiis mollitia ad illum, commodi aspernatur. Dolore, rem
          exercitationem deserunt veritatis omnis harum nostrum, recusandae
          aspernatur ut quod ullam aliquid necessitatibus! Ducimus, distinctio
          esse dolores dolore aut, odio cum tempora sapiente consectetur
          officia, illo laboriosam quidem nisi quod nostrum quaerat officiis
          tempore nulla. Commodi quidem vitae veritatis voluptate impedit itaque
          explicabo! Dicta quia eveniet ullam fuga reiciendis ut nostrum
          voluptatibus natus voluptas, id, assumenda dolore dignissimos omnis
          eaque doloribus quae quo nulla architecto ducimus? Provident
          consequatur vitae, deleniti voluptate minus quaerat! Error, velit.
          Culpa similique ratione enim repellat iusto! Minus sint tempora
          debitis quasi magnam sequi nam. Quidem delectus accusantium
          voluptatum, recusandae fugiat commodi culpa! Suscipit asperiores
          soluta cum veniam recusandae. Saepe officia temporibus ipsa
          necessitatibus deserunt. Ea facere soluta quibusdam nam accusantium
          ratione, commodi tempore reprehenderit? Quod, pariatur dolor ab
          ducimus itaque cupiditate. Nulla accusamus voluptate officia, dolor
          delectus eligendi! Doloribus magni alias velit corrupti cum ipsum
          temporibus minima tempore veritatis, quisquam reprehenderit quae
          officiis recusandae veniam minus! Natus sint modi quod! Impedit earum
        </p>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
