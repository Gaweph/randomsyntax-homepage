<script>
  import Gallery from "$components/Gallery.svelte";
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import Callout from "$components/Callout.svelte";
  import LinkExternal from "$components/Link-External.svelte";
  import Vimeo from "$components/Vimeo.svelte";

  const title = "3D Printer 3 - Calibration";
  const tags = ["hardware", "build"];
  const projects = ["3D-Printer"];
  const date = "2014-02-18";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>

  <PostSection>

    <p>Here is a video of my printer doing a calibration.</p>
    <Vimeo id="86994938" title="Printing calibration cube" />

    <p>
      Calibrating the print head height is proving to be quite difficult. I
      found a good article on
      <LinkExternal
        href="http://minow.blogspot.co.uk/index.html#4918805519571907051">
        Calibrating a Delta 3D Printer
      </LinkExternal>
      by Minow.
    </p>
    <Callout title="Delta Printers Only">
      <p>
        This calibration process is for a delta style printers only (like my
        3DR)
      </p>
    </Callout>

    <p>As you can see the prints are getting significantly better.</p>

    <!-- Gallery -->
    <Gallery
      images={['/content/blog/images/3d-printer-calibration/calibration_a.jpg', '/content/blog/images/3d-printer-calibration/calibration_b.jpg', '/content/blog/images/3d-printer-calibration/calibration_c.jpg']} />

    <p>Its not quite there, but I would say its close.</p>
  </PostSection>
</PostContents>
