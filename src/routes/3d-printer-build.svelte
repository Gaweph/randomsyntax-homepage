<script>
  import Gallery from "../components/Gallery.svelte";
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import Callout from "../components/Callout.svelte";
  import LinkExternal from "../components/Link-External.svelte";

  const title = "3D Printer 1 - Build";
  const tags = ["hardware", "build"];
  const projects = ["3D-Printer"];
  const date = "2014-01-23";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  <PostSection title="Background">
    I was inspired to create this printer after seeing a very informative video
    by
    <LinkExternal href="http://richrap.blogspot.co.uk/">
      Richard Horne
    </LinkExternal>
    on his
    <LinkExternal
      href="http://richrap.blogspot.co.uk/2013/07/3dr-reprap-delta-printer-part-1-release.html">
      3DR RepRap Delta Printer
    </LinkExternal>
    (his tutorial series on the printer is very helpful and covers all aspects
    of the build process).
    <br />
    The printer is a Delta printer (a design made famous by
    <LinkExternal href="https://github.com/jcrocholl">jcrocholl</LinkExternal>
    and his
    <LinkExternal href="https://github.com/jcrocholl/rostock">
      Rostock
    </LinkExternal>
    printer.
    <Callout title="Links">

      <LinkExternal
        href="https://github.com/RichRap/MARLIN_FIRMWARE_for_3DR_V2">
        RichRap 3DR Firmware
      </LinkExternal>
      <br />
      <LinkExternal
        href="http://richrap.blogspot.co.uk/2013/07/3dr-reprap-delta-printer-part-1-release.html">
        Assembly Tutorial Series
      </LinkExternal>

    </Callout>

  </PostSection>

  <PostSection title="Photos">
    <Gallery
      images={['/blog/content/images/3d-printer-build/Electronics1.jpg', '/blog/content/images/3d-printer-build/Electronics2.jpg', '/blog/content/images/3d-printer-build/Electronics3.jpg', '/blog/content/images/3d-printer-build/base.jpg', '/blog/content/images/3d-printer-build/base_with_alu_extrusions.jpg', '/blog/content/images/3d-printer-build/Base_alu_closeup.jpg', '/blog/content/images/3d-printer-build/base_top_carriage.jpg', '/blog/content/images/3d-printer-build/base_top_carriage2.jpg', '/blog/content/images/3d-printer-build/carriage.jpg', '/blog/content/images/3d-printer-build/carriage_with_wire.jpg', '/blog/content/images/3d-printer-build/axis_motors.jpg', '/blog/content/images/3d-printer-build/axis carriage2.jpg', '/blog/content/images/3d-printer-build/axis_carriage_3.jpg', '/blog/content/images/3d-printer-build/hotend.jpg', '/blog/content/images/3d-printer-build/readytoprint.jpg']} />

  </PostSection>

</PostContents>
