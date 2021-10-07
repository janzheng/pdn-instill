

<script>
  import marked from 'marked'
  // import { onMount, getContext, setContext } from 'svelte';

	import { _content } from "@/stores/sitedata"
  import { scrollToAnchor } from "@/_utils/scrollto.js";

  export let segment

  // let top = _content('top') || ''
  // let caldate = _content('_caldate') || ''
  // let notice = _content('notice') || ''

  import { stores } from "@sapper/app";
  let page = stores().page

  import Notion from '@yawnxyz/svelte-notion'
</script>





<nav class="Header __antialiased __content-header">
  <div class="Nav _padding-top _padding-bottom">
    <div class="_section-page _margin-center _padding-xs">
      <!-- <div class="_md-pfix">{@html marked(content)}</div> -->
      <div class="_flex _flex-vertically">
        <div class="_margin-right-2">
          <a rel=prefetch href="/">
            <img class="Header-img" src="instill.png" alt="Instill Science" style="width: 64px;">
          </a>
        </div>
        <div class="_flex-1" >
          <!-- Nav here -->
        </div>
      </div>
    </div>
<!-- 
    {#if $Profile.ticketnumber && isAttending($Profile)}
      <div class="Nav _margin-top-2 _margin-center ">

        <nav>
          <ul>
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/live" ? "__active" : ""}' aria-current='{segment === "/start/live" ? "page" : undefined}' href='/start/live'>Start</a></li>
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/schedule" ? "__active" : ""}' aria-current='{segment === "/start/schedule" ? "page" : undefined}' href='/start/schedule'>Schedule</a></li>
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/speakers" ? "__active" : ""}' aria-current='{segment === "/start/speakers" ? "page" : undefined}' href='/start/speakers'>Speakers, Talks, &amp Video Library</a></li>
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/abstracts" ? "__active" : ""}' aria-current='{segment === "/start/abstracts" ? "page" : undefined}' href='/start/abstracts'>Abstracts &amp; Posters</a></li>
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/people" ? "__active" : ""}' aria-current='{segment === "/start/people" ? "page" : undefined}' href='/start/people'>People</a></li>
            <li class="_align-vertically" ><a rel=prefetch target="_blank" class='{$page.path === "/start/zoom" ? "__active" : ""}' aria-current='{segment === "/start/zoom" ? "page" : undefined}' href='/start/zoom'>Zoom ↗️</a></li>
            <li class="_align-vertically" ><a rel=prefetch href='https://phagedirectory.slack.com/archives/C026XQ7HH5Z' target="_blank">#Evergreen Slack ↗️</a></li>
            <li class="_align-vertically" ><a rel=prefetch href='https://join.slack.com/t/phagedirectory/shared_invite/zt-90r8eyg6-WLhFZlojUtMQLCotq0crsQ' target="_blank">#Evergreen Slack ↗️</a></li>
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/sponsors" ? "__active" : ""}' aria-current='{segment === "/sponsors" ? "page" : undefined}' href='/sponsors'>Sponsors</a></li>
            {#if isVIP($Profile)}
              <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/backstage" ? "__active" : ""}' aria-current='{segment === "/start/backstage" ? "page" : undefined}' href='/start/backstage'>Backstage</a></li>
            {/if}
            <li class="_align-vertically" ><a rel=prefetch class='{$page.path === "/start/"+$Profile.ticketnumber ? "__active" : ""}' aria-current='{segment === "/start/"+$Profile.ticketnumber ? "page" : undefined}' href={'/start/'+$Profile.ticketnumber}>Account</a></li>
            <li class="_align-vertically"><a href='/' on:click={((e)=>{logOut()})}>Log Out</a></li>
          </ul>
        </nav>  
      </div>
    {/if} -->

  </div>  
</nav>




<style type="text/scss">

	.Header-img {
		// fix the jankiness of the header to align
		position: relative;
		left: -6px;
	}

</style>
