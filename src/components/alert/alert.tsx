import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'wc-alert',
  styleUrl: './alert.css',
  shadow: true,
})
export class Alert {
  @Prop({ reflect: true, mutable: true }) heading: string;
  @Prop({ reflect: true, mutable: true }) message: string;
  @Prop({ reflect: true, mutable: true }) show: boolean;
  @Prop({ reflect: true, mutable: true }) type: 'success' | 'warning' | 'error' | 'info' = 'info';
  @Prop({ reflect: true, mutable: true }) size: 'sm' | 'md' | 'lg' = 'md';

  @Watch('show')
  alertChanged(newVal: string, oldVal: string){
    if( newVal !== oldVal) {
      console.log('alertChanged', oldVal, newVal)
    }
  }

  @Prop() autoClose = true;
  @Prop() closeInMs = 6000; // millisecond
  @Prop() closeIcon = true;

  closeAlert() {
    this.heading = '';
    this.message = '';
    this.show = false;
  }

  render() {
    let content = '';
    if (this.show) {
      // Enable auto close
      if (this.autoClose) {
        setTimeout(this.closeAlert.bind(this), this.closeInMs);
      }
      // Show close
      let close = this.closeIcon ? (
        <button class="icon" onClick={this.closeAlert.bind(this)}>
          &times;
        </button>
      ) : (
        ''
      );
      // Show heading
      let heading = this.heading ? <div class="heading">{this.heading}</div> : '';
      content = (
        <div class={`alert ${this.type} ${this.size}`}>
          <div class="flex-grow">
            {heading}
            <div class="message">{this.message}</div>
          </div>
          {close}
        </div>
      );
    }
    return content;
  }
}
