import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { SampleComponent } from "./components/sampleComponent";

const model = {
  SampleComponent,
  compState: {
    name: "bob",
    cssClass: "mySampleComponent",
  },
};

const template = `
    <div>  
        <\${SampleComponent === compState}>        
    </div>
`;

await UI.create(document.body, model, template).attached;
