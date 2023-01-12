import {Component, h, Prop, getAssetPath} from "@stencil/core";


@Component({
  tag: 'background-video',
  styleUrl: './background-video.scss',
  shadow: true,
  assetsDirs: ['img']
})
export class backgroundVideo {
  @Prop() image = "hero.jpg";

  render() {
    let imageSrc = getAssetPath(`./img/${this.image}`);
    return [
      <img src={imageSrc} alt="Girl in a jacket" width="500" height="600"/>
    ];
  }
}
