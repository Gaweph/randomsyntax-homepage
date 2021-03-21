<script>
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";

  export let segment;
</script>

<style>
  @media (min-width: 750px) {
    main {
    padding: 10px;
  }
}
</style>

<Header {segment} />

<main class="container">
  <slot />
</main>

<Footer {segment} />
