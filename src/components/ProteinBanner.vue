<script setup>
    import { cards } from '../assets/js/homeCard';

</script>

<template>
    <section>
        <div class="container">
            <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-5">
                <div class="col-12" v-for="item in cards" :key="item.id">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">
                                <span v-if="item.en === 'meat'">🍗</span>
                                <span v-else-if="item.en === 'rice'">🍱</span>
                                <span v-else-if="item.en === 'vegetable'">🥬</span>
                                <span v-else-if="item.en === 'potato'">🍠</span>
                                <span v-else-if="item.en === 'garlic'">🧄</span>
                                <span v-else-if="item.en === 'mushroom'">🍄</span>
                                {{ item.name }}
                            </h5>
                            <p class="card-text">{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '../scss/style.scss';

    .card {
  
        .card-title {
            color: $red;
            @include font(2);
        }
        .card-text {
            @include font(1);
            color: #7B7B7B;
        }
    }

</style>
