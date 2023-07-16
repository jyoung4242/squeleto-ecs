// list-item.js
import { UI } from "@peasy-lib/peasy-ui";

export class SampleComponent {
  static template = "<span>Hello I'm a sample component: ${name}!</span>"; // This can also be a template element
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  static create(state: any) {
    return new SampleComponent(state.name);
  }
}
UI.register("SampleComponent", SampleComponent); // Can be replaced with a property on invoking model
