<script setup>
import ReimbursementProject from './components/ReimbursementProject.vue'
import { InitReimbursementCalculation } from './ReimbursementProject'
import { PROJECT_DATA } from './project_data'

let ERIK_KIMSEY_HEADER = 'Erik Kimsey : Frontend Engineer'
let SIMPLE_THREAD_HEADER = 'Simple Thread : Technical Challenge'
</script>

<template>
    <header>
        <div class="wrapper">
            <HelloWorld :msg="ERIK_KIMSEY_HEADER" />
            <ReimbursementProject :msg="SIMPLE_THREAD_HEADER" />
            <form v-on:submit.prevent="addItem">
                <p>Add item</p>
                <p>Item name: <input type="date" required /></p>
                <p>How many: <input type="number" /></p>
                <div>
                    <button type="submit">Add item</button>
                    <button type="submit">Add item</button>
                </div>
            </form>
        </div>
    </header>
    <!-- <main>
        <TheWelcome />
    </main> -->
</template>

<style scoped>
header {
    display: flex;
    flex-flow: column;
    line-height: 1.5;
    width: 100vw;
}

.wrapper {
    width: 50%;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        flex-flow: column;
    }

    header .wrapper {
        width: 50%;
        display: flex;
        place-items: center;
        flex-wrap: wrap;
    }
}

@media (min-width: 360px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
        align-items: flex-start;
    }

    header .wrapper {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
    }
}
</style>
