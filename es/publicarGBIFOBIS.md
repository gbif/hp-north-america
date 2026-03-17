---
layout: heroImage
title: Publicación simultánea en GBIF y OBIS
description: Un seminario web de GBIF Norteamérica
lang: es
lang-ref: publicargbifobis
background: assets/images/20240929_Boulegeade_Sphyraena_3.JPG
imageLicense: Foto de Emilie Boulanger, Parque Nacional de las Calanques en Marsella, 2024
height: 70vh
toc: true
---

## Seminario web: Publicación paralela en GBIF y OBIS

Este seminario web se celebró el 12 de marzo de 2026 como primera parte de la Reunión y formación de los nodos de GBIF Norteamérica 2026.

**Ponentes:**
- **Elizabeth Lawrence**, responsable de formación de OBIS
- **Steven Formel**, gestor de datos de OBIS
- **David Bloom**, «mago» del proyecto VertNet

**Temas tratados:**
- Cómo publicar conjuntos de datos centrados en el medio marino en GBIF y OBIS simultáneamente
- Ventajas de publicar en OBIS
- Diferencias clave entre los requisitos de publicación de GBIF y OBIS (incluidos algunos consejos sobre IPT)
- Herramientas para alinear tus taxones con WoRMS

## Vídeo del seminario web

<iframe src="https://drive.google.com/file/d/10N-5hfUkPoZwoNa3KN0FDospC2TpdkS-/preview" width="640" height="480"></iframe>


## Presentaciones

- [Bienvenida al seminario web y novedades de GBIF]](/assets/documents/Introduction&Overview_GBIFNAWebinar20260312.pdf) (.pdf)
- [Publicación simultánea en GBIF y OBI](/assets/documents/ParallelPublishing_GBIFNAWebinar20260312.pdf) (.pdf)

## Preguntas y respuestas

Las siguientes preguntas se plantearon en el chat del seminario web. Algunas de las respuestas que figuran a continuación se han modificado para mayor precisión y claridad. No te pierdas el vídeo para conocer todos los detalles.

