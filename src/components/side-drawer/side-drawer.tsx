import { Component, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'wc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true, mutable: true }) open = false;
  @Prop({ reflect: true }) closable = true;

  @Prop({ reflect: true }) headerText = '';

  closeDrawer() {
    this.open = false;
  }

  @Method()
  async openDrawer() {
    this.open = true;
  }

  render() {
    return [
      <div class="backdrop"></div>,
      <aside>
        <header class="p-3 flex justify-between shadow-lg">
          <h2 class="m-0 p-0 flex-grow text-center">{this.headerText}</h2>
          <button class="cursor-pointer text-2xl border-0" onClick={this.closeDrawer.bind(this)} aria-label="Close" title='Close'>&times;</button>
        </header>
        <main class="h-full p-5 prose">
          <slot name="content" />
        </main>
      </aside>
    ];
  }
}
