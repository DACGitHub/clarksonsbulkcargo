import Vue from 'vue'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  LottieScrollMobile: () => import('../../components/Lottie-scroll-mobile.vue' /* webpackChunkName: "components/lottie-scroll-mobile" */).then(c => c.default || c),
  LottieScroll: () => import('../../components/Lottie-scroll.vue' /* webpackChunkName: "components/lottie-scroll" */).then(c => c.default || c),
  Lottie: () => import('../../components/Lottie.vue' /* webpackChunkName: "components/lottie" */).then(c => c.default || c),
  LottiescrollOld: () => import('../../components/Lottiescroll-old.vue' /* webpackChunkName: "components/lottiescroll-old" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
