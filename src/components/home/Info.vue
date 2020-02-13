<template>
  <div class="info">
    <div class="info-icon">
      <i :class="icon" :style="style"></i>
    </div>
    <div class="info-info">
      <span class="info-title">{{ title }}</span>
      <span class="info-value">{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: ['title', 'value', 'icon', 'color'],
  computed: {
    style() {
      return 'color: ' + (this.color || '#000')
    }
  }
}
</script>

<style></style>
