<script context="module" lang="ts">
  declare const p5: any;
</script>
<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  // export let src;
  export let sketch;
  export let id = "sketchXX";
  export let p5Version = "1.0.0";
  export let width = "100%";
  export let height = "100%";

  let myp5 = null;

  function sketchStarted() {
    var div = document.getElementById(id);
    for(var i = 0; i < div.childNodes.length; i++) {
      var foundCanvas = div.children[i].className == "p5Canvas";
      if(foundCanvas) {
        return true;
      }
    }
    return false;
  }

  function tryStartSketch() {
    try {
      if(p5 && sketch && !sketchStarted()) {
        myp5 = new p5(sketch, id);
      }
    } catch(ex) {
      // catch gracefully
    }
  }

  onMount(() => {
    var interval = setInterval(() => {
      tryStartSketch();
      var started = sketchStarted();
      if(started) {
        clearInterval(interval);
      }
    }, 100);
  });

  onDestroy(() => {
    if (myp5 != null && myp5.remove) {
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
  <script src="/content/blog/js/p5.{p5Version}.min.js"></script>
</svelte:head>
<div {id} style="position: relative; width: {width}; height: {height}" />
