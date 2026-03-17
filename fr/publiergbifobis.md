---
layout: heroImage
title: Publication parallèle sur GBIF et OBIS
description: Webinaire GBIF Amérique du Nord
lang: fr
lang-ref: publishgbifobis
background: assets/images/20240929_Boulegeade_Sphyraena_3.JPG
imageLicense: Photo d'Emilie Boulanger, Parc national des Calanques à Marseille, 2024
height: 70vh
toc: true
---

## Webinaire : Publication parallèle sur GBIF et OBIS

Ce webinaire a été présenté le 12 mars 2026 dans le cadre de la première partie de la réunion et de la formation des nœuds GBIF Amérique du Nord 2026.
 
**Intervenants :**
- **Elizabeth Lawrence**, responsable de la formation OBIS
- **Steven Formel**, gestionnaire de données OBIS
- **David Bloom**, responsable du projet VertNet

**Thèmes abordés :**
- Comment publier simultanément des ensembles de données axés sur le milieu marin sur GBIF et OBIS
- Avantages de la publication sur OBIS
- Principales différences entre les exigences de publication de GBIF et d'OBIS (y compris quelques conseils de l'IPT)
- Outils pour aligner vos taxons avec WoRMS

## Vidéo du webinaire

<iframe src="https://drive.google.com/file/d/10N-5hfUkPoZwoNa3KN0FDospC2TpdkS-/preview" width="640" height="480"></iframe>

## Présentations

