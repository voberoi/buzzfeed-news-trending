-- If a trending snapshot partially overlaps a year, this query counts the seconds
-- it trends in each year.

create table trending_snapshots_yearly as (

with

dataset_years as (
    select range as year_start, range + interval '1 year' as year_end from range(timestamp '2018-01-01', timestamp '2024-01-01', interval '1 year')
)

select trending_snapshots.* exclude (seconds_trending),
       dataset_years.year_start as year_trending_start,
       dataset_years.year_end as year_trending_end,
       epoch(least(timestamp_last, dataset_years.year_end)) - epoch(greatest(timestamp_first, dataset_years.year_start)) as seconds_trending
from trending_snapshots, dataset_years
where
  dataset_years.year_start <= trending_snapshots.timestamp_last and
  dataset_years.year_end >= trending_snapshots.timestamp_first

);

-- From the yearly snapshots, we can accurately count how many seconds articles trended
-- within each year.

create table trending_articles_yearly as (

with articles as (
    select
        unnest(urls) as url,
        year_trending_start,
        year_trending_end,
        seconds_trending
    from trending_snapshots_yearly
)

select
    url,
    year_trending_start,
    year_trending_end,
    sum(seconds_trending) as seconds_trending
from articles
group by 1, 2, 3

);
