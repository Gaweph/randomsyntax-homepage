<script>
  import {
    setQueryParamWithHistory,
    deleteQueryParam,
    getQueryParam
  } from "../helpers/window-helper";

  import { onMount } from "svelte";
  export let reloadSlotOnToggle = true;

  onMount(() => {
    overlay = getQueryParam("full-screen") == "1";

    window.addEventListener("popstate", event => {
      // console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
      overlay = getQueryParam("full-screen") == "1";
    });
  });
  let overlay = false;
  let reload = false;
  function toggleFullScreen() {
    overlay = !overlay;
    if (overlay) {
      setQueryParamWithHistory("full-screen", "1");
    } else {
      deleteQueryParam("full-screen");
    }
    if (reloadSlotOnToggle) {
      reload = !reload;
    }
  }
</script>

<style>
  .fullscreen-wrapper {
    position: relative;
    width: 100%;
    height: 250px;
    /* background-color: red; */
  }
  .fullscreen-wrapper.overlay {
    background-color: #f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  .overlay-button.overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 1001;
  }
</style>

<div class="fullscreen-wrapper" class:overlay>
  <!-- reload slot when toggled -->
  {#if reload}
    <slot />
  {:else}
    <slot />
  {/if}
</div>
<button class="overlay-button" class:overlay on:click={toggleFullScreen}>
  FULL SCREEN MODE
</button>
