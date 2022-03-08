import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-tool-tip',
  styleUrl: './tool-tip.css',
  shadow: true,
})
export class ToolTip {
  @Prop({ reflect: true, mutable: true }) visible = false;
  @Prop({ reflect: true }) infoText = '';

  hide() {
    this.visible = false;
  }

  onToolTip(show: boolean) {
    this.visible = show;
  }

  render() {
    let toolTip = this.visible ? <slot /> : '';
    return [
      <span class="help-icon" onMouseOver={this.onToolTip.bind(this, true)} onMouseLeave={this.onToolTip.bind(this, false)}>
        (?)
      </span>,
      <div class="tooltip">{toolTip}</div>,
    ];
  }
}
