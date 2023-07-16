import { v4 as uuid4 } from "uuid";
export class Entity {
  name: string;
  id: string;
  constructor(name: string) {
    this.name = name;
    this.id = uuid4();
  }
}

export class Component {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export class System {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//types of systems  - the code that updates components(properties)
/*
Rendering
Camera
Movement
Particle
sprite animation
Physics
...
*/

//types of components - the properties that are bound to an entity
/*
movement
particle
position
velocity
sound effect
sprite
*/

//entities
/*
maps
players
npcs
collision bodies - walls.. etc
*/
