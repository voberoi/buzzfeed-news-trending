# buzzfeed-news-trending

This repository powers [The Longest-Trending Buzzfeed News Articles Since Nov 2018 Overall, by Year, and by Month](https://buzzfeed-trending.vikramoberoi.com).

The source data for this project was published by Jeremy Singer-Vine in [this Github repo](https://github.com/jsvine/buzzfeed-news-trending-strip).

This site uses [Evidence](https://evidence.dev), a static site generator purpose-built for reporting & BI use cases.

## Running locally

You must have DuckDB & npm installed on your machine.

* `make` will process data, move it to `evidence/`, and build the Evidence site.
* `make dev` will process data, move it to `evidence/`, and run Evidence in dev mode.
* `make duckdb` will process data and move it to `evidence/`.

## Source data

There are three files in `source-data/`:

* `bfn-trending-strip-deduped.tsv`: This is Jeremy's dataset from [this Github repo](https://github.com/jsvine/buzzfeed-news-trending-strip).
* `article-metadata.jsonl`: This is metadata I scraped from Buzzfeed News using Jeremy's dataset. Note that there are duplicates in the original dataset because each snapshot references URLs used at that time. If the URLs changed, Buzzfeed News redirected the original URLs. The article metadata contains duplicate rows if an article showed up multiple times with different URLs, but each record contains `redirect_url` as well so you know what the canonical URL is.
* `authors.jsonl`: This is metadata I scraped from Buzzfeed News for each reporter I found in `article-metadata.jsonl`.

## Contributing

See an error? Please open a PR.
