<template>
  <div>
    <left></left>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12"> </v-col>

        <v-col class="mb-4">
          <div class="image"></div>

          <h1 class="update">
            <div class="logo"></div>
            업데이트 정보
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Left from "../components/Left.vue";

export default {
  name: "main",
  data() {
    return {
      title: "INVENTORY MANAGER",
    };
  },
  components: {
    Left,
  },
};
</script>

<style scoped>
.image {
  position: relative;
  text-align: center;
}
.update {
  position: relative;
  text-align: left;
  margin-top: 20px;
}
.table {
  position: relative;
  margin-left: 300px;
  margin-top: 20px;
  vertical-align: middle;
}
.col1 {
  width: 400px;
  position: relative;
}

.col2 {
  width: 100px;
}
</style>
