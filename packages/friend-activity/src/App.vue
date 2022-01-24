<template>
<div :class="$style.wrapper">
  <div :class="$style.header">
    <span>Friend activity</span>
  </div>
  <p :class="$style.text">Let friends and followers on Spotify see what you're listening to.</p>
  <div>
    <list-tile />
    <list-tile />
    <list-tile />
  </div>
  <p :class="$style.text">Go to settings > Social and enable 'Share my listening activity on Spotify'. You can turn this off at any time.</p>
  <div :class="$style.btnWrapper">
    <my-button />
  </div>
</div>
</template>

<script>
import ListTile from './components/ListTile.vue'
import MyButton from './components/MyButton.vue'
export default {
  components: { ListTile, MyButton},
}
</script>

<style module>
.wrapper {
  background: black;
  height: 100%;
  width: 100%;
  color: white;
  padding: 1rem;
  box-sizing: border-box;
}
.header {
  margin-bottom: 1rem;
  font-weight: bold;
}
.btnWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.text {
  color: white;
  margin: 1.25rem 0;
}
</style>