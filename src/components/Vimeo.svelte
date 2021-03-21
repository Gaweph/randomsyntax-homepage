<script>
  export let id;
  export let title;
</script>

<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
</style>

<div style="max-width: 700px">
  <br />
  <div class="video-container">
    <iframe
      src="//player.vimeo.com/video/{id}"
      frameborder="0"
      allowfullscreen=""
      {title} />
  </div>
  <br />
</div>
