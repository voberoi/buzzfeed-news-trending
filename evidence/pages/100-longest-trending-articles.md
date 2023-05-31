---
title: The 100 all-time longest-trending Buzzfeed News articles
---

**8,952** unique articles appeared in the trending strip from mid-November 2018 onward.

This table shows the year each article was written along with the # of days it spent in the trending strip.

``` top_articles
select
   trending_articles.url as url,
   article_metadata.article_social_image as article_social_image,
   article_metadata.article_headline as article_headline,
   latest_time_trended as moment_trended_yyyy,
   seconds_trending / 60.0 / 60.0 / 24.0 as days_trending
from article_metadata, trending_articles
where trending_articles.url = coalesce(article_metadata.redirect_url, article_metadata.article_url)
order by days_trending desc
limit 100;
```

<DataTable data="{top_articles}", link="url" rows="100">
  <Column id="article_social_image" contentType="image" width="100px" align="center" title="Social Image"/>
  <Column id="moment_trended_yyyy" title="Year" align="left"/>
  <Column id="days_trending" title="Days" align="left"/>
  <Column id="url" contentType="link", linkLabel="article_headline" title="Article" align="left"/>
</DataTable>
