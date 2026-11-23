
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  // RouterLink — allows navigation to another page without a full browser refresh.
// RouterLinkActive — detects when a route is active and allows us to style its menu item.
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  navItems = [
    { label: 'Dashboard', icon: '▦', route: '/dashboard' },
    { label: 'Tickets', icon: '🎫', route: '/tickets' },
    { label: 'Users', icon: '♙', route: '/users' },
    { label: 'Support Team', icon: '♧', route: '/support-team' },
    { label: 'Categories', icon: '▤', route: '/categories' },
    { label: 'Reports', icon: '▥', route: '/reports' },
  ];
}
// label	Text displayed to the user
//icon	Icon displayed next to the text
//route	URL path to navigate to