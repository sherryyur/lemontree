//css
import '../../common/css/app'
import './details.css'
import 'src/../static/swiper/css/swiper.min.css'
import Swiper from 'src/../static/swiper/js/swiper.min.js'
import Vue from 'vue'

let vm = new Vue({
  el: '#details',
  data: {
  	info: ''
  },
  mounted: () => {
    var index = window.location.href.toString().indexOf('?');
    var url = new URL(window.location.href.toString());
    var type = url.searchParams.get("type");
    var id = url.searchParams.get("id");
    var newS = window.location.href.substr(index + 1, window.location.href.toString().length);
    var isLongTerm = type == 'lt';
    var url = isLongTerm? './static/json/longlevel2/level2_'+id+'.json' : './static/json/level2/level2_'+id+'.json';
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'get',
      success: function success(data) {
        vm.info = data;
        vm.info.paragraph = vm.info.paragraph.split('<br/>');
      }
    });
  },
  updated: () => {
    vm.initSwiper()
  },
  methods: {
    initSwiper: () => {
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
      });
      galleryTop.controller.control = galleryThumbs;
      galleryThumbs.controller.control = galleryTop;
    }
  }
})
