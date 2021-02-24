<script>
  export let images = [];
  export let useThumbnail = true;

  const getThumbnailPath = image => {
    if (!useThumbnail) {
      return image;
    }

    var position = image.lastIndexOf(".");
    return [image.slice(0, position), "_thumb", image.slice(position)].join("");
  };

  const getImageAlt = image => {
    var filename = image.split("/").pop();
    return filename.slice(0, filename.lastIndexOf("."));
  };

  let wrapper;
  function lightBoxLoaded() {
    var lightbox = new SimpleLightbox(wrapper.getElementsByTagName("a"), {
      /* options */
    });
  }
</script>

<style>
  a,
  a:hover,
  a:focus {
    border: none;
  }

  img {
    max-width: 200px;
  }

  @media (max-width: 750px) {
    img {
      max-width: 270px;
    }
  }

  @media (max-width: 500px) {
    img {
      max-width: 100%;
      width: inherit;
    }
  }

  .solo-image img {
    max-width: 100%;
    width: inherit !important;
  }
</style>

<svelte:head>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.2.1/simple-lightbox.min.js"
    integrity="sha256-XC8w+g7s6jfpD0qiG2Goj2wuZ0747UaT/E0Nf2ulmew="
    crossorigin="anonymous"
    on:load={lightBoxLoaded}>

  </script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.2.1/simple-lightbox.min.css"
    integrity="sha256-UZP8fxAiI5/RA82wRNC5aN+ebMcpGxJCnDzlKzuIVXY="
    crossorigin="anonymous" />
</svelte:head>

<div bind:this={wrapper} class:solo-image={images.length === 1}>
  {#each images as image}
    <a href={image}>
      <img alt={getImageAlt(image)} src={getThumbnailPath(image)} />
    </a>
  {/each}
</div>
