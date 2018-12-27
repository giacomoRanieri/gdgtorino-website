import {customElement, html} from '@polymer/lit-element';
import {RouterPage} from '../router-page';

@customElement('page-about')
class PageAbout extends RouterPage {

    render() {
        return html`
          <h1>About</h1>
        `;
    }

}