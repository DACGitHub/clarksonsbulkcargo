<template>
  <div>
    <!-- MAP SECTION -->
    <div class="grid lg:grid-cols-2">
      <div class="map-info">
        <div class="hidden lg:block">
          <p class="hidden xl:block">Select a location for<br /> contact information</p>
          <div class="map-not-ipswich">
            <h4 id="map-name" class="map-name-title map-location"></h4>
            <div id="main-office">
              <img class="inline list-icon align-middle mr-4" src="~/assets/img/main-office.svg" />
              <p class="inline mt-0 align-middle small">Main offices</p>
            </div>
            <div id="sub-office">
              <img class="inline list-icon align-middle mr-4" src="~/assets/img/sub-office.svg" />
              <p class="inline mt-0 align-middle small">Ports covered</p>
            </div>
            <div class="hide-mappy small-padding mt-5">
              <img class="inline list-icon align-top mr-4" src="~/assets/img/icon_contact.svg" />
              <div class="inline-block align-top">
                <p class="mt-0 small" id="map-address1" ></p>
                <p id="map-address2" class="small"></p>
                <p id="map-address3" class="small"></p>
                <p id="map-postcode" class="small"></p>
              </div>
            </div>

            <div class="hide-mappy small-padding mt-3">
              <img class="inline align-middle list-icon mr-4" src="~/assets/img/icon_phone.svg" />
              <p class="inline align-middle mt-0 small" id="map-phone"></p>
            </div>

            <div class="hide-mappy mt-3">
              <img class="list-icon align-middle inline mr-4" src="~/assets/img/icon_email.svg" />
              <a class="mt-0 align-middle inline" id="map-email"></a>
            </div>
          </div>

          <div class="ipswitch hide-ipswich">
            <h4 class="map-name-title map-location">Ipswich (Head Office)</h4>
            <div class="small-padding mt-3">
              <img class="inline align-top list-icon mr-4" src="~/assets/img/icon_contact.svg" />
              <div class="inline-block align-top">
                <p class="mt-0 small">Maritime House</p>
                <p class="small">19a St Helens St</p>
                <p class="small">Ipswich</p>
                <p class="small">IP4 1HE</p>
              </div>
            </div>

            <div class="small-padding mt-3">
              <img class="list-icon align-middle inline mr-4" src="~/assets/img/icon_phone.svg" />
              <div class="inline-block align-middle">
                <p class="mt-0 small">+44 (0) 1473 297300</p>
              </div>
            </div>

            <div class="small-padding mt-3">
              <img class="list-icon inline mr-4" src="~/assets/img/icon_email.svg" />
              <div class="inline">
                <a
                  href="mailto:ipswich@clarksons.com"
                  class="mt-0 map-email-ipswich"
                  >ipswich@clarksons.com</a
                >
              </div>
            </div>

            <h4 class="map-name-title map-location">Ipswich (Port Office)</h4>
            <div class="small-padding mt-3">
              <img class="inline align-top list-icon mr-4" src="~/assets/img/icon_contact.svg" />
              <div class="inline-block align-top">
                <p class="mt-0 small">Sentinel Terminal</p>
                <p class="small">Cliff Quay</p>
                <p class="small">Ipswich</p>
                <p class="small">IP3 0BS</p>
              </div>
            </div>

            <div class="small-padding mt-3">
              <img class="list-icon mr-4 inline" src="~/assets/img/icon_phone.svg" />
              <div class="inline-block">
                <p class="mt-0 small">+44 (0) 1473 261140</p>
              </div>
            </div>

            <div class="small-padding mt-3">
              <img class="inline list-icon mr-4" src="~/assets/img/icon_email.svg" />
              <div class="inline">
                <a
                  href="mailto:ipswich@clarksons.com"
                  class="mt-0 map-email-ipswich"
                  >ipswich@clarksons.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <img
          id="mobile-map"
          class="lg:hidden mb-7"
          src="~/assets/img/mobile_map.svg?v=2"
        />
        <svg
          id="desktop-map"
          class="hidden lg:block"
          version="1.1"
          xmlns:lgink="http://www.w3.org/1999/lgink"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 623.6 992.5"
          style="enable-background: new 0 0 623.6 992.5"
          xml:space="preserve"
        >
          <style type="text/css">
            .st0 {
              fill: #4dd2ff;
            }
            .st1 {
              fill: none;
              stroke: #012169;
              stroke-width: 2;
            }
            .st2 {
              fill: #012169;
            }
            .st3 {
              fill: transparent;
            }
          </style>
          <path
            class="st0"
            d="M458.7,0l-35.6,27.4l8.5,20.6l-8.5,6.2l13.8,8.5l5.2,4.8l-5.2,15l5.2,6.1l5.7-12.6l10.9-21.8l-7-9.5h7v-8.8
                	l7.2-12.9V0H458.7z"
          />
          <path class="st0" d="M404,68.9l3.1,1.4l1.4-4.2h-3.4L404,68.9z" />
          <path
            class="st0"
            d="M462.4,40.3l3.1,1.4l5.3-5.6l-7.3,1.4L462.4,40.3z"
          />
          <path
            class="st0"
            d="M425.2,120.9l3.1,1.4l1.4-4.2h-3.4L425.2,120.9z"
          />
          <path
            class="st0"
            d="M388.1,135.7l3.1,1.4l1.4-4.2h-3.4L388.1,135.7z"
          />
          <path
            class="st0"
            d="M382.3,140.1l11.7,2.7l-6.2,3.7h-7.5v4.2l5.7,5.3v6.2h-9.5l2.1-7.7l-2.1-5.4l3.7-6.4L382.3,140.1z"
          />
          <path
            class="st0"
            d="M364.7,137.2l6.5,7.2l4.6,0.7l-0.5,2.9l1.2,5.5l-1.2,2.3l-3.3-1.5l-0.8-6.3l-2.2-0.8l-1.4-4h-5.7V138
                	L364.7,137.2z"
          />
          <path
            class="st0"
            d="M358.2,152.7l8.2,5.3l-0.5-3h2.5l-2-1.8l2.7-0.5l-1.7-1.1l-4.4-0.3l-3-0.7L358.2,152.7z"
          />
          <path
            class="st0"
            d="M369.2,162.2l2.1-0.3l2.6-2.1c0,0-0.9,3.3-1,3.6c0.5,1,1.1,2.1,1.8,3l-3.1,0.4l-4.1-1.7l-1-4.2L369.2,162.2z"
          />
          <path
            class="st0"
            d="M354.1,153.4l8.8,10.3l-5.6,2.2l-0.6,1.8h9.4l4.7,4.7l7.2-1.7l-3.2,5.8l-6.5,2.1l1.8,6.7l-3.4,8.8l-3.5-1.4
                	l0.5-7.4l3-4.6l-0.9-5.3l-6.9-2.5l-2.8,2.9l-4.8-5.1l-2.5,3l-2.6-7.8l2.6-2.7l-3.1-3.2l3.1-5.3L354.1,153.4z"
          />
          <path
            class="st0"
            d="M344.5,175.6l-1,4.5l5.2,6.8l8.7,1.6l3.5-3l-0.9-4.1h-4.8l-5.4-5.7L344.5,175.6z"
          />
          <path
            class="st0"
            d="M342.1,202.7l1.7-7.9l5.5,2.7l15.5,0.9l-9.9,14.5l7.2,3.6l-9,14.6l-11.1,5.8l-5,5.9l-14,9.9l-3.5,6.2l-7.4,2.6
                	l3.1,3.8l-7.6,8.6l-14.4-12.5h-3.3l7.6,9.2l6.8,1.4h9.9l9.6-2.6l-8.7,16.9l-5.6-5.1l-12,2.5l-7.6,11.5h3.3l7.3-7.3l5.7-1.6h7.1
                	l-9,10.8v3.7H292l-3.7,2.9h8.2v2.7l7-3.3l7.3-5.1l4.4-6.2h5.8l3.9-4.7l7.7-0.7l-1.1,2.9h4.9l0.5-7l13.2-1l2.9,3.8l4.9,2.8l12.5-4.2
                	l18.8,2.6l17.1-2.6l10.5,6.5v4.9l4.4,4.1l-2.7,14l-5.5,6.4l-4.1-7.2l1.1,7.2l-2.7,9.6l-3.4,3.9l5,4.5l-8.9,12.1l3,8.2l-7.8,9.1h-0.8
                	l-10.1,6.3l3.8,4.9l-2.1,10.6l-9.3,6.1l-6.3,1.6l-7.2-4.4l-10.1,6.6l-7.6,6.9l-3.5,2.2l15.1-5.2h2l6-3.9l5.4,1.6v4.3l-5.4,3.3h3.4
                	l3.1,1.2l7.9,3.2l-2.8,7.1l-9.3,4.4l-4.2-4.4l-3.2,2v3.7l-7,3.8l-2.9,4.5l-6.6,1.9l-5.4,3.6l-5.7-2.7l-3.4-0.9l-6.2-1.9l-5.7-4.5
                	l2.2,5.5l3.5,1.8l1.9,2.7l4.2-1.3l3.4,2.7h7.6l20.7,3.9l7.6-9.8l12.6,0.8v5h4.8l8.4,6.8l8.6,1.8l0.9,1.1l5,1l-2.5,4l5.8,8.5l6.3,2.4
                	l1.1,7.6l6.5,2.9l5.2,8.4l2.1,9.1l-2.1,3.8l2.1,5.3l2,1.7l-1.3,3l3.7,5.6l-2.5,5l2.5,3.4l4.7,8l-4.7,3.6l4.7-1.8l3.6,4.4v6l2.5,8.7
                	v2l5.5,7l1.5,9.8l2.4-4.1l7.9,4.1h4.7v2.4h5.7l2.9,1.5v1.5l3.6,1.3l7.9,6.4v3.2l3,1.3l5.6,12.8l6.2,3.1v2l10.6,6.4l-8.6,4.4v6.3
                	l3.6,9.6l19.4,27.7l-7.3-3.7L519,657l-10-8.7h-8.4l-5.3,2h-4.4l-2.4-3.4l-7.8,3.4l3.6,2.2l4.2-2.2l4.4,4.5l4.4-2.3h5l5.2-2.2v2.2
                	l8.6,8.5l9.5,6.7v1.4l5.7,2.8l2.1,5.1l3.4,9.2l1.9,2.4l4.8,7.9v7.6l-0.9,1.1l-3.9,1.8l-8.2,7.4l-4.9,5.7l-3.2,5l6.1,0.9l6.1,4.6
                	l11.9,6.5v-6.5l5.2-4.6l-1.8-4.3l2.7-3.1l12.7-1.7h15.1l7.6,1.7l12.6,1.6l15.5,12.4l7.4,9V762l-1.9,4.3v5.5l-1.7,3.9l-1.8,3.1
                	l-0.9,12.8l-1.2,1.1l1.2,4.3l-8.2,3.7l-3.8,6.4l-4.7-6.4l2,6.4l-1,3.2l-5.7-5.1h-3.6l3.6,3.2h1.5l-7.8,1.9l2.8,1.5h6.4L595,817
                	l3.7,2h1.9l-1.9,3.5l-6.4,3.7l-6.4,1.2l-5.5-4.2H575l1.5,2.9l-1.5,1.2l-8.6,2.9l0.9,3.3h7.6l2.3-1.2v-2.9l3.1,0.9v7.3l1.5,2
                	l-6.9,2.7l-4.6-2.7l4.6,5.4h-3.5v1l2.3,2.4l-1.4,2.1l-11-2.1l1.3,2.1l-4.2,2.6l-5.8-2.6l3.2,2.6l-3.2,1v4H545l-2.4-2.3H538l4.6,3.1
                	l8.3,2.9l3.1-2.1v-3.9c0.6,0.2,1.3,0.2,1.9,0c0.7-0.3,11.6-1.7,11.6-1.7l1,1.7l-1,3.9l-4.7-0.8h-1.3l-1.9,1.6l-3.7,3.4h10.7l5.9,2.5
                	l8.1,1.7l7.6-4.2h20.1l2.2-2.1v6.3l-1.2,1.6h-2.7l1.6,12.3l-9.4,8.1l-9.2,1.9l-5.3,7.4l1.7,7l-10.9-2.6l-10.7,7.9l-15.4,5.8
                	l-6.4,6.7l-16.9-3.7l-13.6-4.1l-15.3,4.1l-17.8,2.3l5.1,4.4l-9.8-6.7l3.5-3h-4.9v5.3L465,922l-2.3-6.5l-1.2,5l-10.1-5
                	c-2.5-1.3-5.1-11.6-5.1-11.6l-1.1,6.8l4.3,6.9l-4.3,4.5L439,927l-12.5-1l-6.9,3.9h-6l-4.8-1.9l-0.9,3.3l10.6,5.3l-5.9,5.1l-20.3-3.9
                	l-5.6-1.2v9l-8.5-12.5l-21.9-7.2l-6.7,3.9h-6.2l-8.4,2.5v5.5l-9.4-4.7v6.4l-4.4,7.4l-2,8.7l4.4,2.1l-4.4,5.4l-2.5-0.9l-2.6,4.3v4.2
                	l-6.8,3.7l-1-5.2l-1.9,4.1l-3.7-2.6v-5h-3.2l-2.6-1.2h-4.3l-3.1-1.4l-1.3-4.2l-4.7-1.2h-4.7l4.7,1.2v3.3h-2.4l-4.1-2.4h-4.7l-2.5-1
                	l-4.3,3.3l-7-0.8l-2.6-1.5h-3l-3.3,1.5v7.9l-2.4,1.5h-2.5l-2.4,1.3l-1.6,1.4l-1.6-1.4c-0.8,0.6-1.4,1.5-1.6,2.5
                	c-0.3,1.4-0.8,2.8-1.3,4.1l-2.4-4.1v-6.8l-4.3,10v7.2l1.9,2l-3.9,3.7l-5.2,1.9l-3.2-4.4l-1.6-6.1l-5.9-1.1l-6.1-2.3H201v5l-9.8,3.3
                	l1.2-12.4l9.7-5.2l5.3,1.5l5.6-4.2l1.5,1.1l5.9-1.9v-3.5l2.9-3.3l6.2-7.5h2.5l2.4-9.7l2.9-2.3v2.3l7.4,2.3l-4.1-4.6v-1.7l4.9-1.2
                	h3.6v-6.8l7.7-1.9l2.1-5.9l3.5-1.1l-1.1-13.6l5.5-9.3l7.7,0.9h5l2.4-6l1.6,4.7l2.1-4.7h5.4l-9.1-2.3v-5.4l1.6-4.2l24.1-1.6l9.4,1.6
                	l4.4-0.8l11,2.8l19.1-0.9l-1.7,3.2l1.7,1.6l1.4-3.8l1.3-3.6l-2.7-5l2.7-5.2l2.2-1.4v-2.7h2l10-10.6h3.9v-4.3l1.3-2l5.7-6.4l7.4-7.9
                	l4.5-2.5l-2.6-3.4v-3.7l-3.8,3.7l1.9,1.6L382,834v2l-7,4.8l-4.6,6.1l-12.1,6.5l-3.3-1.9l-9.2,5.6l-3.5,9l-21.1-3.1l-5.6-7.5h-3.4
                	l-7.7-12.6l-6.9-1.2l-2.6,3.5l2.6,3l-8.1-1.4l-1.9,1.4l-8.4,2v-7.3l2.4-3.3l3.7,1.1l6.8-1.1l-4.5-1.8l-3.5-1.9l-7.1,1.9l-1.8-6.4
                	h3.3L276,829l2.6-4.5l-5.9,5.3l-2.2-3.6v5.4h-11.7l-4.7,6.4l-6.3,1.8l-7.3,3.3l-4.8-3.3V838l-3.8-3.9h7l6.5,2l-4.9-4.5l4.9-0.9H239
                	l-7,0.9l-4.3,2.5v-4.3l1.9-2.5l4.1-1.1V818H222l10-8.1l3.8-1.8v-3.4h4.8v1.4l4.9-2.2l5.7,0.9v-2.6l5.6-5.9l2.1,3.8v-3.8l11.7-2.3
                	l8.1-6.4l5.6-1.3l9.7-14l2.5-12l8.2-4.9l-9.5,1l-2.9-8.9l10.4-9.3l-7.6,1.9l-2.9-7.1v-8.7l5.4-1.9l-5.4-1.4l-17,4.5l-3.8,3.6
                	l2.2,5.9h-3.1l-2.7-3.8h-4.1l-6.2,1.9l13-15.1h3.1l5-5.4l4.8-4.3v-4.6l7.5-6.5v-2.3l9.2-1.2l5.8-3.7l4.2-3.3l-1.1-1.9l6.8,1.9
                	l10.1,3.3l12.1-6.5l4.5,4.9l12.6,7.7l-9.2-15.3l5.5-4.1l2.7,4.1l9.3,13l8.9-3.7l-1.9-3.3l4.6-3.2l-6.6,1.3l-1.5,2.7l-7-5.1l-3.6-5.7
                	l-2.2-6.2l-4.1-6.7l14.5-13.5l2.3,2v-2l4.6-2.8l-13.6,1.9l-3.8-4.4l0.9-8.4v-5h1.3v5l1.6,1v-6l5.5-0.9l1.2-1.2l1.3-7.8l-3.8,1.3
                	v-4.6l8.4-3.9l-4.5-7.1l-6,3.5H358l-2.9-2.7l-5,6.3l-4.2,2.8v4.3l-3.5-8.6h2.6l0.9-5.6l1.9-4.1l-1.9-2.7l-3.5,4.4l1.1,1.5l-1.1,1.7
                	l-4.5-1.7l-3.1-9.2v-4.5h3.1l-3.1-1.7l-1.1,1.7l-11.6-15.4l3.6-6.3L329,560l7.1-10.3l0.9-5.1l3.9-3.7l2.5,3.7l1.4-3.7l2.8-1.2h-5.4
                	l5.4-2.1l3.6,2.1l6.6-2.1l-2.9-1.9l1.3-5.1l-4.9,5.1l-6.4-1.1H338l-4.1-2.2v1.2h-4.7l-2.8-4v8l1.5,4.5l-1.9,2.5l-6.1-2.5l-4,2.5
                	l-1.4-2.5v2.5H312l1.7,2.7l-10.8,6l-1.6-7.7l-2.4,7.7l-6.4-6l2.9-6.4l-5.3,4.8l-5.3-3.6l-3.2-6.4h-1.9l1.9,3.1l1,3.3l-1.8,3.6
                	l5.2,2.7l-1.1,3.4v6.1l-2.3,2.2l-10.9-6.8l-8.9-7.7l-2.2-2.8l-6.6,4.5l3.9,11.9v2l1.3,2.1h-5.1l-1.4-4.1l1.4-2.9l-1.4-3l-7-8.7
                	l-2.1-3.7v-5.2l-2.3-5.1l1.3-1.9l4.4-1.8l2.5,7.7l1.3,4.1h3.3l-1.4-4.1V533l-1.9-4.9l-1.3-3.3l4.6-6.6v-2.7l5.1-4.5l3-7.5v-4
                	l6.6-9.1l4.7-1.1v-5.5l-2.7-3.2l1-5.6l-7.6-4.8l-3.6-6.7l3.6-3.9l-3.6-6.9l2.2-7.4l1.3-3.4h6.6l9,3.4l-9.9-7.6h-3l-2.7,1.3l1.2-10
                	l4.6-9.6l-7.1,7.9l-0.8-5.9v10.1l-3,10.3l-1.3,6.3l-2.9,0.8l-4.3-11.3v6.7l-5.9-1l-2.3,5.6l2.3,2.9l-8.3-6.7l3.8-10.7l6.6-8.2
                	l1.6-2.5l4.1-0.9l4.3-8.2l-4.3,0.8l-1.9,5.9l-8.2,3.7l-3.2,6.4l-2.7,3.7l-2.6-1.9v10.9l1.3,6.7l2.4,1.6l0.8,5.3l-4.5,3.3l-3.6,6.2
                	l-2.1,10.3l-3.3,9.9l1.3,4.1l-3.5,7.7l-5.3,1.5h-4.7V490l3.4-3.8v-10.8l5.7-9.8l-0.8-4.7l7.2-6.3l3.3-6.1l-8.1,7.2l-2.5-4.3l5.2-10
                	l-4.4,1.5v-5.7l4.4-10.3l4.1-1.1l-1-3.4l1-3.5l-4.1,2l3.1-7.6l3.1-2.5H226v-3.5l-3.5,8.9l2.2-11.1h3.3l7-11.9h3.2v-3.5h-1.9v-1.4h7
                	v-3.2l-3.2,0.8l-1.9-0.8l5.1-7.4v-2.9l5.9-2l-2.5-1.9l11-13.6l-12.3-1l7,3.9l-10.1,10.7L226,387.1l-10.1-2l-8.3-9.2h9.6l3.6-4.9h3.9
                	l-1.5-3.2l-7.4,0.9l-8.3,2.3l-9-2.3H196l3.8-4.6l12.6-2.1l2,2.1l2.7-6.7l9.9-4.5h-10l7.5-10.7l5.4,5.4l7.3-3.6h-6.1l-2.2-1.8
                	l-4.4-2.8l5.4-6.8l9,2.8l-5.4-7.2l-3.6,1.9l-1-2.7l4.6-3.6h-5.7l-4.7,3.6l-5.1,8l-6.4,4v-6l5.4-5.2l3.6-1.5h-6.3l-1.1-3.7l-0.9,2
                	l-2.2,5.1l-0.9-4.1h-3.5l-2.7,4.1l-7-5.1l-1-8.1c0,0-4.2-3.5-3.7-3.6s5.6-3.7,5.6-3.7l-3.7-3l-1.9,3l-0.9-3.8l-3.3,0.8v4.3l-9.5-7.2
                	v-7.2l4.6-4.4l2.5,11.6l2.3-3.6l-3.1-4.9l5-0.7l-4.2-5.3l2.3-3.6l0.8,4.3l10.5,8.3L195,287h3.5l-2.5-4.3l3.8-2.8l1.2-1.7l8.2,8.7
                	l0.9,17.3l-4.4,1.2l3.5,4.7v2.8l4,1.9l-3.1,2.6l10.4,2.2l-1.7,3.9l7.9-6.1l5.4,3.1h3.4l-6.8-5.7l8.3-1.9l5.6-6.6l-7.1,3.8h-2.2v-3
                	l-7.9,4.3l-3.7-3l3.7-2.9l-3.7-2.4l1.2-12.5l4.7,3.9l14.3,4.4l-2.6-4.4l-10.6-1.8l-4.4-7.8l2.3-2.8h4.3v-3.8h-6.6l3.3-9.8v-2h5.7
                	v10.4l3.7-3l-1.6-12.5h2.4l4,7.1l0.7-3.3h5.3l7.5,4.2l-9.1-8l10.2,5.1l3.3,5.5h2.6l-2.6-6.7l-4.4-5.3l1.1-3.9l-5.7-3.4l-3.7-0.8
                	l0.9,1.9H244V249l1-2.4h2.8l1,0.9h4.1v-7.4l-2.2-4.7l-1.9-2.9h15l3.4,1.9l2.1-1.9l-8.3-3.9l-1.3-3.1v-7.1l4.1-2.4l1.1-2.1l-1.1-2.7
                	l-1.5-1l3.3-3.3l1.6-7.7l10.7,2.8l-1.7,6.8l4.9-5.6l1.9,2.9l-5.1,7.8l5.1-2l5.2-8.7c0,0,4.8,1.8,5.6,2s-0.7,6-0.7,6l7.3-4.3l2.9,3.3
                	l4.2-3.3h2l2.5-0.8l2.2,0.8v-2.8c0,0,1.1,1.3,1.7,1.1c1.7-0.1,3.4-0.1,5.1,0l2.9,0.9l10.1-2.9h3.9L342.1,202.7z"
          />
          <path
            class="st0"
            d="M435.2,934.4l2.9-2.9l10.1-4.3l5-2.8v3.6l1-2l4.3,1.2h2.3l5.8,2.9l-8,5.4l3.1,2.1l-4.8,4.2l-5.7-2.1l-6.8-4.2
                	L435.2,934.4z"
          />
          <path
            class="st0"
            d="M262.9,684.5l4.3,5.7h2.9l3.7,8.5c0,0,6.5-0.5,6.9,0s6.5-0.8,6.5-0.8l4.3-6.1l3.3-0.8l3.6-3.7l-2.1-1.2l-3-1.6
                	l-3.4,1.6l-3.2-5.3l-1.5-4.8l-6.6-0.7l-8.5,0.7c0,0-0.8,9.5-0.8,10.1S262.9,684.5,262.9,684.5z"
          />
          <path
            class="st0"
            d="M234.1,469.6l2.2,9.3v8.6l14.5,3.9l-4.1-12.4l4.1-1.7l-5.9-6.2v-8.4L234.1,469.6z"
          />
          <path class="st0" d="M246.9,446.9l6.7,15.8l2.8-7.4L246.9,446.9z" />
          <path class="st0" d="M259.7,456.5l-1.6,4.2l2.7-1.2L259.7,456.5z" />
          <path class="st0" d="M256.4,463.2l1.8-0.6v1.8L256.4,463.2z" />
          <path
            class="st0"
            d="M214.9,466.3v-3.1l0.9-0.7v-1.8l1,0.3l0.8,3.4L214.9,466.3z"
          />
          <path
            class="st0"
            d="M211.8,424.7l8.6-2.5l1.2,1.8l-0.8,2.5l-4.9,3.7l-0.5,4l-4.2,4.1v5.6l-5.4,9.4l-5.3-0.5l-1.9-8.9l2.7-2.2
                	l6.1-1.8l-0.9-1.5l-3.8-1.1l-1-1l8.3-6.7L211.8,424.7z"
          />
          <path
            class="st0"
            d="M174.3,461.3l4.1-5.2l-2-4.8l8.4-6.4l2.1-1.1v4c0,0,1.8-0.3,2.1,0s0.6-5.8,0.6-5.8l5.2-1h2.8l-1.2,8.9l5.7,6.7
                	l-3.5,9l-7,3.2l-3.7,3.3h-2.1l0.4-5.6l3.4-1l-1.2-4l-3.1-2l1.3-3.1l3.7-0.6l-2.3-1.7h-2.7l-1.8,2.3l0.3,3.1l-3,4.6L174.3,461.3z"
          />
          <path
            class="st0"
            d="M191.6,432.1l1.4-5.5l6.7-6.6l-5.8,10.2L191.6,432.1z"
          />
          <path
            class="st0"
            d="M218.3,419.2l1.3,1.1l2.5-1.9l-0.9-1.3L218.3,419.2z"
          />
          <path
            class="st0"
            d="M186.9,403.5l1.3,5.6c0,0,5.4,1.9,5.6,1.9c0.9-0.6,1.8-1.2,2.7-1.9h7.2l1.3-2.8c0,0,4.6,0,4.8,0s4-4.1,4-4.1
                	l-2.5,4.9l7.6-1.6v-4.7l4.2-0.6l-1.3-4.1l2.3-0.7l0.8-2.9l-15.4-5.4l-2.2-3.5l-4.6-3.4v-2.1l-1.6-2.6l-9.1,1.9l-2.6,2.4l-1.2,3.8
                	l11.4,5.8L192,389l8.3,4.1l8.1-2.9l-13.1,10.5l3.6,2.1l6.6-4.7l1.7,2.5l-1.7,3.5L186.9,403.5z"
          />
          <path
            class="st0"
            d="M160.4,388l4.7,2.3l2-3.5l5.4-3.8l9.3-4.9l4.2-1.4l4.3-6.5l-8.5,0.6l-0.3,3.8l-8.3,4.5l-6,2.6l-3.4,2.5
                	L160.4,388z"
          />
          <path
            class="st0"
            d="M190.2,341.2l6.3,6.6l5.4-4.6l-3.4-5.3l-2.7-1L190.2,341.2z"
          />
          <path
            class="st0"
            d="M202.5,350.5l-1.4,1.4l4.5,2l2.7-2.4l-1.7-2.7l-1.3-0.5L202.5,350.5z"
          />
          <path
            class="st0"
            d="M184.5,336.9l-1.4,0.6l4.5,1.2l2.7-1l-1.6-1.4l-1.3-0.3L184.5,336.9z"
          />
          <path
            class="st0"
            d="M198.1,356.1l-0.8,0.8l4.3,1.2v-1.4l-1-1.6l-0.8-0.3L198.1,356.1z"
          />
          <path
            class="st0"
            d="M127.9,357.5l1.7-2.2l2.5-3.2l1.2-4.2l2.5-10.6l8.6-4.4l2.9,2.9l-2,3.3h-4.9l-1.5,7.2v3.3L127.9,357.5z"
          />
          <path
            class="st0"
            d="M148.5,332.9l-5.5-7.7l1.9-5.1l-1.9-6.3l3.9-2.6l-2-6l2-2.5h1.6L147,297l4.1-3.9l-2.5-5.1l-5.5-4.5l9.3-4.5v-4
                	l2.4,2.4l4.5-3.9c0,0,3.9,4.4,4.7,5.5s3.6,3.8,3.6,3.8l-5.4,2.9l-3,5l-3.1,1.2l1.8,3.7l-3.2,4.5l1.4,1.4l-5.1,5.2
                	c0.9,0.9,1.8,1.9,2.6,2.9c0.5,0.7,0,5.2,0,5.2l-5.1,4.1c0,0,2,1.4,2.5,2.8s-1.6,5.3-1.6,5.3c0.4,0.8,0.9,1.5,1.6,2
                	c0.7,0.7,1.7,1.1,2.6,1.4l-1.3,2.6L148.5,332.9z"
          />
          <path
            class="st0"
            d="M156.9,266.9l-0.9,2.2l3.4,1.9v-4.1l-2.5-1.2V266.9z"
          />
          <path
            class="st0"
            d="M133.6,288.8l4.1-0.5l0.9,3l-2.4,0.5h-3.6L133.6,288.8z"
          />
          <path
            class="st0"
            d="M163.4,264.7l7.3,7.9l7-5.6l5.4-0.6l-3.9-6.6h1.9l3.3,3.8l4.7,0.7l-3-3.1v-7.7l6.3,5.7l6.8-6.5l-2.6-3l7.4-0.4
                	l-3.8-6.7l-2.3-3.1l0.8-1.1h1.5l1.2-3.8l10.4-1.7c0,0-8.7-1.8-9-1.8s4.5-7.3,4.5-7.3l4.6-1.6l-2.1-3.7L212,203l-18.2,12.7l-11.2,3.8
                	l-3.4,4.5l5.2,6.9v3.5l-5.2-1.2l-1.4,2.2l-5-0.9V229h-3.7c0,0-4.5,9.1-5,9.2s5.3,6.2,5.6,6.2c1.2,0.4,2.4,0.8,3.5,1.4
                	c0.3,0.2-4.7,2.6-4.7,2.6l-5.9-1l-0.7,2.1l7.1,2.5l2.1,0.5l-0.4,0.8l-1,2.1h-2.1l-2.9,2.8l3.8,1.4v2.2l-2.3,1.6H164L163.4,264.7z"
          />
          <path
            class="st0"
            d="M262.9,601.9l7-3l1.9-11.5l4.7-2.8h6.9v7.8l4.5,2.8c0,0-7.6,8.1-7.9,9.2s-7.3,8.9-7.3,8.9l-3.5,6.1l-3.9-3.8
                	H262v2.8l-4.6-2v-3.2l7.9-1.3l-3.3-2.4L262.9,601.9z"
          />
          <path
            class="st0"
            d="M91.6,551.4l6.2-4h6v-6.1l6.9,1.4l-3.8-6l3-6.5l4.5-4.8v-3.2l6-0.9l7.5-2.2c0,0,4.4-1.2,4.9-1.2s0,4.3,0,4.3
                	v1.6l1.8-2.5v-4.6h4.7l2.3-2.8l1.9,2.8c0,0,0.1,4.7,0,5.5s1.9,5.8,1.9,5.8l-3.8,5.4v3.3l8.3-6.5l-4.5-11.1l1.9-3.8h6.4l1-9.1
                	l10.9,7.6l6.9,5.2l-7.8,4.6l-10,11.4l12.7-3.1l3.2-8.3h8.2l3.8-1.6l14.4-0.9l4.3,4.1l5.3-1.6v7.4l5.6,7.2l-4.4,4.4
                	c0,0,6.4,3.9,7,4.6s0.7,4.9,0.7,4.9l2.9,0.9v-3.8l2.7,2.9v4.9l-9,2.8l-4.4,4.5h17l3.1,7.8c0.8,1.9,1.2,7.9,1.2,7.9l-1.2,3.5l-2.1,3
                	l-1.8-5.6l0.8-5.6l-1.6-3.1l-4.7-2.9v2.9l1.2,3.1l1.5,3.4l-2.7,5.7l2.7,2.2l2.8,2.1l-2.8,4.4l-4.1,0.8h-4.9l-3.2,2v5.2l-2.4,3.3
                	l-3.1,3.3l-9.2-7.7v3.2l2.7,3.5v3.6l-7.7-2.6l-1.1,7.8l3.4,3.3v4l1.8,1.2v6.4l2.7,8.7l2.3,2.9l-5,8.4l5,3.5l-5,0.8l-1.8,4.3l5.4,1.8
                	v6.6l5.2,7l-2.2,9.1l-3.8,4v1.9l-7.9,15.6l1.1,6.8l-1.1,3.8h-1l-4.6,7.8h-5l1.2,4l3.8,3.5l-2.2,8.2l-6.2-4l-13-1v-3.2l-4.5,8.2v-7
                	l-2.9,5.1l-6.4,1.9v-4l-25.8,6.4l7.5,1.5l-5.9,5.3h-4.4l-5.4-2.1v2.1l-0.9,2.7h-1.6l4.6,3.3h-6.9l-1.5,3.4h-6.4l-2.8-1.4l2.8-3.2
                	l-7.4-1l1.5,4.2v3.2l-12.9,9.7h-7.3l-2.1,1.5h-6.3l-1.2,3.1l-4.5-1.4h-6.2l-0.9,1.4l-10,3.4l5.5-6.5l-5.5,0.8H37l-1.7,2.3h-4.6
                	l-2.9,1.5h-2.2l13.4-9.6l-13.4,3.6l9.7-5.6h5.6l2.5-2.7l-3.4-1.4l-3.8,1.4l-15.3,1.1l-1.3,1.7l-10.2,2l6.3-6.1L39,746.4h-4.4
                	l-0.9,2.1L23,749.8l-12.9,4.9l-0.9-2.2l0.9-3.8l-2.1-1l-2.1,2.1l-1-3.3l-1.6-1.9L8,741l-1-3.5l21.4-7.2l5.1-2.6l-12.8-2.9l-9.7,1.5
                	H0l3.3-6.4h2.6l6.5-5.1H18v3.4h2.7l1.1-3.4h3.6v7.5l7.1-2.4l-4.8-3.2l2.9-4.6l-2.1-4.9h2.1l8.2-4.5h2l1-4.7l18.7,2.6l16.6-4l8.2-1.3
                	l-12.8-2.7l-1.5-5.7l-6.8,9.6h-6.7c-1.4,0.1-2.7,0.1-4.1,0c-0.7-0.1-6.4-2.5-6.4-2.5l-17.2,5.2l13.6-9.9l13-14.4l-3-2l9.3-13.6
                	l12.6,0.8L77,657l-4.6-4.2H51v-2.7l-6,1.3v-3.2h3.8l0.8-5.4l-2.7-1.4l-3.6,3.3l-7.3,1.4l-1.6-3.3l8.9-2.8l-3.4-3.1l-3.8,1.1
                	l-9.7-3.7l4.3-2.1l-4.3-6.5l8.9,1.5l-1.6-4.9l11.4,1.2l-6.2-7.7l3-2.2l3.2-0.9l7.4-1.3v-2.1l1.9-2.7l-4.6-4.7l-7.9,2.5l-14.1-9.8H38
                	l2.9,3.3l7.2-1l-4.7-4l0.8-4.1H40l1.9-6.9l-1.9-1.3l-5.4,5.8l-0.9-2.3l1.6-7.4l6.6-1.5l1.5,1.5l3.6-2.3v-2.7c0,0,5-0.6,5.4,0
                	s12.5,3.6,13.7,3.5s6.3,0,6.3,0v8.9l4.6,2.3l2.8-7.7h2.7c0,0,0.9,3.9,1.7,4.4s8.9,0,8.9,0l4.7,3.3V582h3.7l-2.6-4l-5.9-3.5l12.7-2.7
                	v-4.1h5.8l5.8-2.7l-1.3-3.5l5.6-4.8h-11.7l-5,2.9l-6-2.9l-7.3-2.8L91.6,551.4z"
          />
          <path
            class="st0"
            d="M103.9,529.7l-0.8,1.8l2.7,2.3v-2.3L103.9,529.7z"
          />
          <path class="st0" d="M197.3,515.8l4.6,4l1.2-4.9L197.3,515.8z" />
          <path class="st0" d="M38.8,657.6l6.4,3.6v-5.6L38.8,657.6z" />
          <path class="st0" d="M46.4,663.6l2.5-1.5L47,661L46.4,663.6z" />
          <path class="st0" d="M49,664.8l4-0.4l-1-2L49,664.8z" />
          <g transform="translate(59.706 42.378)">
            <g transform="translate(0 169.963)">
              <circle class="st1" cx="298.3" cy="2.9" r="2.9" />
              <circle class="st1" cx="303.9" cy="76" r="2.9" />
              <circle class="st1" cx="349.1" cy="73.4" r="2.9" />
              <circle class="st1" cx="356.8" cy="90.2" r="2.9" />
              <circle class="st1" cx="350.1" cy="246.8" r="2.9" />
              <circle class="st1" cx="203.6" cy="250.3" r="2.9" />
              <circle class="st1" cx="162.7" cy="277.5" r="2.9" />
              <circle class="st1" cx="98.2" cy="321.4" r="2.9" />
              <circle class="st1" cx="50.8" cy="342.1" r="2.9" />
              <circle class="st1" cx="2.9" cy="488.9" r="2.9" />

              <ellipse
                transform="matrix(0.9999 -1.020253e-02 1.020253e-02 0.9999 -5.5138 0.3648)"
                class="st1"
                cx="33"
                cy="540.6"
                rx="2.9"
                ry="2.9"
              />
              <circle class="st1" cx="135.2" cy="437.5" r="2.9" />
              <circle class="st1" cx="290.9" cy="402.4" r="2.9" />
              <g transform="translate(383.271 338.014)">
                <circle class="st1" cx="2.9" cy="2.9" r="2.9" />
              </g>
              <circle class="st1" cx="330.5" cy="465.9" r="2.9" />
              <circle class="st1" cx="313.8" cy="474.2" r="2.9" />
              <circle class="st1" cx="304.6" cy="474.7" r="2.9" />
              <circle class="st1" cx="215.4" cy="272.4" r="2.9" />
              <circle class="st1" cx="395.2" cy="352.5" r="2.9" />
              <circle class="st1" cx="458.6" cy="456.1" r="2.9" />
              <circle class="st1" cx="413" cy="440.7" r="2.9" />
              <circle class="st1" cx="462.8" cy="506.4" r="2.9" />
              <circle class="st1" cx="482.2" cy="523.5" r="2.9" />
              <circle class="st1" cx="559.9" cy="556.7" r="2.9" />
              <circle class="st1" cx="524.8" cy="588.3" r="2.9" />
              <circle class="st1" cx="501.1" cy="646.3" r="2.9" />
              <circle class="st1" cx="509.6" cy="652.1" r="2.9" />
              <circle class="st1" cx="547.9" cy="654.8" r="2.9" />
              <circle class="st1" cx="541.2" cy="677.1" r="2.9" />
              <circle class="st1" cx="524.4" cy="685.6" r="2.9" />
              <circle class="st1" cx="475" cy="706" r="2.9" />
              <circle class="st1" cx="447.9" cy="703.2" r="2.9" />
              <circle class="st1" cx="408.1" cy="704.6" r="2.9" />
              <circle class="st1" cx="352.4" cy="713.6" r="2.9" />
              <circle class="st1" cx="326" cy="733.8" r="2.9" />
              <circle class="st1" cx="262.7" cy="735.9" r="2.9" />
              <circle class="st1" cx="168.2" cy="763.3" r="2.9" />
              <circle class="st1" cx="241.4" cy="628.9" r="2.9" />
              <circle class="st1" cx="249.5" cy="632.7" r="2.9" />
              <circle class="st1" cx="283" cy="645.5" r="2.9" />
              <circle class="st1" cx="295.8" cy="639.4" r="2.9" />
            </g>
            <g transform="translate(133.296 0)">
              <g
                id="montrose"
                class="map-place"
                data-name="Montrose"
                data-address1="Harbour Office, S.Quay"
                data-address2="Ferryden, Montrose"
                data-address3="Angus"
                data-postcode="DD10 9SL"
                data-tel="+44 (0) 1224 211500"
                data-email="montrose@clarksons.com"
                style="transform-origin: 31% 34%"
              >
                <path
                  id="mon"
                  class="st2"
                  d="M199.6,330.1c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3l0,0
                				l0,0l0,0l6.7,6.7L199.6,330.1L199.6,330.1L199.6,330.1z M190.3,326.1c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C194.1,327.5,191.8,327.5,190.3,326.1L190.3,326.1L190.3,326.1z"
                />
                <circle class="st3" cx="193.1" cy="323.5" r="4.1" />
              </g>
              <g
                id="dundee"
                point-events="all"
                class="map-place"
                data-name="Dundee"
                data-address1="Cairnie House"
                data-address2="Prince Charles Wharf"
                data-address3="Dundee"
                data-postcode="DD1 3NA"
                data-tel="+44 (0) 1383 428768"
                data-email="dundee@clarksons.com"
                style="transform-origin: 28.5% 35.5%"
              >
                <path
                  id="dun"
                  class="st2"
                  d="M183.6,346.7c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3l0,0
                				l0,0l0,0l6.7,6.7L183.6,346.7L183.6,346.7L183.6,346.7z M174.3,342.6c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C178.1,344.1,175.7,344.1,174.3,342.6L174.3,342.6L174.3,342.6z"
                />
                <circle class="st3" cx="176.7" cy="340" r="4.1" />
              </g>

              <g
                id="aberdeen"
                class="map-place"
                data-name="Aberdeen"
                data-address1="Matthews Quay"
                data-address2="Aberdeen Harbour"
                data-address3="Aberdeen"
                data-postcode="AB11 5PG"
                data-tel="+44 (0) 1224 211500"
                data-email="aberdeen@clarksons.com"
                style="transform-origin: 33.5% 29%"
              >
                <path
                  id="aber"
                  class="st2"
                  d="M215.3,283.9c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3
                				l0,0l0,0l0,0l6.7,6.7L215.3,283.9L215.3,283.9L215.3,283.9z M206,279.9c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C209.8,281.3,207.4,281.3,206,279.9L206,279.9L206,279.9z"
                />
                <circle class="st3" cx="208.6" cy="277.4" r="4.1" />
              </g>
              <g
                id="invergordon"
                class="map-place"
                data-name="Invergordon"
                data-address1="Unit 7, Service Base"
                data-address2="Shore Road"
                data-address3="Invergordon"
                data-postcode="IV18 0EX"
                data-tel="+44 (0) 1349 627100"
                data-email="invergordon@clarksons.com"
                style="transform-origin: 18% 24%"
              >
                <path
                  id="inver"
                  class="st2"
                  d="M118,231.4c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3l0,0
                				l0,0l0,0l6.7,6.7L118,231.4L118,231.4L118,231.4z M108.7,227.4c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C112.5,228.9,110.1,228.9,108.7,227.4L108.7,227.4L108.7,227.4z"
                />
                <circle class="st3" cx="111.4" cy="224.7" r="4.1" />
              </g>

              <g
                id="liverpool"
                class="map-place"
                data-name="Liverpool"
                data-address1="16 Century Buliding"
                data-address2="Brunswick Business Park, Tower St"
                data-address3="Liverpool"
                data-postcode="L3 4BJ"
                data-tel="+44 (0) 1516 661575"
                data-email="liverpool@clarksons.com"
                style="transform-origin: 28% 64%"
              >
                <path
                  id="liverpool_x5F_placer"
                  class="st2"
                  d="M181.6,626.1c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L181.6,626.1L181.6,626.1L181.6,626.1z M172.3,622c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C176.1,623.5,173.7,623.5,172.3,622L172.3,622L172.3,622z"
                />
                <circle class="st3" cx="174.8" cy="619.7" r="4.1" />
              </g>
              <g
                id="belfast"
                class="map-place"
                data-name="Belfast"
                data-address1="Lincoln Building"
                data-address2="27 – 45 Great Victoria Street"
                data-address3="Belfast"
                data-postcode="BT2 7SL"
                data-tel="+44 (0) 2890 242242"
                data-email="belfast@clarksons.com"
                style="transform-origin: 1.5% 53%"
              >
                <path
                  id="bel"
                  class="st2"
                  d="M16.1,516.8c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3l0,0
                				l0,0l0,0l6.7,6.7L16.1,516.8L16.1,516.8L16.1,516.8z M6.8,512.7c-1.5-1.4-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C10.6,514.2,8.3,514.2,6.8,512.7L6.8,512.7L6.8,512.7z"
                />
                <circle class="st3" cx="9.6" cy="510.1" r="4.1" />
              </g>
              <g
                id="glasgow"
                class="map-place"
                data-name="Clyde"
                data-address1="King George V Dock"
                data-address2="Glasgow"
                data-address3=""
                data-postcode=""
                data-tel="+44 (0) 1383 428768"
                data-email="clyde@clarksons.com"
                style="transform-origin: 15% 40.5%"
              >
                <path
                  id="glas"
                  class="st2"
                  d="M99.9,396.9c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3l0,0
                				l0,0l0,0l6.7,6.7L99.9,396.9L99.9,396.9L99.9,396.9z M90.6,392.9c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C94.4,394.3,92.1,394.3,90.6,392.9L90.6,392.9L90.6,392.9z"
                />
                <circle class="st3" cx="93.2" cy="390.2" r="4.1" />
              </g>
              <g
                id="ipswich"
                class="map-place"
                style="transform-origin: 65.5% 76%"
                data-name="Ipswich"
              >
                <path
                  id="ipswich_x5F_placer"
                  class="st2"
                  d="M415,748c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L415,748L415,748L415,748z M405.7,744c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C409.5,745.4,407.1,745.4,405.7,744L405.7,744L405.7,744z"
                />
                <circle class="st3" cx="408.3" cy="741.7" r="4.1" />
              </g>
              <g
                id="hull"
                class="map-place"
                data-name="Hull"
                data-address1="One Business Village"
                data-address2="Emily Street"
                data-address3="Hull"
                data-postcode="HU9 1ND"
                data-tel="+44 (0) 1482 210435"
                data-email="humber@clarksons.com"
                style="transform-origin: 50% 60.5%"
              >
                <path
                  id="hull_x5F_placer"
                  class="st2"
                  d="M317.4,593.2c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L317.4,593.2L317.4,593.2L317.4,593.2z M308.1,589.1c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C311.9,590.6,309.5,590.6,308.1,589.1L308.1,589.1L308.1,589.1z"
                />
                <circle class="st3" cx="310.9" cy="586.7" r="4.1" />
              </g>
              <g
                id="immingham"
                class="map-place"
                data-name="Immingham"
                data-address1="Davian Business Centre"
                data-address2="Plot U, Kiln Lane"
                data-address3="Stallingborough"
                data-postcode="DN41 8DW"
                data-tel="+44 (0) 1469 574649"
                data-email="humber@clarksons.com"
                style="transform-origin: 48% 63%"
              >
                <path
                  id="immingham"
                  class="st2"
                  d="M307.8,618.6c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L307.8,618.6L307.8,618.6L307.8,618.6z M298.5,614.6c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C302.3,616,300,616,298.5,614.6L298.5,614.6L298.5,614.6z"
                />
                <circle class="st3" cx="301" cy="612" r="4.1" />
              </g>
              <g
                id="blyth"
                style="transform-origin: 36.8% 47.5%"
                class="map-place"
                data-name="Blyth"
                data-address1="Port of Blyth, Wimbourne Quay"
                data-address2="Regent Street"
                data-address3="Blyth"
                data-postcode="NE24 1PX"
                data-tel="+44 (0) 1670 364602"
                data-email="blyth@clarksons.com"
              >
                <path
                  id="blynth"
                  class="st2"
                  d="M235.7,463.7c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3
                        l0,0l0,0l0,0l4.5,4.5l2.2,2.2L235.7,463.7L235.7,463.7L235.7,463.7z M226.4,459.7c-1.5-1.5-1.5-3.8,0-5.3l0,0
                        c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C230.2,461.1,227.9,461.1,226.4,459.7L226.4,459.7L226.4,459.7z"
                />
                <circle class="st3" cx="228.9" cy="457.2" r="4.1" />
              </g>
              <g
                id="newcastle"
                class="map-place"
                data-name="Newcastle"
                data-address1="Suite 207, Navigation House"
                data-address2="Tyne Dock"
                data-address3="South Shields"
                data-postcode="NE34 0AB"
                data-tel="+44 (0) 1914 277043"
                data-email="tyne@clarksons.com"
                style="transform-origin: 37.7% 50%"
              >
                <path
                  id="newcastle_x5F_placer"
                  class="st2"
                  d="M243.1,489.2c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L243.1,489.2L243.1,489.2L243.1,489.2z M233.8,485.2c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C237.6,486.6,235.3,486.6,233.8,485.2L233.8,485.2L233.8,485.2z"
                />
                <circle class="st3" cx="236.5" cy="482.6" r="4.1" />
              </g>
              <g
                id="forth"
                class="map-place"
                data-name="Forth"
                data-address1="Suite 14, Liberty House"
                data-address2="15 Cromarty Campus"
                data-address3="Rosyth"
                data-postcode="KY11 2YB"
                data-tel="+44 (0) 1383 428768"
                data-email="forth@clarksons.com"
                style="transform-origin: 24% 39%"
              >
                <path
                  id="for"
                  class="st2"
                  d="M156.1,377.8c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3l0,0
                				l0,0l0,0l6.7,6.7L156.1,377.8L156.1,377.8L156.1,377.8z M146.8,373.8c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C150.6,375.2,148.3,375.2,146.8,373.8L146.8,373.8L146.8,373.8z"
                />
                <circle class="st3" cx="149.6" cy="371.4" r="4.1" />
              </g>
              <g
                id="yarmouth"
                class="map-place"
                data-name="Great Yarmouth"
                data-address1="Brooklyn House, Gapton Hall Rd."
                data-address2="Great Yarmouth"
                data-address3="Norfolk"
                data-postcode="NR31 0RD"
                data-tel="+44 (0) 1493 856831"
                data-email="greatyarmouth@clarksons.com"
                style="transform-origin: 67% 71.5%"
              >
                <path
                  id="yarmouth_x5F_placer"
                  d="M424.9,704.7c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0c-3.7,3.7-3.7,9.7,0,13.3
                				l0,0l0,0l0,0l6.7,6.7L424.9,704.7L424.9,704.7L424.9,704.7z M415.6,700.7c-1.5-1.5-1.5-3.8,0-5.3l0,0c1.5-1.5,3.8-1.5,5.3,0l0,0
                				c1.5,1.5,1.5,3.8,0,5.3l0,0C419.4,702.1,417,702.1,415.6,700.7L415.6,700.7L415.6,700.7z"
                />
                <circle class="st3" cx="418.4" cy="698.3" r="4.1" />
              </g>
              <g
                id="tilbury"
                class="map-place"
                data-name="Tilbury"
                data-address1="Room 10, Cereals House"
                data-address2="Port of Tilbury"
                data-address3="Tilbury"
                data-postcode="RM18 7LR"
                data-tel="+44 (0) 1375 859711"
                data-email="tilbury@clarksons.com"
                style="transform-origin: 57.5% 81.5%"
              >
                <path
                  id="tilbury_x5F_placer"
                  class="st2"
                  d="M363,801.1c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L363,801.1L363,801.1L363,801.1z M353.7,797c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C357.5,798.5,355.1,798.5,353.7,797L353.7,797L353.7,797z"
                />
                <circle class="st3" cx="356.4" cy="794.4" r="4.1" />
              </g>
              <g
                id="avonmouth"
                class="map-place"
                data-name="Avonmouth"
                data-address1="Ground Floor, St Andrews House"
                data-address2="St Andrews Road, Avonmouth"
                data-address3="Bristol"
                data-postcode="BS11 9DQ"
                data-tel="+44 (0) 1179 380810"
                data-email="avonmouth@clarksons.com"
                style="transform-origin: 29.5% 82.5%"
              >
                <path
                  id="avonmouth_x5F_placer"
                  class="st2"
                  d="M191.1,813.8c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L191.1,813.8L191.1,813.8L191.1,813.8z M181.8,809.8c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C185.6,811.2,183.3,811.2,181.8,809.8L181.8,809.8L181.8,809.8z"
                />
                <circle class="st3" cx="184.3" cy="807.2" r="4.1" />
              </g>
              <!-- <g id="harwich">
                			<path id="harwich_x5F_placer" class="st2" d="M391.6,776.7c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L391.6,776.7L391.6,776.7L391.6,776.7z M382.3,772.6c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C386.1,774.1,383.8,774.1,382.3,772.6L382.3,772.6L382.3,772.6z"/>
                			<circle class="st3" cx="385" cy="770.1" r="4.1"/>
                      <circle class="st1" cx="295.8" cy="639.4" r="2.9"/>
                		</g> -->
              <circle
                id="bye-harwich"
                class="st1"
                cx="384.8"
                cy="779.7"
                r="2.9"
              />
              <g
                id="southampton"
                class="map-place"
                data-name="Southampton"
                data-address1="Berth 36, Test Road"
                data-address2="Eastern Docks, Dock Gate 4"
                data-address3="Southampton"
                data-postcode="SO14 3GG"
                data-tel="+44 (0) 2380 229577"
                data-email="southampton@clarksons.com"
                style="transform-origin: 40.5% 87%"
              >
                <path
                  id="southampton_x5F_placer"
                  class="st2"
                  d="M259,857.3c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L259,857.3L259,857.3L259,857.3z M249.7,853.3c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C253.5,854.7,251.2,854.7,249.7,853.3L249.7,853.3L249.7,853.3z"
                />
                <circle class="st3" cx="252.3" cy="850.4" r="4.1" />
              </g>
              <g
                id="lerwick"
                class="map-place"
                data-name="Lerwick"
                data-address1="Block 2, Greenhead Base"
                data-address2="Gremista, Lerwick"
                data-address3="Shetland"
                data-postcode="ZE1 0PY"
                data-tel="+44 (0) 1595 695717"
                data-email="lerwick@clarksons.com"
                style="transform-origin: 40.5% 2.5%"
              >
                <path
                  id="lerwick_placer"
                  class="st2"
                  d="M260.1,16.1c3.7-3.7,3.7-9.7,0-13.3l0,0c-3.7-3.7-9.7-3.7-13.3,0l0,0
                				c-3.7,3.7-3.7,9.7,0,13.3l0,0l0,0l0,0l6.7,6.7L260.1,16.1L260.1,16.1L260.1,16.1z M250.8,12.1c-1.5-1.5-1.5-3.8,0-5.3l0,0
                				c1.5-1.5,3.8-1.5,5.3,0l0,0c1.5,1.5,1.5,3.8,0,5.3l0,0C254.6,13.5,252.2,13.5,250.8,12.1L250.8,12.1L250.8,12.1z"
                />
                <circle class="st3" cx="253.6" cy="9.6" r="4.1" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="lg:hidden">
      <div class="slick-carousel">
        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Aberdeen</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Matthews Quay</p>
                <p>Aberdeen Harbour</p>
                <p>Aberdeen</p>
                <p>AB11 5PG</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1224 211500</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">aberdeen@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Avonmouth</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">
                  Ground Floor,<br />St Andrews House
                </p>
                <p>St Andrews Road, Avonmouth</p>
                <p>Bristol</p>
                <p>BS11 9DQ</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1179 380810</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">avonmouth@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Belfast</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Lincoln Building</p>
                <p>27 – 45 Great Victoria Street</p>
                <p>Belfast</p>
                <p>BT2 7SL</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 2890 242242</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">belfast@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Blyth</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">
                  Port of Blyth,<br />Wimbourne Quay
                </p>
                <p>Regent Street, Blyth</p>
                <p>NE24 1PX</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1670 364602</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">blyth@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Clyde</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">King George V Dock, Glasgow</p>
                <p>NE24 1PX</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1383 428768</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">clyde@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Dundee</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Cairnie House, Prince Charles</p>
                <p>Wharf, Dundee</p>
                <p>DD1 3NA</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1383 428768</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">dundee@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Forth</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Suite 14, Liberty House</p>
                <p>15 Cromarty Campus</p>
                <p>Rosyth</p>
                <p>KY11 2YB</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1383 428768</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">forth@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0">Great Yarmouth</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">
                  Brooklyn House,<br />Gapton Hall Rd.
                </p>
                <p>Great Yarmouth, Norfolk</p>
                <p>NR31 0RD</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1493 856831</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">greatyarmouth@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Hull</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">One Business Village</p>
                <p>Emily Street, Hull</p>
                <p>HU9 1ND</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 1482 210435</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">humber@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Immingham</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Davian Business Centre</p>
                <p>Plot U, Kiln Lane</p>
                <p>Stallingboroug</p>
                <p>DN41 8DW</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1469 574649</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">humber@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Invergordon</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Unit 7, Service Base</p>
                <p>Shore Road, Invergordon</p>
                <p>IV18 0EX</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1349 627100</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">invergordon@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Ipswich (Head Office)</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Maritime House</p>
                <p>19a St Helens St</p>
                <p>Ipswich</p>
                <p>IP4 1HE</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1473 297300</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">ipswich@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Ipswich (Port Office)</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Sentinel Terminal</p>
                <p>Cliff Quay</p>
                <p>Ipswich</p>
                <p>IP3 0BS</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1473 261140</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">ipswich@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Lerwick</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Block 2, Greenhead Base</p>
                <p>Gremista, Lerwick</p>
                <p>Shetland</p>
                <p>ZE1 0PY</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1595 695717</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">lerwick@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Liverpool</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">
                  16 Century Buliding,<br />Brunswick Business Park
                </p>
                <p>Tower St, Liverpool</p>
                <p>L3 4BJ</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1516 661575</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">liverpool@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Montrose</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Harbour Office, S. Quay</p>
                <p>Ferryden</p>
                <p>Montrose, Angus</p>
                <p>DD10 9SL</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1224 211500</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">montrose@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Newcastle</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Suite 207, Navigation House</p>
                <p>Tyne Dock, South Shields</p>
                <p>NE34 0AB</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1914 277043</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">tyne@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Southampton</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Berth 36, Test Road</p>
                <p>Eastern Docks, Dock Gate 4</p>
                <p>Southampton</p>
                <p>SO14 3GG</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 2380 229577</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">southampton@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="address">
            <h4 class="mt-0 mb-2">Tilbury</h4>
            <div>
              <div class="inline-block align-top">
                <img class="list-icon" src="~/assets/img/icon_contact.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">Room 10, Cereals House</p>
                <p>Port of Tilbury, Tilbury</p>
                <p>RM18 7LR</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_phone.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">+44 (0) 1375 859711</p>
              </div>
            </div>

            <div>
              <div class="inline-block align-middle">
                <img class="list-icon" src="~/assets/img/icon_email.svg" />
              </div>
              <div class="inline-block">
                <p class="mt-0">tilbury@clarksons.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    // MAP BIZ

    var map_name = document.getElementById("map-name");
    var map_address1 = document.getElementById("map-address1");
    var map_address2 = document.getElementById("map-address2");
    var map_address3 = document.getElementById("map-address3");
    var map_tel = document.getElementById("map-phone");
    var map_email = document.getElementById("map-email");
    var map_postcode = document.getElementById("map-postcode");
    var map_places = document.querySelectorAll(".map-place");

    var main_office = document.getElementById("main-office");
    var sub_office = document.getElementById("sub-office");

    function removeMapActiveClass() {
      map_places.forEach((item) => {
        item.classList.remove("map-active");
      });
    }

    document.querySelectorAll(".map-place").forEach((item) => {
      item.addEventListener("click", (event) => {
        var targetElement =
          event.target.parentElement || event.srcElement.parentElement;
        if (targetElement.classList.contains("map-place")) {
          var name = targetElement.getAttribute("data-name");

          if (name == "Ipswich") {
            document
              .querySelector(".map-not-ipswich")
              .classList.add("hide-mappy");
            document
              .querySelector(".ipswitch")
              .classList.remove("hide-ipswich");
          } else {
            document.querySelectorAll(".hide-mappy").forEach((item) => {
              item.classList.remove("hide-mappy");
            });

            document.querySelector(".ipswitch").classList.add("hide-ipswich");
            document
              .querySelector(".map-not-ipswich")
              .classList.remove("hide-mappy");

            var address1 = targetElement.getAttribute("data-address1");
            var address2 = targetElement.getAttribute("data-address2");
            var address3 = targetElement.getAttribute("data-address3");
            var postcode = targetElement.getAttribute("data-postcode");
            var tel = targetElement.getAttribute("data-tel");
            var email = targetElement.getAttribute("data-email");

            map_name.innerHTML = name;
            map_address1.innerHTML = address1;
            map_address2.innerHTML = address2;
            map_address3.innerHTML = address3;
            map_postcode.innerHTML = postcode;
            map_tel.innerHTML = tel;
            map_email.innerHTML = email;
            map_email.setAttribute("href", "mailto:" + email);
          }

          main_office.classList.add("hide-mappy");
          sub_office.classList.add("hide-mappy");

          removeMapActiveClass();
          targetElement.classList.add("map-active");
        }
      });
    });
  },
};
</script>

