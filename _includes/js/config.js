var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: "equals", key: "countryCode", values:["US","CA","MX","UM","PR","VI","AS","GU","MP"] }
};
