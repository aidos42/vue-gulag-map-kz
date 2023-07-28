<template>
  <div>
    <Header />
    <h1>Articles</h1>
    <!-- Add your articles content here -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/TheHeader.vue';

export default defineComponent({
  name: 'ArticlesPage',
  components: {
    Header,
  },
});
</script>
