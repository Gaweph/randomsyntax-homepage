<script>
  import SocialLinks from "./Social-Links.svelte";
  export let segment;
</script>

<style>
  footer {
    padding: 10px 0px;
    line-height: normal;
    margin-top: 10px;
  }

  .site-sub-title {
    display: block;
    font-weight: 700;
    margin: 0px 10px;
    padding: 10px;
    font-size: 1rem;
  }

  .social-container {
    float: right;
    padding-right: 10px;
    padding-top: 5px;
  }
</style>

<footer>
  <div class="container">
    <div class="social-container">
      <SocialLinks />
    </div>
    <div class="site-sub-title">
      RandomSyntax.net
      <!-- <span style="font-weight: bolder;">Gareth</span>
      <span style="font-weight: bolder;">Williams</span> -->
    </div>
  </div>
</footer>
