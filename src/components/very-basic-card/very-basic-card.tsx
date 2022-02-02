import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'very-basic-card',
  styleUrl: 'very-basic-card.css',
  shadow: true,
})
export class VeryBasicCard {

  render() {
    return (
      <Host>
        <img src="" alt="" />
        <h3></h3>
        <p></p>
      </Host>
    );
  }

}
