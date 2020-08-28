<template>
    <div :class="$style.sidebar">
        <div :class="$style.sidebar__profile">
            <div :class="$style.sidebar__avatar">
                <img src="https://pic.chinesefontdesign.com/uploads/2016/09/chinesefontdesign.com_2016-09-12_18-42-23.gif" alt="avatar">
            </div>
            <div :class="$style.sidebar__detail">
                <span :id="$style.sidebar__detail_name">Made by</br>Khong Minh Quan</span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'

export default {
    name: 'sidebar',
    mounted () {
        TweenMax.set(this.$el, {
            x: this.$el.offsetWidth
        })
    },
    computed: {
        open () {
            return this.$store.state.ui.sidebarOpen
        }
    },
    watch: {
        open: function (open) {
            const dX = open ? 0 : this.$el.offsetWidth
            TweenMax.to(this.$el, 0.6, {
                x: dX,
                ease: Power4.easeOut
            })
        }
    }
}
</script>

<style module>
.sidebar {
  z-index: 20;
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  min-height: 100vh;
  max-width: 90vw;
  background-color: var(--accent-color);
}
.sidebar__profile {
  margin-top: 30px;
}
.sidebar__detail {
  text-align: center;
  font-size: 16px;
}
.sidebar__detail span {
  display: block;
}
#sidebar__detail_name {
  font-size: 28px;
  font-weight: 700;
  line-height: 48px;
  color: white;
}
.sidebar__avatar img {
  display: block;
  width: 85%;
  height: 70%;
  border-radius: 50%;
  margin: 15px auto;
}
</style>

