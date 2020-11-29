# Capstone Project - Mini Pop

## Project Links

[GitHub Repo Link](https://github.com/SeanUnland/unit-4-capstone)

## Project Description

I will be building a web based drum sequencer/sampler and synth application using Tone.js and React.

## Wireframe

[React Architecture](https://i.imgur.com/8rnVH0n.jpg)

[Wire Frame](https://i.imgur.com/KrVYlHe.jpg)

### MVP

A functional and interactive drum sequencer/sampler.

- User can create a drum sequence
- User can assign samples from a library to each sequence
- User can change BPM
- User can play synthesizer
- User can modify the sequece

### POST MVP

- User can add a swing percentage
- User can toggle filters such as EQ or distort
- Create timbre effects like a tape effect

### Components

| Component      | Description                                 |
| -------------- | ------------------------------------------- |
| App            | Will hold initial functions                 |
| Drum Sequencer | Be used to create the drum matrix and logic |
| Sample Library | Will hold all of the samples                |
| Synthesizer    | Will be used to create the synth            |
| Tempo          | Will be used to create and change the BPM   |
| Effects        | Can create effects that can be toggled      |

### Time Table

| Component      | Priority   | Estimated Time | Actual Time |
| -------------- | ---------- | -------------- | ----------- |
| App            | H          | 7              | 9           |
| Drum Sequencer | H          | 8              | 8           |
| Sample Library | H          | 7              | 7           |
| Synthesizer    | H          | 8              | 10          |
| Tempo          | H          | 4              | 11          |
| Effects        | M          | 8              | 9           |
|                | Total Time | 42             | 54          |

## Additional Libraries

Tone.js

React

Framer Motion

Start Audio Context

## Code Snippet

This snippet of code created a synthesizer that plays a C eigth note at the second octave.

```
const newSynth = new Tone.MembraneSynth().toMaster();

function playNewSynth() {
  newSynth.triggerAttackRelease("C2", "8n");
}
```
