import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isEditIndex: number = -1;
  showPopup: string = 'none';
  showBackdrop: string = 'none';
  users: any[] = [];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'username',
    'email',
    'role',
    'password',
    'actions',
  ];

  constructor(private service: UsersService) {}

  ngOnInit() {
    this.dataSource.data = this.service.getUsers();
    this.users.forEach((element) => {
      const generatedColor = this.generateRandomColor();
      element.barColor = generatedColor.rgb;
      element.backgroundColor = generatedColor.rgba;
    });
  }

  changeEditMode(index: number) {
    this.isEditIndex = index;
  }

  changeShowPopup() {
    this.showPopup = this.showPopup === 'block' ? 'none' : 'block';
    this.showBackdrop = this.showBackdrop === 'grid' ? 'none' : 'grid';
  }

  hexToRGB(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  }

  generateRandomColor() {
    const maxVal = 0xffffff; // alternative to this is 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);

    const randomNumberStr = randomNumber.toString(16);
    const randColor = randomNumberStr.padStart(6, '0');
    const backgroundColorRGB = this.hexToRGB(`#${randColor.toUpperCase()}`);

    return {
      rgba: `rgba(${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b}, 0.2)`,
      rgb: `rgb(${backgroundColorRGB.r}, ${backgroundColorRGB.g}, ${backgroundColorRGB.b})`,
    };
  }
}
