---
layout: literature
description: Explore the literature enabled by data published by the North America Region.
permalink: /literature
---
<script>
  var siteConfig = {
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ["US", "CA", "MX", "UM", "PR", "VI", "AS", "GU", "MP"]
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ["US", "CA", "MX", "UM", "PR", "VI", "AS", "GU", "MP"]
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};
</script>
