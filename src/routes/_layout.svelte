
<script context="module">
  export async function preload(page, session) {
    const results = await this.fetch(`/api/getters`).then(r => r.json())
    // const Content = results['Content']
    // const Schedule = results['Schedule']
    // const Profiles = results['Profiles']
		// session.update({
		// 	...session, ...Content
		// });
    // return { _SiteData: results, Content, Schedule, Profiles };

    // get Notion collections like Whimsy, Blog table .. — Loaded into Svelte Store for easy access
    const notionData = {
      whimsy: await this.fetch(`${process.env.NOTION_API}/v1/collection/${process.env.NOTION_WHIMSY}`).then(r => r.json()),
      // auto-loaded through Whimsy "Collection" resource:
      // blog: await this.fetch(`${process.env.NOTION_API}/v1/collection/806ca261d2004aa497b5e63715c68329`).then(r => r.json())
    }
    // add all "Collection" resources from the Whimsy table into the data object; great for blogs
    if(notionData.whimsy && notionData.whimsy.rows) {
      await Promise.all(notionData.whimsy.rows.map( async r => {
        if(r._resource && r._resource == 'Collection')
          notionData[r['Name']] = await this.fetch(`${process.env.NOTION_API}/v1/collection/${r['_blockid']}`).then(r => r.json())
      }))
    }
  
    return { _SiteData: results, _NotionData: notionData };
  }
</script>


<script>

	import { SiteData, NotionData, _content, _get } from "@/stores/sitedata"


	import Nav from '../components/layout/NavInstill.svelte';
	// import Nav from '../components/layout/NavFull.svelte';
	// import Nav from '../components/layout/NavTabs.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import { head, site_url } from '@/_project/head.js';

	// This trick passes down preloaded data to all modules
	// https://stackoverflow.com/questions/60911171/how-to-pass-data-from-a-layout-to-a-page-in-sapper
	export let segment
	export let _SiteData, _NotionData  //, Content, Schedule, Profiles


  import { stores } from "@sapper/app";
  let page = stores().page

  console.log('_layout data:', _SiteData, _NotionData)

  // load site data into store
	$: if(_SiteData) {
		$SiteData = _SiteData
    // store usage:
    // console.log(_get('_footer', 'Content'), _content('_footer'))
	}

  // load notion data into store
	$: if(_SiteData) {
		$NotionData = _NotionData
	}

</script>






<svelte:head>
	{#if head}
		<title>{ head.title }</title>

		<!-- {#if upcomingItems}
			<meta data-hid='og-image' content={`${site_image}`} property='og:image' >
			<meta data-hid='twitter-image' content={`${site_image}`} property='twitter:image' >
	  {/if} -->

		{#if head.link}
			{#each head.meta as meta}
				<meta 
					charset={meta.charset}
					data-hid={meta.hid} 
					name={meta.name} 
					content={meta.content} 
					property={meta.property} 
				>
			{/each}
			{#each head.link as link}
				<link data-hid={link.hid} rel={link.rel} href={link.href}>
			{/each}
		{/if}
	{/if}
</svelte:head>


<!-- messes up some embeds which use staging -->
<!-- {#if process.env.NODE_ENV !== 'production'}
  <div class="_font-large _padding-top-half _padding" style="background: purple; color: white; position: fixed; top: 0; width: 100%; z-index: 999; ">STAGING</div>
{/if} -->


<div id="top" class="ContentFrame Layout">
  <Nav {segment} />

  {#key segment}
  
    <main class="ContentFrame-body __content-frame">
      <slot ></slot>
    </main>
    
    <Footer />
  {/key}
  
</div>

<!-- 
<style type="text/scss">
  // // @import '../styles/core';
</style> -->

<style global type="text/scss">
	@import '../styles/core.scss';
</style>