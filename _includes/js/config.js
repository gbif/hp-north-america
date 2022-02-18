var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
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
  }
};
