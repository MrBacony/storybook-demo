import {ButtonComponent} from "./button.component";
import {text, withKnobs} from "@storybook/addon-knobs";

export default {
  title: 'Special Button',
  decorators: [withKnobs]
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
