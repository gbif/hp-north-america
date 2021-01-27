var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    type: 'or',
    predicates: [
      { type: 'equals', key: 'gadm_gid', value: "USA" },
      { type: 'equals', key: 'gadm_gid', value: "CAN" },
      { type: 'equals', key: 'gadm_gid', value: "MEX" },
      { type: 'equals', key: 'gadm_gid', value: "UMI" },
      { type: 'equals', key: 'gadm_gid', value: "PRI" },
      { type: 'equals', key: 'gadm_gid', value: "VIR" },
      { type: 'equals', key: 'gadm_gid', value: "ASM" },
      { type: 'equals', key: 'gadm_gid', value: "GUM" },
      { type: 'equals', key: 'gadm_gid', value: "MNP" }
    ]
  }
};
