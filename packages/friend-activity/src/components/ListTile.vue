<template>
<div :class="$style.listTile">
  <div :class="$style.listTileCircle"></div>
  <div :class="$style.listTileRows">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>  
</template>

<script>
export default {

}
</script>

<style module>
.listTile {
  display: flex;
  margin-bottom: 1.25rem;
}
.listTileCircle {
  background: #ccc;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 0.75rem;
}
.listTileRows {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.listTileRows > span {
  background: #ccc;
  border-radius: 50px;
  height: 0.5rem;
  margin-bottom: 0.25rem;
}
.listTileRows > span:first-child {
  width: 120px;
}
.listTileRows > span:nth-child(2) {
  width: 100px;
}
.listTileRows > span:nth-child(3) {
  width: 100px;
}
</style>