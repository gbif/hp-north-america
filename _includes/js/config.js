var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    type: 'or',
    predicates: [
      { type: 'equals', key: 'gadm_gid', value: "US" },
      { type: 'equals', key: 'gadm_gid', value: "CA" },
      { type: 'equals', key: 'gadm_gid', value: "MX" },
      { type: 'equals', key: 'gadm_gid', value: "UM" },
      { type: 'equals', key: 'gadm_gid', value: "PR" },
      { type: 'equals', key: 'gadm_gid', value: "VI" },
      { type: 'equals', key: 'gadm_gid', value: "AS" },
      { type: 'equals', key: 'gadm_gid', value: "GU" },
      { type: 'equals', key: 'gadm_gid', value: "MP" }
    ]
  }
};
