-- If a trending snapshot partially overlaps a month, this query counts the seconds
-- it trends in each month.

create table trending_snapshots_monthly as (

with

dataset_months as (
  select range as month_start, range + interval '1 month' as month_end from range(timestamp '2018-11-01', timestamp '2023-06-01', interval '1 month')
)

select trending_snapshots.* exclude (seconds_trending),
       dataset_months.month_start as month_trending_start,
       dataset_months.month_end as month_trending_end,
       epoch(least(timestamp_last, dataset_months.month_end)) - epoch(greatest(timestamp_first, dataset_months.month_start)) as seconds_trending
from trending_snapshots, dataset_months
where dataset_months.month_start <= trending_snapshots.timestamp_last and
      dataset_months.month_end >= trending_snapshots.timestamp_first

);

-- From the monthly snapshots, we can accurately count how many seconds articles trended
-- within each month.

create table trending_articles_monthly as (

with articles as (
    select
        unnest(urls) as url,
        month_trending_start,
        month_trending_end,
        seconds_trending
    from trending_snapshots_monthly
)

select
    url,
    month_trending_start,
    month_trending_end,
    sum(seconds_trending) as seconds_trending
from articles
group by 1, 2, 3

);
