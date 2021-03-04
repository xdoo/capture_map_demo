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
      class="pt-3"
    @click="capture"
  >capture!</v-btn>
    <v-textarea
      label="Base64 style"
      :value="base64"
      class="pt-03"
    >
    </v-textarea>
    <v-img
      width="100%"
      :src="base64"
    >
    </v-img>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Ref } from 'vue-property-decorator'

  import * as htmlToImage from "html-to-image"
  import L,{ latLng } from "leaflet"

  @Component
  export default class HellOWorld extends Vue {

    base64 = "base64"

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

      htmlToImage.toPng(this.map.$el)
      .then((dataUrl) => {
        this.base64 = dataUrl
      })
      .catch(function (error) {
        console.error("Hat nicht geklappt: ", error)
      })
    }
  }
</script>
