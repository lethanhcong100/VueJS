<template>
    <div class="addcity-page">
        <router-link to="/" tag="svg" class="back__button" viewBox="4085 152 98.5 126">
            <defs>
                <svg:style>
                    .a { fill: #2b244d; } .b { fill: rgba(0, 0, 0, 0); } .b, .c { stroke: #fff; stroke-width: 2px; } .c { fill: none; } .d { fill: #fff; font-size: 15px; font-family: SegoeUI, Segoe UI; letter-spacing: 0.4em; }
                </svg:style>
            </defs>
            <g transform="translate(3980)">
                <circle class="a" cx="39" cy="39" r="39" transform="translate(105 152)" />
                <line class="b" x1="80" transform="translate(123.5 190.5)" />
                <line class="b" y1="26" x2="26" transform="translate(123.5 164.5)" />
                <line class="c" x1="26" y1="27" transform="translate(123.5 190.5)" />
                <text class="d" transform="translate(117 274)">
                    <tspan x="0" y="0">BACK</tspan>
                </text>
            </g>
        </router-link>
        <div class="addcity-page__title">

        </div>
        <div class="addcity-page__input">

            <input id="addcity-page__input_text" v-model="city" v-on:input="getSuggestCity" type="text" placeholder="Type your city want to add">

            <div class="addcity-page__suggest" v-show="showSuggest">
                <ul>
                    <li v-for="suggestCity in suggestCitis" :key="suggestCity.id">
                        {{suggestCity}}
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            city: '',
            suggestCitis: [],
            showSuggest: false,
        }
    },
    methods: {
        addCityOnClick: function (data) {
            let n = data.indexOf(',');
            let value = '';
            if (n === -1) {
                value = data;
            } else {
                value = data.substring(0, n);
            }
            this.checkCityAvailable(value.toLowerCase());
        },
        getSuggestCity: function () {
            if (this.city === '') {
                this.showSuggest = false;
                return;
            }
            let input = document.getElementById("addcity-page__input_text");
            let vm = this;
            var autocomplete = new google.maps.places.Autocomplete(input);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                vm.addCityOnClick(place.formatted_address);
            });

        },
        addSuggestCity: function (data) {
            for (let i = 0; i < 5; i++) {
                this.suggestCitis[i] = data.predictions[i].description;
            }
        },
        checkCityAvailable: function (data) {
            let vm = this;
            let url = this.$store.state.weather.apiUrl + 'weather?q=' + data + '&units=metric&appid=4c3ffe4d31ca8a3e93716eb5e88d1a12' ;
            axios.get(url)
                .then(response => {
                    vm.$store.dispatch('addCity', data);
                    this.$router.push({ path: '/' });
                })
                .catch(response => {
                    vm.$swal("Cant find this city's weather");
                });
        }
    }

}
</script>


<style>
.back__button {
  position: absolute;
  top: 2rem;
  left: 2.25rem;
  width: 5rem;
  cursor: pointer;
  z-index: 3;
}
.addcity-page {
  margin: auto;
  width: 50%;
  margin-top: 20%;
  /* border: 1px solid black; */
}
.addcity-page__title {
  text-align: center;
  color: white;
  font-size: 30px;
}
.addcity-page__input {
  position: relative;
}
.addcity-page__input input {
  display: inline-block;
  width: 100%;
  height: 50px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  border: 0;
  font-size: 18px;
  padding: 5px;
  margin: 7px 15px;
  text-align: center;
}

.addcity-page__suggest ul {
  list-style-type: none;
}
.addcity-page__suggest ul li:not(:last-child) {
  font-size: 16px;
  margin-bottom: 5px;
}

.pac-container {
  position: absolute;
  width: 100%;
  background-color: white;
}
</style>
