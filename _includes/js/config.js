var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
     "type": "and",
     "predicates": [
        {
         "type": "in",
         "key": "countryCode",
         "values": ["US", "CA", "MX", "UM", "PR", "VI", "AS", "GU", "MP"]
       },
       {
         "type": "equals",
         "key": "notIssues",
         "value": "COUNTRY_COORDINATE_MISMATCH"
       }
     ]
   }
};
