import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { Blog } from './pages/blog/blog';
import { Certifications } from './pages/certifications/certifications';
import { NeetcodePost } from './pages/blog-posts/neetcode-post/neetcode-post';
import { PortfolioPost } from './pages/blog-posts/portfolio-post/portfolio-post';
import { SystemsPost } from './pages/blog-posts/systems-post/system-post';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },
  { path: 'certifications', component: Certifications },
  { path: 'blog', component: Blog },
  { path: 'blog/neetcode-post', component: NeetcodePost },
  { path: 'blog/portfolio-post', component: PortfolioPost },
  { path: 'blog/systems-post', component: SystemsPost }
];
