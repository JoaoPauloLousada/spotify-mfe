<template>
  <div :class="$style.wrapper">
    <h2 :class="$style.header">Featured playlists</h2>
    <div :class="$style.playlists">
      <div v-for="(item, i) in playlists" :key="i" :class="$style.playlistsItem">
        <img :src="item.images[0].url" alt="" :class="$style.playlistsItemImg">
        <p :class="$style.title">{{item.name}}</p>
        <p :class="$style.description">{{item.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import SpotifyWebApi from 'spotify-web-api-js';
import Auth from './domain/auth';

const spotifyApi = new SpotifyWebApi();
console.log("🚀 ~ file: App.vue ~ line 13 ~ spotifyApi", spotifyApi)

export default {
  name: 'App',
  created() {
    this.getFeaturedPlaylists();
  },
  data() {
    return {
      playlists: null,
    }
  },
  methods: {
    getFeaturedPlaylists() {
      spotifyApi.getFeaturedPlaylists()
        .then(res => this.playlists = res.playlists.items)
        .catch(error => console.log({error}))
    }
  },
}
</script>

<style module>
.wrapper {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;  
}
.wrapper::-webkit-scrollbar {
  display: none;
}
.playlists {
  display: inline-flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
}
.playlistsItem {
  width: 250px;  
  flex-grow: 1;
  cursor: pointer;
  background-color: #282828;
  transition: all 350ms;
  color: white;
  padding: 0.75rem;
  border-radius: 0.25rem;
}
.playlistsItem:hover {
  background-color: hsl(0, 0%, 30%);
}
.playlistsItemImg {
  width: 100%;
}
.title, .description {
  margin: 0;
}
.title {
  font-weight: bold;
  font-size: 1.125rem;
  margin-top: 1rem;
}
.description {
  color: hsl(0, 0%, 66%);
}
.header {
  color: white;
  font-weight: bold;
  padding: 1rem 0;
}
</style>