<script>
  import { onMount, onDestroy } from "svelte";
  // export let src;
  export let sketchSrc;
  export let p5Version = "1.0.0";
  export let id = "sketch";
  export let width = "100%";
  export let height = "500px";

  let myp5 = {};
  const filesToLoad = 2;
  let noOfScriptsLoaded = 0;
  function scriptLoaded() {
    noOfScriptsLoaded++;
    if (noOfScriptsLoaded >= filesToLoad) {
      myp5 = new p5(sketch, id);
    }
  }
  onDestroy(() => {
    if (myp5.remove) {
      myp5.remove();
    }
  });
</script>

<style>
  div {
    margin: 10px 0px;
  }
</style>

<!-- prettier-ignore-start -->
<svelte:head>

  {#if parseInt(p5Version, 10) >= 1}
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/{p5Version}/p5.min.js"
      on:load={scriptLoaded}>

    </script>
  {:else}
    <script src="/blog/content/js/p5.{p5Version}.min.js" on:load={scriptLoaded}>

    </script>
  {/if}
  <script src={sketchSrc} on:load={scriptLoaded}>

  </script>
</svelte:head>
<!-- prettier-ignore-end -->

<div {id} style="position: relative; width: {width}; height: {height}" />
