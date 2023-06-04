---
title: The Longest-Trending Buzzfeed News Articles Since Nov 2018 Overall, by Year, and by Month
og:
  title: The Longest-Trending Buzzfeed News Articles Since Nov 2018 Overall, by Year, and by Month
  description: The longest-trending Buzzfeed News articles based on a dataset of snapshots taken of the home page's "Trending" strip every 5 minutes from Nov 2018 until May 5th, when the newsroom shut down.
  image: /images/og-image.png
---

<style>
img {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>

<br/>

![A screenshot of Buzzfeed News' trending strip](/images/trending-strip-screenshot.png)

*The Buzzfeed News trending strip*

[Jeremy-Singer Vine](https://www.jsvine.com/) set up a program that took snapshots of the "Trending" strip on Buzzfeed News every 5 minutes from Nov 2018 through the newsroom's final day of operation in May 2023.

He [published the dataset here](https://github.com/jsvine/buzzfeed-news-trending-strip).

**Buzzfeed News' trending strip was [curated by editors, not an algorithm](https://techcrunch.com/2018/07/18/buzzfeed-news/).**

Below you'll find links showing the longest-trending Buzzfeed News articles by year, month, and over the entire dataset's time frame.

*Created by Vikram Oberoi ([Twitter](https://twitter.com/voberoi)) ([Blog](https://vikramoberoi.com)). The code for this site is [available on Github](https://github.com/voberoi/buzzfeed-news-trending).*

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

```days_trending_by_article
select
    url,
    earliest_time_trended,
    latest_time_trended,
    seconds_trending / 60.0 / 60.0 / 24.0 as days_trending
from trending_articles
order by 3 desc
```

```days_trending_by_article_without_outlier
select * from ${days_trending_by_article} where days_trending < 40
```

```days_trending_by_article_without_outlier_and_final_stretch
select * from ${days_trending_by_article} where days_trending < 40 and earliest_time_trended < timestamp '2023-04-19'
```

```median_days_trending
select median(days_trending) as median_days_trending from ${days_trending_by_article}
```

```median_hours_trending
select median(days_trending) * 24 as median_days_trending from ${days_trending_by_article}
```

The median time an article spent in the trending strip was **<Value data={median_days_trending}/>** days or **<Value data={median_hours_trending}/>** hours.

This is the distribution of the number of days articles spent on the trending strip:

<Histogram data={days_trending_by_article} x=days_trending xAxisTitle="Days spent trending" yAxisTitle="# Articles"/>

The vast majority of articles spent less than 1 day on the trending strip. This is how long every article that appeared on the trending strip remained on it, chronologically:

<BarChart data={days_trending_by_article} x=earliest_time_trended y=days_trending xAxisTitle="When article trended" yAxisTitle="Days spent trending"/>

Let's remove [the massive outlier in 2020](/yearly/2020) and look again:

<BarChart data={days_trending_by_article_without_outlier} x=earliest_time_trended y=days_trending xAxisTitle="When article trended" yAxisTitle="Days spent trending" />

On April 19th, 2023 the newsroom stopped updating the Trending bar before it shut down on May 5th, 2023. You can see this in the stack of articles at the very end of the chart above.

Let's remove those and look again:

<BarChart data={days_trending_by_article_without_outlier_and_final_stretch} x=earliest_time_trended y=days_trending xAxisTitle="When article trended" yAxisTitle="Days spent trending" />

Here's the distribution of the # of days these articles remained on the trending strip:

<Histogram data={days_trending_by_article_without_outlier_and_final_stretch} x=days_trending xAxisTitle="Days spent trending" yAxisTitle="# Articles"/>

The longest-trending lists only use articles that appeared on the trending bar before April 19th, 2023.
