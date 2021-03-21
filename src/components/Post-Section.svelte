<script>
  export let title = "";
</script>

{#if title !== ''}
  <h2>{title}</h2>
{/if}
<slot />
