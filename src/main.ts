import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { SampleComponent } from "./components/sampleComponent";

const model = {
  names: ["bobs", "your", "uncle"],
};

const template = `
<template>
    <div>
        <div pui="name <=* names"><sample-component pui="SampleComponent === name"></sample-component></div>
    </div>
</template>
`;

await UI.create(document.body, model, template).attached;
console.log(`Hello World`);

/*
<rendered-systems \${system<=*systems}></rendered-systems>
<rendered-entities \${entity<=*entities}></rendered-entities>
*/
