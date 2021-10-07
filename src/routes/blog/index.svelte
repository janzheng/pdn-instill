
<script>
	import { NotionData, _getPost } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

</script>


<svelte:head>
	<!-- <title>{article.title}</title> -->
</svelte:head>


{#if $NotionData && $NotionData.blog && $NotionData.blog.rows}

  {#each $NotionData.blog.rows as post}
    <div class="Post">
      <a href="/blog/{post.Slug}"><h1>{post.Name}</h1></a>
    </div>
  {/each}


{/if}