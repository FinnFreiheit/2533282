import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';


@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  wikiSearchForm!: FormGroup;
  public wikiData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiuxService: ApixuService,
  ) {
  }

  ngOnInit(): void {
    this.wikiSearchForm = this.formBuilder.group({
      wiki: ['']
    });
  }

  sendToAPIWiki(formValues: any): void {
    this.apiuxService
      .getWiki(formValues.wiki)
      .subscribe((data: any) => {
        const keys = Object.keys(data.query.pages);
        // console.log(keys);
        const firstProperty = JSON.parse(keys[0]);
        // console.log(firstProperty);
        this.wikiData = data.query.pages[firstProperty];
        console.log(this.wikiData);
      });
  }
}
