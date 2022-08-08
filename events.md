---
layout: heroImage
title: North America Regional Events Calendar
description:
lang: en
lang-ref: events
background: "{{site.data.images.RNPheasant.src}}"
imageLicense: "{{site.data.images.RNPheasant.caption}}"
height: 70vh
---

<!-- Support User Time Zone in Embedded Google Calendar -->
<!-- https://stackoverflow.com/questions/31821974/support-user-time-zone-in-embedded-google-calendar -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jstimezonedetect/1.0.7/jstz.js" integrity="sha512-gPgCxBK1xjsllNvxhv6tdK4IU2lH7c5a/O9kg9y73K1+hDC4TUlkHz0pLfL6jyS7RrghnscJutlzvAiAojHh+w==" crossorigin="anonymous"></script>

Please contact the [NA Regional Helpdesk](mailto:gbif.na.helpdesk@gmail.com) if you would like to add or suggest an event for the calendar.

*All dates are subject to change; not all events are the responsibility of, or organized by, the GBIF North America Regional Steering Group.*

<div id="calendar-container">
<iframe src="https://calendar.google.com/calendar/embed?height=600&hl=en&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=Z2JpZi5uYS5oZWxwZGVza0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4ubWV4aWNhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%234285F4&color=%237CB342&color=%230B8043" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</div>

<script type="text/javascript">
  var timezone = jstz.determine();
  var pref = '<iframe src="https://calendar.google.com/calendar/embed?height=600&hl=en&wkst=1&bgcolor=%23ffffff&src=Z2JpZi5uYS5oZWxwZGVza0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4ubWV4aWNhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%234285F4&color=%237CB342&color=%230B8043&ctz=';
  var suff = '" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
  var iframe_html = pref + timezone.name() + suff;
  document.getElementById('calendar-container').innerHTML = iframe_html;
</script>
