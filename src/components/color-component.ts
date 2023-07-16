// Should probably inherit Component
export class ColorComponent {
  public template = `
  <style>
    .color-component {
      position: absolute;
      width: 16px;
      height: 16px;
      top: 0;
      right: 16px;
    }
  </style>
  <div class="color-component" style="background-color: \${color};"></div>
  `;

  private constructor(public color: string) { }

  public static create(config: { color: string }): ColorComponent {
    return new ColorComponent(config.color);
  }
}
