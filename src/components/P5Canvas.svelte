<script>
  import { onMount, onDestroy } from "svelte";
  // export let src;
  export let sketch;
  export let id = "sketch";
  export let p5Version = "1.0.0";
  export let width = "100%";
  export let height = "100%";

  let myp5 = {};
  function p5Loaded() {
    myp5 = new p5(sketch, id);
  }

  onDestroy(() => {
    if (myp5.remove) {
      myp5.remove();
    }
  });
</script>

<style>
  div {
    margin: 0px 0px;
  }
</style>

<svelte:head>
  <script src="/content/blog/js/p5.{p5Version}.min.js" on:load={p5Loaded}>

  </script>
</svelte:head>

<div {id} style="position: relative; width: {width}; height: {height}" />
