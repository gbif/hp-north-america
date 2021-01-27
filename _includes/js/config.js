var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    type: 'or',
    predicates: [
      { type: 'equals', key: 'countryCode', value: "US" },
      { type: 'equals', key: 'countryCode', value: "CA" },
      { type: 'equals', key: 'countryCode', value: "MX" },
    ]
  }
};
