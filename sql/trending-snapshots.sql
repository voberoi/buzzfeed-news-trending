create table trending_snapshots as (

with

urls_and_redirects as (
    select article_url, redirect_url
    from article_metadata
),

-- The raw trending is already deduped, but using the URLs those articles had at the time.
-- We replace all URLs with the redirect URL if one exists.
trending_data as (
    select
        trending_data.timestamp_first,
        trending_data.timestamp_last,
        trending_data.position,
        trending_data.text,
        coalesce(
            urls_and_redirects.redirect_url,
            urls_and_redirects.article_url
        ) as url
    from
        bfn_trending_strip_deduped trending_data,
        urls_and_redirects,
    where trending_data.url = urls_and_redirects.article_url
    order by trending_data.timestamp_first, trending_data.timestamp_last, trending_data.position
),

-- A snapshot consolidates multiple lines (one for each article on the trending bar) with a single line
-- for each snapshot. This one has duplicates because articles that later had redirects will also now
-- point to the redirect.
trending_snapshots_with_dupes as (
    select
        timestamp_first,
        timestamp_last,
        array_agg(position) as positions,
        array_agg(text) as texts,
        array_agg(url) as urls
    from trending_data
    group by 1, 2
)

-- Identical snapshots occur consecutively in time, so we can just grab the min and max.
select
    min(timestamp_first) as timestamp_first,
    max(timestamp_last) as timestamp_last,
    epoch(max(timestamp_last)) - epoch(min(timestamp_first)) as seconds_trending,
    positions,
    texts,
    urls,
from trending_snapshots_with_dupes
group by 4, 5, 6

);

create table trending_articles as (

with articles as (
    select
        unnest(urls) as url,
        timestamp_first as earliest_time_trended,
        timestamp_last as latest_time_trended,
        seconds_trending
    from trending_snapshots
)

select
    url,
    min(earliest_time_trended) as earliest_time_trended,
    max(latest_time_trended) as latest_time_trended,
    sum(seconds_trending) as seconds_trending
from articles
group by 1
);
