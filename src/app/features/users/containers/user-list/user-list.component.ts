import { Component } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-user-list',
  imports: [SharedModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

}
