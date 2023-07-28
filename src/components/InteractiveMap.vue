<template>
  <div class="map-container">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="tileLayerUrl"></l-tile-layer>

      <template v-if="countriesGeoJson">
        <l-geo-json :geojson="countriesGeoJson" @add="onGeoJsonAdd"></l-geo-json>
      </template>

      <template v-if="markersData">
        <l-marker v-for="marker in markersData" :key="marker.id"
        :lat-lng="marker.location" :icon="getCampMarkerIcon(marker.markerColor)">
          <l-popup>
            <div>
              <h3>{{ marker.title }}</h3>
              <p><strong>Местоположение:</strong> {{ marker.region }}</p>
              <p><strong>Открытие:</strong> {{ marker.opened }}</p>
              <p><strong>Закрытие:</strong> {{ marker.closed }}</p>
              <p><strong><a target="_blank" :href="`${marker.memorial}`">
              Карточка на сайте общества «Мемориал»</a></strong></p>
              <p><strong>Дополнительная информация: </strong>
              <a target="_blank" :href="`/articles#${marker.id}`">Ссылка</a></p>
            </div>
          </l-popup>
        </l-marker>
      </template>

    </l-map>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  LMap, LTileLayer, LMarker, LPopup, LGeoJson,
} from '@vue-leaflet/vue-leaflet';
import L from 'leaflet';

export default defineComponent({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LGeoJson,
  },

  data() {
    return {
      zoom: 6,
      center: [49.678323049774, 72.68178662327088],
      tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      markersData: null,
      countriesGeoJson: ref(null),
    };
  },

  created() {
    this.fetchMarkersData();
  },

  mounted() {
    this.loadGeoJsonData();
  },

  methods: {
    async fetchMarkersData() {
      try {
        const response = await fetch('');
        const data = await response.json();
        this.markersData = data;
      } catch (error) {
        console.error('Error fetching markers data:', error);
      }
    },

    getCampMarkerIcon(color: any) {
      return L.icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
    },

    async loadGeoJsonData() {
      try {
        const response = await fetch('/kazakhstan.json'); // Load the JSON file
        const geoJsonData = await response.json(); // Parse the JSON data
        this.countriesGeoJson = geoJsonData; // Assign the GeoJSON data to the ref
      } catch (error) {
        console.error('Error loading countries GeoJSON:', error);
      }
    },

    onGeoJsonAdd(event: any) {
      const layer = event.target;
      layer.setStyle({
        color: 'blue',
        fillColor: 'yellow',
        fillOpacity: 0.4,
      });
    },
  },
});
</script>

<style>
.map-container {
  height: calc(100vh - 50px);
  width: 100%;
}
</style>
