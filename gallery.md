---
layout: default
title: Image Gallery
description: The following images are available for use in pages and posts on this site.
lang: en
lang-ref: gallery
---
# Image Gallery

The `src` and `caption` for the following images are contained in the `images.yml` file. The goal of this page is to provide a visual referance for the images available for use in pages and posts on this hosted portal.

To use these images, make note of the image caption here, which is the "code name" fo the image. In your post, format the background and imageLicense like this example:

```
{% raw %}
background: "{{site.data.images.CodeName.src}}"
imageLicense: "{{site.data.images.CodeName.caption}}"
{% endraw %}
```

{% for item in site.data.images %}
  <figure style="display: inline-block; width: 150px; height: 450px; margin: 10px; vertical-align: top;">
	  <img src="{{ item[1].src }}" style="height: auto; width: 150px;"><br />
	  <figcaption>{{ item[0] }}</figcaption>
  </figure>
{% endfor %}
