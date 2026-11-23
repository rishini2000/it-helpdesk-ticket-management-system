
import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  searchPlaceholder = 'Search tickets, users...';

  userName = 'Admin User';
  userRole = 'System Administrator';
  userInitials = 'AU';
}
