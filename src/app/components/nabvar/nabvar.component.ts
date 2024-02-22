import { Component } from '@angular/core';
import { LinkedInComponent } from '../icons/linked-in/linked-in.component';
import { GitHubComponent } from '../icons/git-hub/git-hub.component';

@Component({
  selector: 'app-nabvar',
  standalone: true,
  imports: [LinkedInComponent, GitHubComponent],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {

}
