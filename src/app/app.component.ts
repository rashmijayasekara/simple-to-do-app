import { Component } from '@angular/core';
type TodoItem={
  checked:boolean,
  descripton:string
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toDoItems:TodoItem[]=[];

  completedItems(complete:boolean=false):TodoItem[]{
   return  this.toDoItems.filter(item=>item.checked=== complete);
  }
  addItem(descripton: string):void{
    this.toDoItems.push({
      checked:false,
      descripton:descripton
    });
  }
  removeItem(item:TodoItem):void{
    this.toDoItems.splice(this.toDoItems.indexOf(item),1);
  }
}
