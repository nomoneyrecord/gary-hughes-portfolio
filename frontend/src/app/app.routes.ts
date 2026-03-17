import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: 'certification', component: Contact},
  { path: 'blog', component: Blog }
];
