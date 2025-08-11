<template>
  <div class="mb-3">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="form-select form-select-lg text-center"
      style="font-family: 'Orbitron', monospace"
    >
      <option value="soma">Soma (+)</option>
      <option value="subtracao">Subtração (-)</option>
      <option value="multiplicacao">Multiplicação (*)</option>
      <option value="divisao">Divisão (/)</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Estilos específicos do select, se necessário */
</style>
