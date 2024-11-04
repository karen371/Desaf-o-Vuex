<script>
export default {
    props: {
        juego: {
            type: Object,
            required: true,
        },
    },
    methods: {
        incrementarStock(codigo) {
            this.$store.dispatch("aumentarStock", codigo);
        },
        decrementarStock(codigo) {
            this.$store.dispatch("disminuirStock", codigo);
        }
    }
}
</script>

<template>
    <div class="btn-group  btn-group-sm" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" @click="incrementarStock(juego.codigo)">+</button>
        <button type="button" class="btn btn-secondary" @click="decrementarStock(juego.codigo)">-</button>
    </div>
</template>