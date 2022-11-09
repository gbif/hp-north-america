var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    },
    literatureSearch: {
      route: '/literature'
    }
  },
  occurrence: {
    mapSettings: {
      lat: 60.0344351910359,
      lng: -111.28467879517733,
      zoom: 0.9115440763665068
    },
    rootPredicate: {
       "type": "and",
       "predicates": [
          {
           "type": "in",
           "key": "country",
           "values": ["US", "CA", "MX", "UM", "PR", "VI", "AS", "GU", "MP"]
         },
         {
           "type": "equals",
           "key": "notIssues",
           "value": "COUNTRY_COORDINATE_MISMATCH"
         }
       ]
     },
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS']
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['US', 'CA', 'MX', 'UM', 'PR', 'VI', 'AS', 'GU', 'MP']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['US', 'CA', 'MX', 'UM', 'PR', 'VI', 'AS', 'GU', 'MP']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};

if (pageLang === 'es')  {siteConfig.routes.occurrenceSearch.route = '/datos';}
