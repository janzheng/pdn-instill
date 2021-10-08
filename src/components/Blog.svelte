
<script>
	import { NotionData, _getPost } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

</script>


<svelte:head>
	<!-- <title>{article.title}</title> -->
</svelte:head>


{#if $NotionData && $NotionData.blog && $NotionData.blog.rows}

  <div class='_section-page _margin-center _divider-top _divider-bottom'>
    <h2>Posts</h2>
    {#each $NotionData.blog.rows as post}
      {#if process.env.STATUS == post.Status == 'Published'}
        <div class="Post">
          {#if post.Slug}
            <a href="/blog/{post.Slug}"><h3>{post.Name}</h3></a>
          {:else}
            <h3 class="_planned">{post.Name} (planned)</h3>
          {/if}
        </div>
      {:else}
        <div class="Post">
          {#if post.Slug}
            <a href="/blog/{post.Slug}"><h3 class="_padding-bottom">{post.Name}</h3></a>
          {:else}
            <h3 class="_planned _padding-bottom">{post.Name} (planned)</h3>
          {/if}
          <span class="_tag">{post.Status}</span>
        </div>
      {/if}
    {/each}
  </div>

{/if}



<style>
  h3._planned {
    color: #666;
  }
</style>