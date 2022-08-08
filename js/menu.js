new Vue({
  el: '#app',
  data: {
    scrollY: 0,
    elY: 0,
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const el = this.$refs.header;
      const height = el.getBoundingClientRect().height;
      const pos = window.pageYOffset;
      const diff = this.scrollY - pos;

      this.elY = Math.min(0, Math.max(-height, this.elY + diff));
      el.style.position = pos >= height ? 'fixed' : pos === 0 ? 'absolute' : el.style.position;
      el.style.transform = `translateY(${el.style.position === 'fixed' ? this.elY : 0}px)`;

      this.scrollY = pos;
    },
  },
});

// let elY = 0;
// let scrollY = 0;
// window.addEventListener('scroll', function () {
//   const el = document.querySelector('.header');
//   const height = el.offsetHeight;
//   const pos = window.pageYOffset;
//   const diff = scrollY - pos;

//   elY = Math.min(0, Math.max(-height, elY + diff));
//   el.style.position = pos >= height ? 'fixed' : pos === 0 ? 'absolute' : el.style.position;
//   el.style.transform = `translateY(${el.style.position === 'fixed' ? elY : 0}px)`;

//   scrollY = pos;
// });

// let headerNav = $('header > nav');
// let scrollPrev = 0;
// $(window).scroll(function () {
//   let scrolled = $(window).scrollTop();

//   if (scrolled > 200) {
//     if (scrolled < scrollPrev - 10) {
//       headerNav.removeClass('out'); // show
//     }

//     if (scrolled > scrollPrev) {
//       headerNav.addClass('out'); // hide
//     }
//   } else {
//     headerNav.removeClass('out'); // show
//   }
//   scrollPrev = scrolled;
// });

// var el = document.querySelector('nav'),
//   sH = el.offsetHeight,
//   sY = el.getBoundingClientRect().top + sH;

// window.addEventListener('scroll', function () {
//   if (this.scrollY >= sY && this.scrollY <= sY + sH) {
//     el.style.transform = 'translateY(-' + ((this.scrollY - sY) / sH) * 100 + '%)';
//   } else if (this.scrollY < sY) {
//     el.style.transform = 'translateY(0%)';
//   } else if (this.scrollY < this.scrollY <= sY + sH) {
//     el.style.transform = 'translateY(-100%)';
//   }
// });
