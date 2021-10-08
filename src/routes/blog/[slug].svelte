<!-- src/routes/blog/[slug].svelte -->
<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;
		return { slug };
	}
</script>

<script>
  import Notion from '@yawnxyz/svelte-notion'
  // import Notion from '../../../../../../svelte-notion/src/Notion.svelte'

	import { _getPost } from "@/stores/sitedata"

	export let slug
  let post

  $: {
    post = _getPost(slug)
  }

</script>







<svelte:head>
  {#if post}
    <title>{post.Name}</title>
  {/if}
</svelte:head>

{#if post}
  <div class='_section-page _margin-center _divider-top _divider-bottom'>
    <!-- {@html article.html} -->
    <Notion loadingMsg='' classes={''} id={post.id} api={process.env.NOTION_API}/>
  </div>
{:else}
  <div class='_section-page _margin-center _divider-top _divider-bottom'>
    <h1>No post found at blog/{slug}</h1>
  </div>
{/if}