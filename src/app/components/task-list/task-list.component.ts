// import { Component, EventEmitter, Input, Output } from '@angular/core';

// import { ITask } from '../../models/task';

// @Component({
//   selector: 'app-task-list',
//   template: `
//     <div class="list-items">
//       <div *ngIf="loading">loading</div>
//       <div *ngIf="!loading && tasks.length === 0">empty</div>
//       <app-task
//         *ngFor="let task of tasks"
//         [task]="task"
//         (onArchiveTask)="onArchiveTask.emit($event)"
//         (onPinTask)="onPinTask.emit($event)"
//       >
//       </app-task>
//     </div>
//   `,
// })
// export class TaskListComponent {
//   /** The list of tasks */
//   @Input() tasks: ITask[] = [];

//   /** Checks if it's in loading state */
//   @Input() loading = false;

//   /** Event to change the task to pinned */
//   // tslint:disable-next-line: no-output-on-prefix
//   @Output()
//   onPinTask = new EventEmitter<Event>();

//   /** Event to change the task to archived */
//   // tslint:disable-next-line: no-output-on-prefix
//   @Output()
//   onArchiveTask = new EventEmitter<Event>();
// }


import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ITask } from '../../models/task';

@Component({
  selector: 'app-task-list',
  template: `
    <div class="list-items">
      <div *ngIf="loading">loading</div>
      <div *ngIf="!loading && tasks.length === 0">empty</div>
      <app-task
        *ngFor="let task of tasks"
        [task]="task"
        (onArchiveTask)="onArchiveTask.emit($event)"
        (onPinTask)="onPinTask.emit($event)"
      >
      </app-task>
    </div>
  `,
})
export class TaskListComponent {
  /** The list of tasks */
  @Input() tasks: ITask[] = [];

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
