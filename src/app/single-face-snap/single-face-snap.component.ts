import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CommonModule, DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports:[
    NgStyle,
    NgClass,
    CommonModule,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})


export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean; 

  constructor(private faceSnapsService: FaceSnapsService, 
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap(); 
  }

  onSnap() : void {
    if(this.userHasSnapped) {
      this.unSnap()
    } else {
      this.snap()
    }
  }

    unSnap() {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
      this.snapButtonText = 'Oh snap !';
      this.userHasSnapped = false;
    }

    snap() {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
      this.snapButtonText = 'Oups ! Unsnap';
      this.userHasSnapped = true;
    }

    private getFaceSnap() {
      const faceSnapId = this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapsService.getFaceSnapsById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = 'oh Snap ! ';
    this.userHasSnapped = false;
  }
}


