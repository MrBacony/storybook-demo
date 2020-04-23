import {ButtonComponent} from "./button.component";

export default {
  title: 'Special Button'
}

export const Default = () => ({
  component: ButtonComponent,
  props: {
    label: 'Button Label'
  }
});
