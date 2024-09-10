---
layout: default
title: Parameters
parent: Simulation
nav_order: 1
permalink: /docs/simulate/parameters/
---

# Overview and Parameters

The simulation software allows users to configure their simulations through various command-line arguments, affecting everything from initial conditions to simulation duration and output data. Below is a summary of key parameters and modifiers:

## Execution and Data Handling

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| `-h`      | Displays help information.                   |
| `-c`      | Lists available commands.                    |
| `-a`      | Shows command arguments.                     |
| `-s`      | Displays current settings or configurations. |

## Simulation Configuration

| Parameter | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| `-d0`     | Specifies the [intrinsic diffusivity]({{ site.baseurl }}/docs/simulate/#Intrinsic Diffusivity) for each region.   |
| `-ii`     | Selects the method for [initializing particles]({{ site.baseurl }}/docs/simulate/#Init In) within the simulation. |
| `-ts`     | Sets the [simulation time step]({{ site.baseurl }}/docs/simulate/#Time Step).                                     |
| `-vs`     | (Currently unavailable) Defines the [voxel size]({{ site.baseurl }}/docs/simulate/#Voxel Size) for simulation.    |
| `-ns`     | Configures the total [number of simulation steps]({{ site.baseurl }}/docs/simulate/#NStep).                       |
| `-np`     | Indicates the [number of particles]({{ site.baseurl }}/docs/simulate/#NPar) in the simulation.                    |

## File and Output Management

| Parameter | Description                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| `-p`      | Determines the [path for simulation input data]({{ site.baseurl }}/docs/simulate/#In Path) and look-up tables. |
| `-o`      | Sets the [directory for simulation results]({{ site.baseurl }}/docs/simulate/#Out Path).                       |
| `-sa`     | Chooses whether to [save all location data]({{ site.baseurl }}/docs/simulate/#Save All).                       |

## Simulation Control

| Parameter           | Description                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `-ss`               | Modifier for [step size]({{ site.baseurl }}/docs/simulate/#Step Size) to adjust simulation dynamics.                           |
| `-pp`               | Modifier for [permeation probability]({{ site.baseurl }}/docs/simulate/#Permeation Probability) to adjust simulation dynamics. |
| `-q`, `-Q`, `-done` | Commands to start the simulation, with options to quit or finalize the process.                                                |

This overview provides a comprehensive guide for configuring and running simulations, ensuring users can tailor the processes to their specific needs. For more detailed information on each parameter, click on the linked descriptions.

<nav>
  <ul>
    <li><a href="{{ site.baseurl }}/docs/simulate/">Back to Simulate</a></li>
    <li><a href="{{ site.baseurl }}/docs/simulate/boundaryconditions/">Next: Boundary Conditions</a></li>
  </ul>
</nav>
