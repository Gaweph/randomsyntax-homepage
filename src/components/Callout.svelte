<script>
  export let title = "";
</script>

<style>
  .bs-callout {
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 3px;
  }
  .bs-callout h3 {
    margin-top: 0;
    margin-bottom: 5px;
  }
  .bs-callout p:last-child {
    margin-bottom: 0;
  }
  .bs-callout code {
    border-radius: 3px;
  }
  .bs-callout + .bs-callout {
    margin-top: -5px;
  }
</style>

<div class="bs-callout bs-callout-primary">
  <h3>{title}</h3>
  <slot />
</div>
