import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

type Task = {
  id: number;
  title:String;
  subtitle: String;
  done:boolean;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
taskTitle: String = "Type your task title here..."
taskSubtitle: String = "Type your task subtitle here..."
tasksList:Task[] = []

markTaskDone(item: Task) {
//throw new Error('Method not implemented.');
this.tasksList = this.tasksList.map((value) => {
  
  if (value.id === item.id){
    value.done = true
    return value
  }else{
    return value
  }
})
}
deleteTask(item: Task) {
//throw new Error('Method not implemented.');
this.tasksList = this.tasksList.filter( value => value.id !== item.id )
}

addTaskToList() {
//throw new Error('Method not implemented.');
if(this.taskTitle == '' && this.taskSubtitle == '')
return
this.tasksList.push({
  id: this.tasksList.length + 1,
  title: this.taskTitle,
  subtitle: this.taskSubtitle,
  done: false
})
}
}
