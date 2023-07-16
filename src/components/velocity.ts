import { Component } from "../lib/component";
import { Vector } from "../lib/vector";

export interface IVelocity {
    x: number;
    y: number;
}
export interface IVelocityComponent {
    velocity: IVelocity;
}

export type VelocityType = Vector;

export interface VelocityComponent {
    velocity: VelocityType;
}

export class Velocity extends Component {
    public value = new Vector();
    public constructor() {
        super('velocity', Velocity, true);
    }

    public define(data: IVelocity | number[]): void {
        if (data == null) {
            return;
        }
        if (Array.isArray(data)) {
            this.value.x = data[0];
            this.value.y = data[1];
        } else {
            this.value.x = data.x;
            this.value.y = data.y;
        }
    }
}
