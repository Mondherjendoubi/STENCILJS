import {Component, h, Prop, State, Watch,} from "@stencil/core";


@Component({
  tag: 'story-comp',
  styleUrl: './story-comp.scss',
  shadow: true
})


export class StoryComp {

  @Prop({mutable: true, reflect: true}) titleStory: string;
  @Prop({mutable: true, reflect: true}) colorStory: string;
  @Prop({mutable: true, reflect: true}) fontColor: string;
  @Prop({mutable: true, reflect: true}) captionStory: string;
  @Prop({mutable: true, reflect: true}) url: string;
  @State() colorStoryInput: string;
  @State() fontColorInput: string;
  @State() titleInput: string;
  @State() captionInput: string;

  @Watch('captionStory')
  captionStoryChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.captionInput = newValue;
    }
  }

  @Watch('titleStory')
  colorButtonChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.titleInput = newValue;
    }
  }

  @Watch('fontColor')
  fontColorInputChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.fontColorInput = newValue;
    }
  }

  @Watch('colorStory')
  colorStoryChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.colorStoryInput = newValue;
    }
  }

  @Watch('titleStory')
  titleStoryChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.fontColorInput = newValue;
    }
  }

  componentWillLoad() {
    if (this.colorStory) {
      this.colorStoryInput = this.colorStory;
      this.fontColorInput = this.fontColor;
      this.titleInput = this.titleStory;
      this.captionInput = this.captionStory;
    }
  }

  render() {
    return [
      <div class={`story story--${this.colorStoryInput}`}>
        <figure class="story__shape">
          <img src={this.url}
               alt="Person on a tour" class="story__img"/>
          <figcaption class="story__caption">{this.captionInput}</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary u-margin-bottom-small">{this.titleInput}</h3>
          <p>
            <slot name='p'/>
          </p>
        </div>
      </div>
    ];
  }
}
