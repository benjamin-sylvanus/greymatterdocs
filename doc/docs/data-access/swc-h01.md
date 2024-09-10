---
layout: default
title: SWC-H01 Data Access
parent: Data Access
nav_order: 1
permalink: /docs/data-access/swc-h01/
---

# SWC-H01 Data Access

This guide explains how to access and work with SWC data from the H01 dataset, a significant resource in neuroscience research.

> <small>S.W.C. stands for Stockley, Wheal, and Cannon, the format's initial designers.</small>

## What is H01?

H01 is a large-scale dataset of brain tissue, providing detailed neuronal structure information. It offers valuable insights into brain connectivity and morphology.

### Viewing H01 Data

Data can be viewed online via [Neuroglancer](https://github.com/google/neuroglancer), a WebGL-based viewer for volumetric data. Neuroglancer features:

- Display of arbitrary (non axis-aligned) cross-sectional views of volumetric data
- Visualization of 3-D meshes and line-segment based models (skeletons)

Configured Neuroglancer environments are available on the [H01 website](https://h01-release.storage.googleapis.com/index.html).

### Downloading H01 Data

While example notebooks are available on the H01 website, we've provided our own template notebooks for data access:

1. You can view and run the notebook directly in Google Colab: [SWC-H01 Data Access Notebook](https://colab.research.google.com/drive/1y0fmUBRyx44oKbvJt-BDTw__Q5o7yf2X?usp=sharing)

2. Alternatively, you can find the notebook in our repository: [SWC-H01 Notebook in Repository](/data-access/swc-h01/main.ipynb)

## Understanding SWC Files

Neuron skeletons are most commonly distributed as SWC files.

### SWC File Format

- **Encoding**: ASCII text
- **Comments**: Lines starting with #
- **Purpose**: SWC files store the connectivity of nodes in a neuron skeleton

For a detailed specification of the SWC format, refer to the [SWC File Format Specification](http://www.neuronland.org/NLMorphologyConverter/MorphologyFormats/SWC/Spec.html).
