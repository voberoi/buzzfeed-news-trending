# buzzfeed-news-trending

This repository powers [The Longest-Trending Buzzfeed News Articles Since Nov 2018 Overall, by Year, and by Month](https://buzzfeed-trending.vikramoberoi.com).

The source data for this project was published by Jeremy Singer-Vine in [this Github repo](https://github.com/jsvine/buzzfeed-news-trending-strip).

This site uses [Evidence](https://evidence.dev), a static site generator purpose-built for reporting & BI use cases.

## Running locally

You must have DuckDB installed on your machine.

TODO: update Makefile to mv the DuckDB file, add targets to run evidence dev and build.

## Contributing

See an error? Please open a PR.

There's also a way to template the yearly and monthly pages which I didn't do. Evidence's templating functionality is a bit wonky at the moment (May 2023),
but I'd be happy to take a PR that DRYs up all that code if you are keen to do so.
