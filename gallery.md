---
layout: default
title: Image Gallery
description: The following images are available for use in pages and posts on this site.
lang: en
lang-ref: gallery
---
# Image Gallery

## Instructions
This page provides a visual reference to the photos contained in the `images.yml` file. These images can be used for pages and posts on this site by making note of the "code name" shown below each image. In your page or post, format the `background` and `imageLicense` in the front matter like this:

```
{% raw %}
background: "{{site.data.images.CodeName.src}}"
imageLicense: "{{site.data.images.CodeName.caption}}"
{% endraw %}
```

## Images
{% for item in site.data.images %}
  <figure style="display: inline-block; width: 300px; height: auto; margin: 10px; vertical-align: top;">
	  <img src="{{ item[1].src }}" title="{{ item[1].caption }}" style="height: auto; width: 300px;"><br />
	  <figcaption>{{ item[0] }}</figcaption>
  </figure>
{% endfor %}
