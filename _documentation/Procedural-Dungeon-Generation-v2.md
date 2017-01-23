---
layout: post
title: Procedural Dungeon Generation v2
permalink: /procedural-dungeon-generation-v-2/
tags: algorithm
---


Now on to the second algorithm I used to accomplish Procedural Dungeon Generation. This time, it is a much simpler format. 

First, I begin with a blank tileBoard.

```java
tileBoard = new Tile[HEIGHT][WIDTH];
//initialize tileBoard with blank GenericTiles
```

I then go with a ```Room```, similar to how I did in the previous version. The room is defined as having a ```startingRow```, ```startingCol```, ```width```, and ```height```. 

But now is where things differ. Instead of doors, I have created ```connector``` objects in rooms, instead of doors. Moreover, instead of randomly putting a door within the rooms, I have made it so that connectors can only be tiles on the very edges of rooms.
