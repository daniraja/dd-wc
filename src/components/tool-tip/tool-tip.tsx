import { Component, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'wc-tool-tip',
  shadow: true,
})
export class ToolTip {
  @Prop({ reflect: true, mutable: true }) visible = false;
  @Prop({ reflect: true }) infoText = '';

  hide() {
    this.visible = false;
  }

  @Method()
  async show() {
    this.visible = true;
  }

  render() {
    return (
      <span>?</span>
    )
  }
}
