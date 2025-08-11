<script setup>
// Importa as funções 'ref' e 'computed' da biblioteca do Vue.
import { ref, computed } from "vue";
import NumberInput from "./components/NumberInput.vue";
import OperationSelect from "./components/OperationSelect.vue";

// --- Estado Reativo ---
// Declara as variáveis reativas que irão guardar os valores dos inputs e da operação.
// 'ref' torna estas variáveis reativas, o que significa que o Vue irá atualizar
// o template automaticamente sempre que os seus valores mudarem.
const numero1 = ref(0);
const numero2 = ref(0);
const operacao = ref("soma");

// --- Propriedade Computada ---
// 'computed' cria uma propriedade reativa cujo valor é derivado de outras
// propriedades reativas. É recalculada automaticamente sempre que uma das suas
// dependências (numero1, numero2, operacao) muda. É o equivalente ao useMemo do React.
const resultado = computed(() => {
  // Para aceder ao valor de uma 'ref' dentro do script, usamos .value
  const n1 = numero1.value;
  const n2 = numero2.value;

  // Tratamento para evitar a divisão por zero.
  if (operacao.value === "divisao" && n2 === 0) {
    return "Erro: Divisão por zero";
  }

  let valor;
  // O switch determina qual operação matemática será executada.
  switch (operacao.value) {
    case "soma":
      valor = n1 + n2;
      break;
    case "subtracao":
      valor = n1 - n2;
      break;
    case "multiplicacao":
      valor = n1 * n2;
      break;
    case "divisao":
      valor = n1 / n2;
      break;
    default:
      valor = 0;
  }
  // Retorna a string formatada para ser exibida no template.
  // toFixed(2) formata o número para ter sempre duas casas decimais.
  return `Resultado: ${valor.toFixed(2)}`;
});
</script>

<template>
  <!-- 
    Este é o template principal da aplicação.
    As classes utilizadas são do Bootstrap 5 para criar o layout e o estilo.
    'd-flex', 'align-items-center', 'justify-content-center', 'vh-100' centram
    o conteúdo vertical e horizontalmente na página.
  -->
  <main
    class="d-flex align-items-center justify-content-center vh-100 bg-black p-4"
  >
    <div
      class="calculator-card border border-2 border-warning rounded-3 p-4 p-md-5 shadow-lg"
      :style="{ boxShadow: '0 0 20px rgba(240, 123, 0, 0.5)' }"
    >
      <h1
        class="h1 fw-bold text-center mb-4 text-warning"
        :style="{ textShadow: '0 0 10px rgba(240, 123, 0, 0.7)' }"
      >
        CALCULADORA GALÁCTICA
      </h1>

      <!-- 
        A diretiva 'v-model.number' cria uma ligação de dados bidirecional (two-way data binding)
        entre o input e a variável reativa 'numero1'. O modificador '.number'
        garante que o valor seja tratado como um número.
      -->
      <div class="mb-3">
        <NumberInput v-model="numero1" placeholder="Primeiro número" />
      </div>

      <div class="mb-3">
        <OperationSelect v-model="operacao" />
      </div>

      <div class="mb-3">
        <NumberInput v-model="numero2" placeholder="Segundo número" />
      </div>

      <!-- 
        A sintaxe de interpolação {{ resultado }} exibe o valor da propriedade
        computada 'resultado'. O Vue irá atualizar este valor automaticamente.
      -->
      <div
        class="mt-4 p-4 bg-dark border border-2 border-danger rounded text-center h2 fw-bold"
        :style="{
          fontFamily: 'Orbitron, monospace',
          boxShadow: '0 0 15px rgba(211, 47, 47, 0.6)',
        }"
      >
        <span class="text-warning">
          {{ resultado }}
        </span>
      </div>
    </div>
  </main>
</template>

<style>
/* Estes são estilos globais ou específicos do componente que complementam o Bootstrap.
  Num projeto maior, estes poderiam ser movidos para um arquivo CSS separado.
*/

/* Importa a fonte Orbitron do Google Fonts. */
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");

/* Define a fonte principal e o tema escuro para a aplicação. */
#app {
  font-family: "Orbitron", sans-serif;
  background-color: #000;
  color: #fff;
}

/* Define uma largura máxima para o card da calculadora. */
.calculator-card {
  max-width: 448px;
  width: 100%;
  background-color: #212529;
}

/* Personaliza os inputs para terem a borda laranja e foco vermelho. */
.form-control,
.form-select {
  background-color: #343a40;
  color: #fff;
  border-color: #ffc107; /* Cor 'warning' do Bootstrap */
}

.form-control:focus,
.form-select:focus {
  background-color: #343a40;
  color: #fff;
  border-color: #dc3545; /* Cor 'danger' do Bootstrap */
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

/* Garante que o texto do placeholder (se houver) seja visível no fundo escuro. */
.form-control::placeholder {
  color: #6c757d;
}

/* Melhora a aparência do dropdown no tema escuro. */
.form-select option {
  background: #343a40;
  color: #fff;
}
</style>
