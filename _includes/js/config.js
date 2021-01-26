var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'in', key: 'country', value: ["US", "CA", "MX", "UM", "PR", "VI", "AS", "GU", "MP"] }
};
