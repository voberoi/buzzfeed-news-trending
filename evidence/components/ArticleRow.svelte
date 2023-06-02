<script>
  export let rank;
  export let image_url;
  export let days_trending;
  export let headline;
  export let article_url;
  export let when;
</script>


<div class="article-row">
  <p class="article-rank"><span class="inline-block" style="margin-right: 15px;">#{rank}</span>{Math.round(days_trending * 10)/10} days{ when ? " in " + when : ""}</p>
  <div class="article-image-headline-container">
    <div class="article-image">
      <img src="{image_url}"/>
    </div>
    <p class="article-headline"><a href="{article_url}">{headline}</a></p>
  </div>
  <p class="article-days-trending"></p>
</div>

<style>
  .article-row {
    padding: 10px;
    font-family: sans-serif;
  }

  .article-rank {
    padding: 0px;
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    border-bottom: 1px solid;
    border-bottom-color: #e3e3e3;
  }

  .article-image-headline-container {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }

  .article-image {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 100px;
  }

  .article-image img {
    width: 100px;
  }

  .article-headline {
    padding: 0px;
    margin: 0px;
  }
</style>
