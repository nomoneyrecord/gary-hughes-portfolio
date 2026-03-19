import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';
import { Certifications } from './pages/certifications/certifications';
import { NeetcodePost } from './pages/blog-posts/neetcode-post/neetcode-post';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: 'certifications', component: Certifications },
  { path: 'blog', component: Blog },
  { path: 'blog/neetcode-post', component: NeetcodePost }
];