<style scoped>
.map-name-title {
  font-weight: 500;
  font-size: 1.5rem;
}

.map-location {
  margin-top: 50px;
  color: #00BFFF;
}

#select-location {
  line-height: 25px;
}

#map-email {
  font-size: 1.2rem;
  color: #22183D;
  font-weight: 300;
}

.map-email-ipswich {
  font-size: 1.2rem;
  color: #22183D;
  font-weight: 300;
}

.map-info {
  margin-top: 50px;
  margin-left: -20px;
  margin-right: -20px;
}

.map-place {
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s cubic-bezier(.17,.67,.84,1.17);
}

.map-place:hover {
  transform: scale(1.2);
  transition: all 0.2s cubic-bezier(.17,.67,.84,1.17);
}

.map-section-icons {
  margin: 100px 0px;
}

.map-section-icons div:nth-child(-n + 2) {
  margin-bottom: 50px;
}

#mobile-map {
  max-height: 500px;
}

.map-active {
  animation-timing-function: cubic-bezier(.17,.67,.84,1.17);
  animation-name: scale;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  z-index: 99;
}

.map-active path {
  fill: #DA291C;
}

@keyframes scale {
  from {
    transform: scale(1);
  } to {
    transform: scale(2);
  }
}

.slick-carousel {
  margin: 0px -15px;
  padding-left: 15%;
  overflow: auto;
  white-space: nowrap;
  display:flex;
  
}

