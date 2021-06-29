<template>
  <v-container>
    <left></left>
    <v-row class="text-center">
      <v-col cols="12"> </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <div class="logo"></div>
          캐릭터 정보
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Left from "../components/Left.vue";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Left,
  },
};
</script>

<style>
.table {
  left: 400px;
}
.col1 {
  width: 400px;
}

.col2 {
  width: 100px;
}
</style>
