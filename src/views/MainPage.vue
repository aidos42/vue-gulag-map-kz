<template>
  <div>
    <Header />
    <h1>Карта исправительно-трудовых лагерей (ГУЛАГ) на территории Казахстана</h1>
    <section class="legend">
     <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png" alt="Фиолетовая метка" width="25" height="41" class="marker-image"><span class="marker-description"> — численность заключенных свыше 10 тысяч человек.</span>
      <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" alt="Красная метка" width="25" height="41" class="marker-image"><span class="marker-description"> — численность заключенных от 1 до 10 тысяч человек.</span>
      <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png" alt="Желтая метка" width="25" height="41" class="marker-image"><span class="marker-description"> — численность заключенных до 1 тысячи человек.</span>
    </section>
    <InteractiveMap />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/TheHeader.vue';
import InteractiveMap from '@/components/InteractiveMap.vue';

export default defineComponent({
  name: 'MainPage',
  components: {
    Header,
    InteractiveMap,
  },
});
</script>

<style>
h1 {
  text-align: center;
  color: #cccccc;
  margin: 15px;
  padding: 15px;
}
.legend {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.marker-image {
  padding: 0px 0px 10px 10px;
}
.marker-description {
  color: #cccccc;
  padding: 0px 0px 10px 10px;
}
</style>