.slick-carousel > div {
  display: inline-block;
/*  width: 80%; */
/*  min-width: 225px; */
/*  max-width: 400px; */
  vertical-align: top;
/*   height: 100%; */
  /* height: 350px; */
  flex:1;
  margin-right:20px;
}

.slick-carousel .address {
  height: 100%;
  /* min-height: 257px; */
}


.slick-carousel .address {
  background-color: #b3ecff;
  border-radius: 15px;
  padding: 15px;
  margin: 0px 20px;
  width:55vw;
  margin-right:20px;
}

@media screen and (min-width: 450px) and (max-width: 992px) {
	.slick-carousel .address {
		width:44vw;
	}
}

.slick-carousel .address p {
  font-size: 0.7rem;
  line-height: 1.5;
  font-weight: lighter;
}

/* .slick-list{padding:0 20% 0 0;} */

.contact-columns > div {
  margin-bottom: 15px;
  margin-top: 15px;
}

#main-office img {
  width: 25px;
}

#sub-office img {
  width: 25px;
}

#text-above-map {
  font-weight: 500;
  margin: 50px auto;
  max-width: 625px;
}

.list-icon {
  width: auto;
}





@media only screen and (min-width: 992px) {

  .map-info {
    margin-top: 80px;
    margin-left: 80px;
  }

  .hide-mappy {
    display: none;
  }

  .hide-ipswich {
    display: none;
  }

  #desktop-map {
    overflow: visible;
  }

  #text-above-map {
    font-size: 1.8rem;
    font-weight: 500;
    max-width: 500px;
  }

  .map-section-icons {
    margin: 150px 0px;
  }

  .map-section-icons div:nth-child(-n + 2) {
    margin-bottom: 0px;
  }
}
</style>