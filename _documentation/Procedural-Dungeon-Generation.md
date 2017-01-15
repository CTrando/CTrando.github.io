---
layout: post
title: Procedural Dungeon Generation 
permalink: /procedural-dungeon-generation-method-1/
---

The process of procedurally generating random dungeons is one that had stumped me for many weeks. In my first few months as a beginner program, PDG was one of my largest goals, but the scope was so great that I put it off for a while. 

However, sometime in July I was able to solve the problem, albeit very poorly. I have since replaced that algorithm with one that is hopefully a bit more efficient. For historical purposes, I will detail that failed process here as well.

To start with, I had a blank tileboard of Tile objects; it is a simple 2D array of tiles. 

In all of my code, I denote it as ```Tile[][] tileBoard```

So to initialize a new tileboard I would simply go like:

```java
tileBoard = new Tile[GAME_HEIGHT][GAME_WIDTH};
for(int i = 0; i< tileBoard.length; i++){
	for(int j = 0; j< tileBoard[0].length; j++){
		tileBoard[i][j] = new GenericTile(i, j, FloorFactoryObject //irrelevant as of now
	}
}
```
Where GenericTile is just the average tile. 

That would result in something like this, where I represent GenericTiles as a solid black. 

![TileBoard-Blank]({{site.baseurl}}/images/pdg-blank-tileboard.png)

Next, I would place a random amount of rooms. Rooms are denoted by groups of tiles that are at least 2x3 (widthxheight). I would do this by picking a random row and a random column and using that as a starting point. I would then generate a random width and height that are greater than my minimums. 

**Note that I had to worry about going out of bounds because I am using an array.**

```java
public class Room{
	public Room(Tile[][] tileBoard){
		//generate random row, column, width, and height		
	}

	public void placeTiles(Tile[][] tileBoard){
	for(int i = startingRow; i< startingRow + height; i++){
			for(int j = startingCol; j< startingCol + width; j++){
			tileBoard[i][j] = new RoomTile(i, j, floorFactory // once again, don't worry about this object)
			}
		}	
	}
} 
```
When I was doing this back in July, it was not nearly so elegant, but I've grown quite a bit in experience since then.

Anyways, I would now have placed rooms; usually I generated around 10 of them, but for sake of documentation, I will only do a few. 

![TileBoard-Room-Only]({{site.baseurl}}/images/pdg-tileboard-only-rooms.png)	

**Image increased in size for clarification.**

So now, I had to connect all the rooms together in order to get a coherent floor. That was a very taxing goal, as I had never encountered such a problem before. My solution in July 2016 was to give each ```Room``` a ```DoorTile```.

```java
//previous code
public void placeTiles(Tile[][] tileBoard){
	for(int i = startingRow; i< startingRow + height; i++){
			for(int j = startingCol; j< startingCol + width; j++){
			tileBoard[i][j] = new RoomTile(i, j, floorFactory // once again, don't worry about this object)
			}
		}	
	}
//addendum
//pick two random numbers between startingCol and startingCol + width and startingRow and startingRow + height. 

tileBoard[randomRow_in_room][randomCol_in_room] = new DoorTile(randomRow_in_room, randomCol_in_room, floorFactory //every time this object is mentioned, it is outside the scope of this documentation as of Jan. 2017);

}
```

I would also tell my main Controller - basically the object that was in command of the tileboard object, of the doors I added and their positions. I accomplished this through an arraylist of doors. 

```java
public void placeTile(Tile[][] tileBoard){
//previous code here...

//instead of instantiating an object directly, I make it a two step process so I can add to my list
Door newDoor = new DoorTile(randomRow_in_room, randomCol_in_room, floorFactory);
tileBoard[randomRow_in_room][randomCol_in_room] = newDoor;

mainController.doorList.add(newDoor);
}
```
It would look something like this, with the green representing the doors.

![TileBoard-Room-With-Doors]({{site.baseurl}}/images/pdg-tileboard-room-with-doors.png)

Now here is the main part of this process. For each door, I would find its closest neighbor, and create a path connecting with it. 

```java 
public void linkDoors{
	for(Door door: doorList){
		Tile tile = this.findClosestDoor(door);
		
		//where createPath is a static method which takes in two tiles and makes a path between them 
		createPath(door, tile);
	}
}

public Tile findClosestDoor(Door door){
	//guarenteed a return tile because guarenteed there will be more than 1 door because guarenteed there will be more than 1 room
	
	Tile retTile = null;
	int distance = //really big number - probably max int
	for(Door dest: doorList){
		if(calculateDistanceTo(door, dest) < distance && door != dest){
			distance = calculateDistanceTo(door, dest);
			retTile = dest;
		}
	}
	return retTile;
}
	

public void createPath(Tile start, Tile end){
//find the rows and columns of both tiles and see which one is larger
	for(int i = smallerTileRow; i< biggerTileRow; i++){
		tileBoard[i][smallerTileCol] = new PathTile(i, smallerTileCol, floorFactory);
	}
	for(int j = smallerTileCol; j< biggerTileCol; j++){
		tileBoard[smallerTileRow][j] = new PathTile(smallerTileCol, j, floorFactory);
	}
}
```

That process will lead to a problem of floating rooms however. As can be seen below:

![TileBoard-Room-Incomplete-Paths]({{site.baseurl}}/images/pdg-tileboard-rooms-incomplete-paths.png)	

The rooms are not connected. So if I were to start out at one point in the floor, I would not be able to hit eery single tile. 

This stumped me for quite a while, but what I ended up doing was a modified djikstra's algorithm, For the purpose of length, I will not detail how I implented the algorithm, but essentially, it is the repetitive process of checking neighbors over and over. 

```java
public void assertContinuity{
	//out of all my roomtiles, I chose a random one
	RoomTile randTile = //random RoomTile

	//This method will see how many tiles can be checked if initially started from randTile. The algorithm will first check randTiles neighbors, then its neighbors neighbors. If the neighbors are RoomTiles or PathTiles or any walkable tile, then it will add it to the list of tilesChecked. If not, it will do nothing. 

	ArrayList<Tile> tilesChecked = getAllNeighborsFrom(randTile);

	//I still have a list of all the RoomTiles in the floor
	ArrayList<Tile> masterTileList = //consists of all walkable tiles in the floor

	//By subtracting the two lists I have, I can tell if there are still more tiles that can be walked on that have not been hit
	masterTileList.subtract(tilesChecked);
	// now masterTileList consists of the tiles that were not visited 

	if(masterTileList.length > 0){
		//choose random tile from masterTileList
		//choose random tile from tilesChecked

		//this will create a path between one of the visited and unvisited tiles
		createPath(randMaster, randTilesChecked);

		//recursion to make sure there are no more floaters
		assertContinuity;
	}	
}
```

So that is basically the process of how I did procedural dungeon generation the first time. It took me at least a month to finish it, but I soon replaced it. I shall detail that later because it is getting late.

{{site.baseurl}}

![TileBoard-Final-Room]({{site.baseurl}}/images/pdg-final-tileboard.png)
