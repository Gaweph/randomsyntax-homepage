<script>
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import Prism from "../components/PrismJS.svelte";
  import Callout from "../components/Callout.svelte";
  import LinkExternal from "../components/Link-External.svelte";
  import PostSection from "../components/Post-Section.svelte";

  const title = "My Boxstarter Script";
  const date = "2016-08-17 21:04:00";
  const tags = ["software", "automation"];
  const projects = [];

</script>

<PostTop {title} {tags} {projects} />

<PostContents>
  <PostSection title="Whats the problem">
    Setting up a new machine is always a bit of a pain. Wouldn't it be nice if
    your machine could just get the software you wanted and install it for you.
  </PostSection>

  <PostSection title="Welcome BoxStarter">
    <LinkExternal href="http://boxstarter.org/">BoxStarter.org</LinkExternal>
    can install all of your software out with a single command.
    <Prism
      language="powershell"
      code={`
START
http://boxstarter.org/package/nr/url?URL_TO_YOUR_BOXSTARTER_SCRIPT.ps1
`} />

  </PostSection>

  <PostSection title="My Script">
    My current
    <strong>Home Development Script</strong>
    can be found at my
    <LinkExternal
      href="https://raw.githubusercontent.com/Gaweph/Boxstarter-scripts/master/Developer-Machine.ps1">
      GitHub Repository
    </LinkExternal>
    Here it is at the time of writing this post:
    <Prism
      language="powershell"
      code={`
# Boxstarter options
$Boxstarter.RebootOk=$true # Allow reboots?
$Boxstarter.NoPassword=$false # Is this a machine with no login password?
$Boxstarter.AutoLogin=$true # Save my password securely and auto-login after a reboot
# Basic setup
Update-ExecutionPolicy Unrestricted
Set-ExplorerOptions -showHidenFilesFoldersDrives -showProtectedOSFiles -showFileExtensions
#Enable-RemoteDesktop
Disable-InternetExplorerESC
#Disable-UAC
#Set-TaskbarSmall
 
# disable defrag because I have an SSD 
Get-ScheduledTask -TaskName *defrag* | Disable-ScheduledTask 
# Install Visual Studio 2015
cinst visualstudio2015enterprise
if (Test-PendingReboot) { Invoke-Reboot }
#Other dev tools
cinst visualstudiocode -y
cinst nodejs.install -y
choco install unity -y
#Browsers
cinst googlechrome -y
cinst firefox -y
#Other tools
cinst notepadplusplus -y
cinst 7zip.install -y
cinst adobereader -y
cinst skype -y
cinst dropbox -y
cinst virtualbox -y
choco install jdk8 -y
cinst putty.install -y
cinst spotify -y
cinst vlc -y
choco install steam -y
# VS extensions
Install-ChocolateyVsixPackage ProPowerTools https://visualstudiogallery.msdn.microsoft.com/d0d33361-18e2-46c0-8ff2-4adea1e34fef/file/29666/12/ProPowerTools.vsix
Install-ChocolateyVsixPackage vstu2015 https://visualstudiogallery.msdn.microsoft.com/8d26236e-4a64-4d64-8486-7df95156aba9/file/142077/10/vstu2015.msi
# Node modules (Global)
npm install -g gulp
npm install -g bower
npm install -g typings
npm install -g hexo-cli
npm install -g typescript
if (Test-PendingReboot) { Invoke-Reboot }
#cinst Microsoft-Hyper-V-All -source windowsFeatures
cinst IIS-WebServerRole -source windowsfeatures
cinst IIS-HttpCompressionDynamic -source windowsfeatures
cinst IIS-ManagementScriptingTools -source windowsfeatures
cinst IIS-WindowsAuthentication -source windowsfeatures
Install-ChocolateyPinnedTaskBarItem "$($Boxstarter.programFiles86)\Google\Chrome\Application\chrome.exe"
Install-ChocolateyPinnedTaskBarItem "$($Boxstarter.programFiles86)\Microsoft Visual Studio 14.0\Common7\IDE\devenv.exe"
# Update Windows and reboot if necessary
Install-WindowsUpdate -AcceptEula -GetUpdatesFromMS
if (Test-PendingReboot) { Invoke-Reboot }
      `} />

  </PostSection>
  <Callout>
    Boxstarter is able to use
    <LinkExternal href="https://chocolatey.org/packages">
      Chocolatey Packages
    </LinkExternal>
    which means it has access to many many pieces of software.
  </Callout>

  <PostSection title="Other Windows 10 Options">
    <Callout>
      Alternatively you can now use a Package Manager in Windows.
    </Callout>
    Windows 10 now includes a Package Manager. Check out my personal favourite
    <LinkExternal href="https://chocolatey.org/">Chocolatey</LinkExternal>
    which includes many many
    <LinkExternal href="https://chocolatey.org/packages">Packages</LinkExternal>
  </PostSection>
</PostContents>
