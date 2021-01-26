var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'in', key: 'country', values: ['US','CA','MX','UM','PR','VI','AS','GU','MP'] }
};
