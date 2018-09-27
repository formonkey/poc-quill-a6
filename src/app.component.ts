import 'quill-mention';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h3>Test</h3>
    <quill-editor [modules]="modules" (onContentChanged)="onChange($event)"></quill-editor>
      <br><br>
        {{ content | json }}
        <br><br>
      <quill-editor [modules]="modules" format="object" [(ngModel)]="this.content"></quill-editor>
  `,
  styles: [``],
})
export class AppComponent {
  modules = {};
  content: any = {
    opts: [
        {
            "key": "4g7gp",
            "text": "Test",
            "type": "header-one",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "5a2ns",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "esdji",
            "text": "¿Por qué realizar este test?",
            "type": "header-two",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "891r1",
            "text": "hola que tal estás, esto es una prueba para cambiar de componente y entender su estructura.",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [
                {
                    "offset": 0,
                    "length": 18,
                    "style": "BOLD"
                },
                {
                    "offset": 20,
                    "length": 7,
                    "style": "ITALIC"
                },
                {
                    "offset": 32,
                    "length": 11,
                    "style": "UNDERLINE"
                }
            ],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "thcq",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "e4h3n",
            "text": "No lo entiendo",
            "type": "header-three",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "3jj6h",
            "text": "Para entenderlo hará falta que comprendas estos conceptos:",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "a2j7k",
            "text": "",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "a7alu",
            "text": "Como siempre esto es solo una prueba",
            "type": "blockquote",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "4nkvc",
            "text": "Para que lo hacemos:",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "evoqd",
            "text": "Jugar con Angular Cli",
            "type": "ordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "64afu",
            "text": "Actualizar Angular a la versión 6",
            "type": "ordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "7ffb",
            "text": "Que mejoramos:",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "utoc",
            "text": "Eliminaremos React",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        },
        {
            "key": "ksfr",
            "text": "Podremos jugar mejor con Angular",
            "type": "unordered-list-item",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }
    ]
  };

  constructor(fb: FormBuilder) {
    const values = [
      { id: 1, value: 'Fredrik Sundqvist' },
      { id: 2, value: 'Patrik Sjölin' }
    ];

    this.modules = {
      formula: true,
      toolbar: [
          [ 'bold', 'italic', 'underline', 'strike' ],
          [{ header: [ 1, 2, 3, false ] }],
          [{ list: 'bullet' }, { list: 'ordered' }],
          [ 'blockquote' ],
      ],
      mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        source: function (searchTerm) {
          console.log(this);
          if (searchTerm.length === 0) {
            this.renderList(values, searchTerm);
          } else {
            const matches = [];
            for (let i = 0; i < values.length; i++)
              if (~values[i].value.toLowerCase().indexOf(searchTerm)) matches.push(values[i]);
            this.renderList(matches, searchTerm);
          }
        },
      }
    }
  }

  onChange(event) {
    console.log(event);
    this.content = event.content;
  }
}
