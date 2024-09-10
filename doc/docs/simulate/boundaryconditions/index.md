---
layout: default
title: Boundary Conditions
parent: Simulation
nav_order: 2
permalink: /docs/simulate/boundaryconditions/
---

# Boundary Conditions

<nav>
  <ul>
    <li><a href="../">Simulate</a></li>
    <li><strong>Boundary Conditions</strong></li>
    <li><a href="../particle_simulation">Particle Simulation</a></li>
    <li><a href="../parameters">Simulation Parameters</a></li>
  </ul>
</nav>

Boundary conditions are crucial in simulations as they define how particles or fields behave at the edges of the simulated space. In neuroscience simulations, these can represent various physical or biological constraints.

## Simple Boundary Condition Simulation

<div id="boundary-simulation-container" style="width: 500px; height: 500px; margin: 0 auto;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/boundary_conditions.js"></script>

This simulation demonstrates a simple model of particles bouncing within a 3D box, showcasing reflective boundary conditions.

## Types of Boundary Conditions in Neuroscience Simulations

1. **Reflective**: As shown in the simulation above, particles or signals bounce back at the boundary.
2. **Absorbing**: Particles or signals are removed from the simulation upon reaching the boundary.
3. **Periodic**: Particles or signals that exit one side of the simulation space re-enter from the opposite side.
4. **Fixed Value**: The boundary maintains a constant value, often used for simulating steady-state conditions.
5. **Flux**: Specifies the rate at which quantities enter or leave the system at the boundary.

The choice of boundary conditions depends on the specific neuroscience problem being modeled and the physical or biological constraints of the system under study.

<nav>
  <ul>
    <li><a href="../">Back to Simulate</a></li>
    <li><a href="../particle_simulation">Next: Particle Simulation</a></li>
  </ul>
</nav>
