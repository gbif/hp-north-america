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
      { type: 'equals', key: 'countryCode', value: "UM" },
      { type: 'equals', key: 'countryCode', value: "PR" },
      { type: 'equals', key: 'countryCode', value: "VI" },
      { type: 'equals', key: 'countryCode', value: "AS" },
      { type: 'equals', key: 'countryCode', value: "GU" },
      { type: 'equals', key: 'countryCode', value: "MP" }
    ]
  }
};
