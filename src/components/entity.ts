export class Entity {
  public template = `
  <style>
    .entity {
      position: relative;
    }
  </style>
  <div class="entity">
    <div>Hello, my name is \${name}!</div>
    < \${ component === } \${ component <=* components } >
  </div>
  `;

  public components: any[] = []; // Should probably use Component
  
  private constructor(public name: string) { }

  public static create(config: { name: string }): Entity {
    return new Entity(config.name);
  }
}
