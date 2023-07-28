<template>
  <div>
    <Header />
    <h1>About</h1>
    <div class="authors">
      <h2>Site Authors</h2>
      <p>Author 1</p>
      <p>Author 2</p>
    </div>
    <div class="sources">
      <h2>Sources</h2>
      <ul>
        <li>Source 1</li>
        <li>Source 2</li>
        <!-- Add more sources as needed -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/TheHeader.vue';

export default defineComponent({
  name: 'AboutPage',
  components: {
    Header,
  },
});
</script>

<style>
.authors, .sources {
  margin-top: 20px;
}
</style>
