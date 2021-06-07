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

  constructor() { }

  ngOnInit(): void {
  }

}