- [Accueil du webinaire et actualités du GBIF](/assets/documents/Introduction&Overview_GBIFNAWebinar20260312.pdf) (.pdf)
- [Publication parallèle sur le GBIF et l'OBIS](/assets/documents/ParallelPublishing_GBIFNAWebinar20260312.pdf) (.pdf)

## Questions et réponses

Les questions ci-dessous ont été posées dans le chat du webinaire. Certaines réponses ont été modifiées pour plus de précision et de clarté. Veuillez regarder la vidéo pour obtenir tous les détails.

| Question | Réponse |
|-----------|-------------|
| Si les données ne satisfont pas aux critères de contrôle qualité d'OBIS, les enregistrements sont-ils supprimés ? | Les enregistrements sont supprimés lorsqu'ils présentent des coordonnées manquantes ou nulles, ou lorsque les espèces sont signalées comme non marines dans WoRMS. Cependant, les utilisateurs peuvent toujours accéder aux enregistrements supprimés via l'IPT ou d'autres points de publication, et les consulter sur la page d'accueil de l'ensemble de données, sous l'onglet « Qualité des données ». |
| Existe-t-il un projet visant à rationaliser conjointement GBIF et OBIS ? | Oui. OBIS et GBIF ont approuvé une stratégie et un plan d'action communs pour les données sur la biodiversité marine. Voir : [OBIS et GBIF approuvent une stratégie et un plan d'action communs pour les données sur la biodiversité marine](https://www.gbif.org/news/7w0xoodpNZRwnt1SjWfML0/obis-and-gbif-endorse-joint-strategy-and-action-plan-for-marine-biodiversity-data) |
| Pouvez-vous montrer comment accéder au contenu du tableau comparatif entre OBIS et GBIF ? | Vous trouverez un aperçu et des liens expliquant les différences dans la section du manuel OBIS consacrée à la publication des données OBIS vers GBIF. |
| Y a-t-il des conflits avec les publications contenant à la fois des données terrestres et marines dans le même ensemble de données ? | Non. Les taxons non marins seront filtrés lors de l'ingestion dans OBIS. Ils seront signalés comme NOT_MARINE et apparaîtront comme des enregistrements supprimés. |
| Que se passe-t-il lorsque les données d'ADN environnemental (eDNA) renvoient des résultats tels que « eucaryote non classé » ? | Actuellement, celles-ci sont interprétées comme Biota incertae sedis, car le système AphiaID ne classe pas au-delà du niveau du règne. L'équipe OBIS explore des solutions améliorées. |
| Ces processus peuvent-ils être utilisés pour identifier des espèces sur le terrain ? | Non. Désolé. |
| Si j'ai un ensemble de données publié sur GBIF, quelle est la méthode recommandée ou la meilleure pratique pour le publier également sur OBIS ? | Si votre ensemble de données est publié sur GBIF via l'IPT, vous pouvez sélectionner OBIS dans la section « Réseaux » de la page d'aperçu de l'IPT. Des ajustements supplémentaires peuvent être nécessaires pour rendre les données conformes aux normes OBIS. |
| L'un des avantages du marquage par rapport à la suppression d'un enregistrement est-il que les contributeurs peuvent corriger leurs données ultérieurement ? | Absolument ! OBIS et GBIF marquent tous deux les données pour aider les contributeurs à les améliorer. |
| Comment les classifications sont-elles mises à jour à mesure que de nouvelles séquences sont ajoutées aux bases de données ? | L'attribution taxonomique des séquences est effectuée par le fournisseur de données. OBIS maintiendra cette classification à jour avec WoRMS, mais actuellement, OBIS ne réinterprète pas la séquence. OBIS et GBIF sont conscients de la nécessité/du souhait d'un tel type de curation des séquences et travaillent ensemble pour trouver des solutions qui permettent de maintenir les informations à jour tout en laissant la prise de décision entre les mains des scientifiques qui fournissent les données. |
| Si vous constatez une erreur dans vos métadonnées ou si vous devez ajouter des informations (par exemple, la profondeur), comment les mettre à jour ? | Les métadonnées peuvent être mises à jour à tout moment via l'IPT. Si les données elles-mêmes changent, vous pouvez télécharger le fichier mis à jour et republier l'ensemble de données, ce qui crée une nouvelle version. |
| Si les collections sont publiées sur GBIF à l'aide d'un flux RSS plutôt que via l'IPT, sont-elles automatiquement intégrées par OBIS ? | Non, ces informations doivent être mises à jour en envoyant un e-mail au service d'assistance OBIS (helpdesk@obis.org). Cela revient à modifier le [registre GBIF](https://registry.gbif.org/organization/search) pour des points de publication similaires. |
| Est-il prévu d'inclure un jour les procaryotes ? | C'est déjà le cas 😀. Tant que vous pouvez attribuer votre procaryote à un règne, il peut être partagé en tant que tel dans OBIS. WoRMS ne dispose pas d'un niveau de classification par domaine, mais ses responsables sont conscients des difficultés que cela peut poser avec les données ADN. |
| Si je suis éditeur sur GBIF mais que je n'ai pas d'IPT, dois-je devenir éditeur sur OBIS ? | Seul GBIF dispose d'« éditeurs ». Il s'agit de métadonnées superposées au format EML fournies par la Darwin Core Archive. OBIS analyse le format EML provenant de la Darwin Core Archive afin de coordonner les organisations liées à un ensemble de données.  Cependant, OBIS peut également s'appuyer sur [OceanExpert](https://oceanexpert.org/) pour créer des tableaux de bord organisationnels similaires aux tableaux de bord des éditeurs créés par GBIF. Par exemple, [US MBON](https://obis.org/organization/23070) |
| La détermination du terme « marin » repose-t-elle sur la taxonomie, les coordonnées, ou les deux ? | Il s'agit strictement d'une interprétation de l'existence des taxons en tant que marins dans la base de données WoRMS. |

## Ressources de données OBIS
Veuillez consulter la présentation « Publication parallèle sur GBIF et OBIS » pour obtenir davantage de liens, d'informations et d'outils.

### Outils
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

### Vocabulaire
- [The NERC Vocabulary Server (NVS)](https://vocab.nerc.ac.uk/search_nvs/)
- [SeaDataNet P01 Vocabulary](https://vocab.seadatanet.org/p01-facet-search)
- [OBIS Vocabularies](https://github.com/nvs-vocabs/OBISVocabs/issues)
- [OBIS Measurement Types](https://mof.obis.org/)

### Métadonnées
- [GOOS BioEco Metadata Portal](https://bioeco.goosocean.org/)
- [EOV Data Management Tools](https://eovmetadata.obis.org/)
