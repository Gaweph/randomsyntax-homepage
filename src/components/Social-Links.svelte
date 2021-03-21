<script>
  import Icon from "$components/Icon.svelte";
  import {
    faGithub as faGithub,
     faTwitter as faTwitter,
     faPinterest as faPinterest
    } from "@fortawesome/free-brands-svg-icons";
</script>

<style>
  a,
  a:hover,
  a:focus {
    /* text-decoration: none; */
    border: none;
  }

  .social-container {
    font-size: 1.5em;
  }
  .social-container a {
    color: #ccc;
  }

  .btn-twitter:hover,
  .btn-twitter:focus {
    color: #1583d7;
  }
  .btn-github:hover,
  .btn-github:focus {
    color: #191919;
  }
  .btn-pinterest:hover,
  .btn-pinterest:focus {
    color: #cb2027;
  }
</style>

<div class="social-container">

  <a
    href="https://github.com/Gaweph"
    class="btn-github"
    target="_blank"
    rel="external">
    <Icon icon={faGithub} />
  </a>
  <!-- <a
    href="https://twitter.com/Gaweph"
    class="btn-twitter"
    target="_blank"
    rel="external">
    <Icon icon={faTwitter} />
  </a> -->
  <a
    href="https://uk.pinterest.com/gaweph"
    class="btn-pinterest"
    target="_blank"
    rel="external">
    <Icon icon={faPinterest} />
  </a>

</div>
