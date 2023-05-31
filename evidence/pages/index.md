# The Top Trending Buzzfeed News Articles by Year, Month, Week, and All-time

![A screenshot of Buzzfeed News' trending strip](https://github.com/jsvine/buzzfeed-news-trending-strip/raw/main/misc/trending-strip-screenshot.png "Buzzfeed News trending strip")
*The Buzzfeed News trending strip*

[Jeremy-Singer Vine](https://www.jsvine.com/) (of [Data is Plural](https://www.data-is-plural.com/) fame) set up a program that took snapshots of the "Trending" strip on Buzzfeed News every 5 minutes from Nov 2018 through the newsroom's final day of operation in May 2023.

I wanted to get a feel for which articles spent the most time on the trending strip over time, so I threw this together.

* The 20 longest-trending articles, all-time.
* The longest-trending articles:
  * By year
  * By month
  * By week

And, as a bonus, the 20 reporters whose articles spent the longest time in the trending strip.

*Thanks to Jeremy for publishing [this dataset on Github](https://github.com/jsvine/buzzfeed-news-trending-strip).*

*Created by Vikram Oberoi ([Twitter](https://twitter.com/voberoi)) ([Blog](https://vikramoberoi.com)).*

## How long did articles stay on the trending strip?

```hours_trending_by_article
select
    url,
    earliest_time_trended,
    latest_time_trended,
    seconds_trending / 60.0 / 60.0 as hours_trending
from trending_articles
order by 3 desc
```

```hours_trending_by_article_without_outlier
select * from ${hours_trending_by_article} where hours_trending < 1000
```


```median_hours_trending
select median(hours_trending) as median_hours_trending from ${hours_trending_by_article}
```

The median time an article spent in the trending strip was **<Value data={median_hours_trending}/>** hours.

This is the distribution of hours articles spent on the trending strip:

<Histogram data={hours_trending_by_article} x=hours_trending/>

This is how long every article that appeared on the trending strip remained on it, chronologically:

<BarChart data={hours_trending_by_article} x=earliest_time_trended y=hours_trending />

Let's remove the massive outlier in 2020 and look again:

<BarChart data={hours_trending_by_article_without_outlier} x=earliest_time_trended y=hours_trending />