| Pregunta | Respuesta |
|-----------|-------------|
| Si los datos no superan el control de calidad en OBIS, ¿se eliminan los registros? | Los registros se eliminan cuando faltan coordenadas o estas son nulas, o cuando las especies están marcadas como no marinas en WoRMS. No obstante, los usuarios pueden seguir accediendo a los registros eliminados a través del IPT u otros puntos de publicación, y verlos en la página de inicio del conjunto de datos, en la pestaña «Calidad de los datos». |
| ¿Existe algún plan para que GBIF y OBIS se fusionen? | Sí. OBIS y GBIF han aprobado una estrategia y un plan de acción conjuntos para los datos sobre biodiversidad marina. Véase: [OBIS y GBIF aprueban una estrategia y un plan de acción conjuntos para los datos sobre biodiversidad marina](https://www.gbif.org/news/7w0xoodpNZRwnt1SjWfML0/obis-and-gbif-endorse-joint-strategy-and-action-plan-for-marine-biodiversity-data) |
| ¿Puede mostrar cómo acceder a lo que figuraba en la tabla comparativa entre OBIS y GBIF? | Encontrará una descripción general y enlaces que explican las diferencias en la sección del manual de OBIS sobre la publicación de datos de OBIS en GBIF. |
| ¿Existen conflictos con publicaciones que contengan datos terrestres y marinos en el mismo conjunto de datos? | No. Los taxones no marinos se filtrarán durante la ingesta en OBIS. Se marcarán como NOT_MARINE y aparecerán como registros descartados. |
| ¿Qué ocurre cuando los datos de eDNA arrojan resultados como «eucariota sin clasificar»? | Actualmente se interpretan como Biota incertae sedis, ya que el sistema AphiaID no clasifica por encima del nivel de reino. El equipo de OBIS está buscando soluciones mejoradas. |
| ¿Se pueden utilizar [estos procesos] para identificar especies sobre el terreno? | No. Lo sentimos. |
| Si tengo un conjunto de datos publicado en GBIF, ¿cuál es la forma preferida o la mejor práctica para publicarlo también en OBIS? | Si su conjunto de datos se publica en GBIF a través del IPT, puede seleccionar OBIS en la sección Redes de la página de resumen del IPT. Es posible que se necesiten ajustes adicionales para que los datos cumplan con los requisitos de OBIS. |
| ¿Una de las ventajas de marcar un registro en lugar de eliminarlo es que los colaboradores pueden corregir sus datos más adelante? | ¡Por supuesto! Tanto OBIS como GBIF marcan los datos para ayudar a los colaboradores a mejorarlos. |
| ¿Cómo se actualizan las clasificaciones a medida que se añaden más secuencias a las bases de datos? | La asignación taxonómica de las secuencias la realiza el proveedor de datos. OBIS mantendrá esa clasificación actualizada con WoRMS, pero actualmente OBIS no reinterpreta la secuencia. OBIS y GBIF son conscientes de la necesidad o el deseo de este tipo de curación de secuencias y están colaborando para encontrar soluciones que mantengan la información actualizada, pero dejando la toma de decisiones en manos de los científicos que proporcionan los datos. |
| Si encuentra un error en sus metadatos o necesita añadir información (por ejemplo, la profundidad), ¿cómo se actualiza? | Los metadatos se pueden actualizar en cualquier momento a través del IPT. Si los datos en sí cambian, puede cargar el archivo actualizado y volver a publicar el conjunto de datos, lo que crea una nueva versión. |
| Si las colecciones se publican en GBIF mediante un canal RSS en lugar de IPT, ¿las incorpora automáticamente OBIS? | No, esta información debe mantenerse actualizada enviando un correo electrónico al servicio de asistencia de OBIS (helpdesk@obis.org). Esto equivale a editar el [registro de GBIF](https://registry.gbif.org/organization/search) para puntos finales de publicación similares. |
| ¿Hay planes para incluir algún día a los procariotas? | Ese día es hoy 😀. Siempre que puedas asignar tu procariota a un reino, se puede compartir como tal en OBIS. WoRMS no tiene un nivel de clasificación de dominio, pero son conscientes de los retos que esto puede plantear con los datos de ADN. |
| Si soy editor en GBIF pero no tengo un IPT, ¿necesito convertirme en editor en OBIS? | Solo GBIF tiene «editores». Se trata de metadatos sobre el EML proporcionados por el Darwin Core Archive. OBIS analiza el EML del Darwin Core Archive para coordinar las organizaciones relacionadas con un conjunto de datos.  Sin embargo, OBIS también puede aprovechar [OceanExpert](https://oceanexpert.org/) para crear paneles de control organizativos similares a los paneles de control de editores creados por GBIF. Por ejemplo, US MBON: https://obis.org/organization/23070 |
| ¿La determinación de «marino» se basa en la taxonomía, las coordenadas o ambas? | Se trata estrictamente de una interpretación de la existencia de los taxones como marinos en la base de datos WoRMS. |

## Recursos de datos de OBIS
Consulte la presentación «Publicación paralela en GBIF y OBIS» para obtener más enlaces, información y herramientas.

### Herramientas
- [The OBIS Manual](https://manual.obis.org/)
- [OBIS on YouTube](https://www.youtube.com/@oceanbiodiversityinformati6931)
- [Well-known Text (WKT) Visualization](wktmap.com)
- [OBIS Mapping Tool](maptool.obis.org)
- [OBIS Coordinate Conversion Tool](obis.shinyapps.io/coordinates)
- [OBIS Datasets on GitHub](github.com/iobis/obis-network-datasets)
- [robis](https://github.com/iobis/robis)
- [OBIS Tools](https://github.com/iobis/obistools)
- [LifeWatch & EMODnet Biology QC Tool](https://rshiny.lifewatch.be/BioCheck/)
- [BioDataGuide](https://ioos.github.io/bio_data_guide/)
- [OBIS Sequence Search](https://sequence.obis.org/)
- [OBIS Distribution Maps](https://shiny.obis.org/distmaps/)

### Vocabulario
- [The NERC Vocabulary Server (NVS)](https://vocab.nerc.ac.uk/search_nvs/)
- [SEaDataNet P01 Vocabulary](https://vocab.seadatanet.org/p01-facet-search)
- [OBIS Vocabularies](https://github.com/nvs-vocabs/OBISVocabs/issues)
- [OBIS Measurement Types](https://mof.obis.org/)

### Metadatos
- [GOOS BioEco Metadata Portal](https://bioeco.goosocean.org/)
- [EOV Data Management Tools](https://eovmetadata.obis.org/)
