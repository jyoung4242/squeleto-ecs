import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { SampleComponent } from "./components/sampleComponent";
import { Viewport } from "./lib/viewport";
import { Entity } from "./lib/entity";
import { ColorComponent } from "./components/color-component";
import { Name } from "./components/name";
import { Color } from "./components/color";
import { Position } from "./components/position";

class App {
  public SampleComponent = SampleComponent;
  public compState = {
    name: "bob",
    cssClass: "mySampleComponent",
  };

  public viewport = Viewport.create({ name: 'main' });

  public template = `
  <div class="app">
    < \${SampleComponent === compState}>
    <div>< \${ viewport === } ></div>
  </div>
  `;

  public initialize() {
    // Make sure components are bundled and run (need to make this look better)
    [new Name(), new Color(), new Position()];

    const entities = [
      Entity.create({
        id: `1`,
        components: {
          name: 'Bob',
          color: 'red',
          position: [50, 50],
        },
      }),
      Entity.create({
        id: `2`,
        components: {
          name: 'Geoff',
          color: 'green',
          position: [100, 100],
        },
      }),
      Entity.create({
        id: `3`,
        components: {
          name: 'Steve',
          color: 'blue',
          position: [200, 125],
        },
      }),
    ];

    // const entities = [
    //   Entity.create({ name: 'Bob' }),
    //   Entity.create({ name: 'Geoff' }),
    //   Entity.create({ name: 'Steve' }),
    // ];
    // entities[0].components.push(ColorComponent.create({ color: 'red' }));
    // entities[1].components.push(ColorComponent.create({ color: 'green' }));
    // entities[2].components.push(ColorComponent.create({ color: 'blue' }));
    entities.reverse(); // I have no idea why this is needed! Some silly bug somewhere
    this.viewport.entities.push(...entities);
    console.log(entities);
  }
}

const app = new App();
await UI.create(document.body, app, app.template).attached;

app.initialize();
