
<script>
	import { NotionData, _getPost } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

</script>


<svelte:head>
	<!-- <title>{article.title}</title> -->
</svelte:head>


{#if $NotionData && $NotionData.blog && $NotionData.blog.rows}

  <div class='_section-page _margin-center _divider-top _divider-bottom'>
    <h3>Posts</h3>
    {#each $NotionData.blog.rows as post}
      <div class="Post">
        <a href="/blog/{post.Slug}"><h1>{post.Name}</h1></a>
      </div>
    {/each}
  </div>

{/if}