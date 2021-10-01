---
layout: default
title: Image Gallery
description: The following images are available for use in the pages on this site.
lang: en
lang-ref: gallery
---

<ul class="photo-gallery">
  {% for image in site.data.images %}
    <li><img src="{{ image.src }}" alt="{{ image.caption }}"/></li>
  {% endfor %}
</ul>
