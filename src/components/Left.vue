<template>
  <div>
    <transition name="toggle">
      <div class="left" v-if="fade">
        <ul>
          <li id="logo">
            <div>메이플</div>
          </li>
          <li v-for="list in linklist" v-bind:key="list">
            <router-link :to="list.link">{{ list.content }}</router-link>
          </li>
        </ul>
      </div>
    </transition>

    <img id="left_btn" @click="enter" src="../assets/left_btn.png" />
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "left",
  data() {
    return {
      fade: false,
      linklist: [
        { content: "메인", link: "/" },
        { content: "캐릭터", link: "/cha" },
        { content: "사냥터", link: "/hunt" },
      ],
    };
  },
  methods: {
    enter: function () {
      this.fade = !this.fade;
    },
    resize: function () {
      $(window).resize(function () {
        var height = window.innerHeight / 2 + "px";
        $("#left_btn").css({ top: height });
      });
    },
  },
  created() {
    this.resize();
  },
};
</script>
<style>
.cal {
  font-size: 30px;
}
a {
  color: black;
}
a:hover {
  color: #ffe08c;
}
.left {
  position: relative;
  top: 0px;
  width: 250px;
  height: 1000px;
  background: #ffe08c;
  padding: 40px 0;
  float: left;
}
.toggle-enter-active,
.toggle-leave-active {
  transition: all 1s;
}
.toggle-enter,
.toggle-leave-to {
  left: -250px;
  width: 0px;
}
.toggle-enter-to,
.toggle-leave {
  left: 0px;
  width: 250px;
}
.left ul {
  padding: 0 30px;
  position: fixed;
}
.left ul li {
  font-size: 25px;
  height: 75px;
}
.left ul li#logo {
  font-family: "Passion One", cursive;
  font-size: 50px;
  height: 170px;
}
.left ul li#logo div {
  line-height: 0.8;
}
.left ul li#company {
  font-size: 16px;
  margin-top: 150px;
}
#left_btn {
  position: fixed;
  top: 495px;
  left: -110px;
  cursor: pointer;
}
</style>
