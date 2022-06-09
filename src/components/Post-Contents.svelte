<script>
  import { fly } from "svelte/transition";
</script>

<style>
  div {
    margin: 0px;
    padding: 10px;
    position: relative;
  }
  
  @media (min-width: 750px) {
      div {
      margin: 10px;
      padding: 20px;
    }
  }
</style>

<div class="post-contents" transition:fly={{ x: -200, duration: 400 }}>
  <slot />
</div>
