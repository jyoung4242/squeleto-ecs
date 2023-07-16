import { System } from "../components/ecs";
import { PositionComponent } from "../components/position";
import { VelocityComponent } from "../components/velocity";
import { Entity } from "../lib/entity";
import { Vector } from "../lib/vector";

export type MovementEntity = Entity & PositionComponent & VelocityComponent;

export class MovementSystem extends System {

  public constructor() {
    super('movement');
  }

  public processEntity(entity: MovementEntity): boolean {
    return entity.position != null && entity.velocity != null;
  }

  public update(deltaTime: number, now: number, entities: MovementEntity[]): void {
    entities.forEach(entity => {
      if (!this.processEntity(entity)) {
        return;
      }

      if (randomInt(0, 100) < 10) {
        entity.velocity.add(new Vector(randomInt(-10, 10), randomInt(-10, 10), 0), true);
      }
      entity.position.add(entity.velocity.multiply(deltaTime), true);
      if (entity.position.x - 8 < 0 || entity.position.x + 8 > 480) {
        entity.position.x -= entity.velocity.multiply(deltaTime).x;
        entity.velocity.x = -entity.velocity.x;
      } 
      if (entity.position.y - 8 < 0 || entity.position.y + 8 > 320) {
        entity.position.y -= entity.velocity.multiply(deltaTime).y;
        entity.velocity.y = -entity.velocity.y;
      }
    });
  }
}

function randomInt(start: number, end: number): number {
  return Math.floor((Math.random() * (end - start)) + start);
}
