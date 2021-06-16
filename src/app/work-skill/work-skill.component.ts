import { Component, OnInit } from '@angular/core';
import { Skill } from './../skill';
import  { SKILLS } from './../mock-skills';

@Component({
  selector: 'app-work-skill',
  templateUrl: './work-skill.component.html',
  styleUrls: ['./work-skill.component.css']
})
export class WorkSkillComponent implements OnInit {
  skills = SKILLS;
  noteOpacity: number = 0.0;
  constructor() { }

  /**
   * Increase opacity of posters description gradually
   * @param increaseTo (value between 0.0 to 1.0)
   */
  async increaseOpacity(increaseTo: number): Promise<void> {
    await sleep(3000);

    while(this.noteOpacity <= 1.0) {
      this.noteOpacity += increaseTo;
      console.log("noteOpacity at " + this.noteOpacity);
      await sleep(250);
    }
  }

  ngOnInit(): void {
    this.increaseOpacity(0.1)
  }

}

/**
 * Make a code execution delay for a given number of milliseconds.
 * @param ms delay time in milliseconds
 * @returns
 */
const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
