export { default as Logo } from '../../components/Logo.vue'
export { default as LottieScrollMobile } from '../../components/Lottie-scroll-mobile.vue'
export { default as LottieScroll } from '../../components/Lottie-scroll.vue'
export { default as Lottie } from '../../components/Lottie.vue'
export { default as LottiescrollOld } from '../../components/Lottiescroll-old.vue'
export { default as Map } from '../../components/Map.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyLottieScrollMobile = import('../../components/Lottie-scroll-mobile.vue' /* webpackChunkName: "components/lottie-scroll-mobile" */).then(c => c.default || c)
export const LazyLottieScroll = import('../../components/Lottie-scroll.vue' /* webpackChunkName: "components/lottie-scroll" */).then(c => c.default || c)
export const LazyLottie = import('../../components/Lottie.vue' /* webpackChunkName: "components/lottie" */).then(c => c.default || c)
export const LazyLottiescrollOld = import('../../components/Lottiescroll-old.vue' /* webpackChunkName: "components/lottiescroll-old" */).then(c => c.default || c)
export const LazyMap = import('../../components/Map.vue' /* webpackChunkName: "components/map" */).then(c => c.default || c)
