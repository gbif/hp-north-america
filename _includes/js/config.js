var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    type: 'or',
    predicates: [
      { type: 'equals', key: 'gadmGid', value: "USA" },
      { type: 'equals', key: 'gadmGid', value: "CAN" },
      { type: 'equals', key: 'gadmGid', value: "MEX" },
      { type: 'equals', key: 'gadmGid', value: "UMI" },
      { type: 'equals', key: 'gadmGid', value: "PRI" },
      { type: 'equals', key: 'gadmGid', value: "VIR" },
      { type: 'equals', key: 'gadmGid', value: "ASM" },
      { type: 'equals', key: 'gadmGid', value: "GUM" },
      { type: 'equals', key: 'gadmGid', value: "MNP" }
    ]
  }
};
