<template>
  <div id="app">
    <header class="relative header lg:overflow-hidden">
      <div class="absolute inset-0 opacity-50 z-negative lg:opacity-100">
        <video src="@/assets/video/video.mp4" autoplay muted loop class="object-cover w-full h-full "></video>
      </div>

      <nav class="md:p-3 py-2 px-3 z-10">
        <div class="container flex-wrap items-center justify-start block mx-auto md:flex">
          <div class="flex items-center justify-between flex-1">
            <a href="#">
              <img src="@/assets/images/logo.webp" alt="GSL Logo">
            </a>
            <button data-menu-toggle class="block pr-1 md:hidden" @click="btnmenutoggle">
              <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
            </button>
          </div>
          <ul data-menu  :class="[ccsHidden,'flex-wrap', 'items-center', 'justify-start', 'text-white', 'md:flex']">
            <li class="py-2 md:px-6">
              <a href="#" class="text-brand">Home</a>
            </li>
            <li class="py-2 md:px-6">
              <a href="#">Stream/Buy</a>
            </li>
            <li class="py-2 md:px-6">
              <a href="#">Coming Soon</a>
            </li>
            <li class="py-2 md:px-6">
              <a href="#">Catalog</a>
            </li>
            <li class="py-2 md:px-6">
              <a href="#">About</a>
            </li>
            <li class="py-2 md:px-6">
              <a href="#">Contact</a>
            </li>            
          </ul>
        </div>
      </nav>

      <div class="container px-4 py-4 mx-auto lg:mt-56 lg:px-16">
        <div class="border-white md:pl-8 md:border-l">
          <p class="text-lg font-light leading-none tracking-wide text-white ">Out now</p>
          <h1 class="m-0 font-sans text-2xl font-bold text-white md:text-6xl md:leading-none">Knights of Wales</h1>
          <p class="w-full text-lg text-white md:max-w-lg md:my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem architecto rem beatae magnam ipsam doloremque odio, autem dicta velit odit a fuga explicabo quos? Tenetur perspiciatis nemo fuga ipsum!
          </p>
          <a href="#" class="btn-primary">Steam/Buy</a>
        </div>
      </div>
    </header>

    <div class="container mx-auto my-6 lg:px-16 px-4">
      <ul class="flex items-center leading-normal text-gray-500 font-alt">
        <li class="pr-2 text-gray-300">Our laster releases</li>
        <li class="pr-2">|</li>
        <li class="pr-2">
          <a href="#" class="text-brand">Watch all</a>
        </li>
      </ul>
    </div>

    <div class="flex items-stretch justify-start mb-10 px-4 overflow-hidden relative">
      <a v-for="(movie,index) in releases" :key="`No.${index}-${movie.title}`" href="#" class="relative group block mr-4 flex-shrink-0">
        <div class="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
          <div>
            <h3 class="text-lg mb-2">{{movie.title}}</h3>
            <p class="leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa, et, quas dolore repellendus in magni similique, voluptatum cupiditate repudiandae eligendi eaque minima officiis at nulla quae fugiat placeat suscipit?</p>
          </div>
        </div>
        <img :src="movie.imagenUrl" :alt="movie.title">
      </a>

      <button class="absolute z-10 p-2 rounded-full block right-0 inset-y-0 mr-1">
        <svg class="fill-current text-white w-6 h-6 hover:text-brand" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>arrow-right</title><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"></path></svg>
      </button>      
    </div>

    <div class="container mx-auto py-8 font-alt text-white text-center md:px-0 px-4">
      <div class="text-gray-600 mb-4 md:text-lg text-base">
        Fils <span class="px-1">|</span> TV Shows <span class="px-1">|</span> Creative Development
      </div>
      <h2 class="md:text-5xl text-2xl font-sans font-bold mb-4">About GSL Productions</h2>
      <p class="opacity-75 max-w-md mx-auto font-alt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor dolore ipsum itaque id at quaerat ex tenetur assumenda cupiditate fuga exercitationem facilis, ducimus autem! In nobis deserunt ad fuga!</p>
      <a href="#" class="text-brand my-2 inline-block">More info +</a>
    </div>

    <div class="relative flex flex-wrap items-center video-cta md:py-0 py-10 px-4">
      <div class="absolute inset-0 w-full h-full z-negative opacity-75">
        <img src="@/assets/images/video-bg-image.jpg" alt="#" class="object-cover w-full max-w-full h-full">
      </div>

      <div class="container mx-auto text-center text-white w-full flex flex-wrap">
        <h3 class="md:text-5xl text-3xl font-sans font-bold tracking-widge mb-4 w-full leading-tight">Releases Coming Soon</h3>

        <div class="w-full md:mb-16 mb-6">
          <a href="#" class="inline-flex item-center justify-center text-white w-auto hover:opacity-75">
            <svg class="fill-current text-white w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>ic_play_circle_outline_48px</title><path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path></svg>
            <span class="ml-2 pb-1 border-b border-white">Play Video</span>
          </a>
        </div>

        <div class="w-full">
          <a href="#" class="inline-flex items-center justify-center text-white border bg-transparent px-8 py-3 hover:bg-white hover:text-black md:mt-0 mt-4 rounded">All Videos +</a>
        </div>
      </div>
    </div>

  <footer class="container mx-auto text-white py-6 md:px-16 px-4">
    <div class="md:pl-3 md:border-l border-white mb-6">
      <p class="opacity-75">GSL Newsletter</p>
      <h3 class="md:text-6xl text-3xl font-sans font-bold mb-4">See it First</h3>

      <form action="#">
        <div class="flex items-center justify-start flex-wrap">
          <input type="email" class="text-white border bg-transparent py-3 leading-tight px-4 md:w-1/3 w-full mr-4" placeholder="Enter your email here*" />
          <input type="submit" class="btn-primary py-3" value="Subscribe" />
        </div>
      </form>
    </div>

    <div class="flex items-center justify-start flex-wrap">
      <p class="opacity-75 text-sm md:mb-0 mb-3">&copy; 2023 By GSL Productions. Proudly copied from Wix.com.</p>

      <div class="md:ml-4 flex items-center justify-start">
         <a href="#" class="mx-2">
          <svg class="fill-current text-white opacity-50 hover:opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path></svg>
        </a>

        <a href="#" class="mx-2">
          <svg class="fill-current text-white opacity-50 hover:opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>vimeo</title><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"></path></svg>
        </a>

        <a href="#" class="mx-2">
          <svg class="fill-current text-white opacity-50 hover:opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>youtube</title><path class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path></svg>
        </a>

        <a href="#" class="mx-2">
          <svg class="fill-current text-white opacity-50 hover:opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path></svg>
        </a>

        <a href="#" class="mx-2">
          <svg class="fill-current text-white opacity-50 hover:opacity-75 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>twitter</title><path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"></path></svg>
        </a>
      </div>
    </div>

  </footer>    

    <!-- <div class="flex justify-start">
      <img  v-for="(pic,index) in releases2" :key="index" :src="getImgUrl(pic.imagenUrl)" v-bind:alt="pic.title">
    </div>     -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {

  name: 'App',
  components: {
    // HelloWorld
  },
  created() {
    // this.handleView();
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },  
  data: ()=> ({
    menu_toggle: false,
    ccsHidden: 'hidden',
    releases: [
      {title: '30 Yards', imagenUrl: require('@/assets/images/1.jpg')},
      {title: 'UTAH', imagenUrl: require('@/assets/images/2.jpg')},
      {title: 'Her Majesty', imagenUrl: require('@/assets/images/3.jpg')},
      {title: 'The Rumor', imagenUrl: require('@/assets/images/4.jpg')},
      {title: 'White Smoke', imagenUrl: require('@/assets/images/5.jpg')},
      {title: 'Mr. Brooklyn 2', imagenUrl: require('@/assets/images/6.jpg')},
      {title: '30 Yard', imagenUrl: require('@/assets/images/7.jpg')},
    ],
    releases2: [
      {title: '30 Yards', imagenUrl:'1.jpg'},
      {title: '30 Yards', imagenUrl:'2.jpg'},
      {title: '30 Yards', imagenUrl:'3.jpg'},
      {title: '30 Yards', imagenUrl:'4.jpg'},

    ]    
    // mobileView: false
  }),
  methods: {
    btnmenutoggle() {
      this.ccsHidden = this.ccsHidden != 'hidden' ? 'hidden': 'block';
    },
    myEventHandler(e) {
      if (e.type =='resize') {
        if (window.innerWidth <= 700) {
          this.ccsHidden = 'hidden';          
        }
      }
    // console.log(e);
    },
    getImgUrl(pet) {
    var images = require.context('@/assets/images/', false, /\.jpg$/);
    return images('./' + pet);
  }
    // handleView() {
    //   this.mobileView = window.innerWidth <= 990;
    //   // console.log(window.innerWidth);
    // }
  },
  computed: {

  }
      

}
</script>

<style>
</style>
