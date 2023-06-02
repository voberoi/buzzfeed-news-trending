---
title: The 100 all-time longest-trending Buzzfeed News articles
---

<script>
  import ArticleRow from '$lib/ArticleRow.svelte';
</script>

**8,952** unique articles appeared in the trending strip from mid-November 2018 onward.

This table shows the year each article was written along with the # of days it spent in the trending strip.

``` top_articles
select
   row_number() over (order by seconds_trending desc) as rank,
   trending_articles.url as url,
   article_metadata.article_social_image as article_social_image,
   article_metadata.article_headline as article_headline,
   date_part('year', latest_time_trended) as year_trended,
   seconds_trending / 60.0 / 60.0 / 24.0 as days_trending
from article_metadata, trending_articles
where trending_articles.url = coalesce(article_metadata.redirect_url, article_metadata.article_url)
order by days_trending desc
limit 100;
```

{#each top_articles as article}
<ArticleRow
  rank={article.rank}
  image_url={article.article_social_image}
  days_trending={article.days_trending}
  headline={article.article_headline}
  article_url={article.url}
  when={article.year_trended}
/>
{/each}