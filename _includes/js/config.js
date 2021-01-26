var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  "rootPredicate": {"type": "in","key": "COUNTRY","values": ["US","CA","MX"]}}
};
