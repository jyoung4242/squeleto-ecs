import { Entity } from "./entity";

export class Viewport {
  public template = `
  <style>
    .viewport {
      border: 1px red solid;
      background-color: white;
      position: fixed;
      top: 75px;
      left: 15px;
      width: 480px;
      height: 320px;
    }
  </style>
  <div class="viewport">
    < \${ entity === } \${ entity <=* entities }
  </div>
  `;

  public entities: Entity[] = [];
  
  private constructor(public name: string) { }

  public static create(config: { name: string }): Viewport {
    return new Viewport(config.name);
  }
}
