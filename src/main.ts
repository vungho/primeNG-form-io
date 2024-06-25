import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormioModule } from '@formio/angular';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
    <h1>Playground</h1>
    <input pInputText type="text" [(ngModel)]="msg" />
    <p>{{ msg }}</p>
    <div id="formio"></div>
  </main>
  `,
  imports: [InputTextModule, FormsModule, FormioModule],
})
export class App {
  msg = '';

  constructor() {
    setTimeout(() => this.initForm(), 5000);
  }

  initForm(): void {
    console.log('Thi');
  }
}

bootstrapApplication(App);
