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

<style>
  .info{
    flex: 1;
    display: flex;
    border-radius: 8px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15)
    
  }

  .info-icon{
    display: flex;
    align-items: center;
  }

  .info-icon i{
    font-size: 5rem;
  }

  .info-info{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .info-title{
    font-size: 1.2rem;
  }

  .info-value{
    font-size: 3rem;
  }
</style>
