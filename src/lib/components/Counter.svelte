<script>
  let count = $state(0);

  const double = $derived(count * 2);

  const inc = () => count++;

  $effect(() => {
    console.log("Counter updated:", count);
  });
</script>

<div class="space-y-2 p-4 bg-white shadow rounded">
  <p class="text-lg font-semibold">Count: {count}</p>
  <p class="text-sm text-gray-500">Double: {double}</p>
  <button
    class="px-3 py-2 bg-blue-600 text-white rounded"
    on:click={inc}
  >
    Increment
  </button>
</div>