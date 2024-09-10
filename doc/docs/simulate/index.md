---
layout: default
title: Simulation
nav_order: 5
has_children: true
permalink: /docs/simulate/
---

# Simulation

This section covers the configuration and parameters for running simulations.

## Key Equations

<details>
<summary>Step Size Equation</summary>

<div markdown="1">

$$ \delta x = \sqrt{2dD_0\delta t} $$

Where:

- $\delta x$ is the step size
- $d$ is the dimensionality of the system
- $D_0$ is the diffusion coefficient
- $\delta t$ is the time step

</div>
</details>

<details>
<summary>Permeation Probability Equation</summary>

<div markdown="1">

$$ \frac{P}{P-1} = \frac{2\kappa \delta s}{D_0} $$

Where:

- $P$ is the permeation probability
- $\kappa$ is the membrane permeability
- $\delta s$ is the step size
- $D_0$ is the diffusion coefficient

</div>
</details>

## Simulation Configuration

<details id="step-size">
<summary>Step Size</summary>

Defines the step size for particle movement in the simulation.

The step size is calculated using the following equation:

$$ \delta x = \sqrt{2dD_0\delta t} $$

Where:

- $\delta x$ is the step size
- $d$ is the dimensionality of the system
- $D_0$ is the diffusion coefficient
- $\delta t$ is the time step

</details>

<details id="permeation-probability">
<summary>Permeation Probability</summary>

Determines the likelihood of particles passing through membranes or boundaries.

The permeation probability is related to the membrane permeability by the following equation:

$$ \frac{P}{P-1} = \frac{2\kappa \delta s}{D_0} $$

Where:

- $P$ is the permeation probability
- $\kappa$ is the membrane permeability
- $\delta s$ is the step size
- $D_0$ is the diffusion coefficient

</details>

<details id="intrinsic-diffusivity">
<summary>Intrinsic Diffusivity</summary>

Specifies the intrinsic diffusivity for each region in the simulation.

</details>

<details id="init-in">
<summary>Init In</summary>

Specifies the initial condition for particle placement:

- Initialize all particles inside.
- Initialize particles freely inside bounding box.
- Initialize particles at center of cell.
</details>

<details id="time-step">
<summary>Time Step</summary>

Specifies the time step for the simulation.

</details>

<details id="voxel-size">
<summary>Voxel Size</summary>

Sets the voxel size for the simulation. This feature is currently unavailable.

</details>

<details id="nstep">
<summary>NStep</summary>

Defines the number of steps for the simulation.

</details>

<details id="npar">
<summary>NPar</summary>

Sets the number of particles for the simulation.

</details>

## File Management

<details id="in-path">
<summary>In Path</summary>

Specifies the path of lookup table and simulation input data. Updating this path refreshes the simulation with new data and configuration.

</details>

<details id="out-path">
<summary>Out Path</summary>

Sets the directory for saving simulation results.

</details>

<details id="save-all">
<summary>Save All</summary>

Option to save all particle location data.

</details>
