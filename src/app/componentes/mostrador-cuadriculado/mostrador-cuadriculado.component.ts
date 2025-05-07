import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-mostrador-cuadriculado',
  standalone: true,
  imports: [SplitterModule],
  templateUrl: './mostrador-cuadriculado.component.html',
  styleUrl: './mostrador-cuadriculado.component.css'
})
export class MostradorCuadriculadoComponent {

  title: String = "Mostrador cuadriculado";
  subTitle: String = "Mostrador cuadriculado subtitulo";

  testData: any[] = [
      {
        title:"Titulo de testeo 1",
        subTitle:"Sub titulo de testeo 1",
        icon:"",
        body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      },
      {
        title:"Titulo de testeo 2",
        subTitle:"Sub titulo de testeo 2",
        icon:"",
        body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      },
      {
        title:"Titulo de testeo 3",
        subTitle:"Sub titulo de testeo 3",
        icon:"",
        body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      },
      {
        title:"Titulo de testeo 4",
        subTitle:"Sub titulo de testeo 4",
        icon:"",
        body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      },
      {
        title:"Titulo de testeo 5",
        subTitle:"Sub titulo de testeo 5",
        icon:"",
        body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      },
      {
        title:"Titulo de testeo 6",
        subTitle:"Sub titulo de testeo 6",
        icon:"",
        body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      },
  ];
}
