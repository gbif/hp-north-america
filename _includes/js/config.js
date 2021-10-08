var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
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
};
