import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'very-basic-card',
  styleUrl: 'very-basic-card.css',
  shadow: true,
})
export class VeryBasicCard {

  @Prop({ mutable: true }) img: string = 'https://via.placeholder.com/320x150'

  @Prop({ mutable: true }) heading: string = 'Heading'

  @Prop({ mutable: true }) description: string = 'This is a short example description.'

  render() {
    return (
      <Host>
        <img src={this.img}/>
        <article>
          <h3>{this.heading}</h3>
          <p>{this.description}</p>
        </article>
      </Host>
    );
  }

}
