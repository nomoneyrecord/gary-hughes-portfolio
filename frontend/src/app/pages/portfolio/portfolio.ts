import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Project {
  id: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
  image: string;
  repoUrl: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio implements OnInit {
  constructor(private route: ActivatedRoute) {}

  projects: Project[] = [
    {
      id: 'vacation-scheduler',
      title: 'Vacation Scheduler',
      tag: 'Android · Java · Room',
      summary: 'Mobile application for managing vacations and excursions with CRUD flows, validation, alerts, and local persistence.',
      details: 'Structured Android application for managing vacations and excursions, featuring CRUD operations, Room persistence, validation logic, and scheduled alerts.',
      image: '/images/vacation-scheduler.png',
      repoUrl: 'https://gitlab.com/wgu-gitlab-environment/student-repos/nomoneyrecord/d308-mobile-application-development-android/-/tree/working/VacationScheduler?ref_type=heads'
    },
    {
      id: 'inventory-application',
      title: 'Inventory Application',
      tag: 'Spring Boot · Java · Validation',
      summary: 'Academic Spring Boot project focused on validation logic, business rules, and structured backend application flow.',
      details: 'Academic backend-focused Spring Boot application built around inventory management concepts, emphasizing validation, business logic, and clear application structure.',
      image: '/images/inventory-generator.png',
      repoUrl: 'https://gitlab.com/wgu-gitlab-environment/student-repos/nomoneyrecord/d287-java-frameworks/-/tree/working?ref_type=heads'
    },
    {
      id: 'landon-hotel',
      title: 'Landon Hotel Project',
      tag: 'Java · Angular · Full Stack',
      summary: 'Full-stack academic project focused on Angular, Java backend integration, application architecture, and practical implementation.',
      details: 'Academic full-stack project integrating Angular and Java backend components, with emphasis on frontend-backend flow, application structure, and practical implementation decisions.',
      image: '/images/landon-hotel.png',
      repoUrl: 'https://gitlab.com/wgu-gitlab-environment/student-repos/nomoneyrecord/d387-advanced-java.git'
    }
  ];

  selectedProject: Project | null = null;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const projectId = params.get('project');

      if (!projectId) {
        return;
      }

      const match = this.projects.find(project => project.id === projectId);

      if (match) {
        this.selectedProject = match;
      }
    });
  }

  openProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }
}
