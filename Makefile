all: buzzfeed-trending.duckdb

buzzfeed-trending.duckdb:
	duckdb buzzfeed-trending.duckdb -init sql/stg-article-metadata.sql -no-stdin
	duckdb buzzfeed-trending.duckdb -init sql/stg-authors.sql -no-stdin
	duckdb buzzfeed-trending.duckdb -init sql/stg-bfn-trending-strip-deduped.sql -no-stdin
	duckdb buzzfeed-trending.duckdb -init sql/trending-snapshots.sql -no-stdin
	duckdb buzzfeed-trending.duckdb -init sql/trending-snapshots-monthly.sql -no-stdin
	duckdb buzzfeed-trending.duckdb -init sql/trending-snapshots-yearly.sql -no-stdin

clean:
	rm buzzfeed-trending.duckdb
