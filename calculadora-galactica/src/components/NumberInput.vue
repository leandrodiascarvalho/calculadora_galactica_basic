<template>
  <div class="mb-3">
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.valueAsNumber)"
      class="form-control form-control-lg text-center"
      :placeholder="placeholder"
      style="font-family: 'Orbitron', monospace"
    />
  </div>
</template>

<script setup>
// Props para valor e placeholder
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
/* Estilos específicos do input, se necessário */
</style>
