<!-- src/routes/blog/[slug].svelte -->
<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;
		return { slug };
	}
</script>

<script>
	import { _getPost } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

	export let slug
  let post

  $: {
    post = _getPost(slug)
  }

</script>







<svelte:head>
  <title>{post.Name}</title>
</svelte:head>

{#if post}
  <div class='_section-page _margin-center _divider-top _divider-bottom'>
    <!-- {@html article.html} -->
    <Notion loadingMsg='' classes={''} id={post.id} api={process.env.NOTION_API}/>
  </div>
{:else}
  <h1>No post found at {slug}</h1>
{/if}