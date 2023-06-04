---
title: The 100 all-time longest-trending Buzzfeed News articles
og:
  title: The 100 all-time longest-trending Buzzfeed News articles
  description: The longest-trending Buzzfeed News articles based on a dataset of snapshots taken of the home page's "Trending" strip every 5 minutes from Nov 2018 until May 5th, when the newsroom shut down.
  image: /images/og-image.png
---

<script>
  import ArticleRow from '$lib/ArticleRow.svelte';
</script>

<style>
    .same-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>

<span class="same-line">
  <BigLink href="/">← Home</BigLink>
  <BigLink href="/100-longest-trending-reporters"> 100 Longest Trending Reporters →</BigLink>
</span>

*The newsroom closed on May 5th, 2023.*

*This list omits articles that trended from April 19th, 2023 onward because the newsroom stopped updated the trending strip that day.*

**8,942** *unique articles appeared in the trending strip from mid-November 2018 until April 19th, 2023.*

``` top_articles
select
   row_number() over (order by seconds_trending desc) as rank,
   trending_articles.url as url,
   article_metadata.article_social_image as article_social_image,
   article_metadata.article_headline as article_headline,
   date_part('year', latest_time_trended) as year_trended,
   seconds_trending / 60.0 / 60.0 / 24.0 as days_trending
from article_metadata, trending_articles
where trending_articles.url = coalesce(article_metadata.redirect_url, article_metadata.article_url) and
      trending_articles.earliest_time_trended < timestamp'2023-04-19'
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

<span class="same-line">
  <BigLink href="/">← Home</BigLink>
  <BigLink href="/yearly">Yearly</BigLink>
  <BigLink href="/monthly">Monthly</BigLink>
</span>
