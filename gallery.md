---
layout: default
title: Image Gallery
description: The following images are available for use in pages and posts on this site.
lang: en
lang-ref: gallery
---

<script type="text/javascript" 
 src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
</script>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>

<div id="google_translate_element"></div> 


# Image Gallery

## Instructions
This page provides a visual reference to the photos contained in the [`images.yml`](https://github.com/gbif/hp-north-america/blob/master/_data/images.yml) file. These images can be used for pages and posts on this site by making note of the **CodeName** shown in the image captions. In your page or post, format the `background` and `imageLicense` in the front matter using the **CodeName** like this:

```
{% raw %}
background: "{{site.data.images.CodeName.src}}"
imageLicense: "{{site.data.images.CodeName.caption}}"
{% endraw %}
```

## Images
{% for item in site.data.images %}
  <figure style="display: inline-block; width: 300px; height: auto; margin: 10px; vertical-align: top;">
    <img src="{{ item[1].src }}" title="{{ item[0] }}" style="height: auto; width: 300px;"><br />
    <figcaption><b>{{ item[0] }}</b><br />{{ item[1].caption | markdownify }}</figcaption>
  </figure>
{% endfor %}
