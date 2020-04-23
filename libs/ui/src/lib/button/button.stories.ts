import {ButtonComponent} from "./button.component";
import {text, withKnobs} from "@storybook/addon-knobs";
import figmaDecorator from 'storybook-addon-figma';
import {withDesign} from "storybook-addon-designs";
export default {
  title: 'Special Button',
  decorators: [
    withKnobs,
    withDesign
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cvCrCmpy90x42ulcfiP27V/Untitled?node-id=2%3A2'
    }
  }
}

export const Default = () => ({
  component: ButtonComponent,
  props: {
    label: text('label', 'Button Label')
  }
});

export const FlatButton = () => ({
  component: ButtonComponent,
  props: {
    label: text('label','Flat Button'),
  }
});

export const OutlineButton = () => ({
  component: ButtonComponent,
  props: {
    label: text('label','Outline Button')
  }
});
