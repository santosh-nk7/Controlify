import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Controlify</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
    <div>
      <button class="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
    </div>
  </div>
</nav>`,
  styleUrls: ['./app.component.css']
})
export class NavigComponent {

}