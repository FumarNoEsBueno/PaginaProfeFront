import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ButtonModule,
    TagModule,
    CarouselModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {

  testTitulo: String = "Muestrario de prueba";
  testData: any[] = [
    {
      name:"Muestrario 1",
      body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      image: "https://cdn.somoskudasai.com/image/c2d4462f4355201bc45d00bc1b935bf8/1920x1080/portada_zero-no-tsukaima-1.jpg"
    },
    {
      name:"Muestrario 2",
      body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      image: "https://images.justwatch.com/poster/181658718/s718/zero-no-tsukaima.jpg"
    },
    {
      name:"Muestrario 3",
      body:"Lorem ipsum dolor sit amet consectetur adipiscing elit, etiam eget congue aliquet tempus eros ultricies, tristique nunc curabitur tortor aenean vehicula tellus, cursus mus malesuada velit mauris mi. Accumsan himenaeos conubia scelerisque maecenas mollis cras, tellus tincidunt fusce hendrerit cubilia class montes, ante ligula erat cum nullam. Condimentum viverra nostra ultricies primis sed cum taciti ligula suspendisse, orci posuere potenti tellus platea ut class fringilla.Turpis litora facilisi tempus nibh consequat sociosqu suscipit phasellus sed, aptent pulvinar auctor pharetra tempor id sociis mollis ornare at, quis lacinia enim eu habitant felis porta eleifend. Odio nisi felis vitae mollis class curae id pretium potenti rutrum curabitur sapien, tortor lacus cras sociosqu montes convallis suspendisse ad suscipit morbi interdum, habitasse velit ut praesent malesuada mattis donec mus condimentum quam ante. Tellus suscipit porta id velit faucibus posuere fames eros quis varius, pharetra cum sociosqu nisl volutpat natoque litora eget porttitor, erat nullam condimentum dapibus laoreet purus torquent nam himenaeos.",
      image: "https://i.pinimg.com/736x/0a/0c/bd/0a0cbd07f33af163a1611051d53c9c71.jpg"
    }
  ];

  ngOnInit(){
  }

}
