<script>
  import Gallery from "$components/Gallery.svelte";
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import LinkExternal from "$components/Link-External.svelte";

  const title = "3D Printer 2 - Leaking";
  const tags = ["hardware", "build"];
  const projects = ["3D-Printer"];
  const date = "2014-01-31";

  const photos_toohot = [
    "/content/blog/images/3d-printer-leaking/leaking.jpg",
    "/content/blog/images/3d-printer-leaking/disasembly2.jpg",
    "/content/blog/images/3d-printer-leaking/disasembly.jpg"
  ];

  const photos_back_in_business = [
    "/content/blog/images/3d-printer-leaking/cleaned1.jpg",
    "/content/blog/images/3d-printer-leaking/cleaned2.jpg"
  ];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>

  <PostSection title="Too Hot">

    <p>
      While trying to calibrate my hot end I set my extruder speed too high
      which meant that the plastic was being pushed into the hot end faster than
      it could be extruded.
    </p>

    <Gallery images={photos_toohot} />
  </PostSection>

  <PostSection title="Back in business">
    <p>
      After taking it apart I found that it was due to the inner
      <LinkExternal href="http://reprap.org/wiki/PLA">PLA</LinkExternal>
      of the
      <LinkExternal href="http://reprap.org/wiki/Jhead">JHead</LinkExternal>
      slipping a bit inside. I have now reconstructed the hot end and its clean
      and tight.
    </p>
    <Gallery images={photos_back_in_business} />
  </PostSection>
</PostContents>
