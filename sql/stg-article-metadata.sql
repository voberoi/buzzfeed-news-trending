create table article_metadata as (
   select
       * exclude (article_social_image),
       article_social_image as article_social_image_source_url,

   from './source-data/article-metadata.jsonl'
);

-- I scraped BFN to get all the article metadata. The URLs I used came from
-- Jeremy's dataset ('bfn-trending-strip-deduped.tsv').
--
-- Occasionally, article URLs would change. So the same article should show up
-- twice with different URLS.
--
-- Sometimes, the article only showed up with a URL that is no longer the canonical URL.
--
-- When I scraped the data, I also included `redirect_url` so I could find articles'
-- canonical URLS. `article-metadata.jsonl` contains duplicate entries for these:
-- one with a populated redirect_url, one without.
--
-- This table contains articles with their canonical URLs only, removing
-- these duplicates.
create table article_metadata_canonical_urls_only as (
   select max(id) as id,
          max(concat('/images/social-small/', id::text ,'.jpg')) as article_social_image,
          article_image,
          article_headline,
          article_subtitle,
          authors,
          article_url
   from (
       select
           * exclude (article_url, redirect_url),
           coalesce(redirect_url, article_url) as article_url
       from article_metadata
   )
   group by article_image, article_headline, article_subtitle, authors, article_url
)
