---
title: The 100 all-time longest-trending Buzzfeed News reporters
---

<style>
    .same-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>

<span class="same-line">
  <BigLink href="/100-longest-trending-articles">← 100 Longest Trending Articles</BigLink>
  <BigLink href="/#All-time1">Home →</BigLink>
</span>

**463** reporters had articles show up on the trending strip from November 2018 onward until May 5th, 2023.

``` top_reporters
select
    author.id as author_id,
    author.author_name,
    author.author_image,
    sum(days_trending) as days_trending,
from (
    select
       trending_articles.url as url,
       unnest(article_metadata.authors) as author,
       seconds_trending / 60.0 / 60.0 / 24.0 as days_trending
    from article_metadata, trending_articles
    where trending_articles.url = coalesce(article_metadata.redirect_url, article_metadata.article_url)
    order by days_trending desc
)
group by 1, 2, 3
order by 4 desc
limit 100
```

<DataTable data="{top_reporters}", rows="100">
  <Column id="author_image" contentType="image" width="50px" align="center" title="Image"/>
  <Column id="days_trending" title="Days Trending" align="center"/>
  <Column id="author_name" title="Name" align="left"/>
</DataTable>

<span class="same-line">
  <BigLink href="/100-longest-trending-articles">← 100 Longest Trending Articles</BigLink>
  <BigLink href="/#All-time1">Home →</BigLink>
</span>
