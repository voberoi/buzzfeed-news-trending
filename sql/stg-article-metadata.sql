create table article_metadata as (
   select
       * exclude (article_social_image),
       article_social_image as article_social_image_source_url,
       concat('/images/social-small/', id::text ,'.jpg') as article_social_image
   from './source-data/article-metadata.jsonl'
);
