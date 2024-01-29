<template>
  <!-- BANNER -->
  <Banner />

  <!-- TRUSTED BY -->
  <Client />

  <!-- MAIN CONTENT -->
  <MainContent />

  <!-- BUTTON PRACTICE -->
  <!-- <div class="myContainer flex gap-4">
    <ButtonV1
      title="Filled"
      :variant="'filled'" 
      color="primary"
      shape="pill"
    ></ButtonV1>

    <ButtonV1
      title="Filled"
      variant="filled"
      color="secondary"
      shape="pill"
      class=""
    ></ButtonV1>

    <ButtonV1
      title="Outline"
      variant="outline"
      color="primary"
      shape="pill"
      class=""
    ></ButtonV1>

    <ButtonV1
      title="Outline"
      variant="outline"
      color="secondary"
      shape="pill"
      class=""
    ></ButtonV1>

    <ButtonV1
      title="Translucent"
      variant="translucent"
      color="primary"
      shape="pill"
      class=""
    ></ButtonV1>

    <ButtonV1
      title="Translucent"
      variant="translucent"
      color="secondary"
      shape="pill"
      class=""
    ></ButtonV1>
  </div> -->
</template>

<!-- SCRIPT -->
<script setup>
import Banner from "../sections/home/Banner.vue";
import Client from "../sections/home/Client.vue";
import MainContent from "../sections/home/MainContent.vue";
import ButtonV1 from "../components/Button/ButtonV1.vue";
import Button from "../components/Button/Button.vue";
</script>
