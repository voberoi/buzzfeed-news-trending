---
title: The Longest-Trending Buzzfeed News Articles Since Nov 2018 Overall, by Year, and by Month
---

<style>
img {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>

<br/>

![A screenshot of Buzzfeed News' trending strip](images/trending-strip-screenshot.png)

*The Buzzfeed News trending strip*

[Jeremy-Singer Vine](https://www.jsvine.com/) set up a program that took snapshots of the "Trending" strip on Buzzfeed News every 5 minutes from Nov 2018 through the newsroom's final day of operation in May 2023.

He [published the dataset here](https://github.com/jsvine/buzzfeed-news-trending-strip).

**Buzzfeed News' trending strip was [curated by editors, not an algorithm](https://techcrunch.com/2018/07/18/buzzfeed-news/).**

I wanted to get a feel for which articles spent the most time on the trending strip over time so I made this site.

Below you'll find links showing the longest-trending Buzzfeed News articles by year, month, and over the entire dataset's time frame.

*Created by Vikram Oberoi ([Twitter](https://twitter.com/voberoi)) ([Blog](https://vikramoberoi.com)). The code for this site is [available on Github](https://github.com/voberoi).*

*Thanks to Jeremy for scraping Buzzfeed News' trending strip and publishing [the dataset behind this site](https://github.com/jsvine/buzzfeed-news-trending-strip).*

## All-time

These all-time lists cover mid-November 2018 through the newsroom's final day of operation in May 2023.

* [The 100 longest trending articles](/100-longest-trending-articles)
* [The 100 longest trending reporters](/100-longest-trending-reporters)

## Yearly

These pages show the 50 longest trending articles in:

* [2018](/yearly/2018)
* [2019](/yearly/2019)
* [2020](/yearly/2020)
* [2021](/yearly/2021)
* [2022](/yearly/2022)
* [2023](/yearly/2023)

## Monthly

These pages show the 5 longest trending articles monthly in:

* [2018](/monthly/2018)
* [2019](/monthly/2019)
* [2020](/monthly/2020)
* [2021](/monthly/2021)
* [2022](/monthly/2022)
* [2023](/monthly/2023)


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
