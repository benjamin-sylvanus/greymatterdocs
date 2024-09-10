---
layout: default
title: Particle Simulation
parent: Simulation
nav_order: 3
permalink: /docs/simulate/particle_simulation/
---

# Particle Simulation

Semi-realistic particle Monte Carlo simulation. _(Work in progress)_

<div id="simulation-container" style="width: 500px; height: 500px; margin: 0 auto;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/particle_simulation.js"></script>

## Explanation of the Simulation

In this simulation:

1. **The Box**: Represents the boundaries of our simulated space.
2. **Particles**: Each sphere represents a particle moving within the box.
3. **Reflective Boundaries**: When a particle hits a wall, it bounces back, reversing its velocity in that dimension.
4. **Velocity Indicators**: Green arrows show the current velocity of each particle.
5. **Reflection Indicators**: Red arrows briefly appear when a particle reflects off a wall, showing the new direction.

<nav>
  <ul>
    <li><a href="{{ site.baseurl }}/">Back to Main</a></li>
    <li><a href="{{ site.baseurl }}/docs/simulate/parameters/">Next: Simulation Parameters</a></li>
  </ul>
</nav>
