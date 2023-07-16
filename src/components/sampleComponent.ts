// sampleComponent.ts
import { UI } from "@peasy-lib/peasy-ui";

export class SampleComponent {
  public static template = `
  <style>
  .\${cssClass}{
    border: 1px red solid;
    position: fixed;
    top: 15px;
    left: 15px;
    padding: 10px;
  }
  </style>
  <sample-component class="\${cssClass}">Hello I\'m a sample component: \${name}!</sample-component>`;

  constructor(public name: string, public cssClass: string) {}

  public static create(state: { name: string; cssClass: string }): SampleComponent {
    return new SampleComponent(state.name, state.cssClass);
  }
}
