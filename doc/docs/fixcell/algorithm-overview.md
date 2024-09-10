---
layout: default
title: Algorithm Overview
parent: FixCell
nav_order: 1
permalink: /docs/fixcell/algorithm-overview/
---

# Algorithm Overview

![FixCell Algorithm Visualization]({{ site.baseurl }}/assets/images/fixcell_algorithm.svg)

The high-level outline of the FixCell algorithm is straightforward. The bulk of the work done is dependent on graph and network algorithms relating to paths and spanning trees.

## Process Overview

1. Create a Graph from an SWC
2. Prune Tree
3. Determine Breakpoints
4. Calculate Global and Local Directions
5. Determine Candidate Connections
6. Select a Connection
7. Validity Check

## Detailed Steps

### 1. Create a Graph from an SWC

- Nodes: [Id, x, y, z, r]
- Edges: [childId, parentId]
- Graph: [Nodes, Edges]

### 2. Prune Tree

High-resolution EM data, such as that obtained from H01, yields complex trees. On larger cells, the underlying backbone is obstructed by small branches. We remove these appendages for now.

- Remove Degree 1 nodes iteratively
- Store Appendages (for later use)

Node Degree in an undirected graph is a common metric for Nodes. For any node n, its degree is equal to its number of edges.
For a well-formed SWC file, nodes should have degree 1 or 2, and the total number of edges = total number of nodes - 1.

### 3. Determine Breakpoints

Using the backbone graph we generated from pruning, we can identify candidate breakpoints as the Degree 1 Nodes.

### 4. Calculate Global and Local Directions

Each breakpoint belongs to a branch of our tree. The global direction is a vector that defines the general direction a branch is traveling with respect to the soma. It helps us classify what type of connection we are looking for. There are two types:

- A branch is already connected to the main branch and is looking for a connection to an unconnected branch.
- A branch is disconnected and is looking for a connection to the main branch.

Using the global direction as a frame of reference, we can determine the localized direction of each breaking point.

### 5. Determine Candidate Connections

Connections are made based on the distance and angle between breaking points. We create a weighted score of each breaking point and set our candidates for each breaking point as the connections with scores above a dynamic threshold.

### 6. Select a Connection

We prioritize connections close to the soma. This ensures multi-level break points don't miss segments.

### 7. Validity Check

We repeat the selection procedure until our graph is fully connected.
