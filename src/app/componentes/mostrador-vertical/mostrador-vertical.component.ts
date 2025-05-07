import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-mostrador-vertical',
  standalone: true,
  imports: [DialogModule,
    ButtonModule,
    DividerModule],
  templateUrl: './mostrador-vertical.component.html',
  styleUrl: './mostrador-vertical.component.css'
})
export class MostradorVerticalComponent {

  titulo: String = "Mostrador vertical";
  moduloCargado: any = 0;
  mostrarDialog: boolean = false;

  testData: any[] = [
    {
      title:"Mostrador Vertical 1",
      subtitle:"Wena los k",
      body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
    },
    {
      title:"Mostrador Vertical 2",
      subtitle:"Wena los k",
      body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
    },
    {
      title:"Mostrador Vertical 3",
      subtitle:"Wena los k",
      body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
    }
  ];

  showModal(index: any){
    this.moduloCargado = index;
    this.mostrarDialog = true;
    console.log(index);
  }
}
