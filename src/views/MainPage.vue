<template>
  <div>
    <Header />
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
