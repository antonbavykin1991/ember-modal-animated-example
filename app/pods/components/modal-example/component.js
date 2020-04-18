import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class ModalExampleComponent extends Component {
  @tracked isModalVisible = false

  @action
  toggleModal(value) {
    this.isModalVisible = value
  }
}
