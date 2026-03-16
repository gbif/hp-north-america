---
layout: heroImage
title: Parallel Publishing to GBIF & OBIS
description: Resources from a GBIF NA webinar presented on 12 March 2026.
lang: en
lang-ref: publishgbifobis
background: assets/images/20240929_Boulegeade_Sphyraena_3.JPG
imageLicense: Photo by Emilie Boulanger, license pending
height: 70vh
toc: true
---

## Webinar: Parallel Publishing to GBIF & OBIS

This webinar was presented on 12 March 2026 as the first part of the GBIF North America's 2026 Nodes Meeting and Training.
 
**Presented by:**
- **Elizabeth Lawrence**, OBIS Training Officer
- **Steven Formel**, OBIS Data Manager and Principal of The Data Patch
- **David Bloom**, VertNet Project Magician

**Topics covered:**
- How to publish marine-focussed datasets to GBIF and OBIS simultaneously
- Benefits of publishing to OBIS
- Key differences in GBIF and OBIS publishing requirements (including some IPT tips)
- Tools to align your taxa with WoRMS

## Webinar Video

<iframe src="https://drive.google.com/file/d/10N-5hfUkPoZwoNa3KN0FDospC2TpdkS-/preview" width="640" height="480"></iframe>

https://drive.google.com/file/d/10N-5hfUkPoZwoNa3KN0FDospC2TpdkS-/view?usp=sharing

## Slide Decks

- [Webinar Welcome and GBIF Updates](/assets/documents/Introduction&Overview_GBIFNAWebinar20260312.pdf) (.pdf)
- [Parallel Publishing to GBIF & OBIS](/assets/documents/ParallelPublishing_GBIFNAWebinar20260312.pdf) (.pdf)

## Q & A

The following are questions and their answers as presented in the webinar chat. If a question was answered live in the webinar, it will not be included in this transcript. Some answers below have been modified for accuracy and simplicity. Please watch the video for all of the juicy details.

| Question | Answer |
|-----------|-------------|
| If data doesn’t meet quality control in OBIS, do the records get dropped? | Records are dropped when they have missing or zero coordinates or when species are flagged as non-marine in WoRMS. However, users can still access dropped records through the IPT or other publishing endpoints, and see dropped records on the dataset landing page under the Data Quality tab. |
| Is there a plan to make GBIF/OBIS streamline together? | Yes. OBIS and GBIF have endorsed a joint strategy and action plan for marine biodiversity data. See: https://www.gbif.org/news/7w0xoodpNZRwnt1SjWfML0/obis-and-gbif-endorse-joint-strategy-and-action-plan-for-marine-biodiversity-data |
| Can you show how to access what was in the table comparing OBIS vs GBIF? | You can find an overview and links explaining the differences in the OBIS manual section on publishing OBIS data to GBIF. |
| Are there any conflicts with publications containing both terrestrial and marine data in the same dataset? | No. Non-marine taxa will be filtered out during ingestion to OBIS. They will be flagged as NOT_MARINE and appear as dropped records. |
| What happens when eDNA data that returns results like "unclassified eukaryote"? | Currently these are interpreted as Biota incertae sedis because the AphiaID system does not classify above the kingdom level. The OBIS team is exploring improved solutions. |
| Can [these processes] be used to identify species while in the field? | No. Sorry. |
| If I have a dataset published on GBIF, what is the preferred way or best practice to publish it on OBIS as well? | If your dataset is published to GBIF through the IPT, you can select OBIS in the Networks section of the IPT overview page. Additional adjustments may be needed to make the data OBIS-compliant. |
| Is one advantage of flagging vs dropping a record that contributors can correct their data later? | YO ELIZABETH AND STEVE!!! |
| How do classifications get updated as more sequences are added to databases? | YO ELIZABETH AND STEVE!!! |
| If you find an error in your metadata or need to add information (e.g., depth), how do you update it? | Metadata can be updated at any time through the IPT. If the data itself changes, you can upload the updated file and republish the dataset, which creates a new version. |
| If collections are published to GBIF using an RSS feed rather than IPT, are they automatically ingested by OBIS? | YO ELIZABETH AND STEVE!!! |
| Is there a plan to one day include prokaryotes? | YO ELIZABETH AND STEVE!!! |
| If I am a publisher on GBIF but don't have an IPT, do I need to become a publisher on OBIS? | YO ELIZABETH AND STEVE!!! |
| Is the determination of 'marine' made by taxonomy, coordinates, or both? | YO ELIZABETH AND STEVE!!! |

## OBIS Data Resources
Please review the Parallel Publishing to GBIF & OBIS slide deck for more links, information and tools.

### Tools
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

### Vocabulary
- [The NERC Vocabulary Server (NVS)](https://vocab.nerc.ac.uk/search_nvs/)
- [SEaDataNet P01 Vocabulary](https://vocab.seadatanet.org/p01-facet-search)
- [OBIS Vocabularies](https://github.com/nvs-vocabs/OBISVocabs/issues)
- [OBIS Measurement Types](https://mof.obis.org/)

### Metadata
- [GOOS BioEco Metadata Portal](https://bioeco.goosocean.org/)
- [EOV Data Management Tools](https://eovmetadata.obis.org/)
