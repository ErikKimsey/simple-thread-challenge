<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ReimbursementProject from './components/ReimbursementProject.vue'
import { PROJECT_DATA } from './project_data';
import { InitReimbursementCalculation } from "./ReimbursementProject";


let HelloWorldText = " YO YO YO YO Y O"
let TESTTEST = "TEST TEST"

InitReimbursementCalculation();







</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld :msg=HelloWorldText />
      <ReimbursementProject :msg=TESTTEST />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
