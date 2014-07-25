Coolrom API
===========

Coolrom REST API using coolrom webscrapper

Up and running at: [https://coolrom-api.herokuapp.com](https://coolrom-api.herokuapp.com)

Calls:

Click on each link to get a preview :)

# Get platforms
[https://coolrom-api.herokuapp.com/v1/platforms/](https://coolrom-api.herokuapp.com/v1/platforms/)

# Get filters by platform
[https://coolrom-api.herokuapp.com/v1/filters/{platform}/](https://coolrom-api.herokuapp.com/v1/filters/nes/)

# Search by query (spaced by +)
[https://coolrom-api.herokuapp.com/v1/search/{query}](https://coolrom-api.herokuapp.com/v1/search/zelda)
[https://coolrom-api.herokuapp.com/v1/search/{query}/{platform}](https://coolrom-api.herokuapp.com/v1/search/zelda/nes)

# Get roms by platform and filter
[https://coolrom-api.herokuapp.com/v1/roms/{platform}/{filter}](https://coolrom-api.herokuapp.com/v1/roms/nes/action)

# Get rom by id and platform
[https://coolrom-api.herokuapp.com/v1/rom/{id}/{platform}](https://coolrom-api.herokuapp.com/v1/rom/45116/nes)

# Get rom download link by id
[https://coolrom-api.herokuapp.com/v1/rom/link/{id}/](https://coolrom-api.herokuapp.com/v1/rom/link/45116/)


# TODO.
[] Nicer code -> Fast and dirty.
[] Redis cache
[] Some issues with selectors