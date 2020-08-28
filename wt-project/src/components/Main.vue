<template>
    <div class="container_wrap">
        <weather-card v-for="city in listCity" v-bind:city='city' v-bind:key="city.id" />
        <add-weather-card/>
    </div>
</template>

<script>
import WeatherCard from '@/components/WeatherCard'
import AddWeatherCard from '@/components/AddWeatherCard'
export default {

    components: {
        WeatherCard, AddWeatherCard
    },

    computed: {
        listCity () {
            return this.$store.state.weather.listCity;
        }
    }
}
</script>

<style>
.weather__card {
  float: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  justify-items: center;
  padding: 1rem;
  margin: 2rem;
  width: 18rem;
  height: 30rem;
  cursor: pointer;
  background-color: white;
  border-radius: 1.75rem;
  animation: 1.25s ease-in-out 0ms 1 fadein;
}
</style>
