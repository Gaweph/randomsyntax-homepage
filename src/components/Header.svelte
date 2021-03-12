<script>
  export let segment;

  // import Icon from "$components/Icon.svelte";
  // import faRocket from "@fortawesome/free-solid-svg-icons";
</script>

<style>
  header {
    padding: 10px 0px;
    line-height: normal;
  }

  img {
    height: 60px;
  }

  .site-title {
    display: block;
    font-weight: 700;
    margin: 0px 10px;
    font-size: 1rem;
  }
  .site-title {
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: inherit;
  }
  a,
  a:hover,
  a:focus {
    border: none;
  }

  @media (min-width: 400px) {
    .site-title {
      font-size: 2rem;
    }
    img {
      height: 100px;
    }
  }
</style>

<header id="masthead" role="banner">
  <nav>
    <div class="container">
      <div class="site-title">
        <a class="navbar-bg" rel="prefetch" href="/">
          <img src="/content/blog/images/logo_name.svg" alt="Gareth Williams" />
        </a>
      </div>
    </div>
  </nav>
</header>
