import React, { useEffect } from "react";
import style from "../css/Gate.module.css";
import mainposter from "../img/main_poster.png";
import newduksung from "../img/image_new_duksung.png";
import follow from "../img/image_follow.png";
import female from "../img/image_female.png";
import focus from "../img/image_focus.png";
import future from "../img/image_future.png";
import forever from "../img/image_forever.png";
import AOS from "aos";
import "aos/dist/aos.css";




// const saDefaultMargin = 300;
// let saTriggerMargin = 0;
// let saTriggerHeight = 0;
// const saElementList = document.querySelectorAll('.sa');

// const saFunc = function() {
//   for (const element of saElementList) {
//     if (!element.classList.contains('show')) {
//       if (element.dataset.saMargin) {
//         saTriggerMargin = parseInt(element.dataset.saMargin);
//       } else {
//         saTriggerMargin = saDefaultMargin;
//       }

//       if (element.dataset.saTrigger) {
//         saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
//       } else {
//         saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
//       }

//       if (window.innerHeight > saTriggerHeight) {
//         element.classList.add('show');
//       }
//     }
//   }
// }

// window.addEventListener('load', saFunc);
// window.addEventListener('scroll', saFunc);

//이 컴포넌트에 포스트가 들어갑니다.

const Gate = () => {

  useEffect(() => {
    AOS.init(
    );
  })

  return (
    <div className={style.gradient}>
      <img className={style.poster} src={mainposter} alt="포스터" />
      <div className={style.date}>2022. 05.18 - 05.20</div>
      <div className={style.line}></div> 
        <div className={style.keywordDiv}>
          <img data-aos="fade-up" data-aos-offset="150" className={style.keyword1} src={follow} alt="follow" data-sa-margin="100"/>
          <img data-aos="fade-up" data-aos-offset="200" className={style.keyword2} src={female} alt="female" data-sa-margin="200"/>
          <img data-aos="fade-up" data-aos-offset="250" className={style.keyword3} src={focus} alt="focus" data-sa-margin="300"/>
          <img data-aos="fade-up" data-aos-offset="280" className={style.keyword4} src={future} alt="future" data-sa-margin="400"/>
          <img data-aos="fade-up" data-aos-offset="300" className={style.keyword5} src={forever} alt="forever" data-sa-margin="500"/>
        </div>
      <img className={style.new} src={newduksung} alt="forever" />
    </div>
  );
};

export default Gate;
