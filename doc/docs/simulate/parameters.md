---
layout: default
title: Parameters
parent: Simulation
nav_order: 1
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

| Parameter | Description                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| `-d0`     | Specifies the [intrinsic diffusivity](../simulate/#Intrinsic%20Diffusivity) for each region.   |
| `-ii`     | Selects the method for [initializing particles](../simulate/#Init%20In) within the simulation. |
| `-ts`     | Sets the [simulation time step](../simulate/#Time%20Step).                                     |
| `-vs`     | (Currently unavailable) Defines the [voxel size](../simulate/#Voxel%20Size) for simulation.    |
| `-ns`     | Configures the total [number of simulation steps](../simulate/#NStep).                         |
| `-np`     | Indicates the [number of particles](../simulate/#NPar) in the simulation.                      |

## File and Output Management

| Parameter | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| `-p`      | Determines the [path for simulation input data](../simulate/#In%20Path) and look-up tables. |
| `-o`      | Sets the [directory for simulation results](../simulate/#Out%20Path).                       |
| `-sa`     | Chooses whether to [save all location data](../simulate/#Save%20All).                       |

## Simulation Control

| Parameter           | Description                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| `-ss`               | Modifier for [step size](../simulate/#Step%20Size) to adjust simulation dynamics.                           |
| `-pp`               | Modifier for [permeation probability](../simulate/#Permeation%20Probability) to adjust simulation dynamics. |
| `-q`, `-Q`, `-done` | Commands to start the simulation, with options to quit or finalize the process.                             |

This overview provides a comprehensive guide for configuring and running simulations, ensuring users can tailor the processes to their specific needs. For more detailed information on each parameter, click on the linked descriptions.
