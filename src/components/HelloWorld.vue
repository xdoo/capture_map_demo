<template>
  <v-container>
  <div>
    <v-sheet
      height="150"
      width="100%"
    > 
      <l-map
        ref="map"
        :center="[48.17931, 11.51500]"
        :zoom="zoom"
        :options="mapOptions"
      >
       <l-tile-layer
            :url="url"
            :attribution="attribution"
          >
        </l-tile-layer>
        <l-marker
          :lat-lng="[48.17931, 11.51500]"

        >
          <l-icon
            :icon-url="require('@/assets/icons/z.png')"
            :icon-shadow="require('@/assets/shadow.png')"
            :icon-size="[48, 48]"
            :icon-anchor="[24, 48]"
          ></l-icon>
        </l-marker>
        <l-marker
          :lat-lng="[48.17930, 11.51447]"
          @click="clikker"
        >
          <l-icon
            :icon-url="require('@/assets/icons/r.png')"
            :icon-shadow="require('@/assets/shadow.png')"
            :icon-size="[48, 48]"
            :icon-anchor="[24, 48]"
          ></l-icon>
        </l-marker>

      </l-map>
    </v-sheet>
  </div>
  <v-btn
    @click="capture"
  >capture!</v-btn>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Ref } from 'vue-property-decorator'
  import html2canvas from "html2canvas"
  import L,{ latLng } from "leaflet"

  @Component
  export default class HellOWorld extends Vue {
    
    zoom = 17
    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    
    @Ref('map') readonly map!: any

    get mapOptions() {
      return {preferCanvas: true}
    }

    clikker() {
      console.log("clicked!!!")
    }

    capture() {
      console.log("captured...")
      html2canvas(this.map.$el, {allowTaint: true, logging: true}).then(canvas => {
        document.body.appendChild(canvas)
      })
    }
  }
</script>
