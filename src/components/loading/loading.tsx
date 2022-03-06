import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-loading',
  styleUrl: './loading.css',
  shadow: true,
})
export class Loading {
  @Prop({reflect: true, mutable: true}) type: 'partial' | 'full';
  @Prop({reflect: true, mutable: true}) backdrop = true;

  render() {
    let backdropCls = this.backdrop ? 'backdrop' : '';
    return (
      <div class={backdropCls + ' loader-main'}>
        <div class="position">
          <div class="loader"></div>
        </div>
      </div>
    );
  }
}
