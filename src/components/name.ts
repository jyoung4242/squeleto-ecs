import { Component } from "../lib/component";

export interface INameComponent {
    name: string;
}

export type NameType = string;

export interface NameComponent {
    name: NameType;
}

export class Name extends Component {
    public template = `
    <style>
      .name-component {
        position: absolute;
        width: 100px;
        height: 16px;
        top: -30px;
        left: -50px;
        text-align: center;
      }
    </style>
    <div class="name-component">\${value}</div>
    `;

    public value = '';
    public constructor() {
        super('name', Name, true);
    }

    public define(data: string): void {
        if (data == null) {
            return;
        }
        this.value = data;
    }
}
