<script>
  export let data;
  import Counter from '$components/Counter.svelte';
</script>
<h1>{data.message}</h1>
<Counter />