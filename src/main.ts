import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { SampleComponent } from "./components/sampleComponent";
import { Viewport } from "./components/viewport";
import { Entity } from "./components/entity";
import { ColorComponent } from "./components/color-component";

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
    const entities = [
      Entity.create({ name: 'Bob' }),
      Entity.create({ name: 'Geoff' }),
      Entity.create({ name: 'Steve' }),
    ];
    entities[0].components.push(ColorComponent.create({ color: 'red' }));
    entities[1].components.push(ColorComponent.create({ color: 'green' }));
    entities[2].components.push(ColorComponent.create({ color: 'blue' }));
    entities.reverse(); // I have no idea why this is needed! Some silly bug somewhere
    this.viewport.entities.push(...entities);
  }
}

const app = new App();
await UI.create(document.body, app, app.template).attached;

app.initialize();
